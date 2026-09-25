import { ApiError } from '../utils/ApiError.js';

/**
 * Catches any request that does not match a mounted route.
 * Mount immediately before errorHandler.
 */
export function notFound(req, res, next) {
  next(ApiError.notFound(`Route not found: ${req.method} ${req.originalUrl}`));
}