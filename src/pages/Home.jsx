import { useEffect, useRef, useState } from 'react';
import Header from './LayoutHeader';
import Hero from './HomeHero';

const loadFeatures = () => import('./SolutionsSection.jsx');
const loadPortfolio = () => import('./ProductsSection.jsx');
const loadTestimonials = () => import('./AboutSection.jsx');
const loadContact = () => import('./ContactSection.jsx');
const loadFooter = () => import('./LayoutFooter.jsx');

function DeferredSection({ loader, minHeight = 420, ...props }) {
  const [Section, setSection] = useState(null);
  const ref = useRef(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    let cancelled = false;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        loader().then((module) => {
          if (!cancelled) setSection(() => module.default);
        });
      },
      { rootMargin: '0px', threshold: 0.01 }
    );

    observer.observe(node);
    return () => {
      cancelled = true;
      observer.disconnect();
    };
  }, [loader]);

  if (Section) return <Section {...props} />;

  return <div ref={ref} style={{ minHeight }} aria-hidden="true" />;
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <DeferredSection loader={loadFeatures} minHeight={720} />
        <DeferredSection loader={loadPortfolio} limit={3} minHeight={640} />
        <DeferredSection loader={loadTestimonials} minHeight={520} />
        <DeferredSection loader={loadContact} minHeight={640} />
      </main>
      <DeferredSection loader={loadFooter} minHeight={360} />
    </div>
  );
}
