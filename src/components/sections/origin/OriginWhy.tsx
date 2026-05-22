import React from 'react';
import { Mountain, Sun, Sprout, Coffee } from 'lucide-react';

export default function OriginWhy() {
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
    <section className="sec fi">
      <div className="bx">
        <div className="head" style={{ marginBottom: '64px', textAlign: 'center', justifyContent: 'center' }}>
          <div style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="eyebrow" style={{ marginBottom: '24px', justifyContent: 'center' }}>Por que o Cerrado?</div>
            <h2 className="display" style={{ color: 'var(--black)' }}>O que a origem muda<br/>no <span className="ital">sabor</span>?</h2>
            <p className="body-p" style={{ marginTop: '24px', fontSize: '16px', color: 'var(--sub)' }}>
              Origem não é cenário. É o que explica o sabor, a rastreabilidade e o valor de cada lote. Entenda como o terroir se prova na xícara.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2px', background: 'var(--rule)', border: '1px solid var(--rule)', marginBottom: '48px' }}>
          <div style={{ background: 'var(--sand)', padding: '40px' }} className="fi">
            <Mountain size={24} style={{ color: 'var(--clay)', marginBottom: '24px' }} />
            <h4 className="display" style={{ fontSize: '24px', color: 'var(--black)', marginBottom: '12px' }}>Altitude</h4>
            <div className="label" style={{ marginBottom: '24px', fontSize: '10px' }}>Maturação Lenta</div>
            <p className="body-p" style={{ fontSize: '14px', color: 'var(--sub)' }}>Cafés cultivados em altitude tendem a desenvolver doçura e camadas aromáticas mais ricas e complexas.</p>
          </div>
          <div style={{ background: 'var(--sand)', padding: '40px' }} className="fi">
            <Sun size={24} style={{ color: 'var(--clay)', marginBottom: '24px' }} />
            <h4 className="display" style={{ fontSize: '24px', color: 'var(--black)', marginBottom: '12px' }}>Estações</h4>
            <div className="label" style={{ marginBottom: '24px', fontSize: '10px' }}>Inverno seco</div>
            <p className="body-p" style={{ fontSize: '14px', color: 'var(--sub)' }}>O clima definido ajuda na secagem e na consistência do lote, garantindo uma xícara puríssima e limpa.</p>
          </div>
          <div style={{ background: 'var(--sand)', padding: '40px' }} className="fi">
            <Sprout size={24} style={{ color: 'var(--clay)', marginBottom: '24px' }} />
            <h4 className="display" style={{ fontSize: '24px', color: 'var(--black)', marginBottom: '12px' }}>Solo</h4>
            <div className="label" style={{ marginBottom: '24px', fontSize: '10px' }}>Basalto</div>
            <p className="body-p" style={{ fontSize: '14px', color: 'var(--sub)' }}>Solo mineral contribui para corpo, equilíbrio, doçura e perfil sensorial mais marcante.</p>
          </div>
          <div style={{ background: 'var(--sand)', padding: '40px' }} className="fi">
            <Coffee size={24} style={{ color: 'var(--clay)', marginBottom: '24px' }} />
            <h4 className="display" style={{ fontSize: '24px', color: 'var(--black)', marginBottom: '12px' }}>Processos</h4>
            <div className="label" style={{ marginBottom: '24px', fontSize: '10px' }}>Natural & Fermentados</div>
            <p className="body-p" style={{ fontSize: '14px', color: 'var(--sub)' }}>O processo muda panorama aromático, doçura, acidez e finalização da bebida.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center' }}>
          <button onClick={(e) => scrollToSection(e, 'mapa-origem')} className="btn btn-sd" style={{ fontSize: '11px', padding: '16px 32px' }}>
            <span>Explorar origens no mapa →</span>
          </button>
        </div>
      </div>
    </section>
  );
}
