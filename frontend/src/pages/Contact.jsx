import Container from '../components/ui/Container';
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/shared/SectionHeading';
import WhatsAppCTA from '../components/shared/WhatsAppCTA';
import { WhatsAppMessages } from '../utils/whatsapp';

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Start a Project"
        description="Tell KojoTech about your project and get a response within 24–48 hours."
        path="/contact"
      />
      <section className="section pt-32 sm:pt-40">
        <Container>
          <SectionHeading
            eyebrow="Start a Project"
            title="Tell us what you're building."
            description="Contact form UI arrives in Phase 8. Backend wiring in Phases 9–11."
          />
          <div className="mt-8">
            <WhatsAppCTA message={WhatsAppMessages.general} size="lg" />
          </div>
        </Container>
      </section>
    </>
  );
}