import { cn } from '../../utils/cn';

export default function IndustryCard({ item, className }) {
  return (
    <div
      className={cn(
        'rounded-lg border border-ink-line bg-ink-soft/40 p-5',
        'transition-colors duration-300 hover:border-bone-dim/40 hover:bg-ink-soft/70',
        className
      )}
    >
      <h3 className="font-display text-base font-semibold tracking-tight text-bone">
        {item.title}
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-bone-dim">
        {item.description}
      </p>
    </div>
  );
}