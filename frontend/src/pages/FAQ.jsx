import { useMemo, useState } from 'react';
import Container from '../components/ui/Container';
import SEOHead from '../components/shared/SEOHead';
import FaqHero from '../sections/faq/FaqHero';
import FaqSearch from '../components/faq/FaqSearch';
import FaqAccordion from '../components/faq/FaqAccordion';
import FaqCTA from '../sections/faq/FaqCTA';
import { faqs, faqCategories } from '../data/faqs';

export default function FAQ() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');

  // Filter by search query and category
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return faqs.filter((f) => {
      const matchCat = category === 'all' || f.category === category;
      const matchQuery =
        !q ||
        f.question.toLowerCase().includes(q) ||
        f.answer.toLowerCase().includes(q);
      return matchCat && matchQuery;
    });
  }, [query, category]);

  // Counts per category (respecting current search query)
  const counts = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filteredByQuery = !q
      ? faqs
      : faqs.filter(
          (f) =>
            f.question.toLowerCase().includes(q) ||
            f.answer.toLowerCase().includes(q)
        );

    const base = { all: filteredByQuery.length };
    faqCategories
      .filter((c) => c.id !== 'all')
      .forEach((c) => {
        base[c.id] = filteredByQuery.filter((f) => f.category === c.id).length;
      });
    return base;
  }, [query]);

  return (
    <>
      <SEOHead
        title="FAQ"
        description="Answers to common questions about KojoTech — services, pricing, timelines, technical capabilities, and how we work with clients."
        path="/faq"
      />

      <FaqHero />

      <section className="pb-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            {/* Sidebar: search + categories (sticky on desktop) */}
            <aside className="lg:col-span-4">
              <div className="lg:sticky lg:top-24">
                <FaqSearch
                  query={query}
                  onQueryChange={setQuery}
                  category={category}
                  onCategoryChange={setCategory}
                  counts={counts}
                />
              </div>
            </aside>

            {/* FAQ list */}
            <div className="lg:col-span-8">
              <FaqAccordion faqs={filtered} />
            </div>
          </div>
        </Container>
      </section>

      <FaqCTA />
    </>
  );
}