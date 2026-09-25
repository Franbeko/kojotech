import ProjectCard from '../home/ProjectCard';

export default function ProjectGrid({ projects }) {
  if (projects.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-ink-line bg-ink-soft/30 p-10 text-center">
        <p className="text-sm text-bone-dim">
          No projects match this filter yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard key={project.slug} project={project} />
      ))}
    </div>
  );
}