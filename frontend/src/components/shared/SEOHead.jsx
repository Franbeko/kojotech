import { Helmet } from 'react-helmet-async';
import { site } from '../../config/site';

/**
 * SEOHead — per-page metadata.
 * Usage: <SEOHead title="Services" description="..." path="/services" />
 */
export default function SEOHead({
  title,
  description = site.description,
  path = '/',
  image = '/og-image.png',
  noIndex = false,
}) {
  const fullTitle = title ? `${title} — ${site.name}` : `${site.name} — ${site.tagline}`;
  const url = `${site.url}${path}`;
  const ogImage = image.startsWith('http') ? image : `${site.url}${image}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noIndex && <meta name="robots" content="noindex,nofollow" />}

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={site.name} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}