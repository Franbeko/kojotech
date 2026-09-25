import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Container from '../../components/ui/Container';
import HeroConsole from '../../components/home/HeroConsole';
import WhatsAppCTA from '../../components/shared/WhatsAppCTA';
import { WhatsAppMessages } from '../../utils/whatsapp';

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20 lg:pb-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: copy */}
          <div className="lg:col-span-7">
            <p className="eyebrow mb-5">Building Digital Solutions</p>

            <h1 className="text-display-xl text-balance text-bone">
              Modern digital work,
              <br />
              <span className="text-lime">built properly.</span>
            </h1>

            <p className="mt-7 max-w-prose text-lg leading-relaxed text-bone-dim">
              KojoTech is a technology brand building websites, web applications,
              business systems, and custom digital solutions for businesses,
              startups, and organizations.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-3">
              <Link to="/contact" className="btn-primary px-5 py-3">
                Start a Project
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/work" className="btn-ghost px-5 py-3">
                Explore Our Work
              </Link>
              <WhatsAppCTA
                variant="link"
                size="md"
                showIcon={false}
                message={WhatsAppMessages.general}
              >
                or chat on WhatsApp
              </WhatsAppCTA>
            </div>
          </div>

          {/* Right: animated build console */}
          <div className="flex justify-center lg:col-span-5 lg:justify-end">
            <HeroConsole />
          </div>
        </div>
      </Container>
    </section>
  );
}