import { useEffect, useRef, useState } from 'react';

export default function DeferredSection({ loader, minHeight = 420, ...props }) {
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
