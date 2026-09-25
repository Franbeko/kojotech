import Container from '../components/ui/Container';
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/shared/SectionHeading';

export default function Services() {
  return (
    <>
      <SEOHead
        title="Services"
        description="Website development, web applications, business management systems, e-commerce, and custom digital solutions."
        path="/services"
      />
      <section className="section pt-32 sm:pt-40">
        <Container>
          <SectionHeading
            eyebrow="Services"
            title="What KojoTech builds."
            description="Full services page arrives in Phase 5. The design system, routing, and shared components are in place."
          />
        </Container>
      </section>
    </>
  );
}