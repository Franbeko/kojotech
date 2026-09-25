import { Link, useParams } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import Container from '../components/ui/Container';
import SEOHead from '../components/shared/SEOHead';
import CaseStudyHeader from '../components/case-study/CaseStudyHeader';
import CaseStudySection from '../components/case-study/CaseStudySection';
import CaseStudyMeta from '../components/case-study/CaseStudyMeta';
import FinalCTA from '../sections/home/FinalCTA';
import { projects } from '../data/projects';

export default function CaseStudy() {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  // Unknown slug → friendly not-found state
  if (!project) {
    return (
      <>
        <SEOHead title="Project not found" path={`/work/${slug}`} noIndex />
        <section className="section pt-28 sm:pt-36 lg:pt-40">
          <Container>
            <p className="eyebrow mb-4">404</p>
            <h1 className="text-display-md mb-6">Project not found.</h1>
            <p className="mb-8 max-w-prose text-bone-dim">
              We couldn&apos;t find a project with that name. Browse all work instead.
            </p>
            <Link to="/work" className="btn-primary px-5 py-3">
              <ArrowLeft size={16} aria-hidden="true" />
              Back to Work
            </Link>
          </Container>
        </section>
      </>
    );
  }

  return (
    <>
      <SEOHead
        title={`${project.name} — Case Study`}
        description={project.solution}
        path={`/work/${project.slug}`}
        image={project.image || undefined}
      />

      <CaseStudyHeader project={project} />

      <section className="pb-8">
        <Container>
          <CaseStudySection label="Problem">
            <p>{project.problem}</p>
          </CaseStudySection>

          <CaseStudySection label="Solution">
            <p>{project.solution}</p>
          </CaseStudySection>

          <CaseStudySection label="Details">
            <CaseStudyMeta features={project.features} tech={project.tech} />
          </CaseStudySection>

          {project.outcome && (
            <CaseStudySection label="Outcome">
              <p>{project.outcome}</p>
            </CaseStudySection>
          )}

          {project.status === 'In Development' && (
            <CaseStudySection label="Status">
              <p>
                {project.statusNote ||
                  'This project is still in development. Real metrics and outcomes will be added once it launches.'}
              </p>
            </CaseStudySection>
          )}

          <CaseStudySection label="Next" className="border-b border-ink-line">
            <p className="mb-6">
              Have a similar idea or a different problem to solve? Tell us about it.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contact" className="btn-primary px-5 py-3">
                Start a Project
              </Link>
              <Link to="/work" className="btn-ghost px-5 py-3">
                Browse more work
              </Link>
            </div>
          </CaseStudySection>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}