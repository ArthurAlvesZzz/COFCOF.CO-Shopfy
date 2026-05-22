import React from 'react';

export default function SubscriptionManifesto() {
  return (
    <section data-shopify-section="subscription-manifesto" id="sobre" className="mfst fi">
      <div className="bx" style={{ position: 'relative', zIndex: 1 }}>
        <div className="mfst-30">30%</div>
        <div className="eyebrow" style={{ marginBottom: '28px' }}>Capítulo 05 — Por que existimos</div>
        <h2 className="display mfst-h" style={{ fontSize: 'clamp(2rem,5.5vw,4.8rem)', color: 'var(--black)' }}>Até <span style={{ color: 'var(--clay)' }}>30%</span> do café<br />brasileiro é <span className="ital">adulterado</span>.<br />A gente achou inaceitável.</h2>
        <div className="mfst-cols">
          <div className="mfst-col fi">
            <div className="eyebrow">O problema</div>
            <p>A Operação Valoriza (MAPA, 2024) revelou marcas adulteradas com cascas, milho e cevada. Em alguns lotes, ocratoxina A — micotoxina cancerígena. O consumidor paga preço de café, bebe outra coisa.</p>
          </div>
          <div className="mfst-col fi">
            <div className="eyebrow">A resposta</div>
            <p>Selecionamos 8 produtores do Cerrado Mineiro — todos com Cup of Excellence e Denominação de Origem. Cada lote tem QR code oficial. Torra no máximo 7 dias antes do envio.</p>
          </div>
          <div className="mfst-col fi">
            <div className="eyebrow">O resultado</div>
            <p>Pontuação SCA internacional, produtor identificado, fazenda mapeada, altitude e safra transparentes. Premium de verdade — e ainda mais barato que muitos cafés de boutique.</p>
          </div>
        </div>
        <div className="mfst-cite fi">
          <p>"Operação Valoriza — Ministério da Agricultura e Pecuária, Minas Gerais. Relatório público sobre adulteração de cafés torrados e moídos no mercado brasileiro, 2024."</p>
          <a href="https://www.gov.br/agricultura/pt-br" target="_blank" rel="noopener noreferrer" className="lnk label" style={{ color: 'var(--black)' }}>Sobre o MAPA →</a>
        </div>
      </div>
    </section>
  );
}
