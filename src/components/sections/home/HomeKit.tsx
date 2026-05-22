import React from 'react';
import { useNavigate } from 'react-router-dom';
import { mockProducts } from '../../../data/seed';

export default function HomeKit() {
  const navigate = useNavigate();
  const kitPrimeiraXicara = mockProducts.find(p => p.slug === 'kit-primeira-xicara') || mockProducts[0];

  return (
    <section className="sec sec-p fi">
      <div className="bx hm-kit">
        <div className="hm-kit-img">
          <img src={kitPrimeiraXicara.image} alt={kitPrimeiraXicara.name} />
        </div>
        <div className="hm-kit-txt">
          <div className="eyebrow" style={{ marginBottom: '24px' }}>Iniciantes no especial</div>
          <h2 className="display" style={{ color: 'var(--black)', marginBottom: '32px', fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}>
            Não sabe escolher?<br />Comece pelo <span className="ital">Kit</span>.
          </h2>
          <p className="body-p" style={{ fontSize: '18px', color: 'var(--sub)', maxWidth: '520px', marginBottom: '48px', lineHeight: '1.6' }}>
            Para quem quer sentir a diferença do café especial sem precisar entender de SCA, variedade ou processo. Uma introdução guiada ao universo CofCof.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '64px', color: 'var(--black)' }}>
            <div style={{ background: 'var(--black)', color: 'var(--sand)', padding: '20px 24px', borderRadius: '4px' }}>
              <div className="label" style={{ fontSize: '12px' }}>Menos amargor</div>
            </div>
            <div style={{ background: 'var(--black)', color: 'var(--sand)', padding: '20px 24px', borderRadius: '4px' }}>
              <div className="label" style={{ fontSize: '12px' }}>Doçura natural</div>
            </div>
            <div style={{ background: 'var(--black)', color: 'var(--sand)', padding: '20px 24px', borderRadius: '4px' }}>
              <div className="label" style={{ fontSize: '12px' }}>Origem rastreada</div>
            </div>
            <div style={{ background: 'var(--black)', color: 'var(--sand)', padding: '20px 24px', borderRadius: '4px' }}>
              <div className="label" style={{ fontSize: '12px' }}>Torra correta</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '32px', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/cafes/kit-primeira-xicara')} className="btn" style={{ background: 'var(--black)', color: 'var(--sand)', padding: '24px 56px', fontSize: '13px' }}>
              <span>Garantir meu kit →</span>
            </button>
            <div>
               <div className="eyebrow" style={{ color: 'var(--sub)', marginBottom: '8px' }}>Valor Especial</div>
               <div className="display" style={{ fontSize: '24px', color: 'var(--black)' }}>R$ {kitPrimeiraXicara.price.toFixed(2)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
