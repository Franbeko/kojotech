import Container from '../../components/ui/Container';
import SectionHeading from '../../components/shared/SectionHeading';
import ValueCard from '../../components/about/ValueCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { values } from '../../data/values';
import { cn } from '../../utils/cn';

export default function Values() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="section">
      <Container>
        <div className="mb-12 md:mb-16">
          <SectionHeading
            eyebrow="How we work"
            title="Principles, not slogans."
            description="These are the standards KojoTech holds itself to on every project — including the ones we turn down."
          />
        </div>

        <div
          ref={ref}
          className={cn(
            'grid gap-x-8 gap-y-10 transition-all duration-700 ease-out-expo md:grid-cols-2 lg:grid-cols-3',
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          {values.map((value, i) => (
            <ValueCard key={value.id} value={value} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}