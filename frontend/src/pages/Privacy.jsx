import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight } from 'lucide-react';
import Container from '../components/ui/Container';
import SEOHead from '../components/shared/SEOHead';
import WhatsAppCTA from '../components/shared/WhatsAppCTA';
import PrivacyHero from '../sections/privacy/PrivacyHero';
import PrivacyTOC from '../components/privacy/PrivacyTOC';
import PrivacySection from '../components/privacy/PrivacySection';
import { useHashScroll } from '../hooks/useHashScroll';
import { PRIVACY_SECTIONS } from '../data/privacy';
import { site } from '../config/site';
import { WhatsAppMessages } from '../utils/whatsapp';

export default function Privacy() {
  useHashScroll();
  const [activeId, setActiveId] = useState(PRIVACY_SECTIONS[0]?.id);

  // Track which section is in view — updates the sidebar highlight
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    PRIVACY_SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEOHead
        title="Privacy Policy"
        description="How KojoTech collects, uses, and protects information — written in plain language."
        path="/privacy"
      />

      <PrivacyHero />

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Sidebar */}
            <aside className="lg:col-span-3">
              <PrivacyTOC activeId={activeId} />
            </aside>

            {/* Content */}
            <div className="lg:col-span-9">
              <div className="border-t border-ink-line" />
              {PRIVACY_SECTIONS.map((section) => (
                <PrivacySection key={section.id} section={section} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-ink-line">
        <Container className="py-16 md:py-20">
          <div className="mx-auto max-w-2xl text-center">
            <p className="eyebrow mb-4">Questions about privacy?</p>
            <h2 className="font-display text-2xl font-semibold tracking-tight text-bone md:text-3xl">
              Reach out directly.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-bone-dim">
              If anything in this policy is unclear, or you would like us to
              update or delete your information, contact us — we respond to
              every reasonable request.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${site.contact.email}`}
                className="btn-primary px-5 py-3 text-sm"
              >
                <Mail size={16} aria-hidden="true" />
                Email KojoTech
              </a>
              <WhatsAppCTA
                variant="ghost"
                size="lg"
                message={WhatsAppMessages.general}
              />
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-1 py-3 text-sm text-bone-dim transition-colors hover:text-lime"
              >
                Contact form
                <ArrowRight size={14} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}