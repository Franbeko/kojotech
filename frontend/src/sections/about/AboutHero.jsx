import Container from '../../components/ui/Container';

export default function AboutHero() {
  return (
    <section className="section pt-28 sm:pt-36 lg:pt-40 pb-12">
      <Container>
        <div className="max-w-4xl">
          <p className="eyebrow mb-5">About KojoTech</p>
          <h1 className="text-display-lg text-balance text-bone">
            A technology brand built around{' '}
            <span className="text-lime">doing the work properly</span>.
          </h1>
          <p className="mt-7 max-w-prose text-lg leading-relaxed text-bone-dim">
            KojoTech builds modern digital solutions for businesses, startups,
            and organizations — websites, applications, systems, and platforms
            designed around real needs.
          </p>
        </div>
      </Container>
    </section>
  );
}