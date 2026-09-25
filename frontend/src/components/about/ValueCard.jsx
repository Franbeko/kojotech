import { cn } from '../../utils/cn';

export default function ValueCard({ value, index, className }) {
  return (
    <div
      className={cn(
        'border-t border-ink-line pt-6',
        className
      )}
    >
      <span className="font-mono text-xs text-lime">
        {String(index + 1).padStart(2, '0')}
      </span>
      <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-bone">
        {value.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-bone-dim">
        {value.description}
      </p>
    </div>
  );
}