/**
 * aiProvider.js — provider interface.
 *
 * Every AI provider adapter must export a `chat` function matching this shape.
 * This keeps the calling code (`bolt.service.js`) independent of which provider
 * is currently active.
 *
 * @typedef {Object} ChatRequest
 * @property {string} system         - the system prompt
 * @property {Array<{role, content}>} messages - conversation history (most recent last)
 * @property {number} [maxTokens]    - max output tokens (default 500)
 * @property {number} [temperature]  - 0..2 (default 0.7)
 * @property {number} [timeoutMs]    - request timeout (default 20000)
 *
 * @typedef {Object} ChatResponse
 * @property {string} reply          - assistant reply text
 * @property {string} provider       - provider name (for logging)
 * @property {string} model          - model name
 *
 * @callback ChatFn
 * @param {ChatRequest} req
 * @returns {Promise<ChatResponse>}
 */

/**
 * Utility: fetch with timeout. Node 18+ has native fetch.
 */
export async function fetchWithTimeout(url, options = {}, timeoutMs = 20000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  try {
    return await fetch(url, { ...options, signal: controller.signal });
  } finally {
    clearTimeout(timer);
  }
}

/**
 * Standard error class so callers can distinguish provider failures
 * from other errors and trigger fallback.
 */
export class AiProviderError extends Error {
  constructor(provider, message, status = null) {
    super(`[${provider}] ${message}`);
    this.provider = provider;
    this.status = status;
    this.isProviderError = true;
  }
}