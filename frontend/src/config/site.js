import { env } from './env';

/**
 * Site-wide configuration. Single source of truth for contact info,
 * social links, and brand constants. Update here — never hardcode elsewhere.
 */
export const site = {
  name: 'KojoTech',
  tagline: 'Building Digital Solutions.',
  description:
    'KojoTech builds modern websites, web applications, business management systems, and custom digital solutions for businesses, startups, and organizations.',

  contact: {
    email: 'hello.kojotech@gmail.com',
    whatsappNumber: env.WHATSAPP_NUMBER,
    whatsappDisplay: '+231 776 00 5247',
  },

  founder: {
    name: 'Francis Kojo Haizel',
    role: 'Founder / Full-Stack Developer',
    positioning: 'Full-Stack Developer | WordPress Developer | AI & Technology Enthusiast',
    portfolio: 'https://franciskojohaizel.vercel.app/',
  },

  social: {
    instagram: 'https://instagram.com/kojotechofficial',
    whatsapp: 'https://wa.me/', // base; full URL built by buildWhatsAppURL()
  },

  url: env.SITE_URL,
};

/**
 * Build a WhatsApp chat URL with optional pre-filled message.
 * @param {string} message
 * @returns {string}
 */
export function buildWhatsAppURL(message) {
  const number = site.contact.whatsappNumber;
  if (!number) return '#'; // graceful fallback if env not set
  const base = `https://wa.me/${number}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}