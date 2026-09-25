export default function TimelineItem({ item, isLast }) {
  return (
    <li className="relative grid gap-4 pl-8 sm:grid-cols-12 sm:gap-8 sm:pl-0">
      {/* Vertical line + dot (mobile) */}
      <div
        aria-hidden="true"
        className="absolute left-2 top-2 bottom-0 w-px bg-ink-line sm:hidden"
        style={isLast ? { bottom: '50%' } : undefined}
      />
      <div
        aria-hidden="true"
        className="absolute left-1.5 top-2 h-2 w-2 rounded-full bg-lime sm:hidden"
      />

      {/* Date column (desktop) */}
      <div className="sm:col-span-3 sm:flex sm:justify-end sm:pr-8">
        <span className="font-mono text-xs uppercase tracking-[0.14em] text-lime">
          {item.date}
        </span>
      </div>

      {/* Timeline spine (desktop) */}
      <div className="relative hidden sm:col-span-1 sm:block">
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-2 -translate-x-1/2 h-2 w-2 rounded-full bg-lime"
        />
        {!isLast && (
          <div
            aria-hidden="true"
            className="absolute left-1/2 top-4 -translate-x-1/2 h-full w-px bg-ink-line"
          />
        )}
      </div>

      {/* Content */}
      <div className="sm:col-span-8">
        <h3 className="font-display text-lg font-semibold tracking-tight text-bone">
          {item.title}
        </h3>
        <p className="mt-2 max-w-prose text-sm leading-relaxed text-bone-dim">
          {item.description}
        </p>
      </div>
    </li>
  );
}