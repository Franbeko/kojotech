/**
 * Centralized, typed access to frontend environment variables.
 * Only VITE_* variables are exposed to the browser.
 * NEVER put secrets in these variables.
 */

const required = (key, value) => {
  if (!value) {
    // eslint-disable-next-line no-console
    console.warn(`[env] Missing required env var: ${key}`);
  }
  return value;
};

export const env = {
  API_URL: required('VITE_API_URL', import.meta.env.VITE_API_URL) || 'http://localhost:5000',
  WHATSAPP_NUMBER: import.meta.env.VITE_WHATSAPP_NUMBER || '',
  SITE_URL: import.meta.env.VITE_SITE_URL || 'http://localhost:5173',
  IS_DEV: import.meta.env.DEV,
  IS_PROD: import.meta.env.PROD,

  // Analytics — disabled by default, enabled in production
  ANALYTICS_ENABLED: import.meta.env.VITE_ANALYTICS_ENABLED === 'true',
  ANALYTICS_URL: import.meta.env.VITE_ANALYTICS_URL || '',
  ANALYTICS_WEBSITE_ID: import.meta.env.VITE_ANALYTICS_WEBSITE_ID || '',
};