import Container from '../../components/ui/Container';
import SectionHeading from '../../components/shared/SectionHeading';
import ServiceCard from '../../components/home/ServiceCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { services } from '../../data/services';
import { cn } from '../../utils/cn';

export default function ServicesGrid() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="section">
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Services"
            title="What we build."
            description="Focused services delivered with modern tooling and a business-first mindset."
          />
        </div>

        <div
          ref={ref}
          className={cn(
            'grid gap-4 transition-all duration-700 ease-out-expo sm:grid-cols-2 lg:grid-cols-3',
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              // Give the first card a wider footprint on large screens
              className={
                i === 0 && service.featured
                  ? 'sm:col-span-2 lg:col-span-2'
                  : undefined
              }
            />
          ))}
        </div>
      </Container>
    </section>
  );
}