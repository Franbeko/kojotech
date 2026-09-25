import Container from '../components/ui/Container';
import SEOHead from '../components/shared/SEOHead';
import ContactHero from '../sections/contact/ContactHero';
import ContactForm from '../components/contact/ContactForm';
import ContactInfo from '../sections/contact/ContactInfo';
import ContactProcess from '../sections/contact/ContactProcess';

export default function Contact() {
  return (
    <>
      <SEOHead
        title="Start a Project"
        description="Tell KojoTech about your project. Websites, web apps, business systems, e-commerce, and custom digital solutions. Response within 24–48 hours."
        path="/contact"
      />

      <ContactHero />

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Form — main column */}
            <div className="lg:col-span-8">
              <div className="rounded-lg border border-ink-line bg-ink-soft/40 p-6 md:p-10">
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <ContactInfo />
            </div>
          </div>
        </Container>
      </section>

      <ContactProcess />
    </>
  );
}