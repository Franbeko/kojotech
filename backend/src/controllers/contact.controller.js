import { createInquiry } from '../services/inquiry.service.js';
import { logger } from '../utils/logger.js';

/**
 * POST /api/contact
 *
 * Body (validated by contact.routes.js):
 *   name, email, phone?, company?, projectType, budget?, message, preferredContact, source?
 *
 * Phase 9: validates + logs. Mongo write lands in Phase 10.
 */
export async function submitContact(req, res, next) {
  try {
    const inquiry = await createInquiry(req.body);

    logger.info(
      `New inquiry received — ${inquiry.email} (${inquiry.projectType})`
    );

    res.status(201).json({
      success: true,
      message:
        'Inquiry received. KojoTech will reply within 24–48 hours.',
      id: inquiry.id,
    });
  } catch (error) {
    next(error);
  }
}