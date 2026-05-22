import React from 'react';

export default function SubscriptionCTA() {
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
    <section data-shopify-section="subscription-cta" id="assinar" className="cta fi">
      <div className="cta-grain"></div>
      <div className="bx cta-in">
        <div className="eyebrow">Última chamada</div>
        <h2 className="display">Cada dia sem assinar<br />é um dia de café <span className="ital">ruim</span>.</h2>
        <a href="#planos" onClick={(e) => handleScroll(e, 'planos')} className="btn btn-ds"><span>Começar assinatura →</span></a>
        <p className="cta-disc">Cancele quando quiser · Pause a qualquer momento · Garantia legal de 7 dias</p>
      </div>
    </section>
  );
}
