import React, { useEffect } from 'react';
import B2BHero from '../components/sections/b2b/B2BHero';
import B2BTicker from '../components/sections/b2b/B2BTicker';
import B2BForWho from '../components/sections/b2b/B2BForWho';
import B2BHowItWorks from '../components/sections/b2b/B2BHowItWorks';
import B2BWhy from '../components/sections/b2b/B2BWhy';
import B2BExport from '../components/sections/b2b/B2BExport';
import B2BNumbers from '../components/sections/b2b/B2BNumbers';
import B2BCTA from '../components/sections/b2b/B2BCTA';

export default function B2B() {
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
      <B2BHero />
      <B2BTicker />
      <B2BForWho />
      <B2BHowItWorks />
      <B2BWhy />
      <B2BExport />
      <B2BNumbers />
      <B2BCTA />
    </>
  );
}
