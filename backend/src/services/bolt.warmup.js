import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';
import { fetchWithTimeout } from './ai/aiProvider.js';

/**
 * bolt.warmup.js
 *
 * Sends a silent "ping" to the ACTIVE AI provider on startup so that:
 *   - TLS handshake to the provider is cached
 *   - DNS resolution is cached
 *   - Connection pool is warm
 *
 * Only warms the primary provider — fallbacks don't need pre-warming.
 * Never throws. Never blocks startup for more than ~4 seconds.
 */
export async function warmUpBolt() {
  const primary = (env.AI_PROVIDER || 'gemini').toLowerCase();

  let target = null;

  if (primary === 'gemini' && env.GEMINI_API_KEY) {
    target = {
      name: 'gemini',
      url: `https://generativelanguage.googleapis.com/v1beta/models/${env.GEMINI_MODEL}:generateContent?key=${env.GEMINI_API_KEY}`,
      body: {
        contents: [{ role: 'user', parts: [{ text: 'hi' }] }],
        generationConfig: { maxOutputTokens: 1 },
      },
    };
  } else if (primary === 'openrouter' && env.OPENROUTER_API_KEY) {
    target = {
      name: 'openrouter',
      url: 'https://openrouter.ai/api/v1/chat/completions',
      headers: {
        Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
      },
      body: {
        model: env.OPENROUTER_MODEL,
        messages: [{ role: 'user', content: 'hi' }],
        max_tokens: 1,
      },
    };
  }

  if (!target) {
    logger.warn('Bolt warmup: no active provider configured');
    return;
  }

  try {
        const res = await fetchWithTimeout(
      target.url,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...(target.headers || {}) },
        body: JSON.stringify(target.body),
      },
      8000
    );
    logger.info(`Bolt warmup: ${target.name} responded ${res.status}`);
  } catch (error) {
    logger.warn(`Bolt warmup: ${target.name} failed — ${error.message}`);
  }
}