import { validationResult } from 'express-validator';
import { ApiError } from '../utils/ApiError.js';

/**
 * validate — runs after express-validator chains.
 * If errors exist, throws an ApiError(400) with a structured `details` array.
 */
export function validate(req, res, next) {
  const result = validationResult(req);
  if (result.isEmpty()) return next();

  const details = result.array().map((err) => ({
    field: err.path,
    message: err.msg,
  }));

  next(ApiError.badRequest('Please check the highlighted fields.', details));
}