import { organizationSchema, websiteSchema } from '../config/site';
import SEOHead from '../components/shared/SEOHead';
import Hero from '../sections/home/Hero';
import TrustedBy from '../sections/home/TrustedBy';
import ServicesMarquee from '../sections/home/ServicesMarquee';
import BrandIntro from '../sections/home/BrandIntro';
import ServicesGrid from '../sections/home/ServicesGrid';
import PricingSignal from '../sections/pricing/PricingSignal';
import Industries from '../sections/home/Industries';
import SelectedWork from '../sections/home/SelectedWork';
import WhyKojoTech from '../sections/home/WhyKojoTech';
import Process from '../sections/home/Process';
import Founder from '../sections/home/Founder';
import Testimonials from '../sections/home/Testimonials';
import FAQPreview from '../sections/home/FAQPreview';
import FinalCTA from '../sections/home/FinalCTA';

export default function Home() {
  return (
    <>
      <SEOHead
        title="Building Digital Solutions"
        description="KojoTech builds modern websites, web applications, business systems, and custom digital solutions for businesses, startups, and organizations."
        path="/"
        jsonLd={[organizationSchema, websiteSchema]}
      />

      <Hero />
      <TrustedBy />
      <ServicesMarquee />
      <BrandIntro />
      <ServicesGrid />
      <PricingSignal />
      <Industries />
      <SelectedWork />
      <WhyKojoTech />
      <Process />
      <Founder />
      <Testimonials />
      <FAQPreview />
      <FinalCTA />
    </>
  );
}