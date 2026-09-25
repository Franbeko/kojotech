import { useState } from 'react';
import { Quote } from 'lucide-react';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/shared/SectionHeading';
import TestimonialPlaceholder from '../../components/home/TestimonialPlaceholder';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { testimonials } from '../../data/testimonials';
import { cn } from '../../utils/cn';

export default function Testimonials() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="section">
      <Container>
        <div className="mb-12 md:mb-16">
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients say."
            description="Real feedback from the businesses we've built for."
          />
        </div>

        <div
          ref={ref}
          className={cn(
            'transition-all duration-700 ease-out-expo',
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          {testimonials.length === 0 ? (
            <TestimonialPlaceholder />
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}

/**
 * TestimonialCard — image with graceful fallback to the client's initial.
 */
function TestimonialCard({ testimonial: t }) {
  const [imageFailed, setImageFailed] = useState(false);
  const showImage = t.image && !imageFailed;
  const initial = t.name?.trim().charAt(0).toUpperCase() || '?';

  return (
    <figure className="flex flex-col rounded-lg border border-ink-line bg-ink-soft/60 p-6 transition-colors duration-300 hover:border-lime/30">
      <Quote size={20} className="mb-5 text-lime/70" aria-hidden="true" />

      <blockquote className="flex-1 text-sm leading-relaxed text-bone-dim">
        {t.quote}
      </blockquote>

      <figcaption className="mt-6 flex items-center gap-3 border-t border-ink-line pt-5">
        {/* Avatar */}
        <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full border border-ink-line bg-ink">
          {showImage ? (
            <img
              src={t.image}
              alt=""
              loading="lazy"
              onError={() => setImageFailed(true)}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-lime/15 font-display text-sm font-semibold text-lime">
              {initial}
            </div>
          )}
        </div>

        {/* Meta */}
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm font-medium text-bone">{t.name}</p>
          {t.role && <p className="caption mt-0.5 truncate">{t.role}</p>}
        </div>

        {/* External link */}
        {t.externalUrl && (
          <a
            href={t.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-xs text-lime transition-colors hover:text-lime-soft"
            aria-label={`Visit ${t.name}`}
          >
            Visit →
          </a>
        )}
      </figcaption>
    </figure>
  );
}