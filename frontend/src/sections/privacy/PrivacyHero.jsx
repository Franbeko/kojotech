import Container from '../../components/ui/Container';
import { PRIVACY_LAST_UPDATED, PRIVACY_INTRO } from '../../data/privacy';

export default function PrivacyHero() {
  return (
    <section className="section pt-28 sm:pt-36 lg:pt-40 pb-12">
      <Container>
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">Legal</p>
          <h1 className="text-display-lg text-balance text-bone">
            Privacy Policy
          </h1>
          <p className="mt-5 font-mono text-xs uppercase tracking-[0.18em] text-lime">
            Last updated — {PRIVACY_LAST_UPDATED}
          </p>
          <div className="mt-8 max-w-prose space-y-4 text-base leading-relaxed text-bone-dim">
            {PRIVACY_INTRO.trim().split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}