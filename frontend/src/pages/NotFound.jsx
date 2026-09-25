import { Link } from 'react-router-dom';
import Container from '../components/ui/Container';
import SEOHead from '../components/shared/SEOHead';

export default function NotFound() {
  return (
    <>
      <SEOHead title="404 — Not Found" path="/404" noIndex />
      <section className="section pt-32 sm:pt-40">
        <Container>
          <p className="eyebrow mb-4">404</p>
          <h1 className="text-display-lg mb-6">Page not found.</h1>
          <p className="mb-8 max-w-prose text-bone-dim">
            The page you're looking for doesn't exist or has moved.
          </p>
          <Link to="/" className="btn-primary">Back to Home</Link>
        </Container>
      </section>
    </>
  );
}