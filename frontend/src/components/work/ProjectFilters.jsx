import { cn } from '../../utils/cn';

const FILTERS = [
  { id: 'all', label: 'All' },
  { id: 'Live', label: 'Live' },
  { id: 'In Development', label: 'In Development' },
];

export default function ProjectFilters({ value, onChange, counts }) {
  return (
    <div className="flex flex-wrap items-center gap-2" role="tablist" aria-label="Filter projects">
      {FILTERS.map((filter) => {
        const isActive = value === filter.id;
        const count = counts[filter.id] ?? 0;
        return (
          <button
            key={filter.id}
            type="button"
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(filter.id)}
            className={cn(
              'rounded border px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] transition-colors',
              isActive
                ? 'border-lime bg-lime/10 text-lime'
                : 'border-ink-line text-bone-dim hover:border-bone-dim hover:text-bone'
            )}
          >
            {filter.label}
            <span className="ml-2 text-bone-faint">{count}</span>
          </button>
        );
      })}
    </div>
  );
}