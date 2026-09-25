import { useEffect, useState } from 'react';

/**
 * SSR-safe media query hook.
 * The initial value is read during state initialization (not in the effect),
 * and the effect is only responsible for subscribing to future changes.
 */
export function useMediaQuery(query) {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia(query).matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mq = window.matchMedia(query);
    const handler = (e) => setMatches(e.matches);

    // Subscribe to future changes. The initial value was set in useState.
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else mq.addListener(handler);

    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler);
      else mq.removeListener(handler);
    };
  }, [query]);

  return matches;
}

export const usePrefersReducedMotion = () =>
  useMediaQuery('(prefers-reduced-motion: reduce)');