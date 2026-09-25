import { env } from '../../config/env.js';
import { logger } from '../../utils/logger.js';
import { fetchWithTimeout, AiProviderError } from './aiProvider.js';

const PROVIDER = 'openrouter';
const ENDPOINT = 'https://openrouter.ai/api/v1/chat/completions';

/**
 * OpenRouter adapter — OpenAI-compatible chat completions API.
 * Free-tier models use the `:free` suffix.
 */
export async function chat({ system, messages, maxTokens = 500, temperature = 0.7, timeoutMs = 20000 }) {
  if (!env.OPENROUTER_API_KEY) {
    throw new AiProviderError(PROVIDER, 'OPENROUTER_API_KEY is not set');
  }

  const body = {
    model: env.OPENROUTER_MODEL,
    messages: [
      { role: 'system', content: system },
      ...messages.map((m) => ({ role: m.role, content: m.content })),
    ],
    max_tokens: maxTokens,
    temperature,
  };

  let res;
  try {
    res = await fetchWithTimeout(
      ENDPOINT,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${env.OPENROUTER_API_KEY}`,
          // Optional but recommended by OpenRouter for attribution
          'HTTP-Referer': env.CLIENT_URL || 'https://kojotech.com',
          'X-Title': 'KojoTech Bolt',
        },
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
    logger.warn(`OpenRouter ${res.status}: ${text.slice(0, 200)}`);
    throw new AiProviderError(PROVIDER, `HTTP ${res.status}`, res.status);
  }

  const data = await res.json();
  const reply = data?.choices?.[0]?.message?.content?.trim();

  if (!reply) {
    throw new AiProviderError(PROVIDER, 'empty response');
  }

  return {
    reply,
    provider: PROVIDER,
    model: data.model || env.OPENROUTER_MODEL,
  };
}