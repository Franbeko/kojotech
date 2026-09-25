import { ArrowUpRight } from 'lucide-react';
import Container from '../../components/ui/Container';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { site } from '../../config/site';
import { cn } from '../../utils/cn';

export default function Founder() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="section">
      <Container>
        <div
          ref={ref}
          className={cn(
            'grid gap-10 transition-all duration-700 ease-out-expo lg:grid-cols-12 lg:gap-16',
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          {/* Left column: eyebrow + founder portrait */}
          <div className="lg:col-span-4">
            <p className="eyebrow mb-8">The person behind it</p>

            <div className="relative mx-auto w-full max-w-[340px] lg:mx-0">
              {/* Photo frame */}
              <div className="relative overflow-hidden rounded-lg border border-ink-line bg-ink-soft">
                <img
                  src="/founder/francis.jpeg"
                  alt={`${site.founder.name} — ${site.founder.role}`}
                  loading="lazy"
                  className="block h-auto w-full object-cover"
                />
                {/* Subtle lime accent line at bottom */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-lime/60 to-transparent"
                />
              </div>

              {/* Corner accent */}
              <div
                aria-hidden="true"
                className="absolute -bottom-2 -right-2 -z-10 h-16 w-16 rounded-lg border border-lime/30"
              />
            </div>
          </div>

          {/* Right column: content */}
          <div className="lg:col-span-8 lg:pt-16">
            <h2 className="text-display-md text-balance text-bone">
              {site.founder.name}
            </h2>
            <p className="mt-3 font-mono text-xs uppercase tracking-[0.18em] text-lime">
              {site.founder.role}
            </p>
            <p className="mt-2 text-sm text-bone-dim">
              {site.founder.positioning}
            </p>

            <div className="mt-8 max-w-prose space-y-4 text-base leading-relaxed text-bone-dim">
              <p>
                KojoTech is a small, focused technology brand built around doing
                the work properly. Francis designs and builds each project
                directly — no layers between you and the person writing the code.
              </p>
              <p>
                The focus is on modern tooling, honest communication, and
                solutions that actually solve the problem — whether that is a
                business website, a management system, or a custom platform.
              </p>
            </div>

            <a
              href={site.founder.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-8 inline-flex items-center gap-2 text-sm text-lime transition-colors hover:text-lime-soft"
            >
              View Francis&apos;s personal portfolio
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}