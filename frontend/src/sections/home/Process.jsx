import Container from '../../components/ui/Container';
import SectionHeading from '../../components/shared/SectionHeading';
import ProcessStep from '../../components/home/ProcessStep';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { processSteps } from '../../data/process';
import { cn } from '../../utils/cn';

export default function Process() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="section">
      <Container>
        <div className="mb-12 md:mb-16">
          <SectionHeading
            eyebrow="Process"
            title="How we work together."
            description="A clear path from idea to launch — with no surprises in between."
          />
        </div>

        <div
          ref={ref}
          className={cn(
            'border-b border-ink-line transition-all duration-700 ease-out-expo',
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          {processSteps.map((step) => (
            <ProcessStep key={step.number} step={step} />
          ))}
        </div>
      </Container>
    </section>
  );
}