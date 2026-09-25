import { useParams, Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/shared/SectionHeading';

export default function CaseStudy() {
  const { slug } = useParams();

  return (
    <>
      <SEOHead
        title={`Case Study: ${slug}`}
        description="KojoTech project case study."
        path={`/work/${slug}`}
      />
      <section className="section pt-32 sm:pt-40">
        <Container>
          <SectionHeading
            eyebrow="Case Study"
            title={slug}
            description="Individual case study template arrives in Phase 5."
          />
          <Link
            to="/work"
            className="mt-8 inline-block text-sm text-lime underline underline-offset-4"
          >
            ← Back to Work
          </Link>
        </Container>
      </section>
    </>
  );
}