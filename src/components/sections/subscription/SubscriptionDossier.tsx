import React from 'react';

export default function SubscriptionDossier() {
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
    <section data-shopify-section="subscription-dossier" className="sec sec-p fi">
      <div className="bx">
        <div className="eyebrow">Dossiê — Ficha de degustação</div>
        <h2 className="display" style={{ fontSize: 'clamp(1.8rem,4.5vw,3.2rem)', color: 'var(--black)', marginTop: '20px', maxWidth: '900px' }}>O que você está<br /><span className="ital">provando</span>.</h2>
        <p className="body-p" style={{ fontSize: '14px', color: 'var(--sub)', marginTop: '20px', maxWidth: '520px' }}>Cada lote passa por prova às cegas com Q-Graders certificados. Um exemplo real — Wagner Crivelenti Ferrero, lote de abertura da edição.</p>
        <div className="ts">
          <div className="ts-card fi">
            <div className="ts-card-head">
              <div className="eyebrow">Lote N° 01 · Safra 25</div>
              <div style={{ textAlign: 'right' }}>
                <div className="eyebrow" style={{ marginBottom: '4px' }}>SCA</div>
                <div className="ts-score">88.5</div>
              </div>
            </div>
            <div className="ts-name">Wagner Crivelenti<br />Ferrero</div>
            <div className="ts-meta">
              <div>
                <div className="eyebrow">Variedade</div>
                <div className="label">Paraíso MG H 419-1</div>
              </div>
              <div>
                <div className="eyebrow">Processo</div>
                <div className="label">Natural</div>
              </div>
              <div>
                <div className="eyebrow">Altitude</div>
                <div className="label">1180m</div>
              </div>
              <div>
                <div className="eyebrow">Fazenda</div>
                <div className="label">Fazenda Pinheiro</div>
              </div>
              <div>
                <div className="eyebrow">Origem</div>
                <div className="label">Patrocínio · MG</div>
              </div>
              <div>
                <div className="eyebrow">Safra</div>
                <div className="label">2025</div>
              </div>
            </div>
            <div className="ts-notes">
              <div className="eyebrow">Notas sensoriais</div>
              <p className="body-p" style={{ fontSize: '15px' }}>Floral · Mel · Mascavo · Final doce e limpo</p>
            </div>
          </div>
          <div>
            <div className="eyebrow" style={{ marginBottom: '32px' }}>Perfil sensorial</div>
            <div className="ts-bars">
              <div className="fi">
                <div className="ts-bar-head">
                  <span className="label">Doçura</span><span className="label v">88/100</span>
                </div>
                <div className="ts-bar-track"><div className="ts-bar-fill" style={{ '--w': '.88', width: '88%' } as React.CSSProperties}></div></div>
              </div>
              <div className="fi">
                <div className="ts-bar-head">
                  <span className="label">Acidez</span><span className="label v">74/100</span>
                </div>
                <div className="ts-bar-track"><div className="ts-bar-fill" style={{ '--w': '.74', width: '74%' } as React.CSSProperties}></div></div>
              </div>
              <div className="fi">
                <div className="ts-bar-head">
                  <span className="label">Corpo</span><span className="label v">82/100</span>
                </div>
                <div className="ts-bar-track"><div className="ts-bar-fill" style={{ '--w': '.82', width: '82%' } as React.CSSProperties}></div></div>
              </div>
              <div className="fi">
                <div className="ts-bar-head">
                  <span className="label">Aroma</span><span className="label v">91/100</span>
                </div>
                <div className="ts-bar-track"><div className="ts-bar-fill" style={{ '--w': '.91', width: '91%' } as React.CSSProperties}></div></div>
              </div>
              <div className="fi">
                <div className="ts-bar-head">
                  <span className="label">Finalização</span><span className="label v">85/100</span>
                </div>
                <div className="ts-bar-track"><div className="ts-bar-fill" style={{ '--w': '.85', width: '85%' } as React.CSSProperties}></div></div>
              </div>
            </div>
            <div className="ts-cite"><p>Avaliação conforme <span className="label">Specialty Coffee Association (SCA) · Cup of Excellence · Q-Grader ref. AB217</span></p></div>
            <a href="#planos" onClick={(e) => handleScroll(e, 'planos')} className="btn btn-ds" style={{ marginTop: '32px', fontSize: '11px', padding: '16px 28px', letterSpacing: '.22em' }}><span>Provar esse café →</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}
