import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import InstagramIcon from '../ui/icons/InstagramIcon';
import Container from '../ui/Container';
import BrandMark from '../ui/BrandMark';
import { site } from '../../config/site';
import { footerNav } from '../../data/nav';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-32 border-t border-ink-line bg-ink-soft">
      <Container className="py-16">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand column */}
          <div className="md:col-span-5">
            <Link to="/" className="flex items-center gap-2.5" aria-label="KojoTech home">
              <BrandMark size="md" />
              <span className="font-display text-lg font-semibold tracking-tight">
                KojoTech
              </span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-bone-dim">
              {site.description}
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-[0.18em] text-lime">
              {site.tagline}
            </p>
          </div>

          {/* Company links */}
          <nav className="md:col-span-3" aria-label="Company">
            <h3 className="caption mb-4">Company</h3>
            <ul className="space-y-2.5">
              {footerNav.company.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-bone-dim transition-colors hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services links */}
          <nav className="md:col-span-4" aria-label="Services">
            <h3 className="caption mb-4">Services</h3>
            <ul className="space-y-2.5">
              {footerNav.services.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-bone-dim transition-colors hover:text-bone"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Contact row */}
        <div className="mt-14 flex flex-col gap-6 border-t border-ink-line pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
            <a
              href={`mailto:${site.contact.email}`}
              className="flex items-center gap-2 text-sm text-bone-dim transition-colors hover:text-bone"
            >
              <Mail size={16} aria-hidden="true" />
              {site.contact.email}
            </a>
            <a
              href={site.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-bone-dim transition-colors hover:text-bone"
            >
              <InstagramIcon size={16} />
              @kojotechofficial
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-xs text-bone-faint">
            <Link to="/privacy" className="transition-colors hover:text-bone-dim">
              Privacy
            </Link>
            <a
              href={site.founder.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-bone-dim"
            >
              Founder Portfolio
            </a>
          </div>
        </div>

        {/* Legal */}
        <div className="mt-10 flex flex-col gap-2 text-xs text-bone-faint sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} KojoTech. All rights reserved.</p>
          <p>
            Founded by{' '}
            <a
              href={site.founder.portfolio}
              target="_blank"
              rel="noopener noreferrer"
              className="text-bone-dim transition-colors hover:text-lime"
            >
              {site.founder.name}
            </a>
          </p>
        </div>
      </Container>
    </footer>
  );
}