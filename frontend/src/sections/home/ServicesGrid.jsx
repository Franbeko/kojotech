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
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service, i) => (
            <div
              key={service.id}
              className={cn(
                'transition-all duration-700 ease-out-expo',
                revealed
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6',
                i === 0 && service.featured
                  ? 'sm:col-span-2 lg:col-span-2'
                  : undefined
              )}
              style={{
                transitionDelay: revealed
                  ? `${Math.min(i * 60, 420)}ms`
                  : '0ms',
              }}
            >
              <ServiceCard service={service} className="h-full" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}