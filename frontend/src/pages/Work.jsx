import Container from '../components/ui/Container';
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/shared/SectionHeading';

export default function Work() {
  return (
    <>
      <SEOHead
        title="Work"
        description="Selected projects and case studies from KojoTech."
        path="/work"
      />
      <section className="section pt-32 sm:pt-40">
        <Container>
          <SectionHeading
            eyebrow="Work"
            title="Selected projects."
            description="Project grid and case study template arrive in Phase 5. WanderWise case study will be the flagship."
          />
        </Container>
      </section>
    </>
  );
}