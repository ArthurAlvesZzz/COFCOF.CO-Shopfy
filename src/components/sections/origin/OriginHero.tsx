import React from 'react';
import { Award, MapPin, Mountain, QrCode, Flame } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ContentBlock } from '../../../types/admin';

export default function OriginHero({ content }: { content: Record<string, Partial<ContentBlock>> }) {
  const scrollToSection = (e: React.MouseEvent<HTMLElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // navbar height
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section className="pg-hero fi v" style={{ minHeight: '70vh', display: 'flex', alignItems: 'center' }}>
      <div className="pg-hero-grid"></div>
      <div className="pg-hero-spot"></div>
      <div className="bx pg-hero-in" style={{ textAlign: 'center' }}>
        <div className="eyebrow" style={{ marginBottom: '24px', justifyContent: 'center' }}>
          <span style={{ border: '1px solid rgba(201,162,99,0.3)', color: 'var(--clay)', padding: '6px 16px', borderRadius: '40px', backgroundColor: 'rgba(201,162,99,0.05)' }}>Origem · Cerrado Mineiro · Rastreabilidade</span>
        </div>
        
        <h1 className="display" style={{ maxWidth: '1000px', color: 'var(--sand)', lineHeight: '1.05', margin: '0 auto' }}>
          A origem que assina <span className="ital" style={{ color: 'var(--clay)' }}>cada café</span> CofCof.
        </h1>
        <p className="body-p" style={{ fontSize: 'clamp(16px, 1.5vw, 20px)', maxWidth: '680px', color: 'rgba(246, 241, 235, 0.7)', margin: '24px auto 0' }}>
          Do Cerrado Mineiro à sua xícara. Você sabe exatamente o que está bebendo — e por que aquela xícara tem aquele sabor.
        </p>

        <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '24px', color: 'var(--clay)', justifyContent: 'center', fontFamily: 'var(--fl)', fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 800 }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><MapPin size={14} /> Cerrado Mineiro D.O.</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Award size={14} /> 86+ SCA</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Mountain size={14} /> Cup of Excellence</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><QrCode size={14} /> QR por lote</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Flame size={14} /> Torra sob demanda</span>
        </div>

        <div className="pg-hero-cta" style={{ justifyContent: 'center', marginTop: '48px' }}>
          <button onClick={(e) => scrollToSection(e, 'mapa-origem')} className="btn" style={{ background: 'var(--rule)', color: 'var(--sand)', fontSize: '12px', padding: '20px 42px' }}>
            <span>Explorar mapa da origem</span>
          </button>
          <Link to="/cafes" className="btn btn-sd" style={{ fontSize: '12px', padding: '20px 42px' }}>
            <span>Comprar cafés do Cerrado →</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
