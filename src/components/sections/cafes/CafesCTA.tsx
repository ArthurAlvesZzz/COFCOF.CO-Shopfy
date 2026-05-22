import React from 'react';
import { Link } from 'react-router-dom';

export default function CafesCTA() {
  return (
    <section data-shopify-section="cafes-cta" className="cta-end fi">
      <div className="cta-end-grain"></div>
      <div className="bx cta-end-in">
        <div className="eyebrow">Assinatura</div>
        <h2 className="display">Esses cafés não ficam<br />em <span className="ital">prateleira</span>.</h2>
        <p className="body-p">A cada mês, um microlote — torrado na semana do envio, com carta do produtor e QR de rastreio. A partir de R$ 179,90 / mês.</p>
        <Link to="/assinaturas#planos" className="btn btn-ds"><span>Ver planos de assinatura →</span></Link>
      </div>
    </section>
  );
}
