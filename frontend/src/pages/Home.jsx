import Container from '../components/ui/Container';
import SEOHead from '../components/shared/SEOHead';
import SectionHeading from '../components/shared/SectionHeading';
import Marquee from '../components/shared/Marquee';

export default function Home() {
  return (
    <>
      <SEOHead
        title="Building Digital Solutions"
        description="KojoTech builds modern websites, web applications, business systems, and custom digital solutions for businesses, startups, and organizations."
        path="/"
      />

      {/* Temporary Phase 3 placeholder */}
      <section className="section pt-32 sm:pt-40">
        <Container>
          <p className="eyebrow mb-4">Building Digital Solutions</p>
          <h1 className="text-display-xl text-balance text-bone max-w-4xl">
            Modern digital work, built properly.
          </h1>
          <p className="mt-6 max-w-prose text-base leading-relaxed text-bone-dim">
            Phase 3 placeholder. The real homepage sections arrive in Phase 4.
          </p>
        </Container>
      </section>

      <section className="border-y border-ink-line py-8">
        <Marquee
          items={[
            { text: 'Websites' },
            { text: 'Web Apps' },
            { text: 'E-Commerce' },
            { text: 'Business Systems' },
            { text: 'Custom Solutions' },
            { text: 'Domain & Hosting' },
            { text: 'Maintenance' },
          ]}
        />
      </section>

      <section className="section">
        <Container>
          <SectionHeading
            eyebrow="What's next"
            title="Full homepage sections in Phase 4"
            description="Hero, services grid, industries, selected work, why KojoTech, process, founder, testimonials, FAQ preview, and CTA will be built in Phase 4."
          />
        </Container>
      </section>
    </>
  );
}