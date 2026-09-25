import { Search, X } from 'lucide-react';
import { faqCategories } from '../../data/faqs';
import { cn } from '../../utils/cn';

export default function FaqSearch({ query, onQueryChange, category, onCategoryChange, counts }) {
  return (
    <div className="space-y-6">
      {/* Search input */}
      <div className="relative">
        <Search
          size={16}
          className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-bone-faint"
          aria-hidden="true"
        />
        <input
          type="search"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Search questions..."
          aria-label="Search FAQ"
          className="w-full rounded border border-ink-line bg-ink-soft/60 py-3 pl-11 pr-10 text-sm text-bone placeholder:text-bone-faint transition-colors focus:border-lime/50 focus:outline-none focus:ring-0"
        />
        {query && (
          <button
            type="button"
            onClick={() => onQueryChange('')}
            className="absolute right-3 top-1/2 -translate-y-1/2 rounded p-1 text-bone-faint transition-colors hover:text-bone"
            aria-label="Clear search"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* Category tabs */}
      <div
        role="tablist"
        aria-label="FAQ categories"
        className="flex flex-wrap items-center gap-2"
      >
        {faqCategories.map((cat) => {
          const isActive = category === cat.id;
          const count = counts[cat.id] ?? 0;
          return (
            <button
              key={cat.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onCategoryChange(cat.id)}
              className={cn(
                'rounded border px-3 py-1.5 font-mono text-xs uppercase tracking-[0.14em] transition-colors',
                isActive
                  ? 'border-lime bg-lime/10 text-lime'
                  : 'border-ink-line text-bone-dim hover:border-bone-dim hover:text-bone'
              )}
            >
              {cat.label}
              <span className="ml-2 text-bone-faint">{count}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}