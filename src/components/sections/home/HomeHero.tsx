import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Award, Star, MapPin } from 'lucide-react';
import { usePublicContent } from '../../../hooks/usePublicContent';
import { media } from '../../../config/media';

export default function HomeHero() {
  const navigate = useNavigate();
  const { getBlock } = usePublicContent('home');
  const heroBlock = getBlock('home.hero');

  return (
    <section className="pg-hero fi v">
      <div className="pg-hero-grid"></div>
      <div className="pg-hero-spot"></div>
      <div className="bx pg-hero-in" style={{
        position: 'relative',
        borderRadius: '16px',
        border: '1px solid rgba(246, 241, 235, 0.1)',
        padding: 'clamp(48px, 6vw, 80px)',
        minHeight: '600px',
        boxShadow: '0 32px 64px rgba(0, 0, 0, 0.5)',
        overflow: 'hidden'
      }}>
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          src={media.videos.homeHero}
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: 0,
            backgroundColor: 'var(--black)'
          }}
        />
        <div style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'linear-gradient(to right, rgba(10, 10, 10, 0.95) 0%, rgba(10, 10, 10, 0.7) 60%, rgba(10, 10, 10, 0) 100%)',
          zIndex: 1
        }}></div>

        <div style={{ position: 'relative', zIndex: 2 }}>
          <div className="eyebrow" style={{ marginBottom: '24px' }}>
            <span style={{ border: '1px solid rgba(201,162,99,0.3)', color: 'var(--clay)', padding: '6px 16px', borderRadius: '40px', backgroundColor: 'rgba(201,162,99,0.05)' }}>Lote selecionado da vez</span>
          </div>
          
          <div className="hero-content-wrapper">
            <div className="hero-content">
              <h1 className="display" style={{ color: 'var(--sand)', lineHeight: '1.05', maxWidth: '900px' }}>
              {heroBlock?.title || "CAFÉS ESPECIAIS PREMIADOS DO BRASIL, TORRADOS SOB DEMANDA."}
            </h1>
            <p className="body-p" style={{ fontSize: 'clamp(18px, 1.5vw, 22px)', maxWidth: '580px', color: 'rgba(246, 241, 235, 0.75)', lineHeight: '1.6' }}>
              {heroBlock?.title ? heroBlock.subtitle : "Talvez o melhor café do Brasil ainda não esteja na sua xícara."}
            </p>

            <div className="pg-hero-cta">
              <button onClick={() => navigate(heroBlock?.ctas?.[0]?.url || '/cafes')} className="btn btn-sd hero-btn-main">
                <span>{heroBlock?.ctas?.[0]?.label || "Comprar cafés premiados"} →</span>
              </button>
              <Link to={heroBlock?.ctas?.[1]?.url || "/assinaturas"} className="btn btn-ds hero-btn-sec">
                <span>{heroBlock?.ctas?.[1]?.label || "Entrar para o Clube"}</span>
              </Link>
            </div>

            <div style={{ marginTop: '72px', display: 'flex', flexWrap: 'wrap', gap: '32px', color: 'var(--sub)' }}>
              <div className="label" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px' }}>
                <Award size={18} color="var(--clay)"/> 86–88.5 SCA
              </div>
              <div className="label" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px' }}>
                <Star size={18} color="var(--clay)"/> Cup of Excellence
              </div>
              <div className="label" style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '10px' }}>
                <MapPin size={18} color="var(--clay)"/> Cerrado Mineiro D.O.
              </div>
            </div>
          </div>
          <div className="hero-visual-right">
            {/* Subtle Origin/Map or Badge Element to balance layout */}
            <div className="hero-right-badge">
              <div className="hrb-inner">Cerrado<br/>Mineiro</div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
