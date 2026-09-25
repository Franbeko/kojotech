import Container from '../../components/ui/Container';

export default function ContactHero() {
  return (
    <section className="section pt-28 sm:pt-36 lg:pt-40 pb-8">
      <Container>
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">Start a project</p>
          <h1 className="text-display-lg text-balance text-bone">
            Tell us what you&apos;re building.
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-bone-dim">
            Fill out the form and KojoTech will get back to you within 24–48
            hours. Prefer to talk directly? WhatsApp is the fastest way to reach us.
          </p>
        </div>
      </Container>
    </section>
  );
}