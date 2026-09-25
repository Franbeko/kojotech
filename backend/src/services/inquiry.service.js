import crypto from 'node:crypto';
import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';

/**
 * createInquiry
 *
 * Central place for everything that happens when a contact form is submitted.
 *
 * Phase 9:  shapes + returns the inquiry.
 * Phase 10: saves to MongoDB.
 * Phase 11: sends EmailJS email notification.
 *
 * Keeping this in one service means the controller and routes never change
 * as we add Mongo + EmailJS later.
 */
export async function createInquiry(payload) {
  const inquiry = normalizeInquiry(payload);

  // ---- PHASE 10: persist to MongoDB (uncomment when model is ready) -------
  // try {
  //   const { Inquiry } = await import('../models/Inquiry.js');
  //   const saved = await Inquiry.create(inquiry);
  //   inquiry.id = saved._id.toString();
  // } catch (error) {
  //   logger.error('Mongo save failed:', error.message);
  //   throw ApiError.internal('Could not save your inquiry. Please try again.');
  // }
  // -------------------------------------------------------------------------

  // ---- PHASE 11: send EmailJS notification (uncomment when ready) --------
  // if (env.EMAILJS_SERVICE_ID && env.EMAILJS_TEMPLATE_ID) {
  //   try {
  //     await notifyViaEmailJS(inquiry);
  //   } catch (error) {
  //     // EmailJS failure must not fail the request — Mongo already has it
  //     logger.error('EmailJS notification failed:', error.message);
  //   }
  // }
  // -------------------------------------------------------------------------

  return inquiry;
}

function normalizeInquiry(raw) {
  return {
    id: crypto.randomUUID(),
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
    createdAt: new Date().toISOString(),
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