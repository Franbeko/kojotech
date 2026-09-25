import { Plus } from 'lucide-react';
import { cn } from '../../utils/cn';

/**
 * FaqItem — native <details>/<summary> accordion.
 * Accessible by default: keyboard support, screen-reader semantics.
 * The icon rotates via CSS when open.
 */
export default function FaqItem({ faq, defaultOpen = false, className }) {
  return (
    <details
      className={cn(
        'group border-b border-ink-line last:border-b-0',
        className
      )}
      open={defaultOpen}
    >
      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-6 pr-2 transition-colors hover:text-lime">
        <h3 className="font-display text-base font-semibold tracking-tight text-bone group-hover:text-lime md:text-lg">
          {faq.question}
        </h3>
        <span
          aria-hidden="true"
          className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-ink-line transition-all duration-300 group-open:rotate-45 group-open:border-lime group-open:text-lime"
        >
          <Plus size={14} />
        </span>
      </summary>

      <div className="pb-6 pr-10">
        <p className="max-w-prose text-sm leading-relaxed text-bone-dim md:text-base">
          {faq.answer}
        </p>
      </div>
    </details>
  );
}