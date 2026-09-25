import { cn } from '../../utils/cn';

export default function CaseStudySection({ label, title, children, className }) {
  return (
    <section className={cn('border-t border-ink-line py-12 md:py-16', className)}>
      <div className="grid gap-6 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-3">
          {label && <p className="eyebrow">{label}</p>}
        </div>
        <div className="lg:col-span-9">
          {title && (
            <h2 className="mb-4 font-display text-2xl font-semibold tracking-tight text-bone md:text-3xl">
              {title}
            </h2>
          )}
          <div className="max-w-prose space-y-4 text-base leading-relaxed text-bone-dim">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}