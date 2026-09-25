import Container from '../components/ui/Container';
import SEOHead from '../components/shared/SEOHead';

export default function Privacy() {
  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="How KojoTech handles your information."
        path="/privacy"
        noIndex
      />
      <section className="section pt-32 sm:pt-40">
        <Container>
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="text-display-md mb-6">Privacy Policy</h1>
          <p className="max-w-prose text-sm leading-relaxed text-bone-dim">
            Placeholder for the KojoTech privacy policy. Full content will be
            added before public launch.
          </p>
        </Container>
      </section>
    </>
  );
}