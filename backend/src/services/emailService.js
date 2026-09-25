import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';

/**
 * emailService — sends transactional email via the EmailJS REST API.
 *
 * Why the backend and not the frontend?
 * - EmailJS's Private Key must never be exposed to the browser.
 * - The backend can validate the payload before sending.
 * - The backend already has the saved inquiry (with its Mongo _id).
 *
 * Design principles:
 * - Sending email is BEST EFFORT. It must never block or fail a request.
 * - If EmailJS is down, the inquiry is still in MongoDB. No lead is lost.
 * - All calls are wrapped so a network hiccup cannot crash the request.
 */

const EMAILJS_ENDPOINT = 'https://api.emailjs.com/api/v1.0/email/send';

/**
 * Check whether EmailJS is configured. Callers use this to skip
 * sending gracefully in local dev / CI without those secrets.
 */
export function isEmailConfigured() {
  return Boolean(
    env.EMAILJS_SERVICE_ID &&
      env.EMAILJS_TEMPLATE_ID &&
      env.EMAILJS_PUBLIC_KEY
  );
}

/**
 * Send an inquiry notification email to the KojoTech brand inbox.
 *
 * @param {Object} inquiry — a Mongoose Inquiry document or a plain object
 * @returns {Promise<{ sent: boolean, reason?: string }>}
 */
export async function sendInquiryNotification(inquiry) {
  if (!isEmailConfigured()) {
    logger.warn(
      'EmailJS not configured — skipping notification. Set EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, EMAILJS_PUBLIC_KEY, EMAILJS_PRIVATE_KEY in .env'
    );
    return { sent: false, reason: 'not-configured' };
  }

  const payload = {
    service_id: env.EMAILJS_SERVICE_ID,
    template_id: env.EMAILJS_TEMPLATE_ID,
    user_id: env.EMAILJS_PUBLIC_KEY,
    accessToken: env.EMAILJS_PRIVATE_KEY || undefined,
    template_params: buildTemplateParams(inquiry),
  };

  try {
    const res = await fetch(EMAILJS_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const text = await res.text().catch(() => '');
      logger.error(
        `EmailJS responded ${res.status}: ${text || '(no body)'}`
      );
      return { sent: false, reason: `http-${res.status}` };
    }

    logger.info(
      `Email notification sent for inquiry ${inquiry._id || inquiry.id}`
    );
    return { sent: true };
  } catch (error) {
    logger.error('EmailJS request failed:', error.message);
    return { sent: false, reason: 'network-error' };
  }
}

/**
 * Map the inquiry document to the EmailJS template variables.
 * The template on EmailJS expects these exact keys (see {{name}}, {{email}}, etc.).
 */
function buildTemplateParams(inquiry) {
  const isDoc = typeof inquiry.toObject === 'function';
  const data = isDoc ? inquiry.toObject() : inquiry;

  return {
    // Recipient — matches the "To Email" field in the EmailJS template
    to_email: env.BRAND_EMAIL,

    // Contact
    name: data.name || '',
    email: data.email || '',
    phone: data.phone || '',
    company: data.company || '',

    // Project
    projectType: data.projectType || '',
    budget: data.budget || '',
    preferredContact: data.preferredContact || '',
    source: data.source || '',

    // Message
    message: data.message || '',

    // Meta (optional, templates can ignore)
    inquiryId: String(data._id || data.id || ''),
  };
}