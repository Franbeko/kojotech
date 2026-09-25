import Container from '../../components/ui/Container';
import SectionHeading from '../../components/shared/SectionHeading';
import TimelineItem from '../../components/about/TimelineItem';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { timeline } from '../../data/timeline';
import { cn } from '../../utils/cn';

export default function Timeline() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="section border-t border-ink-line">
      <Container>
        <div className="mb-12 md:mb-16">
          <SectionHeading
            eyebrow="Journey"
            title="Where KojoTech is."
            description="Honest milestones — no invented awards, no inflated numbers."
          />
        </div>

        <ol
          ref={ref}
          className={cn(
            'space-y-10 transition-all duration-700 ease-out-expo',
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          {timeline.map((item, i) => (
            <TimelineItem
              key={item.id}
              item={item}
              isLast={i === timeline.length - 1}
            />
          ))}
        </ol>
      </Container>
    </section>
  );
}