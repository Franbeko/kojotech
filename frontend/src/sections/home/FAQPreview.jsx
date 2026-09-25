import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '../../components/ui/Container';
import SectionHeading from '../../components/shared/SectionHeading';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { faqs } from '../../data/faqs';
import { cn } from '../../utils/cn';

export default function FAQPreview() {
  const { ref, revealed } = useScrollReveal();
  const previewFaqs = faqs.filter((f) => f.preview).slice(0, 5);

  return (
    <section className="section">
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="FAQ"
            title="Common questions."
          />
          <Link
            to="/faq"
            className="group inline-flex items-center gap-2 self-start text-sm text-lime transition-colors hover:text-lime-soft"
          >
            See all FAQs
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div
          ref={ref}
          className={cn(
            'divide-y divide-ink-line border-y border-ink-line transition-all duration-700 ease-out-expo',
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          {previewFaqs.map((faq) => (
            <div key={faq.id} className="py-6 md:py-7">
              <h3 className="font-display text-base font-semibold tracking-tight text-bone md:text-lg">
                {faq.question}
              </h3>
              <p className="mt-2 max-w-prose text-sm leading-relaxed text-bone-dim">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}