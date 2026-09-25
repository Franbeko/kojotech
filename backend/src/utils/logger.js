import { env } from '../config/env.js';

/**
 * Minimal structured logger.
 * Keeps the codebase free of raw console.log scattered around.
 */

const stamp = () => new Date().toISOString();

export const logger = {
  info: (...args) => {
    if (env.IS_DEV) {
      // eslint-disable-next-line no-console
      console.log(`[${stamp()}] [info]`, ...args);
    }
  },
  warn: (...args) => {
    // eslint-disable-next-line no-console
    console.warn(`[${stamp()}] [warn]`, ...args);
  },
  error: (...args) => {
    // eslint-disable-next-line no-console
    console.error(`[${stamp()}] [error]`, ...args);
  },
};