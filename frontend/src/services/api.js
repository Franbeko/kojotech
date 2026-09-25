import axios from 'axios';
import { env } from '../config/env';

/**
 * Shared axios instance for all KojoTech API calls.
 * Base URL comes from VITE_API_URL. Requests time out after 15s.
 */
export const api = axios.create({
  baseURL: env.API_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
});

/**
 * Normalize any error into a predictable shape the UI can render.
 * Returns { message, status, details }
 */
export function normalizeApiError(error) {
  // Server responded with an error status
  if (error.response) {
    return {
      message:
        error.response.data?.message ||
        error.response.data?.error ||
        `Request failed (${error.response.status})`,
      status: error.response.status,
      details: error.response.data?.errors || null,
    };
  }

  // Request was made but no response (network, timeout)
  if (error.request) {
    return {
      message:
        'Could not reach the server. Please check your connection and try again, or reach out on WhatsApp.',
      status: 0,
      details: null,
    };
  }

  // Something else went wrong
  return {
    message: error.message || 'Something went wrong. Please try again.',
    status: -1,
    details: null,
  };
}