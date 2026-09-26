import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/shared/SectionHeading';
import ProjectCard from '../../components/home/ProjectCard';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { projects } from '../../data/projects';
import { cn } from '../../utils/cn';

export default function SelectedWork() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="section">
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Selected work"
            title="Projects we've built."
            description="A selection of live platforms and products — plus one still in development. Honest status on every card."
          />
          <Link
            to="/work"
            className="group inline-flex items-center gap-2 self-start text-sm text-lime transition-colors hover:text-lime-soft"
          >
            View all work
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div ref={ref} className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, i) => (
            <div
              key={project.slug}
              className={cn(
                'transition-all duration-700 ease-out-expo',
                revealed
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-6'
              )}
              style={{
                transitionDelay: revealed
                  ? `${Math.min(i * 80, 400)}ms`
                  : '0ms',
              }}
            >
              <ProjectCard project={project} className="h-full" />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}