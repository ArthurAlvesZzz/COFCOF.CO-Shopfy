import React, { useEffect } from 'react';
import HomeHero from '../components/sections/home/HomeHero';
import HomeMarquee from '../components/sections/home/HomeMarquee';
import HomeCertifications from '../components/sections/home/HomeCertifications';
import HomeKit from '../components/sections/home/HomeKit';
import HomeFeatured from '../components/sections/home/HomeFeatured';
import HomeCompare from '../components/sections/home/HomeCompare';
import HomeReviews from '../components/sections/home/HomeReviews';
import HomeOrigin from '../components/sections/home/HomeOrigin';
import HomeClub from '../components/sections/home/HomeClub';
import HomeB2B from '../components/sections/home/HomeB2B';
import HomeCTA from '../components/sections/home/HomeCTA';

export default function Home() {
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
      <HomeHero />
      <HomeMarquee />
      <HomeCertifications />
      
      <div className="bx" style={{ textAlign: 'center', padding: '40px 0' }}>
        <p className="label" style={{ color: 'var(--sub)' }}>Menos amargor · Mais doçura natural · Grão ou moído · Guia de preparo</p>
      </div>
      
      <HomeKit />
      
      <div className="bx" style={{ textAlign: 'center', padding: '64px 0 32px' }}>
        <p className="ital" style={{ fontSize: '24px' }}>Agora que você entende seu perfil, escolha o lote.</p>
      </div>

      <HomeFeatured />
      <HomeCompare />
      
      <HomeMarquee />

      <HomeReviews />
      <HomeOrigin />
      <HomeClub />
      <HomeB2B />
      <HomeCTA />
    </>
  );
}
