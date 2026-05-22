import React from 'react';

export default function B2BNumbers() {
  return (
    <section data-shopify-section="b2b-numbers" className="sec sec-d fi">
      <div className="bx">
        <div className="head" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <div>
            <div className="eyebrow">Por que empresas escolhem</div>
            <h2 className="display" style={{ color: 'var(--sand)' }}>Os números da <span className="ital">COFCOF.CO</span>.</h2>
          </div>
        </div>
        <div className="num-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '24px', marginTop: '64px' }}>
          <div className="num-i" style={{ background: 'var(--black)', padding: '40px 24px', textAlign: 'center', border: '1px solid rgba(246, 241, 235, 0.1)' }}>
            <div className="num-v" style={{ fontSize: 'clamp(56px, 6vw, 80px)', color: 'var(--sand)', lineHeight: '1', marginBottom: '16px' }}>86+</div>
            <div className="num-l" style={{ fontSize: '16px', color: 'rgba(246, 241, 235, 0.6)' }}>Pontos SCA mín.</div>
          </div>
          <div className="num-i" style={{ background: 'var(--black)', padding: '40px 24px', textAlign: 'center', border: '1px solid rgba(246, 241, 235, 0.1)' }}>
            <div className="num-v" style={{ fontSize: 'clamp(56px, 6vw, 80px)', color: 'var(--sand)', lineHeight: '1', marginBottom: '16px' }}>COE</div>
            <div className="num-l" style={{ fontSize: '16px', color: 'rgba(246, 241, 235, 0.6)' }}>Cup of Excellence</div>
          </div>
          <div className="num-i" style={{ background: 'var(--black)', padding: '40px 24px', textAlign: 'center', border: '1px solid rgba(246, 241, 235, 0.1)' }}>
            <div className="num-v" style={{ fontSize: 'clamp(56px, 6vw, 80px)', color: 'var(--sand)', lineHeight: '1', marginBottom: '16px' }}>8</div>
            <div className="num-l" style={{ fontSize: '16px', color: 'rgba(246, 241, 235, 0.6)' }}>Lotes em rotação</div>
          </div>
          <div className="num-i" style={{ background: 'var(--black)', padding: '40px 24px', textAlign: 'center', border: '1px solid rgba(246, 241, 235, 0.1)' }}>
            <div className="num-v" style={{ fontSize: 'clamp(56px, 6vw, 80px)', color: 'var(--sand)', lineHeight: '1', marginBottom: '16px' }}>7d</div>
            <div className="num-l" style={{ fontSize: '16px', color: 'rgba(246, 241, 235, 0.6)' }}>Torra sob demanda</div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: '80px' }}>
          <p style={{ fontSize: '18px', color: 'rgba(246, 241, 235, 0.8)', marginBottom: '24px' }}>Quer montar uma proposta para sua operação?</p>
          <a href="https://wa.me/5534998728882?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20plano%20Empresas%20da%20COFCOF.CO." target="_blank" rel="noopener noreferrer" className="btn btn-sd" style={{ padding: '22px 48px', fontSize: '14px' }}><span>Falar com comercial →</span></a>
        </div>
      </div>
    </section>
  );
}
