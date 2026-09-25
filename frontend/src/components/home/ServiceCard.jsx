import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function ServiceCard({ service, className }) {
  return (
    <Link
      to={`/services#${service.id}`}
      className={cn(
        'group relative flex flex-col rounded-lg border border-ink-line bg-ink-soft/60 p-6',
        'transition-all duration-300 ease-out-expo',
        'hover:-translate-y-1 hover:border-lime/40 hover:bg-ink-soft',
        className
      )}
    >
      {/* Title + arrow */}
      <div className="mb-3 flex items-start justify-between gap-4">
        <h3 className="font-display text-lg font-semibold tracking-tight text-bone">
          {service.title}
        </h3>
        <ArrowUpRight
          size={18}
          className="mt-1 shrink-0 text-bone-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime"
          aria-hidden="true"
        />
      </div>

      {/* Description */}
      <p className="mb-5 text-sm leading-relaxed text-bone-dim">
        {service.description}
      </p>

      {/* Tags */}
      {service.tags && service.tags.length > 0 && (
        <div className="mt-auto flex flex-wrap gap-2">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-sm border border-ink-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-bone-faint"
            >
              {tag}
            </span>
          ))}
        </div>
      )}
    </Link>
  );
}