import FaqItem from './FaqItem';

export default function FaqAccordion({ faqs }) {
  if (!faqs || faqs.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-ink-line bg-ink-soft/30 p-10 text-center">
        <p className="text-sm text-bone-dim">
          No questions match your search.
        </p>
      </div>
    );
  }

  return (
    <div className="border-t border-ink-line">
      {faqs.map((faq, i) => (
        <FaqItem key={faq.id} faq={faq} defaultOpen={i === 0} />
      ))}
    </div>
  );
}