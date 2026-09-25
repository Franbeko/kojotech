import Container from '../components/ui/Container';
import SEOHead from '../components/shared/SEOHead';
import TestimonialsHero from '../sections/testimonials/TestimonialsHero';
import TestimonialPlaceholder from '../components/home/TestimonialPlaceholder';
import TestimonialCard from '../components/testimonials/TestimonialCard';
import FinalCTA from '../sections/home/FinalCTA';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <>
      <SEOHead
        title="Testimonials"
        description="Real testimonials from businesses KojoTech has built for — restaurants, investment platforms, and consultancy firms."
        path="/testimonials"
      />

      <TestimonialsHero />

      <section className="pb-16 md:pb-24">
        <Container>
          {testimonials.length === 0 ? (
            <TestimonialPlaceholder />
          ) : (
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {testimonials.map((t) => (
                <TestimonialCard key={t.id} testimonial={t} />
              ))}
            </div>
          )}
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}