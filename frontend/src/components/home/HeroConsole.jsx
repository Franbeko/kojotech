import { useEffect, useState } from 'react';
import { usePrefersReducedMotion } from '../../hooks/useMediaQuery';
import { cn } from '../../utils/cn';

const SEQUENCE = [
  { label: 'initializing project', done: 'initialized' },
  { label: 'installing dependencies', done: 'dependencies ready' },
  { label: 'building components', done: 'components built' },
  { label: 'running tests', done: 'tests passing' },
  { label: 'optimizing assets', done: 'assets optimized' },
  { label: 'deploying', done: 'deployed' },
];

/**
 * HeroConsole — an original animated "build console" visual.
 * Replaces generic stock imagery with something technical and KojoTech-specific.
 */
export default function HeroConsole() {
  const reduced = usePrefersReducedMotion();
  const [stepIndex, setStepIndex] = useState(reduced ? SEQUENCE.length : 0);

  useEffect(() => {
    if (reduced) return;
    if (stepIndex >= SEQUENCE.length) {
      const reset = setTimeout(() => setStepIndex(0), 4000);
      return () => clearTimeout(reset);
    }
    const next = setTimeout(() => setStepIndex((i) => i + 1), 900);
    return () => clearTimeout(next);
  }, [stepIndex, reduced]);

  return (
    <div
      className={cn(
        'relative w-full max-w-md overflow-hidden rounded-lg border border-ink-line bg-ink-soft/80 backdrop-blur-sm',
        'shadow-lift'
      )}
    >
      {/* Window chrome */}
      <div className="flex items-center gap-2 border-b border-ink-line px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-signal-red/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-signal-amber/70" />
        <span className="h-2.5 w-2.5 rounded-full bg-signal-green/70" />
        <span className="ml-3 font-mono text-[11px] uppercase tracking-[0.18em] text-bone-faint">
          kojotech · build
        </span>
      </div>

      {/* Console body */}
      <div className="space-y-2 p-5 font-mono text-[13px] leading-relaxed">
        {SEQUENCE.map((step, i) => {
          const done = i < stepIndex;
          const active = i === stepIndex && stepIndex < SEQUENCE.length;
          return (
            <div
              key={step.label}
              className={cn(
                'flex items-center gap-3 transition-colors duration-300',
                done ? 'text-bone-dim' : active ? 'text-bone' : 'text-bone-faint/50'
              )}
            >
              <span className="w-4 shrink-0 text-lime">
                {done ? '✓' : active ? '›' : '·'}
              </span>
              <span className="flex-1">
                {done ? step.done : step.label}
              </span>
              {active && <span className="animate-pulse-soft text-lime">▍</span>}
            </div>
          );
        })}

        {stepIndex >= SEQUENCE.length && (
          <div className="mt-3 flex items-center gap-3 border-t border-ink-line pt-3 text-lime">
            <span className="w-4 shrink-0">◆</span>
            <span>build complete</span>
          </div>
        )}
      </div>

      {/* Subtle glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px -z-10 rounded-lg bg-gradient-to-br from-lime/10 via-transparent to-steel/10 blur-xl"
      />
    </div>
  );
}