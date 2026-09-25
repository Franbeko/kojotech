import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * useHashScroll — smooth-scrolls to the element matching the URL hash
 * when the route or hash changes. Respects prefers-reduced-motion.
 *
 * Usage: call once at the top of a page component.
 */
export function useHashScroll() {
  const { hash, pathname } = useLocation();

  useEffect(() => {
    if (!hash) return;

    const id = hash.replace('#', '');
    const el = document.getElementById(id);
    if (!el) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Small delay so the DOM has rendered the target section
    const t = setTimeout(() => {
      el.scrollIntoView({
        behavior: reduced ? 'auto' : 'smooth',
        block: 'start',
      });
    }, 60);

    return () => clearTimeout(t);
  }, [hash, pathname]);
}