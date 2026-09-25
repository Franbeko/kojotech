import { Link } from 'react-router-dom';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import { cn } from '../../utils/cn';

export default function ProjectCard({ project, className }) {
  const hasDetail = Boolean(project.slug);
  const hasExternal = Boolean(project.externalUrl);

  // Prefer the internal case study; fall back to external; fall back to div.
  const Wrapper = hasDetail ? Link : hasExternal ? 'a' : 'div';
  const wrapperProps = hasDetail
    ? { to: `/work/${project.slug}` }
    : hasExternal
      ? { href: project.externalUrl, target: '_blank', rel: 'noopener noreferrer' }
      : {};

  return (
    <Wrapper
      {...wrapperProps}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-lg border border-ink-line bg-ink-soft/60',
        'transition-all duration-300 ease-out-expo',
        (hasDetail || hasExternal) &&
          'hover:-translate-y-1 hover:border-lime/40 hover:bg-ink-soft',
        className
      )}
    >
      {/* Visual */}
      <div className="relative aspect-[16/10] overflow-hidden border-b border-ink-line bg-ink">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
          />
        ) : (
          <>
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-br from-ink via-ink-soft to-ink"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-grid-ink bg-grid-40 opacity-40"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-bone-faint">
                preview coming soon
              </span>
            </div>
          </>
        )}

        {/* Status badge */}
        {project.status && (
          <div className="absolute left-4 top-4">
            <span
              className={cn(
                'rounded-sm border px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] backdrop-blur-sm',
                project.status === 'Live'
                  ? 'border-signal-green/40 bg-ink/80 text-signal-green'
                  : 'border-lime/40 bg-ink/80 text-lime'
              )}
            >
              {project.status}
            </span>
          </div>
        )}

        {/* External link pill (shown only if external and has internal detail) */}
        {hasExternal && hasDetail && (
          <a
            href={project.externalUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="absolute right-4 top-4 flex items-center gap-1 rounded-sm border border-ink-line bg-ink/80 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-bone opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100 hover:text-lime"
            aria-label={`Visit ${project.name} live site`}
          >
            <ExternalLink size={10} aria-hidden="true" />
            Visit
          </a>
        )}
      </div>

      {/* Body */}
      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex items-start justify-between gap-4">
          <div>
            <h3 className="font-display text-lg font-semibold tracking-tight text-bone">
              {project.name}
            </h3>
            <p className="mt-1 caption">{project.type}</p>
          </div>
          {(hasDetail || hasExternal) && (
            <ArrowUpRight
              size={18}
              className="mt-1 shrink-0 text-bone-faint transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-lime"
              aria-hidden="true"
            />
          )}
        </div>

        <p className="text-sm leading-relaxed text-bone-dim">
          {project.solution}
        </p>

        {project.tech && project.tech.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="rounded-sm border border-ink-line px-2 py-0.5 font-mono text-[10px] uppercase tracking-[0.14em] text-bone-faint"
              >
                {t}
              </span>
            ))}
          </div>
        )}
      </div>
    </Wrapper>
  );
}