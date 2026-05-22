import React from 'react';

export default function SubscriptionComparison() {
  return (
    <section data-shopify-section="subscription-comparison" className="sec fi">
      <div className="bx" style={{ maxWidth: '1100px' }}>
        <div className="eyebrow">Capítulo 04 — Comparação honesta</div>
        <h2 className="display" style={{ fontSize: 'clamp(1.8rem,4.5vw,3.2rem)', color: 'var(--black)', marginTop: '20px', maxWidth: '800px' }}>Café de supermercado<br /><span style={{ color: 'var(--sub)' }}>vs.</span> COFCOF.CO</h2>
        <div className="cmp">
          <div className="cmp-hd">
            <div className="eyebrow">.</div>
            <div className="eyebrow" style={{ color: 'var(--sub)', opacity: 0.7 }}>Café comercial</div>
            <div className="eyebrow">COFCOF.CO</div>
          </div>
          <div className="cmp-row">
            <div className="k">Origem</div>
            <div className="v1">
              <svg className="ico" width="14" height="14" viewBox="0 0 14 14"><path d="M3 3 L11 11 M11 3 L3 11" stroke="currentColor" strokeWidth="1.2"></path></svg>Blend sem origem definida</div>
            <div className="v2">
              <svg className="ico" width="14" height="14" viewBox="0 0 14 14"><path d="M3 7 L6 10 L11 4" stroke="currentColor" strokeWidth="1.4" fill="none"></path></svg>Lote único · Cerrado Mineiro D.O.</div>
          </div>
          <div className="cmp-row">
            <div className="k">Pontuação SCA</div>
            <div className="v1">
              <svg className="ico" width="14" height="14" viewBox="0 0 14 14"><path d="M3 3 L11 11 M11 3 L3 11" stroke="currentColor" strokeWidth="1.2"></path></svg>Inferior a 80 pontos</div>
            <div className="v2">
              <svg className="ico" width="14" height="14" viewBox="0 0 14 14"><path d="M3 7 L6 10 L11 4" stroke="currentColor" strokeWidth="1.4" fill="none"></path></svg>86 a 88.5 pontos</div>
          </div>
          <div className="cmp-row">
            <div className="k">Frescor</div>
            <div className="v1">
              <svg className="ico" width="14" height="14" viewBox="0 0 14 14"><path d="M3 3 L11 11 M11 3 L3 11" stroke="currentColor" strokeWidth="1.2"></path></svg>Meses na prateleira</div>
            <div className="v2">
              <svg className="ico" width="14" height="14" viewBox="0 0 14 14"><path d="M3 7 L6 10 L11 4" stroke="currentColor" strokeWidth="1.4" fill="none"></path></svg>Máximo 7 dias da torra</div>
          </div>
          <div className="cmp-row">
            <div className="k">Rastreabilidade</div>
            <div className="v1">
              <svg className="ico" width="14" height="14" viewBox="0 0 14 14"><path d="M3 3 L11 11 M11 3 L3 11" stroke="currentColor" strokeWidth="1.2"></path></svg>Impossível rastrear</div>
            <div className="v2">
              <svg className="ico" width="14" height="14" viewBox="0 0 14 14"><path d="M3 7 L6 10 L11 4" stroke="currentColor" strokeWidth="1.4" fill="none"></path></svg>QR code oficial do produtor</div>
          </div>
          <div className="cmp-row">
            <div className="k">Adulteração</div>
            <div className="v1">
              <svg className="ico" width="14" height="14" viewBox="0 0 14 14"><path d="M3 3 L11 11 M11 3 L3 11" stroke="currentColor" strokeWidth="1.2"></path></svg>Até 30% de cascas e milho (MAPA, 2024)</div>
            <div className="v2">
              <svg className="ico" width="14" height="14" viewBox="0 0 14 14"><path d="M3 7 L6 10 L11 4" stroke="currentColor" strokeWidth="1.4" fill="none"></path></svg>100% arábica premiado</div>
          </div>
        </div>
      </div>
    </section>
  );
}
