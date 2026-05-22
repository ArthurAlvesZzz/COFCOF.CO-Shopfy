import React from 'react';

export default function B2BHero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section data-shopify-section="b2b-hero" className="pg-hero fi">
      <div className="pg-hero-grid"></div>
      <div className="pg-hero-spot"></div>
      <div className="bx pg-hero-in">
        <div className="eyebrow">B2B · Empresas · Exportação</div>
        <h1 className="display" style={{ fontSize: 'clamp(2.5rem, 5.5vw, 5.2rem)', maxWidth: '900px' }}>Café especial para empresas que querem transformar cada xícara em <span className="ital">experiência</span>.</h1>
        <p className="body-p" style={{ fontSize: 'clamp(18px, 1.8vw, 22px)', maxWidth: '780px', marginTop: '32px' }}>Fornecimento recorrente para cafeterias, escritórios, hotéis, restaurantes e negócios que querem servir cafés premiados, frescos e rastreáveis.</p>
        <div className="pg-hero-cta" style={{ marginTop: '56px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
          <a href="https://wa.me/5534998728882?text=Ol%C3%A1!%20Tenho%20interesse%20no%20plano%20Empresas%20da%20COFCOF.CO." target="_blank" rel="noopener noreferrer" className="btn btn-sd" style={{ padding: '22px 42px', fontSize: '14px' }}><span>Falar com comercial →</span></a>
          <a href="#exportacao" onClick={(e) => handleScroll(e, 'exportacao')} className="btn" style={{ border: '1.5px solid rgba(246, 241, 235, 0.4)', color: 'rgba(246, 241, 235, 0.8)', padding: '22px 36px', fontSize: '13px' }}><span>Exportação →</span></a>
        </div>
      </div>
    </section>
  );
}
