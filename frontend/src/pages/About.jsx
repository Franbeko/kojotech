import { personSchema } from '../config/site';
import SEOHead from '../components/shared/SEOHead';
import AboutHero from '../sections/about/AboutHero';
import BrandStory from '../sections/about/BrandStory';
import Values from '../sections/about/Values';
import FounderFull from '../sections/about/FounderFull';
import Stack from '../sections/about/Stack';
import Timeline from '../sections/about/Timeline';
import FinalCTA from '../sections/home/FinalCTA';

export default function About() {
  return (
    <>
      <SEOHead
        title="About"
        description="KojoTech is a technology brand founded by Francis Kojo Haizel, building modern digital solutions for businesses, startups, and organizations — with honesty and craft."
        path="/about"
        jsonLd={personSchema}
      />

      <AboutHero />
      <BrandStory />
      <Values />
      <FounderFull />
      <Stack />
      <Timeline />
      <FinalCTA />
    </>
  );
}