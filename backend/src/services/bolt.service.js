import { env } from '../config/env.js';
import { logger } from '../utils/logger.js';
import { buildSystemPrompt, BOLT_SUGGESTIONS } from './bolt.prompt.js';
import * as openrouter from './ai/openrouter.adapter.js';
import * as gemini from './ai/gemini.adapter.js';

/**
 * bolt.service.js — the orchestrator.
 *
 * Flow:
 *   1. Validate + sanitize input
 *   2. Trim history to a safe length
 *   3. Try primary provider (OpenRouter)
 *   4. If it fails, try fallback (Gemini)
 *   5. If both fail, return a friendly CTA response
 */

const MAX_MESSAGE_LENGTH = 500;
const MAX_HISTORY_TURNS = 10;
const MAX_TOKENS = 500;

export function getSuggestions() {
  return BOLT_SUGGESTIONS;
}

/**
 * @param {{ message: string, history?: Array<{role, content}> }} input
 * @returns {Promise<{ reply: string, provider: string, model: string, fallback?: boolean }>}
 */
export async function askBolt({ message, history = [] }) {
  const cleanMessage = String(message || '').trim().slice(0, MAX_MESSAGE_LENGTH);

  if (!cleanMessage) {
    const error = new Error('Message cannot be empty.');
    error.statusCode = 400;
    error.isOperational = true;
    throw error;
  }

  // Build the message list for the provider
  const safeHistory = Array.isArray(history)
    ? history
        .filter((m) => m && (m.role === 'user' || m.role === 'assistant') && typeof m.content === 'string')
        .slice(-MAX_HISTORY_TURNS)
        .map((m) => ({
          role: m.role,
          content: String(m.content).slice(0, MAX_MESSAGE_LENGTH),
        }))
    : [];

  const messages = [...safeHistory, { role: 'user', content: cleanMessage }];
  const system = buildSystemPrompt();

  // Try providers in order
  const providers = pickProviders();

  for (let i = 0; i < providers.length; i += 1) {
    const { name, adapter } = providers[i];
    try {
      const result = await adapter.chat({
        system,
        messages,
        maxTokens: MAX_TOKENS,
        temperature: 0.7,
        timeoutMs: 20000,
      });

      logger.info(`Bolt replied via ${name} (${result.model})`);
      return {
        reply: result.reply,
        provider: result.provider,
        model: result.model,
        fallback: i > 0,
      };
    } catch (error) {
      logger.warn(`Bolt provider "${name}" failed: ${error.message}`);
      // continue to next provider
    }
  }

  // All providers failed — return graceful CTA
  logger.error('Bolt: all AI providers failed');
  return {
    reply:
      "I'm having trouble answering right now. Please try again in a moment, or reach KojoTech directly on WhatsApp — that's the fastest way to get a response.",
    provider: 'fallback',
    model: 'none',
    fallback: true,
  };
}

/**
 * Order the providers based on AI_PROVIDER env var and availability.
 * Always keeps Gemini as a fallback if OpenRouter fails.
 */
function pickProviders() {
  const list = [];

  const preferred = (env.AI_PROVIDER || 'openrouter').toLowerCase();

  if (preferred === 'gemini') {
    list.push({ name: 'gemini', adapter: gemini });
    if (env.OPENROUTER_API_KEY) list.push({ name: 'openrouter', adapter: openrouter });
  } else {
    // Default: openrouter primary
    list.push({ name: 'openrouter', adapter: openrouter });
    if (env.GEMINI_API_KEY) list.push({ name: 'gemini', adapter: gemini });
  }

  return list;
}