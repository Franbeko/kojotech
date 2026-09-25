import Container from '../../components/ui/Container';
import SectionHeading from '../../components/shared/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { whyPoints } from '../../data/whyKojoTech';
import { cn } from '../../utils/cn';

export default function WhyKojoTech() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="section">
      <Container>
        <div className="mb-12 md:mb-16">
          <SectionHeading
            eyebrow="Why KojoTech"
            title="How we approach the work."
          />
        </div>

        <div
          ref={ref}
          className={cn(
            'grid gap-x-8 gap-y-10 transition-all duration-700 ease-out-expo md:grid-cols-2 lg:grid-cols-3',
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          {whyPoints.map((point, i) => (
            <div key={i} className="border-t border-ink-line pt-6">
              <span className="font-mono text-xs text-lime">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-bone">
                {point.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bone-dim">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}