import { Inquiry } from '../models/Inquiry.js';
import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';
import { ApiError } from '../utils/ApiError.js';
import { isDBConnected } from '../config/db.js';
import { sendInquiryNotification } from './emailService.js';

/**
 * createInquiry
 *
 * Orchestrates everything that happens when a contact form is submitted:
 *   1. Validate DB availability
 *   2. Normalize + save to MongoDB
 *   3. Send EmailJS notification (best-effort)
 *   4. Return the saved record to the controller
 */
export async function createInquiry(payload) {
  // Refuse to accept leads we can't store — better to fail loudly than lose them
  if (!isDBConnected()) {
    logger.error('createInquiry called but MongoDB is not connected');
    throw ApiError.internal(
      'We could not save your inquiry right now. Please try again in a moment, or reach out on WhatsApp.'
    );
  }

  const inquiry = normalizeInquiry(payload);

  let saved;
  try {
    saved = await Inquiry.create(inquiry);
  } catch (error) {
    if (error.name === 'ValidationError') {
      const details = Object.values(error.errors).map((e) => ({
        field: e.path,
        message: e.message,
      }));
      logger.warn('Inquiry validation failed:', details);
      throw ApiError.badRequest('Please check the highlighted fields.', details);
    }

    logger.error('Mongo save failed:', error.message);
    throw ApiError.internal(
      'We could not save your inquiry right now. Please try again in a moment, or reach out on WhatsApp.'
    );
  }

  logger.info(
    `Inquiry saved — ${saved.email} (${saved.projectType}) [${saved._id}]`
  );

  // Best-effort email notification. Never blocks the response.
  const emailResult = await sendInquiryNotification(saved);
  if (!emailResult.sent) {
    logger.warn(
      `Email notification not sent for ${saved._id} — reason: ${emailResult.reason}`
    );
  }

  return {
    id: saved._id.toString(),
    name: saved.name,
    email: saved.email,
    projectType: saved.projectType,
    status: saved.status,
    createdAt: saved.createdAt,
  };
}

/**
 * Normalize the incoming payload into a consistent shape.
 */
function normalizeInquiry(raw) {
  return {
    name: String(raw.name || '').trim(),
    email: String(raw.email || '').trim().toLowerCase(),
    phone: String(raw.phone || '').trim(),
    company: String(raw.company || '').trim(),
    projectType: String(raw.projectType || '').trim(),
    budget: String(raw.budget || '').trim(),
    message: String(raw.message || '').trim(),
    preferredContact: String(raw.preferredContact || 'email').trim(),
    source: String(raw.source || 'website-contact-form').trim(),
    status: 'new',
    notes: '',
    meta: {
      userAgent: String(raw.meta?.userAgent || '').trim(),
      referrer: String(raw.meta?.referrer || '').trim(),
      ip: String(raw.meta?.ip || '').trim(),
    },
  };
}