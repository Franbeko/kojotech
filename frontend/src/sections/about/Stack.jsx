import Container from '../../components/ui/Container';
import SectionHeading from '../../components/shared/SectionHeading';
import StackCategory from '../../components/about/StackCategory';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { stack } from '../../data/stack';
import { cn } from '../../utils/cn';

export default function Stack() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="section border-t border-ink-line">
      <Container>
        <div className="mb-12 md:mb-16">
          <SectionHeading
            eyebrow="Tools & technologies"
            title="What we build with."
            description="The stack changes to fit the project. These are the tools KojoTech uses most often."
          />
        </div>

        <div
          ref={ref}
          className={cn(
            'grid gap-x-10 gap-y-10 transition-all duration-700 ease-out-expo md:grid-cols-2 lg:grid-cols-3',
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          {stack.map((group) => (
            <StackCategory key={group.category} group={group} />
          ))}
        </div>
      </Container>
    </section>
  );
}