import React from 'react';

export default function B2BHowItWorks() {
  return (
    <section data-shopify-section="b2b-how-it-works" className="sec sec-d fi">
      <div className="bx">
        <div className="head">
          <div>
            <div className="eyebrow">Capítulo 02 — Como funciona</div>
            <h2 className="display" style={{ color: 'var(--sand)' }}>Simples. Sem burocracia.<br />Café de <span className="ital">verdade</span>.</h2>
          </div>
          <div className="label head-meta">03 passos</div>
        </div>
        <div className="steps" style={{ gap: 'clamp(32px, 6vw, 72px)', alignItems: 'stretch' }}>
          <div className="step fi" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="step-n" style={{ opacity: 0.6 }}>01</div>
            <h3 style={{ fontSize: 'clamp(20px, 2vw, 24px)', marginBottom: '16px' }}>Conte sobre sua operação</h3>
            <p style={{ fontSize: '16px', color: 'rgba(246, 241, 235, 0.7)' }}>Segmento, cidade, volume e objetivo.</p>
          </div>
          <div className="step fi" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="step-n" style={{ opacity: 0.6 }}>02</div>
            <h3 style={{ fontSize: 'clamp(20px, 2vw, 24px)', marginBottom: '16px' }}>Receba proposta sob medida</h3>
            <p style={{ fontSize: '16px', color: 'rgba(246, 241, 235, 0.7)' }}>Preço por kg, frequência, lote ideal e condições.</p>
          </div>
          <div className="step fi" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="step-n" style={{ opacity: 0.6 }}>03</div>
            <h3 style={{ fontSize: 'clamp(20px, 2vw, 24px)', marginBottom: '16px' }}>Entrega recorrente</h3>
            <p style={{ fontSize: '16px', color: 'rgba(246, 241, 235, 0.7)' }}>Café torrado sob demanda, nota fiscal e suporte.</p>
          </div>
        </div>
        <div className="fi" style={{ marginTop: 'clamp(56px, 8vh, 88px)', textAlign: 'center' }}>
          <p style={{ fontFamily: 'var(--fl)', fontSize: '14px', letterSpacing: '0.04em', color: 'var(--sand)', marginBottom: '24px' }}>Quer estimar o volume ideal para sua empresa?</p>
          <a href="https://wa.me/5534998728882?text=Ol%C3%A1!%20Gostaria%20de%20estimar%20o%20volume%20para%20minha%20empresa." target="_blank" rel="noopener noreferrer" className="btn btn-sd" style={{ padding: '20px 42px', fontSize: '13px' }}><span>Solicitar proposta B2B →</span></a>
        </div>
      </div>
    </section>
  );
}
