import Container from '../../components/ui/Container';

const steps = [
  {
    number: '01',
    title: 'We read your message',
    description:
      'Every inquiry is read personally — usually within a few hours.',
  },
  {
    number: '02',
    title: 'You get a reply',
    description:
      'A direct response with next steps, questions if needed, and a realistic timeline.',
  },
  {
    number: '03',
    title: 'We scope it together',
    description:
      'If it is a fit, we agree on scope, pricing, and milestones before any work starts.',
  },
];

export default function ContactProcess() {
  return (
    <section className="section border-t border-ink-line">
      <Container>
        <div className="mb-12 md:mb-16">
          <p className="eyebrow mb-3">What happens next</p>
          <h2 className="text-display-md text-balance text-bone">
            After you send your message.
          </h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3 md:gap-12">
          {steps.map((step) => (
            <div key={step.number} className="border-t border-ink-line pt-6">
              <span className="font-mono text-xs text-lime">{step.number}</span>
              <h3 className="mt-2 font-display text-lg font-semibold tracking-tight text-bone">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-bone-dim">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}