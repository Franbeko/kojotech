/**
 * Primary navigation. Used by Header, MobileMenu, and Footer.
 * Order matters — it renders in this sequence.
 */
export const primaryNav = [
  { label: 'Home',     to: '/' },
  { label: 'Services', to: '/services' },
  { label: 'Work',     to: '/work' },
  { label: 'About',    to: '/about' },
  { label: 'FAQ',      to: '/faq' },
  { label: 'Contact',  to: '/contact' },
];

/**
 * Footer navigation — split into columns for a professional footer layout.
 */
export const footerNav = {
  company: [
    { label: 'About',    to: '/about' },
    { label: 'Work',     to: '/work' },
    { label: 'Services', to: '/services' },
    { label: 'FAQ',      to: '/faq' },
  ],
  services: [
    { label: 'Website Development',        to: '/services#website-development' },
    { label: 'Web Applications',           to: '/services#web-applications' },
    { label: 'Business Management Systems', to: '/services#business-management-systems' },
    { label: 'E-Commerce Solutions',       to: '/services#e-commerce-solutions' },
    { label: 'Custom Digital Solutions',   to: '/services#custom-digital-solutions' },
    { label: 'Domain & Hosting',           to: '/services#domain-hosting' },
    { label: 'Maintenance & Support',      to: '/services#maintenance-support' },
  ],
};