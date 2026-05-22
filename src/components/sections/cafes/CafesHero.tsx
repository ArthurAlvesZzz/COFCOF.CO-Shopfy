import React from 'react';

export default function CafesHero() {
  return (
    <section data-shopify-section="cafes-hero" className="pg-hero fi">
      <div className="pg-hero-grid"></div>
      <div className="pg-hero-spot"></div>
      <div className="pg-hero-grain"></div>
      <div className="bx pg-hero-in">
        <div className="eyebrow">Curadoria · Safra 25</div>
        <h1 className="display">8 lotes premiados.<br />8 produtores do <span className="ital">Cerrado</span>.</h1>
        <p className="body-p">Todos selecionados pela Cup of Excellence — a competição que elege os melhores cafés do mundo. Cada lote tem nome, sobrenome, fazenda e história. A cada mês, um deles chega na sua porta via assinatura.</p>
        <div className="pg-hero-meta">
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
    </section>
  );
}
