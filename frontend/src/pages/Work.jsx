import { useMemo, useState } from 'react';
import Container from '../components/ui/Container';
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/shared/SectionHeading';
import ProjectGrid from '../components/work/ProjectGrid';
import ProjectFilters from '../components/work/ProjectFilters';
import FinalCTA from '../sections/home/FinalCTA';
import { projects } from '../data/projects';

export default function Work() {
  const [filter, setFilter] = useState('all');

  const counts = useMemo(
    () => ({
      all: projects.length,
      Live: projects.filter((p) => p.status === 'Live').length,
      'In Development': projects.filter((p) => p.status === 'In Development').length,
    }),
    []
  );

  const filtered = useMemo(
    () => (filter === 'all' ? projects : projects.filter((p) => p.status === filter)),
    [filter]
  );

  return (
    <>
      <SEOHead
        title="Work"
        description="Live client projects, platforms, and products built by KojoTech."
        path="/work"
      />

      <section className="section pt-28 sm:pt-36 lg:pt-40 pb-8">
        <Container>
          <SectionHeading
            eyebrow="Selected work"
            title="Projects we've built."
            description="A selection of live platforms and products — plus ongoing builds. Honest status on every card."
          />
          <div className="mt-10">
            <ProjectFilters value={filter} onChange={setFilter} counts={counts} />
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <ProjectGrid projects={filtered} />
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}