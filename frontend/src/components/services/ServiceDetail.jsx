import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function ServiceDetail({ service, index }) {
  return (
    <article
      id={service.id}
      className={cn(
        'scroll-mt-24 border-t border-ink-line py-14 md:py-20',
        // First section gets extra top spacing under the hero
        index === 0 && 'border-t-0 pt-8 md:pt-12'
      )}
    >
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        {/* Left: index + title */}
        <div className="lg:col-span-5">
          <span className="font-mono text-xs text-lime">
            {String(index + 1).padStart(2, '0')}
          </span>
          <h2 className="mt-3 font-display text-3xl font-semibold tracking-tight text-bone md:text-4xl">
            {service.title}
          </h2>
          <p className="mt-3 text-sm text-bone-dim">
            {service.tagline}
          </p>

          {/* Tech tags */}
          {service.tech && service.tech.length > 0 && (
            <div className="mt-6 flex flex-wrap gap-2">
              {service.tech.map((t) => (
                <span
                  key={t}
                  className="rounded-sm border border-ink-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-bone-faint"
                >
                  {t}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Right: description + deliverables + CTA */}
        <div className="lg:col-span-7">
          <p className="max-w-prose text-base leading-relaxed text-bone-dim">
            {service.description}
          </p>

          {service.deliverables && service.deliverables.length > 0 && (
            <>
              <p className="caption mt-10 mb-4">What you get</p>
              <ul className="grid gap-3 sm:grid-cols-2">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check
                      size={16}
                      className="mt-1 shrink-0 text-lime"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed text-bone-dim">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </>
          )}

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="btn-primary px-5 py-3 text-sm"
            >
              Start a Project
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
            <a
              href="#top"
              className="text-sm text-bone-dim transition-colors hover:text-lime"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}