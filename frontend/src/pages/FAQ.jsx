import Container from '../components/ui/Container';
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/shared/SectionHeading';

export default function FAQ() {
  return (
    <>
      <SEOHead
        title="FAQ"
        description="Common questions about working with KojoTech."
        path="/faq"
      />
      <section className="section pt-32 sm:pt-40">
        <Container>
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions."
            description="Full FAQ with accordion arrives in Phase 7."
          />
        </Container>
      </section>
    </>
  );
}