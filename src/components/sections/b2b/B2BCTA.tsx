import React from 'react';

export default function B2BCTA() {
  return (
    <section data-shopify-section="b2b-cta" className="cta-end fi">
      <div className="bx cta-end-in">
        <div className="eyebrow" style={{ opacity: 0.8, color: 'var(--sand)' }}>Empresas a partir de 10kg</div>
        <h2 className="display" style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)', marginBottom: '24px' }}>Preço sob medida.<br />Atendimento <span className="ital">dedicado</span>.</h2>
        <p className="body-p" style={{ fontSize: 'clamp(18px, 1.5vw, 22px)', maxWidth: '640px', margin: '0 auto', color: 'rgba(246, 241, 235, 0.9)' }}>Respondemos em até 24h com uma proposta personalizada para sua operação.</p>
        <div style={{ marginTop: '48px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px' }}>
          <a href="https://wa.me/5534998728882?text=Ol%C3%A1!%20Tenho%20interesse%20no%20plano%20Empresas%20da%20COFCOF.CO." target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: '24px 48px', fontSize: '14px', background: 'var(--black)', color: 'var(--sand)' }}><span>Solicitar proposta B2B →</span></a>
          <p style={{ fontSize: '13px', color: 'rgba(246, 241, 235, 0.65)', fontFamily: 'var(--fn)', fontWeight: 300 }}>Sem compromisso · Pedido mínimo sob consulta · Atendimento comercial</p>
        </div>
      </div>
    </section>
  );
}
