import React from 'react';
import { useNavigate } from 'react-router-dom';
import { media } from '../../../config/media';

export default function HomeB2B() {
  const navigate = useNavigate();

  return (
    <section className="sec sec-d fi">
      <div className="bx hm-kit">
        <div className="hm-kit-img">
          <img src={media.images.home.b2bBackground} alt="Café Corporativo" style={{ backgroundColor: 'var(--black)' }} />
        </div>
        <div className="hm-kit-txt">
          <div className="eyebrow" style={{ marginBottom: '24px' }}>CofCof Empresas</div>
          <h2 className="display" style={{ color: 'var(--sand)', marginBottom: '32px', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            O cuidado antes da primeira <span className="ital">reunião</span>.
          </h2>
          <p className="body-p" style={{ fontSize: '18px', color: 'rgba(246, 241, 235, 0.75)', maxWidth: '520px', marginBottom: '48px', lineHeight: '1.6' }}>
            Para clínicas, escritórios, hotéis, restaurantes e empresas que entendem que o café servido diz muito sobre a marca.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '64px', color: 'var(--black)' }}>
            <div style={{ background: 'var(--sand)', padding: '20px 24px', borderRadius: '4px' }}>
              <div className="label" style={{ fontSize: '12px' }}>Preço corporativo</div>
            </div>
            <div style={{ background: 'var(--sand)', padding: '20px 24px', borderRadius: '4px' }}>
              <div className="label" style={{ fontSize: '12px' }}>10kg+ / mês</div>
            </div>
            <div style={{ background: 'var(--sand)', padding: '20px 24px', borderRadius: '4px' }}>
              <div className="label" style={{ fontSize: '12px' }}>NFC-e automática</div>
            </div>
            <div style={{ background: 'var(--sand)', padding: '20px 24px', borderRadius: '4px' }}>
              <div className="label" style={{ fontSize: '12px' }}>Atendimento focado</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/para-empresas')} className="btn btn-sd" style={{ padding: '24px 56px', fontSize: '13px' }}>
              <span>Solicitar proposta B2B →</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
