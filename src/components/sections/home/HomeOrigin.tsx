import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomeOrigin() {
  const navigate = useNavigate();

  return (
    <section className="sec sec-d fi" style={{ paddingTop: 'clamp(64px, 8vw, 96px)', paddingBottom: 'clamp(64px, 8vw, 96px)' }}>
      <div className="bx">
        <div style={{ maxWidth: '1000px' }}>
          <div className="eyebrow" style={{ marginBottom: '24px' }}>
            <span style={{ border: '1px solid rgba(201,162,99,0.3)', color: 'var(--clay)', padding: '6px 16px', borderRadius: '40px', backgroundColor: 'rgba(201,162,99,0.05)' }}>Dossiê de Origem</span>
          </div>
          <h2 className="display" style={{ color: 'var(--sand)', fontSize: 'clamp(3rem, 6vw, 5rem)', marginBottom: '24px' }}>Do Cerrado Mineiro<br />para sua <span className="ital">xícara</span>.</h2>
          <p className="body-p" style={{ fontSize: '20px', color: 'rgba(246, 241, 235, 0.75)', maxWidth: '680px', lineHeight: '1.6' }}>
            Altitude ideal, clima seco na colheita e produtores premiados criam cafés mais doces, limpos e totalmente rastreáveis.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '2px', background: 'var(--rule-w)', border: '1px solid var(--rule-w)', marginTop: '56px', marginBottom: '56px' }}>
            <div style={{ background: 'var(--black)', padding: '32px' }}>
              <div className="label" style={{ color: 'var(--clay)', fontSize: '11px', marginBottom: '12px' }}>Altitude</div>
              <div style={{ fontFamily: 'var(--fl)', fontWeight: 800, color: 'var(--sand)', fontSize: '24px' }}>1.100m+</div>
            </div>
            <div style={{ background: 'var(--black)', padding: '32px' }}>
              <div className="label" style={{ color: 'var(--clay)', fontSize: '11px', marginBottom: '12px' }}>Variedade</div>
              <div style={{ fontFamily: 'var(--fl)', fontWeight: 800, color: 'var(--sand)', fontSize: '24px' }}>Catuaí 144</div>
            </div>
            <div style={{ background: 'var(--black)', padding: '32px' }}>
              <div className="label" style={{ color: 'var(--clay)', fontSize: '11px', marginBottom: '12px' }}>Processo</div>
              <div style={{ fontFamily: 'var(--fl)', fontWeight: 800, color: 'var(--sand)', fontSize: '24px' }}>Natural</div>
            </div>
            <div style={{ background: 'var(--black)', padding: '32px' }}>
              <div className="label" style={{ color: 'var(--clay)', fontSize: '11px', marginBottom: '12px' }}>Safra</div>
              <div style={{ fontFamily: 'var(--fl)', fontWeight: 800, color: 'var(--sand)', fontSize: '24px' }}>Fresco</div>
            </div>
            <div style={{ background: 'var(--black)', padding: '32px' }}>
              <div className="label" style={{ color: 'var(--clay)', fontSize: '11px', marginBottom: '12px' }}>Pontuação</div>
              <div style={{ fontFamily: 'var(--fl)', fontWeight: 800, color: 'var(--sand)', fontSize: '24px' }}>86+ SCA</div>
            </div>
          </div>

          <button onClick={() => navigate('/origem')} className="btn btn-sd" style={{ fontSize: '13px', padding: '24px 56px' }}>
            <span>Descobrir a origem →</span>
          </button>
        </div>
      </div>
    </section>
  );
}
