import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';

/**
 * Central error handler. Mount last in server.js.
 *
 * - Operational errors (ApiError, validation) → clean JSON with the message
 * - Unknown errors → generic message in production, stack in development
 */
export function errorHandler(err, req, res, next) {
  // eslint-disable-next-line no-unused-vars
  const _ = next;

  const status = err.statusCode || err.status || 500;
  const isOperational = err.isOperational === true;

  // Log non-operational errors loudly
  if (!isOperational || status >= 500) {
    logger.error(`${req.method} ${req.originalUrl} —`, err.message);
    if (env.IS_DEV) logger.error(err.stack);
  }

  const body = {
    success: false,
    message: isOperational
      ? err.message
      : env.IS_PROD
        ? 'Something went wrong. Please try again.'
        : err.message,
  };

  if (err.details) body.details = err.details;
  if (env.IS_DEV && !isOperational) body.stack = err.stack;

  res.status(status).json(body);
}