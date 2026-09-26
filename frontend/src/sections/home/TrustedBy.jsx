import Container from '../../components/ui/Container';
import TrustedByStrip from '../../components/home/TrustedByStrip';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { cn } from '../../utils/cn';

export default function TrustedBy() {
  const { ref, revealed } = useScrollReveal({ threshold: 0.3 });

  return (
    <section className="border-y border-ink-line py-8">
      <Container>
        <div
          ref={ref}
          className={cn(
            'flex flex-col items-start gap-5 transition-all duration-700 ease-out-expo sm:flex-row sm:items-center sm:gap-10',
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
        >
          <p className="caption shrink-0 whitespace-nowrap">
            Trusted by
          </p>
          <TrustedByStrip />
        </div>
      </Container>
    </section>
  );
}