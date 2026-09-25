import Container from '../../components/ui/Container';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import { cn } from '../../utils/cn';

export default function BrandStory() {
  const { ref, revealed } = useScrollReveal();

  return (
    <section className="section pt-0">
      <Container>
        <div
          ref={ref}
          className={cn(
            'grid gap-10 transition-all duration-700 ease-out-expo lg:grid-cols-12 lg:gap-16',
            revealed ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
        >
          <div className="lg:col-span-3">
            <p className="eyebrow">The brand</p>
          </div>

          <div className="lg:col-span-9">
            <div className="max-w-prose space-y-5 text-base leading-relaxed text-bone-dim">
              <p className="text-xl leading-relaxed text-bone">
                KojoTech is a small, focused technology brand. That is on purpose.
              </p>
              <p>
                We are not trying to be a large agency. We are not pretending to
                be one. KojoTech is built around a straightforward idea:{' '}
                <span className="text-bone">
                  deliver modern, well-built digital work that actually solves
                  the problem it was created for
                </span>
                .
              </p>
              <p>
                Every project is designed from scratch around real requirements —
                not forced into a template. That means the tools change from
                project to project: sometimes it is React, sometimes WordPress,
                sometimes something entirely custom. The approach stays constant:
                honest scoping, careful building, and clear communication.
              </p>
              <p>
                KojoTech works with businesses and organizations outside Ghana and
                beyond — from restaurants and clothing brands to investment
                platforms and custom business systems. If you have an idea, we
                build it properly.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}