import React from 'react';

export default function SubscriptionHowItWorks() {
  return (
    <section data-shopify-section="subscription-how-it-works" className="sec fi">
      <div className="bx">
        <div className="head">
          <div>
            <div className="eyebrow">Capítulo 01 — Como funciona</div>
            <h2 className="display" style={{ fontSize: 'clamp(2rem,5vw,4rem)', color: 'var(--black)', marginTop: '20px', maxWidth: '900px' }}>Café premiado não<br />deveria ser <span className="ital">complicado</span>.</h2>
          </div>
          <div className="label head-meta">03 passos · 07 dias</div>
        </div>
        <div className="steps">
          <div className="step fi">
            <div className="step-n">01</div>
            <h3 className="label" style={{ fontSize: '14px' }}>Escolha seu plano</h3>
            <p className="body-p">1kg, 2kg, 5kg ou 10kg+. Para casa, escritório ou empresa. Pause ou cancele quando quiser.</p>
          </div>
          <div className="step fi">
            <div className="step-n">02</div>
            <h3 className="label" style={{ fontSize: '14px' }}>Receba café fresco</h3>
            <p className="body-p">Torramos só depois do seu pedido. Máximo 7 dias da torra até a porta, em qualquer canto do Brasil.</p>
          </div>
          <div className="step fi">
            <div className="step-n">03</div>
            <h3 className="label" style={{ fontSize: '14px' }}>Rastreie a origem</h3>
            <p className="body-p">QR code oficial do Cerrado Mineiro. Produtor, fazenda, altitude e safra transparentes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
