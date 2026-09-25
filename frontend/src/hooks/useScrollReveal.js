import { useEffect, useRef, useState } from 'react';
import { usePrefersReducedMotion } from './useMediaQuery';

/**
 * useScrollReveal — returns a ref + boolean "revealed".
 *
 * Design notes:
 * - The initial state is computed during render (from `reduced`), so no
 *   synchronous setState is needed on mount.
 * - Every setState occurs inside an async callback (the IntersectionObserver
 *   callback or a microtask), never directly in the effect body.
 * - Respects prefers-reduced-motion.
 *
 * @param {{ threshold?: number, rootMargin?: string, once?: boolean }} options
 */
export function useScrollReveal(options = {}) {
  const { threshold = 0.15, rootMargin = '0px 0px -10% 0px', once = true } = options;
  const ref = useRef(null);
  const reduced = usePrefersReducedMotion();

  // Initial render: already revealed if reduced-motion is on.
  const [revealed, setRevealed] = useState(reduced);

  // Keep state in sync if `reduced` flips after mount (rare, but possible).
  // This runs via a microtask so it never fires synchronously in the effect body.
  useEffect(() => {
    if (!reduced) return;
    queueMicrotask(() => setRevealed(true));
  }, [reduced]);

  useEffect(() => {
    if (reduced) return;

    const el = ref.current;
    if (!el) return;

    // Fallback for environments without IntersectionObserver.
    if (typeof IntersectionObserver === 'undefined') {
      queueMicrotask(() => setRevealed(true));
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          if (once) observer.disconnect();
        } else if (!once) {
          setRevealed(false);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [reduced, threshold, rootMargin, once]);

  return { ref, revealed };
}