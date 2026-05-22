import React, { useEffect, useRef } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

export default function MainLayout() {
  const { pathname } = useLocation();
  const aeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Re-bind intersection observer for scroll animations (.fi nodes)
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

    if (aeRef.current) {
      // Small timeout to allow DOM to render route change
      setTimeout(() => {
         if (!aeRef.current) return;
         const elements = aeRef.current.querySelectorAll('.fi');
         elements.forEach((el) => observer.observe(el));
      }, 100);
    }

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <div ref={aeRef} className="ae">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
