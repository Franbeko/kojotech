import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import RootLayout from './layouts/RootLayout';
import Analytics from './components/analytics/Analytics';

// Home loads eagerly — it's the primary landing page and most visitors see it first.
import Home from './pages/Home';

// All other pages load on demand (code-split).
const Services = lazy(() => import('./pages/Services'));
const Work = lazy(() => import('./pages/Work'));
const CaseStudy = lazy(() => import('./pages/CaseStudy'));
const About = lazy(() => import('./pages/About'));
const FAQ = lazy(() => import('./pages/FAQ'));
const Testimonials = lazy(() => import('./pages/Testimonials'));
const Contact = lazy(() => import('./pages/Contact'));
const Privacy = lazy(() => import('./pages/Privacy'));
const NotFound = lazy(() => import('./pages/NotFound'));

/**
 * RouteLoading — minimal fallback shown while a lazy page chunk loads.
 * Kept intentionally tiny so it doesn't add weight to the entry bundle.
 */
function RouteLoading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <div className="flex items-center gap-2 text-bone-faint">
        <span className="h-2 w-2 animate-pulse-soft rounded-full bg-lime" />
        <span className="font-mono text-xs uppercase tracking-[0.18em]">
          Loading
        </span>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      {/* Analytics — no-op when VITE_ANALYTICS_ENABLED=false */}
      <Analytics />

      <Suspense fallback={<RouteLoading />}>
        <Routes>
          <Route element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="work" element={<Work />} />
            <Route path="work/:slug" element={<CaseStudy />} />
            <Route path="about" element={<About />} />
            <Route path="faq" element={<FAQ />} />
            <Route path="testimonials" element={<Testimonials />} />
            <Route path="contact" element={<Contact />} />
            <Route path="privacy" element={<Privacy />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
}