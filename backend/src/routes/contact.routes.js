import { Router } from 'express';
import { body } from 'express-validator';
import { submitContact } from '../controllers/contact.controller.js';
import { validate } from '../middleware/validate.js';
import { contactLimiter } from '../middleware/rateLimiter.js';

const router = Router();

const PROJECT_TYPES = [
  'website',
  'web-application',
  'e-commerce',
  'business-management-system',
  'custom-digital-solution',
  'domain-hosting',
  'maintenance',
  'other',
];

const CONTACT_METHODS = ['email', 'whatsapp', 'phone'];

router.post(
  '/',
  contactLimiter,
  [
    body('name')
      .trim()
      .isLength({ min: 2, max: 100 })
      .withMessage('Name must be between 2 and 100 characters.'),

    body('email')
      .trim()
      .isEmail()
      .withMessage('Please provide a valid email address.')
      .normalizeEmail({ gmail_remove_dots: false }),

    body('phone')
      .optional({ checkFalsy: true })
      .trim()
      .isLength({ max: 30 })
      .withMessage('Phone number is too long.'),

    body('company')
      .optional({ checkFalsy: true })
      .trim()
      .isLength({ max: 120 })
      .withMessage('Company name is too long.'),

    body('projectType')
      .trim()
      .isIn(PROJECT_TYPES)
      .withMessage('Please choose a valid project type.'),

    body('budget')
      .optional({ checkFalsy: true })
      .trim()
      .isLength({ max: 40 })
      .withMessage('Budget value is too long.'),

    body('message')
      .trim()
      .isLength({ min: 20, max: 5000 })
      .withMessage('Please describe your project in 20–5000 characters.'),

    body('preferredContact')
      .trim()
      .isIn(CONTACT_METHODS)
      .withMessage('Please choose a valid contact method.'),

    body('source')
      .optional({ checkFalsy: true })
      .trim()
      .isLength({ max: 60 })
      .withMessage('Source value is too long.'),
  ],
  validate,
  submitContact
);

export default router;