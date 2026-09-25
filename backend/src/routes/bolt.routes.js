import { Router } from 'express';
import { body } from 'express-validator';
import { postChat, getSuggestedPrompts } from '../controllers/bolt.controller.js';
import { validate } from '../middleware/validate.js';
import { boltLimiter } from '../middleware/rateLimiter.js';

const router = Router();

// Suggested prompts — no rate limit needed (tiny static response)
router.get('/suggestions', getSuggestedPrompts);

// Chat — validated + rate limited
router.post(
  '/chat',
  boltLimiter,
  [
    body('message')
      .trim()
      .isLength({ min: 1, max: 500 })
      .withMessage('Message must be between 1 and 500 characters.'),

    body('history')
      .optional()
      .isArray({ max: 20 })
      .withMessage('History must be an array of at most 20 messages.'),
  ],
  validate,
  postChat
);

export default router;