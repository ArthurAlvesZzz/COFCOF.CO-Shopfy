import React from 'react';

export default function B2BExport() {
  return (
    <section data-shopify-section="b2b-export" className="sec sec-d fi" id="exportacao">
      <div className="bx">
        <div className="head">
          <div>
            <div className="eyebrow" style={{ opacity: 0.6 }}>Capítulo 04 — Exportação & Corporativo</div>
            <h2 className="display" style={{ color: 'var(--sand)', fontSize: 'clamp(2.5rem, 5vw, 4.8rem)' }}>Cafés premiados do Brasil<br />para sua <span className="ital">empresa</span>.</h2>
          </div>
        </div>
        <div className="exp-grid" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 1.3fr) minmax(0, 1fr)', gap: 'clamp(40px, 8vw, 80px)', alignItems: 'center', marginTop: '40px' }}>
          <div className="exp-text" style={{ fontSize: '18px', lineHeight: '1.7', color: 'rgba(246, 241, 235, 0.85)' }}>
            <p style={{ marginBottom: '24px' }}>Os lotes do Cerrado Mineiro já são disputados por compradores internacionais na Cup of Excellence. Agora, você pode levar esses mesmos cafés para a rotina da sua equipe ou clientes.</p>
            <p style={{ marginBottom: '24px' }}>Seja para escritórios no Brasil ou exportação (Europa, EUA, Ásia) de café torrado e em grãos verdes. Todos com rastreabilidade total, selo D.O. Cerrado Mineiro e suporte comercial dedicado.</p>
            <p style={{ marginBottom: '40px' }}>Atendemos desde fornecimento mensal para clínicas a partir de 10kg até envios internacionais complexos.</p>
            <a href="https://wa.me/5534998728882?text=Hello%21%20I%27m%20interested%20in%20importing%20COFCOF.CO%20specialty%20coffee." target="_blank" rel="noopener noreferrer" className="lnk exp-cta" style={{ fontFamily: 'var(--fl)', fontSize: '13px', letterSpacing: '0.15em', textTransform: 'uppercase', fontWeight: 700, color: 'var(--sand)', textDecoration: 'none', borderBottom: '1px solid rgba(246,241,235,0.3)', paddingBottom: '4px' }}>Falar com nosso time →</a>
          </div>
          <div className="exp-card" style={{ background: 'var(--sand)', color: 'var(--black)', padding: 'clamp(40px, 5vw, 64px)', border: '1px solid var(--rule)' }}>
            <h4 style={{ fontFamily: 'var(--fl)', fontSize: '20px', fontWeight: 800, textTransform: 'uppercase', marginBottom: '24px', paddingBottom: '24px', borderBottom: '1px solid var(--rule)' }}>Cenário de uso</h4>
            <p style={{ fontSize: '18px', lineHeight: '1.6', fontFamily: 'var(--fn)', fontWeight: 300 }}>"Para empresas que querem substituir o café comum por uma experiência mais premium em reuniões, recepção e na rotina diária da equipe."</p>
          </div>
        </div>
      </div>
    </section>
  );
}
