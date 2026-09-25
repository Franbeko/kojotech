import Container from '../../components/ui/Container';
import SectionHeading from '../../components/shared/SectionHeading';
import IndustryCard from '../../components/home/IndustryCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { industries } from '../../data/industries';
import { cn } from '../../utils/cn';

export default function Industries() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="section">
      <Container>
        <div className="mb-12 md:mb-16">
          <SectionHeading
            eyebrow="What we can build"
            title="Solutions across industries."
            description="These are solution categories KojoTech is positioned to build — not a client list. Every project is scoped and designed from scratch."
          />
        </div>

        <div
          ref={ref}
          className={cn(
            'grid gap-3 transition-all duration-700 ease-out-expo sm:grid-cols-2 lg:grid-cols-4',
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          {industries.map((item) => (
            <IndustryCard key={item.id} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}