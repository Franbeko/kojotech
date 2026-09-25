import { cn } from '../../utils/cn';
import { usePrefersReducedMotion } from '../../hooks/useMediaQuery';

/**
 * Marquee — a horizontal scrolling strip.
 * Content is duplicated so the loop is seamless.
 * Respects prefers-reduced-motion (renders static when reduced).
 *
 * @param {Array<{text: string}>} items
 * @param {'default'|'slow'} speed
 * @param {string} className
 */
export default function Marquee({ items = [], speed = 'default', className }) {
  const reduced = usePrefersReducedMotion();

  const animation = speed === 'slow' ? 'animate-marquee-slow' : 'animate-marquee';

  if (reduced) {
    // Static, readable fallback
    return (
      <div
        className={cn(
          'flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm',
          className
        )}
      >
        {items.map((item, i) => (
          <span key={i} className="caption">
            {item.text}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn('relative overflow-hidden', className)}
      role="marquee"
      aria-label="Scrollable list"
    >
      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink to-transparent" />

      <div className={cn('flex w-max', animation)}>
        {[0, 1].map((dup) => (
          <ul
            key={dup}
            className="flex shrink-0 items-center gap-10 pr-10"
            aria-hidden={dup === 1}
          >
            {items.map((item, i) => (
              <li
                key={i}
                className="whitespace-nowrap font-mono text-sm uppercase tracking-[0.18em] text-bone-dim"
              >
                {item.text}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
}