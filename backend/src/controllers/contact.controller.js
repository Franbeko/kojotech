import { createInquiry } from '../services/inquiry.service.js';
import { logger } from '../utils/logger.js';

/**
 * POST /api/contact
 *
 * Body validated by contact.routes.js.
 * Persists the inquiry to MongoDB and returns the saved record's ID.
 */
export async function submitContact(req, res, next) {
  try {
    const inquiry = await createInquiry(req.body);

    res.status(201).json({
      success: true,
      message:
        'Inquiry received. KojoTech will reply within 24–48 hours.',
      id: inquiry.id,
      createdAt: inquiry.createdAt,
    });
  } catch (error) {
    next(error);
  }
}