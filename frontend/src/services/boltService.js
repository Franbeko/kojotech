import { api, normalizeApiError } from './api';

/**
 * boltService — frontend API layer for KojoTech Bolt.
 *
 * Two endpoints:
 *   POST /api/bolt/chat        → ask Bolt a question
 *   GET  /api/bolt/suggestions → fetch suggested prompts
 */

/**
 * Send a message to Bolt.
 *
 * @param {Object} params
 * @param {string} params.message — the user's message
 * @param {Array<{role, content}>} [params.history] — prior turns
 * @returns {Promise<{ reply: string, provider: string, fallback: boolean }>}
 */
export async function sendBoltMessage({ message, history = [] }) {
  try {
    const { data } = await api.post('/api/bolt/chat', { message, history });
    return data;
  } catch (error) {
    throw normalizeApiError(error);
  }
}

/**
 * Fetch the suggested prompts.
 * Returns a fallback list if the request fails — never breaks the UI.
 */
export async function fetchBoltSuggestions() {
  try {
    const { data } = await api.get('/api/bolt/suggestions');
    return Array.isArray(data?.suggestions) ? data.suggestions : [];
  } catch {
    // Non-fatal — return a small hardcoded fallback
    return [
      'What services does KojoTech offer?',
      'How do I start a project?',
      'Can KojoTech build an e-commerce site?',
    ];
  }
}