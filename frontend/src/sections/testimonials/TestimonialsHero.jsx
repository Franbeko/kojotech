import Container from '../../components/ui/Container';

export default function TestimonialsHero() {
  return (
    <section className="section pt-28 sm:pt-36 lg:pt-40 pb-8">
      <Container>
        <div className="max-w-3xl">
          <p className="eyebrow mb-5">Testimonials</p>
          <h1 className="text-display-lg text-balance text-bone">
            What clients say.
          </h1>
          <p className="mt-6 max-w-prose text-lg leading-relaxed text-bone-dim">
            Real feedback from the businesses KojoTech has built for. Every
            testimonial links to the live project it belongs to.
          </p>
        </div>
      </Container>
    </section>
  );
}