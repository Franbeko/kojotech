import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function PricingTier({ tier }) {
  return (
    <div
      className={cn(
        'flex flex-col rounded-lg border p-6 transition-all duration-300',
        tier.featured
          ? 'border-lime/40 bg-ink-soft/80 shadow-glow-lime'
          : 'border-ink-line bg-ink-soft/60 hover:border-bone-dim/40'
      )}
    >
      {/* Header */}
      <div className="mb-5">
        {tier.featured && (
          <span className="mb-3 inline-block rounded-sm border border-lime/40 px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-lime">
            Most requested
          </span>
        )}
        <h3 className="font-display text-xl font-semibold tracking-tight text-bone">
          {tier.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-bone-dim">
          {tier.summary}
        </p>
      </div>

      {/* Price signal */}
      <div className="mb-6 border-y border-ink-line py-5">
        <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-bone-faint">
          Starting from
        </p>
        <p className="mt-1 font-display text-3xl font-semibold tracking-tight text-lime">
          {tier.startingFrom}
        </p>
        <p className="mt-1 font-mono text-xs text-bone-faint">
          Typical range: {tier.range}
        </p>
      </div>

      {/* Typical projects */}
      <div className="mb-5">
        <p className="caption mb-2.5">Typical projects</p>
        <ul className="space-y-1.5">
          {tier.typical.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 text-sm text-bone-dim"
            >
              <span
                aria-hidden="true"
                className="mt-2 h-1 w-1 shrink-0 rounded-full bg-bone-faint"
              />
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Included */}
      <div className="mb-6">
        <p className="caption mb-2.5">What is included</p>
        <ul className="space-y-2">
          {tier.included.map((item) => (
            <li key={item} className="flex items-start gap-2.5">
              <Check
                size={14}
                className="mt-0.5 shrink-0 text-lime"
                aria-hidden="true"
              />
              <span className="text-sm leading-snug text-bone-dim">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA */}
      <Link
        to="/contact"
        className={cn(
          'mt-auto inline-flex items-center justify-center gap-2 rounded px-4 py-2.5 text-sm font-medium transition-all duration-200',
          tier.featured
            ? 'bg-lime text-ink hover:bg-lime-soft'
            : 'border border-ink-line text-bone hover:border-bone-dim hover:bg-ink'
        )}
      >
        {tier.cta}
        <ArrowRight size={14} aria-hidden="true" />
      </Link>
    </div>
  );
}