import { env } from '../../config/env.js';
import { logger } from '../../utils/logger.js';
import { fetchWithTimeout, AiProviderError } from './aiProvider.js';

const PROVIDER = 'gemini';

/**
 * Google Gemini adapter.
 *
 * Gemini uses a different API shape:
 * - system instruction is passed via `system_instruction`
 * - roles are "user" / "model" (not "assistant")
 * - the model name is part of the URL
 */
export async function chat({ system, messages, maxTokens = 500, temperature = 0.7, timeoutMs = 20000 }) {
  if (!env.GEMINI_API_KEY) {
    throw new AiProviderError(PROVIDER, 'GEMINI_API_KEY is not set');
  }

  const model = env.GEMINI_MODEL || 'gemini-2.5-flash-lite';
  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${env.GEMINI_API_KEY}`;

  // Convert OpenAI-style messages to Gemini's contents format
  const contents = messages.map((m) => ({
    role: m.role === 'assistant' ? 'model' : 'user',
    parts: [{ text: m.content }],
  }));

  const body = {
    system_instruction: {
      parts: [{ text: system }],
    },
    contents,
    generationConfig: {
      maxOutputTokens: maxTokens,
      temperature,
    },
  };

  let res;
  try {
    res = await fetchWithTimeout(
      endpoint,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      },
      timeoutMs
    );
  } catch (error) {
    if (error.name === 'AbortError') {
      throw new AiProviderError(PROVIDER, 'request timed out');
    }
    throw new AiProviderError(PROVIDER, error.message || 'network error');
  }

  if (!res.ok) {
    const text = await res.text().catch(() => '');
    logger.warn(`Gemini ${res.status}: ${text.slice(0, 200)}`);
    throw new AiProviderError(PROVIDER, `HTTP ${res.status}`, res.status);
  }

  const data = await res.json();
  const reply = data?.candidates?.[0]?.content?.parts?.[0]?.text?.trim();

  if (!reply) {
    throw new AiProviderError(PROVIDER, 'empty response');
  }

  return {
    reply,
    provider: PROVIDER,
    model,
  };
}