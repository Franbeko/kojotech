import rateLimit from 'express-rate-limit';

/**
 * Rate limiters. Reused across routes.
 * Uses in-memory store — fine for a single-instance deployment.
 * Swap to a shared store (Redis) if we scale to multiple backend instances.
 */

export const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 300,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many requests. Please slow down and try again shortly.',
  },
});

export const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message:
      'Too many form submissions. Please wait 15 minutes, or reach out on WhatsApp.',
  },
});

export const boltLimiter = rateLimit({
  windowMs: 5 * 60 * 1000,
  max: 20,
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Bolt is receiving too many messages. Please try again in a few minutes.',
  },
});