import { cn } from '../../utils/cn';

export default function ProcessStep({ step, className }) {
  return (
    <div
      className={cn(
        'relative flex gap-5 border-t border-ink-line py-8 md:gap-8 md:py-10',
        className
      )}
    >
      <div className="shrink-0">
        <span className="font-mono text-2xl font-medium tracking-tight text-lime md:text-3xl">
          {step.number}
        </span>
      </div>
      <div className="flex-1">
        <h3 className="font-display text-lg font-semibold tracking-tight text-bone md:text-xl">
          {step.title}
        </h3>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-bone-dim">
          {step.description}
        </p>
      </div>
    </div>
  );
}