import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { env } from '../../config/env';

/**
 * Analytics — loads the Umami tracker script and reports SPA pageviews.
 *
 * Works with BOTH Umami Cloud and self-hosted Umami:
 *   - Umami Cloud:  VITE_ANALYTICS_URL=https://cloud.umami.is
 *   - Self-hosted:  VITE_ANALYTICS_URL=https://analytics.your-domain.com
 *
 * Disabled when:
 *   - VITE_ANALYTICS_ENABLED is not "true", OR
 *   - VITE_ANALYTICS_URL is empty, OR
 *   - VITE_ANALYTICS_WEBSITE_ID is empty
 *
 * SPA pageviews are sent via window.umami.track() on every route change.
 */
export default function Analytics() {
  const location = useLocation();

  // Inject the Umami script once (if enabled)
  useEffect(() => {
    if (
      !env.ANALYTICS_ENABLED ||
      !env.ANALYTICS_URL ||
      !env.ANALYTICS_WEBSITE_ID
    ) {
      return;
    }

    // Avoid double-injecting on re-renders
    if (document.getElementById('umami-analytics-script')) {
      return;
    }

    const script = document.createElement('script');
    script.id = 'umami-analytics-script';
    script.defer = true;
    script.src = `${env.ANALYTICS_URL.replace(/\/$/, '')}/script.js`;
    script.setAttribute('data-website-id', env.ANALYTICS_WEBSITE_ID);
    document.head.appendChild(script);
  }, []);

  // Report SPA route changes to Umami
  useEffect(() => {
    if (!env.ANALYTICS_ENABLED) return;
    if (typeof window === 'undefined') return;
    if (typeof window.umami === 'undefined') return;

    // Send a pageview for the current route
    window.umami.track();
  }, [location.pathname]);

  return null;
}