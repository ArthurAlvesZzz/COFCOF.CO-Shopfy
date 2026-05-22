import React, { useEffect } from 'react';
import CafesHero from '../components/sections/cafes/CafesHero';
import CafesTicker from '../components/sections/cafes/CafesTicker';
import CafesIndex from '../components/sections/cafes/CafesIndex';
import CafesList from '../components/sections/cafes/CafesList';
import CafesCTA from '../components/sections/cafes/CafesCTA';

export default function Cafes() {
  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('v');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    const elements = document.querySelectorAll('.fi');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <CafesHero />
      <CafesTicker />
      <CafesIndex />
      <CafesList />
      <CafesCTA />
    </>
  );
}
