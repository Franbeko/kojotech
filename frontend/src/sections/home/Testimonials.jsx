import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/shared/SectionHeading';
import TestimonialPlaceholder from '../../components/home/TestimonialPlaceholder';
import TestimonialCard from '../../components/testimonials/TestimonialCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { testimonials } from '../../data/testimonials';
import { cn } from '../../utils/cn';

export default function Testimonials() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="section">
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Testimonials"
            title="What clients say."
            description="Real feedback from the businesses we've built for."
          />
          <Link
            to="/testimonials"
            className="group inline-flex items-center gap-2 self-start text-sm text-lime transition-colors hover:text-lime-soft"
          >
            All testimonials
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
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