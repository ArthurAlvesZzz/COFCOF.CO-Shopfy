import React from 'react';
import { Link } from 'react-router-dom';
import { Mountain } from 'lucide-react';
import { OriginFarm } from '../../../types';

interface OriginProducersProps {
  farms: OriginFarm[];
  onSelectFarm: (farm: OriginFarm) => void;
}

export default function OriginProducers({ farms, onSelectFarm }: OriginProducersProps) {
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
    <section id="produtores" className="sec fi">
      <div className="bx">
        <h2 className="display" style={{ color: 'var(--black)', marginBottom: '48px' }}>
          Produtores por trás dos <span className="ital">lotes</span>.
        </h2>
        
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2px', background: 'var(--rule)', border: '1px solid var(--rule)' }}>
          {farms.filter(f => f.active).slice(0, 3).map(farm => (
            <div key={farm.id} style={{ display: 'flex', flexDirection: 'column', background: 'var(--sand)' }}>
              <div style={{ aspectRatio: '4/3', position: 'relative', overflow: 'hidden', background: 'var(--parch)' }}>
                {farm.producerImage || farm.image ? (
                  <img src={farm.producerImage || farm.image} alt={farm.producer} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                  <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Mountain size={64} style={{ opacity: 0.1 }} />
                  </div>
                )}
              </div>
              <div style={{ padding: '32px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <div className="label" style={{ marginBottom: '8px' }}>{farm.farmName}</div>
                <h3 className="display" style={{ fontSize: '24px', color: 'var(--black)', marginBottom: '8px' }}>{farm.producer}</h3>
                <p className="body-p" style={{ fontSize: '12px', color: 'var(--sub)', marginBottom: '24px' }}>{farm.city}, {farm.region}</p>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '32px', fontSize: '13px', borderTop: '1px solid var(--rule)', paddingTop: '24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--sub)' }}>Lote:</span>
                    <span style={{ color: 'var(--black)' }}>{farm.lotName}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span style={{ color: 'var(--sub)' }}>SCA:</span>
                    <span style={{ color: 'var(--clay)', fontWeight: 'bold' }}>{farm.scaScore || 'TBD'}</span>
                  </div>
                </div>
                
                <div style={{ marginTop: 'auto', display: 'flex', gap: '16px' }}>
                  <Link to={farm.linkedProductSlug ? `/cafes/${farm.linkedProductSlug}` : '/cafes'} className="btn btn-sd" style={{ flex: 1, padding: '16px', fontSize: '10px', textAlign: 'center' }}>
                    <span>Ver Café</span>
                  </Link>
                  <button onClick={(e) => {
                    onSelectFarm(farm);
                    scrollToSection(e, 'mapa-origem');
                  }} className="btn" style={{ flex: 1, border: '1px solid var(--rule)', color: 'var(--black)', padding: '16px', fontSize: '10px' }}>
                    <span>No Mapa</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
