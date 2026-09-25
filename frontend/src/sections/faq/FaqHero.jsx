import Container from '../../components/ui/Container';

export default function FaqHero() {
  return (
    <section className="section pt-28 sm:pt-36 lg:pt-40 pb-8">
      <Container>
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">FAQ</p>
          <h1 className="text-display-lg text-balance text-bone">
            Common questions.
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-bone-dim">
            Straight answers about working with KojoTech. If your question is
            not here, ask directly — through the contact form, WhatsApp, or Bolt.
          </p>
        </div>
      </Container>
    </section>
  );
}