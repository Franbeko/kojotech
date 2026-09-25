/**
 * FAQ content. Shared by the homepage preview and the full /faq page.
 * Answers must stay honest — no fixed prices or timelines unless they
 * are genuinely fixed.
 *
 * Categories: 'services' | 'pricing' | 'process' | 'technical' | 'working-together'
 */
export const faqCategories = [
  { id: 'all', label: 'All' },
  { id: 'services', label: 'Services' },
  { id: 'pricing', label: 'Pricing' },
  { id: 'process', label: 'Process' },
  { id: 'technical', label: 'Technical' },
  { id: 'working-together', label: 'Working Together' },
];

export const faqs = [
  {
    id: 'services',
    category: 'services',
    question: 'What services does KojoTech provide?',
    answer:
      'KojoTech builds websites, web applications, business management systems, and e-commerce solutions. We also handle domain and hosting setup, custom digital solutions, and ongoing maintenance and support.',
    preview: true,
  },
  {
    id: 'website-cost',
    category: 'pricing',
    question: 'How much does a website cost?',
    answer:
      'Every project is different. Cost depends on the number of pages, features, integrations, and design complexity. Share your requirements through the contact form or WhatsApp and you will get a clear, itemized quote — no hidden fees.',
    preview: true,
  },
  {
    id: 'web-app-cost',
    category: 'pricing',
    question: 'How much does a web application cost?',
    answer:
      'Web application costs depend on scope — user roles, data models, integrations, and complexity. We scope the project first, then give a fixed estimate based on the agreed requirements.',
    preview: true,
  },
  {
    id: 'timeline',
    category: 'process',
    question: 'How long does a project take?',
    answer:
      'Timelines vary by scope. A focused website can be delivered in a few weeks. Custom platforms take longer. You will receive a realistic timeline before we start — and honest updates if anything changes.',
    preview: true,
  },
  {
    id: 'custom-apps',
    category: 'technical',
    question: 'Do you build custom web applications?',
    answer:
      'Yes. Custom web applications are a core part of KojoTech — from internal business tools to full client-facing platforms.',
    preview: true,
  },
  {
    id: 'ecommerce',
    category: 'services',
    question: 'Do you build e-commerce websites?',
    answer:
      'Yes. We build online stores with product catalogs, shopping carts, and payment gateway integrations.',
  },
  {
    id: 'outside-ghana',
    category: 'working-together',
    question: 'Do you work with businesses remotely?',
    answer:
      'Yes. KojoTech works with clients remotely. Communication happens through WhatsApp, email, and video calls, and projects are delivered regardless of location.',
  },
  {
    id: 'domain-hosting',
    category: 'technical',
    question: 'Do you provide domain and hosting?',
    answer:
      'Yes. We can register your domain, configure DNS, set up SSL, and recommend reliable hosting for your project.',
  },
  {
    id: 'maintenance',
    category: 'services',
    question: 'Do you maintain websites after launch?',
    answer:
      'Yes. Ongoing maintenance is available — updates, backups, security patches, and improvements. You can arrange it as a one-off or as a recurring service.',
  },
  {
    id: 'payments',
    category: 'technical',
    question: 'Can you integrate payment gateways?',
    answer:
      'Yes. We integrate popular payment gateways and can advise on the right option for your region and business model.',
  },
  {
    id: 'apis',
    category: 'technical',
    question: 'Can you integrate third-party APIs?',
    answer:
      'Yes. If your project needs to connect to a third-party service — payments, messaging, maps, AI, or something else — we can integrate it.',
  },
  {
    id: 'business-systems',
    category: 'services',
    question: 'Can you build business management systems?',
    answer:
      'Yes. We build systems for inventory, client records, staff, invoicing, reporting, and other internal operations — designed around how your business actually works.',
  },
  {
    id: 'start-project',
    category: 'process',
    question: 'How do I start a project?',
    answer:
      'The simplest way is to submit the contact form or message KojoTech on WhatsApp. Share what you have in mind — even a rough idea is enough to begin the conversation.',
  },
  {
    id: 'payment-terms',
    category: 'pricing',
    question: 'Do I need to pay everything upfront?',
    answer:
      'No. Projects are typically structured with a deposit to begin and the remainder at agreed milestones. The exact terms are discussed before any work starts.',
  },
  {
    id: 'custom-request',
    category: 'services',
    question: 'Can I request a custom solution?',
    answer:
      'Yes. If your needs do not fit neatly into a category, describe the problem and we will scope a solution that fits.',
  },
  {
    id: 'communication',
    category: 'working-together',
    question: 'How do we communicate during a project?',
    answer:
      'Primarily through WhatsApp and email, with scheduled calls when needed. You are kept updated at each major milestone — not left wondering what is happening.',
  },
  {
    id: 'revisions',
    category: 'process',
    question: 'How many revisions are included?',
    answer:
      'Reasonable revisions during the design and development phases are included. The exact number is discussed and agreed upon before work starts, so there are no surprises.',
  },
  {
    id: 'ownership',
    category: 'working-together',
    question: 'Who owns the finished product?',
    answer:
      'You do. Your domain, your content, your code. KojoTech sets things up so you are never locked into a system you cannot leave.',
  },
];

export const getPreviewFaqs = () => faqs.filter((f) => f.preview).slice(0, 5);