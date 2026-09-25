import { useEffect, useState } from 'react';
import Container from '../components/ui/Container';
import SEOHead from '../components/shared/SEOHead';
import ServicesHero from '../sections/services/ServicesHero';
import ServiceDetail from '../components/services/ServiceDetail';
import ServiceNav from '../components/services/ServiceNav';
import FinalCTA from '../sections/home/FinalCTA';
import { useHashScroll } from '../hooks/useHashScroll';
import { services } from '../data/services';

export default function Services() {
  useHashScroll();
  const [activeId, setActiveId] = useState(services[0]?.id);

  // Track which section is in view — updates the sidebar highlight
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0, 0.25, 0.5, 1] }
    );

    services.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <SEOHead
        title="Services"
        description="Website development, web applications, business management systems, e-commerce solutions, custom digital solutions, domain & hosting, and maintenance & support."
        path="/services"
      />

      <div id="top" />

      <ServicesHero />

      <section className="pb-8">
        <Container>
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Sidebar */}
            <aside className="lg:col-span-3">
              <ServiceNav activeId={activeId} />
            </aside>

            {/* Services */}
            <div className="lg:col-span-9">
              {services.map((service, i) => (
                <ServiceDetail key={service.id} service={service} index={i} />
              ))}
            </div>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}