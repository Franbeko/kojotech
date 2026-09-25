import { askBolt, getSuggestions } from '../services/bolt.service.js';

/**
 * POST /api/bolt/chat
 * Body: { message: string, history?: Array<{role, content}> }
 */
export async function postChat(req, res, next) {
  try {
    const { message, history } = req.body;
    const result = await askBolt({ message, history });

    res.json({
      success: true,
      reply: result.reply,
      provider: result.provider,
      fallback: result.fallback || false,
    });
  } catch (error) {
    next(error);
  }
}

/**
 * GET /api/bolt/suggestions
 * Returns the list of suggested prompts for the frontend.
 */
export function getSuggestedPrompts(req, res) {
  res.json({
    success: true,
    suggestions: getSuggestions(),
  });
}