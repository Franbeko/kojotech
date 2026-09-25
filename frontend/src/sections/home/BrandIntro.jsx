import Container from '../../components/ui/Container';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { cn } from '../../utils/cn';

export default function BrandIntro() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="section">
      <Container>
        <div
          ref={ref}
          className={cn(
            'mx-auto max-w-4xl transition-all duration-700 ease-out-expo',
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          <p className="eyebrow mb-6">What KojoTech does</p>
          <p className="text-2xl leading-snug text-bone sm:text-3xl md:text-4xl md:leading-tight">
            KojoTech turns ideas into practical digital experiences —
            from <span className="text-lime">high-performing websites</span> to{' '}
            custom web applications,{' '}
            <span className="text-lime">business systems</span>, and e-commerce
            solutions built around the way your organization actually works.
          </p>
        </div>
      </Container>
    </section>
  );
}