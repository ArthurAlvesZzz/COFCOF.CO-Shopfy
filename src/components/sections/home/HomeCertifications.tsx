import React from 'react';
import { Award, Star, MapPin, CheckCircle2, Flame, QrCode } from 'lucide-react';

export default function HomeCertifications() {
  return (
    <section className="sec fi" style={{ paddingTop: 'clamp(64px, 8vw, 96px)', paddingBottom: 'clamp(64px, 8vw, 96px)' }}>
      <div className="bx">
        <div className="head" style={{ marginBottom: '56px', textAlign: 'center', justifyContent: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="eyebrow" style={{ marginBottom: '24px' }}>Reconhecimentos oficiais</div>
            <h2 className="display" style={{ color: 'var(--black)', fontSize: 'clamp(2.5rem, 4vw, 3.4rem)' }}>A confiança é<br /><span className="ital">verificada</span>.</h2>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2px', background: 'var(--rule)', border: '1px solid var(--rule)' }}>
          <div style={{ background: 'var(--sand)', padding: 'clamp(40px, 5vw, 56px)' }} className="fi">
            <Award size={32} style={{ color: 'var(--clay)', marginBottom: '32px' }} />
            <div className="label" style={{ marginBottom: '16px', fontSize: '15px' }}>Cup of Excellence</div>
            <p className="body-p" style={{ fontSize: '16px', color: 'var(--txt)' }}>Excelência para cafés de qualidade excepcional.</p>
          </div>
          <div style={{ background: 'var(--sand)', padding: 'clamp(40px, 5vw, 56px)' }} className="fi">
            <Star size={32} style={{ color: 'var(--clay)', marginBottom: '32px' }} />
            <div className="label" style={{ marginBottom: '16px', fontSize: '15px' }}>Pontuação 86+ SCA</div>
            <p className="body-p" style={{ fontSize: '16px', color: 'var(--txt)' }}>Metodologia internacional de cafés especiais.</p>
          </div>
          <div style={{ background: 'var(--sand)', padding: 'clamp(40px, 5vw, 56px)' }} className="fi">
            <MapPin size={32} style={{ color: 'var(--clay)', marginBottom: '32px' }} />
            <div className="label" style={{ marginBottom: '16px', fontSize: '15px' }}>Cerrado Mineiro D.O.</div>
            <p className="body-p" style={{ fontSize: '16px', color: 'var(--txt)' }}>Origem protegida pelo terroir reconhecido.</p>
          </div>
          <div style={{ background: 'var(--sand)', padding: 'clamp(40px, 5vw, 56px)' }} className="fi">
            <CheckCircle2 size={32} style={{ color: 'var(--clay)', marginBottom: '32px' }} />
            <div className="label" style={{ marginBottom: '16px', fontSize: '15px' }}>Q-Grader Oficial</div>
            <p className="body-p" style={{ fontSize: '16px', color: 'var(--txt)' }}>Avaliação sensorial feita por especialista global.</p>
          </div>
          <div style={{ background: 'var(--sand)', padding: 'clamp(40px, 5vw, 56px)' }} className="fi">
            <Flame size={32} style={{ color: 'var(--clay)', marginBottom: '32px' }} />
            <div className="label" style={{ marginBottom: '16px', fontSize: '15px' }}>Torra Sob Demanda</div>
            <p className="body-p" style={{ fontSize: '16px', color: 'var(--txt)' }}>Pequenos lotes torrados para máxima frescura e controle.</p>
          </div>
          <div style={{ background: 'var(--sand)', padding: 'clamp(40px, 5vw, 56px)' }} className="fi">
            <QrCode size={32} style={{ color: 'var(--clay)', marginBottom: '32px' }} />
            <div className="label" style={{ marginBottom: '16px', fontSize: '15px' }}>Rastreabilidade de Origem</div>
            <p className="body-p" style={{ fontSize: '16px', color: 'var(--txt)' }}>Fazenda, processo e perfil sensorial com transparência total.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
