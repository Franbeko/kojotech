import dotenv from 'dotenv';
dotenv.config();

/**
 * Environment configuration.
 *
 * Loads .env, validates that required variables are present, and exports
 * a single `env` object the rest of the app imports. If a required variable
 * is missing, we fail fast — no silent misconfiguration in production.
 */

const required = [
  'MONGODB_URI',
  'CLIENT_URL',
];

const optional = [
  'PORT',
  'NODE_ENV',
  'EMAILJS_SERVICE_ID',
  'EMAILJS_TEMPLATE_ID',
  'EMAILJS_PUBLIC_KEY',
  'EMAILJS_PRIVATE_KEY',
  'AI_PROVIDER',
  'OPENROUTER_API_KEY',
  'OPENROUTER_MODEL',
  'GEMINI_API_KEY',
  'GEMINI_MODEL',
  'BOLT_DAILY_LIMIT',
  'WHATSAPP_NUMBER',
  'BRAND_EMAIL',
];

// Validate required vars — fail fast if any are missing
const missing = required.filter((key) => !process.env[key]);
if (missing.length > 0) {
  // eslint-disable-next-line no-console
  console.error(
    `[env] Missing required environment variables: ${missing.join(', ')}`
  );
  process.exit(1);
}

// Warn about optional vars (does not crash)
const missingOptional = optional.filter((key) => !process.env[key]);
if (missingOptional.length > 0 && process.env.NODE_ENV !== 'test') {
  // eslint-disable-next-line no-console
  console.warn(
    `[env] Optional env vars not set: ${missingOptional.join(', ')}`
  );
}

export const env = {
  NODE_ENV: process.env.NODE_ENV || 'development',
  PORT: parseInt(process.env.PORT, 10) || 5000,
  CLIENT_URL: process.env.CLIENT_URL,

  MONGODB_URI: process.env.MONGODB_URI,

  // EmailJS
  EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID || null,
  EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID || null,
  EMAILJS_PUBLIC_KEY: process.env.EMAILJS_PUBLIC_KEY || null,
  EMAILJS_PRIVATE_KEY: process.env.EMAILJS_PRIVATE_KEY || null,

  // Bolt AI
  AI_PROVIDER: process.env.AI_PROVIDER || 'openrouter',
  OPENROUTER_API_KEY: process.env.OPENROUTER_API_KEY || null,
  OPENROUTER_MODEL:
    process.env.OPENROUTER_MODEL ||
    'meta-llama/llama-3.3-70b-instruct:free',
  GEMINI_API_KEY: process.env.GEMINI_API_KEY || null,
  GEMINI_MODEL: process.env.GEMINI_MODEL || 'gemini-2.5-flash-lite',
  BOLT_DAILY_LIMIT: parseInt(process.env.BOLT_DAILY_LIMIT, 10) || 50,

  // Contact
  WHATSAPP_NUMBER: process.env.WHATSAPP_NUMBER || null,
  BRAND_EMAIL: process.env.BRAND_EMAIL || 'hello.kojotech@gmail.com',

  IS_PROD: (process.env.NODE_ENV || 'development') === 'production',
  IS_DEV: (process.env.NODE_ENV || 'development') === 'development',
};