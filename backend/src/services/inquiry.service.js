import crypto from 'node:crypto';
import { Inquiry } from '../models/Inquiry.js';
import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';
import { ApiError } from '../utils/ApiError.js';
import { isDBConnected } from '../config/db.js';

/**
 * createInquiry
 *
 * Central place for everything that happens when a contact form is submitted.
 *
 * Phase 10: saves to MongoDB.
 * Phase 11: will send EmailJS notification on top of this.
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
    // Mongoose validation errors → 400 with clear field info
    if (error.name === 'ValidationError') {
      const details = Object.values(error.errors).map((e) => ({
        field: e.path,
        message: e.message,
      }));
      logger.warn('Inquiry validation failed:', details);
      throw ApiError.badRequest('Please check the highlighted fields.', details);
    }

    // Everything else → 500
    logger.error('Mongo save failed:', error.message);
    throw ApiError.internal(
      'We could not save your inquiry right now. Please try again in a moment, or reach out on WhatsApp.'
    );
  }

  // ---- PHASE 11: send EmailJS notification (uncomment when ready) --------
  // if (env.EMAILJS_SERVICE_ID && env.EMAILJS_TEMPLATE_ID) {
  //   try {
  //     await notifyViaEmailJS(saved);
  //   } catch (error) {
  //     // EmailJS failure must not fail the request — Mongo already has it
  //     logger.error('EmailJS notification failed:', error.message);
  //   }
  // }
  // -------------------------------------------------------------------------

  logger.info(
    `Inquiry saved — ${saved.email} (${saved.projectType}) [${saved._id}]`
  );

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
 * Trims strings, lowercases email, fills defaults.
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

/**
 * (Phase 11) Send an email notification via EmailJS REST API.
 * Kept here so the shape stays consistent when we enable it.
 */
// eslint-disable-next-line no-unused-vars
async function notifyViaEmailJS(inquiry) {
  const res = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      service_id: env.EMAILJS_SERVICE_ID,
      template_id: env.EMAILJS_TEMPLATE_ID,
      user_id: env.EMAILJS_PUBLIC_KEY,
      accessToken: env.EMAILJS_PRIVATE_KEY,
      template_params: {
        name: inquiry.name,
        email: inquiry.email,
        phone: inquiry.phone,
        company: inquiry.company,
        projectType: inquiry.projectType,
        budget: inquiry.budget,
        message: inquiry.message,
        preferredContact: inquiry.preferredContact,
        source: inquiry.source,
        to_email: env.BRAND_EMAIL,
      },
    }),
  });

  if (!res.ok) {
    throw new Error(`EmailJS responded ${res.status}: ${await res.text()}`);
  }
}