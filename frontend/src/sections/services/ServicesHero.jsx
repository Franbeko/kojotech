import Container from '../../components/ui/Container';

export default function ServicesHero() {
  return (
    <section className="section pt-28 sm:pt-36 lg:pt-40 pb-8 sm:pb-12">
      <Container>
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">Services</p>
          <h1 className="text-display-lg text-balance text-bone">
            What KojoTech builds.
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-bone-dim">
            Focused services delivered with modern tooling and a business-first
            mindset. Every project is scoped around your actual requirements —
            not a fixed template.
          </p>
        </div>
      </Container>
    </section>
  );
}