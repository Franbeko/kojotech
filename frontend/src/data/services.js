export const services = [
  {
    id: 'website-development',
    title: 'Website Development',
    tagline: 'Fast, responsive websites designed around your business.',
    description:
      'We build websites that load quickly, look sharp on every device, and reflect your brand — not a generic template. Every site is designed from scratch around your goals, whether it is a restaurant menu, a corporate presence, or a personal brand.',
    deliverables: [
      'Custom design matched to your brand',
      'Mobile-first responsive layout',
      'Performance-optimized build',
      'SEO foundations (meta, sitemap, structured data)',
      'Contact forms and integrations',
      'Deployment, domain, and SSL setup',
    ],
    tech: ['React', 'Tailwind CSS', 'WordPress', 'Vite'],
    featured: true,
  },
  {
    id: 'web-applications',
    title: 'Web Applications',
    tagline: 'Custom applications that solve real problems.',
    description:
      'When off-the-shelf tools do not fit, we build the application your business actually needs — dashboards, portals, internal tools, client-facing platforms. Designed around your workflow, not someone else\'s idea of it.',
    deliverables: [
      'Custom application architecture',
      'User authentication and roles',
      'Database design and APIs',
      'Admin panels and dashboards',
      'Third-party integrations',
      'Ongoing support and iteration',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST APIs'],
  },
  {
    id: 'business-management-systems',
    title: 'Business Management Systems',
    tagline: 'Systems built around how your business actually works.',
    description:
      'Inventory, clients, staff, invoices, reports — all in one system tailored to your operations. No bloat, no features you do not need, no monthly per-seat licensing you cannot control.',
    deliverables: [
      'Inventory and stock management',
      'Client and customer records',
      'Staff and user management',
      'Invoicing and reporting',
      'Role-based access control',
      'Data export and backup',
    ],
    tech: ['MongoDB', 'Node.js', 'React', 'Reporting'],
  },
  {
    id: 'e-commerce-solutions',
    title: 'E-Commerce Solutions',
    tagline: 'Online stores that make buying easy.',
    description:
      'Product catalogs, shopping carts, checkout flows, and payment integrations — everything needed to sell online. Built for the way your customers shop, not the way a platform wants them to.',
    deliverables: [
      'Product catalog and categories',
      'Shopping cart and checkout',
      'Payment gateway integration',
      'Order management',
      'Customer accounts',
      'Inventory sync',
    ],
    tech: ['Payments', 'Cart', 'CMS', 'Integrations'],
  },
  {
    id: 'custom-digital-solutions',
    title: 'Custom Digital Solutions',
    tagline: 'Have something specific in mind? We scope and build it.',
    description:
      'Not every project fits a category. If you have a specific need — a booking system, a marketplace, a specialized platform — describe the problem and we will scope a solution that fits.',
    deliverables: [
      'Discovery and scoping session',
      'Technical feasibility review',
      'Clear itemized proposal',
      'Design and build',
      'Testing and refinement',
      'Launch and support',
    ],
    tech: ['Scoping', 'Architecture', 'Build', 'Deliver'],
  },
  {
    id: 'domain-hosting',
    title: 'Domain & Hosting',
    tagline: 'Get set up properly — domains, DNS, SSL, and hosting.',
    description:
      'We handle the infrastructure side of your project: register the domain, configure DNS, set up SSL certificates, and recommend reliable hosting for your traffic and budget.',
    deliverables: [
      'Domain registration and management',
      'DNS configuration',
      'SSL certificate setup',
      'Hosting recommendations and setup',
      'Email configuration where needed',
      'Uptime monitoring basics',
    ],
    tech: ['Domains', 'DNS', 'SSL', 'Hosting'],
  },
  {
    id: 'maintenance-support',
    title: 'Maintenance & Support',
    tagline: 'Ongoing care for your site or app.',
    description:
      'Post-launch support keeps your site secure, fast, and up to date. Whether it is occasional updates or a monthly retainer, we handle the technical work so you can focus on your business.',
    deliverables: [
      'Software and security updates',
      'Regular backups',
      'Bug fixes and small improvements',
      'Performance monitoring',
      'Content updates as needed',
      'Priority support channel',
    ],
    tech: ['Updates', 'Backups', 'Monitoring', 'Support'],
  },
];

/**
 * Look up a single service by id — used by the /services anchor navigation.
 */
export const getServiceById = (id) => services.find((s) => s.id === id);