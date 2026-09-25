import Marquee from '../../components/shared/Marquee';

const items = [
  { text: 'Websites' },
  { text: 'Web Apps' },
  { text: 'E-Commerce' },
  { text: 'Business Systems' },
  { text: 'Custom Solutions' },
  { text: 'Domain & Hosting' },
  { text: 'Maintenance' },
  { text: 'AI Integration' },
];

export default function ServicesMarquee() {
  return (
    <section className="mt-4 border-y border-ink-line py-8 sm:mt-6">
      <Marquee items={items} />
    </section>
  );
}