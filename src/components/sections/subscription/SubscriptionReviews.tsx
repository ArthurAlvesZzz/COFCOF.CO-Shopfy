import React from 'react';

export default function SubscriptionReviews() {
  return (
    <section data-shopify-section="subscription-reviews" className="sec sec-p fi">
      <div className="bx">
        <div className="rv-head"><span className="eyebrow">Capítulo 06 · Quem já assina</span></div>
        <div className="rv-grid">
          <figure className="rv fi"><div className="rv-q">"</div>
            <blockquote>A diferença pro café do mercado é absurda. Desde a primeira xícara.</blockquote>
            <figcaption><div className="rv-aut">M. Oliveira</div>
              <div className="rv-loc">São Paulo · SP · Plano Clássico</div></figcaption>
          </figure>
          <figure className="rv fi"><div className="rv-q">"</div>
            <blockquote>Finalmente um brasileiro com a qualidade que eu só achava em importado.</blockquote>
            <figcaption><div className="rv-aut">R. Nogueira</div>
              <div className="rv-loc">Belo Horizonte · MG · Plano Família</div></figcaption>
          </figure>
          <figure className="rv fi"><div className="rv-q">"</div>
            <blockquote>A rastreabilidade é um diferencial enorme. Saber de qual fazenda vem.</blockquote>
            <figcaption><div className="rv-aut">C. Mendes</div>
              <div className="rv-loc">Porto Alegre · RS · Plano Essencial</div></figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
