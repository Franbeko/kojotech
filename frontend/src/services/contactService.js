import { api, normalizeApiError } from './api';

/**
 * Submit a contact inquiry.
 *
 * Phase 9: real API call. The backend validates, logs, and (Phase 10+)
 * persists to MongoDB and sends Formspree notifications.
 */
export async function submitContactForm(payload) {
  try {
    const { data } = await api.post('/api/contact', payload);
    return data;
  } catch (error) {
    throw normalizeApiError(error);
  }
}