import { Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import Container from '../ui/Container';
import { cn } from '../../utils/cn';

export default function CaseStudyHeader({ project }) {
  return (
    <header className="section pt-28 sm:pt-36 lg:pt-40 pb-8">
      <Container>
        <Link
          to="/work"
          className="group mb-10 inline-flex items-center gap-2 text-sm text-bone-dim transition-colors hover:text-lime"
        >
          <ArrowLeft
            size={16}
            className="transition-transform group-hover:-translate-x-1"
            aria-hidden="true"
          />
          All work
        </Link>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            {project.status && (
              <span
                className={cn(
                  'mb-5 inline-block rounded-sm border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em]',
                  project.status === 'Live'
                    ? 'border-signal-green/40 text-signal-green'
                    : 'border-lime/40 text-lime'
                )}
              >
                {project.status}
              </span>
            )}
            <h1 className="text-display-lg text-balance text-bone">
              {project.name}
            </h1>
            <p className="mt-4 text-base text-bone-dim">
              {project.type}
            </p>
            {project.statusNote && (
              <p className="mt-2 font-mono text-xs uppercase tracking-[0.14em] text-bone-faint">
                {project.statusNote}
              </p>
            )}
          </div>

          <div className="lg:col-span-4 lg:pt-4">
            {project.externalUrl && (
              <a
                href={project.externalUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost inline-flex px-4 py-2.5 text-sm"
              >
                Visit live site
                <ExternalLink size={14} aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {/* Hero image */}
        {project.image && (
          <div className="mt-12 overflow-hidden rounded-lg border border-ink-line bg-ink">
            <img
              src={project.image}
              alt={`${project.name} preview`}
              className="block h-auto w-full"
            />
          </div>
        )}
      </Container>
    </header>
  );
}