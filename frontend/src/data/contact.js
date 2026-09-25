/**
 * Contact form options. Single source of truth — reused by the form,
 * and later by Bolt AI to keep its answers consistent.
 */

export const projectTypes = [
  { value: 'website',                    label: 'Website' },
  { value: 'web-application',            label: 'Web Application' },
  { value: 'e-commerce',                 label: 'E-Commerce' },
  { value: 'business-management-system', label: 'Business Management System' },
  { value: 'custom-digital-solution',    label: 'Custom Digital Solution' },
  { value: 'domain-hosting',             label: 'Domain & Hosting' },
  { value: 'maintenance',                label: 'Maintenance & Support' },
  { value: 'other',                      label: 'Other / Not sure yet' },
];

export const budgetRanges = [
  { value: 'not-sure',      label: 'Not sure yet' },
  { value: 'under-1k',      label: 'Under $1,000' },
  { value: '1k-3k',         label: '$1,000 – $3,000' },
  { value: '3k-7k',         label: '$3,000 – $7,000' },
  { value: '7k-15k',        label: '$7,000 – $15,000' },
  { value: '15k-plus',      label: '$15,000+' },
  { value: 'discuss',       label: 'Prefer to discuss' },
];

export const contactMethods = [
  { value: 'email',    label: 'Email' },
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'phone',    label: 'Phone call' },
];