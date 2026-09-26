/**
 * Pricing signal — starting points, not fixed prices.
 *
 * IMPORTANT:
 * - These are ANCHORS, not quotes. Every project is scoped individually.
 * - Adjust the ranges to your real-world numbers before deploying.
 * - The "notSure" CTA is critical — it lets visitors without a budget
 *   still engage.
 */
export const pricingTiers = [
  {
    id: 'website',
    name: 'Website',
    startingFrom: '$500',
    range: '$500 – $3,000',
    summary:
      'A focused, modern website designed around your business — not a template.',
    typical: [
      'Restaurants & cafés',
      'Personal brands & artists',
      'Service businesses',
      'Portfolio sites',
    ],
    included: [
      'Custom design',
      'Mobile-first responsive build',
      'Contact form + integrations',
      'Basic SEO setup',
      'Deployment & SSL',
    ],
    cta: 'Start a website project',
  },
  {
    id: 'business-system',
    name: 'Business System / Web App',
    startingFrom: '$2,000',
    range: '$2,000 – $5,000+',
    summary:
      'A custom application built around how your business actually works.',
    typical: [
      'Inventory & operations systems',
      'Client management tools',
      'Booking & scheduling platforms',
      'Internal dashboards',
    ],
    included: [
      'Scoping & planning session',
      'Custom database & API',
      'User roles & permissions',
      'Admin dashboard',
      'Ongoing support options',
    ],
    cta: 'Discuss a system',
    featured: true,
  },
  {
    id: 'ecommerce',
    name: 'E-Commerce',
    startingFrom: '$1,200',
    range: '$1,200 – $3,000+',
    summary:
      'An online store that makes buying easy — built around how your customers shop.',
    typical: [
      'Product-based businesses',
      'Fashion & apparel brands',
      'Specialty & niche stores',
      'Multi-category shops',
    ],
    included: [
      'Product catalog & categories',
      'Shopping cart & checkout',
      'Payment gateway integration',
      'Order management',
      'Inventory setup',
    ],
    cta: 'Build an online store',
  },
];

export const pricingFooter = {
  note: 'Every project is different. These ranges reflect what we have built for real clients — your final quote depends on scope, features, and integrations.',
  guarantee:
    'You get a clear, itemized proposal before any work begins. No hidden fees.',
  notSure: {
    title: 'Not sure where you fit?',
    description:
      'That is completely normal — most projects are somewhere in between. Tell us about your idea and we will recommend the right approach.',
    cta: 'Tell us about your project',
  },
};