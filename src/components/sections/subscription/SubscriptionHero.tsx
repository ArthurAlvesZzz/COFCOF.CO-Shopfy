import React, { useState } from 'react';
import { X } from 'lucide-react';
import { media } from '../../../config/media';

const VIDEOS = {
  hero: media.videos.homeHero,
  card1: media.videos.subscriptionCard01,
  card2: media.videos.subscriptionCard02,
  card3: media.videos.subscriptionCard03,
};

export default function SubscriptionHero() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100; // Account for fixed navbar
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section data-shopify-section="subscription-hero" className="hero" id="top">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="hero-bg-video"
        title="Background video"
        style={{ backgroundColor: 'var(--black)' }}
      >
        <source src={VIDEOS.hero} type="video/mp4" />
      </video>

      <div className="hero-grid-bg"></div>
      <div className="hero-spot"></div>
      <div className="hero-grain"></div>

      <div className="bx hero-meta fi">
        <div className="hero-meta-inner">
          <div>
            <div className="eyebrow">Edição</div>
            <div className="label">N° 01 · 2026</div>
          </div>
          <div>
            <div className="eyebrow">Origem</div>
            <div className="label">Cerrado Mineiro</div>
          </div>
          <div>
            <div className="eyebrow">Altitude</div>
            <div className="label">1100 – 1250m</div>
          </div>
          <div>
            <div className="eyebrow">Safra</div>
            <div className="label">25 / Arábica</div>
          </div>
          <div>
            <div className="eyebrow">Pontuação SCA</div>
            <div className="label">86 – 88.5</div>
          </div>
        </div>
      </div>
      
      <div className="bx hero-main">
        <div className="fi" style={{ position: 'relative', zIndex: 10 }}>
          <div className="eyebrow" style={{ marginBottom: '28px' }}>Assinatura de Café Especial</div>
          <h1 className="display hero-title">O melhor café<br />do Brasil você<br />ainda não <span className="ital">provou</span>.</h1>
          <p className="body-p hero-sub">Oito lotes premiados pela Cup of Excellence, torrados sob demanda no Cerrado Mineiro. Rastreáveis do pé à sua xícara, entregues na sua porta todo mês.</p>
          <div className="hero-cta">
            <a href="#planos" onClick={(e) => handleScroll(e, 'planos')} className="btn btn-sd"><span>Assinar agora →</span></a>
            <a href="#cafes" onClick={(e) => handleScroll(e, 'cafes')} className="btn btn-os"><span>Ver os cafés</span></a>
          </div>
        </div>
        <div className="fi" style={{
          marginTop: 'clamp(24px, 6vh, 64px)',
          padding: 'clamp(24px, 4vw, 32px)',
          background: 'rgba(10, 10, 10, 0.3)',
          backdropFilter: 'blur(8px)',
          WebkitBackdropFilter: 'blur(8px)',
          border: '1px solid rgba(246, 241, 235, 0.08)',
          borderRadius: '16px',
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div className="eyebrow" style={{ color: 'var(--sand)', opacity: 0.6 }}>Diários de Origem</div>
          </div>
          <div className="vg">
            
            <div className="vt" data-video="1" onClick={() => setActiveVideo(VIDEOS.card1)}>
              <div className="vv">
                <video className="vv-video-bg" preload="metadata" playsInline muted style={{ backgroundColor: 'var(--black)' }}>
                  <source src={`${VIDEOS.card1}#t=0.1`} type="video/mp4" />
                </video>
                <div className="vv-grain"></div>
                <div className="vv-top">
                  <span>Vídeo · 01</span><span>0:42</span>
                </div>
                <div className="vv-play">
                  <svg width="12" height="14" viewBox="0 0 14 16" fill="currentColor"><path d="M0 0 L14 8 L0 16 Z"></path></svg>
                </div>
                <div className="vv-cap"><span className="vv-cap-t">Conversa com um produtor do Cerrado</span></div>
              </div>
              <p className="vt-cap">Por que esse café não é preto como você está acostumado? Quem planta responde — sem papo técnico, direto como quem está no campo.</p>
            </div>

            <div className="vt" data-video="2" onClick={() => setActiveVideo(VIDEOS.card2)}>
              <div className="vv">
                <video className="vv-video-bg" preload="metadata" playsInline muted style={{ backgroundColor: 'var(--black)' }}>
                  <source src={`${VIDEOS.card2}#t=0.1`} type="video/mp4" />
                </video>
                <div className="vv-grain"></div>
                <div className="vv-top">
                  <span>Vídeo · 02</span><span>1:08</span>
                </div>
                <div className="vv-play">
                  <svg width="12" height="14" viewBox="0 0 14 16" fill="currentColor"><path d="M0 0 L14 8 L0 16 Z"></path></svg>
                </div>
                <div className="vv-cap"><span className="vv-cap-t">O que faz um café valer o dobro</span></div>
              </div>
              <p className="vt-cap">Altitude, maturação, solo. Quem está na lavoura explica o que muda da flor até a sua xícara — com a humildade de quem colhe na mão.</p>
            </div>

            <div className="vt" data-video="3" onClick={() => setActiveVideo(VIDEOS.card3)}>
              <div className="vv">
                <video className="vv-video-bg" preload="metadata" playsInline muted style={{ backgroundColor: 'var(--black)' }}>
                  <source src={`${VIDEOS.card3}#t=0.1`} type="video/mp4" />
                </video>
                <div className="vv-grain"></div>
                <div className="vv-top">
                  <span>Vídeo · 03</span><span>0:54</span>
                </div>
                <div className="vv-play">
                  <svg width="12" height="14" viewBox="0 0 14 16" fill="currentColor"><path d="M0 0 L14 8 L0 16 Z"></path></svg>
                </div>
                <div className="vv-cap"><span className="vv-cap-t">Do pé até a sua casa</span></div>
              </div>
              <p className="vt-cap">Quando o grão está pronto, quanto tempo até chegar na torrefação, e por que esperamos você assinar antes de torrar o seu.</p>
            </div>

          </div>
          <div className="vg-foot" style={{ marginTop: '24px', paddingTop: '20px', borderTop: '1px solid rgba(246, 241, 235, 0.08)' }}>
            <p>Gravado no Cerrado Mineiro · Série de entrevistas com produtores</p>
            <a href="https://instagram.com/cofcof.company" target="_blank" rel="noopener noreferrer" className="lnk">Ver todos no Instagram →</a>
          </div>
        </div>
      </div>
      <div className="scroll-hint">Role ↓</div>

      {activeVideo && (
        <div className="video-modal-overlay" onClick={() => setActiveVideo(null)}>
          <button className="video-modal-close" onClick={() => setActiveVideo(null)}>
            <X size={28} />
          </button>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <video 
              src={activeVideo} 
              autoPlay 
              controls 
              className="video-player"
              style={{ backgroundColor: 'var(--black)' }}
            />
          </div>
        </div>
      )}
    </section>
  );
}
