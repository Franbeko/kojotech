import Container from '../components/ui/Container';
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/shared/SectionHeading';

export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description="KojoTech is a technology brand founded by Francis Kojo Haizel, building modern digital solutions for businesses, startups, and organizations."
        path="/about"
      />
      <section className="section pt-32 sm:pt-40">
        <Container>
          <SectionHeading
            eyebrow="About"
            title="The person behind KojoTech."
            description="Full About and Founder section arrives in Phase 6."
          />
        </Container>
      </section>
    </>
  );
}