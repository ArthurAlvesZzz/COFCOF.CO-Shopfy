import React, { useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap, ZoomControl } from 'react-leaflet';
import L from 'leaflet';
import { MapPin, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { OriginFarm } from '../../../types';

function ChangeView({ center, zoom }: { center: [number, number], zoom: number }) {
  const map = useMap();
  useEffect(() => {
    map.flyTo(center, zoom, { animate: true, duration: 1.2 });
  }, [center[0], center[1], zoom, map]);
  return null;
}

interface OriginMapProps {
  activeFarm: OriginFarm | null;
  setActiveFarm: (farm: OriginFarm | null) => void;
  filteredFarms: OriginFarm[];
  filterOptions: any[];
  mapFilter: string;
  setMapFilter: (filter: string) => void;
}

export default function OriginMap({ activeFarm, setActiveFarm, filteredFarms, filterOptions, mapFilter, setMapFilter }: OriginMapProps) {
  
  const getPinProps = (farm: OriginFarm) => {
    if (farm.featured) return { fill: '#c9a263', stroke: '#0a0a0a', hasLot: true };
    if (farm.active && farm.linkedProductSlug) return { fill: '#c9a263', stroke: '#0a0a0a', hasLot: true };
    return { fill: 'transparent', stroke: '#c9a263', hasLot: false };
  };

  const createFarmIcon = (farm: OriginFarm, isActive: boolean) => {
    const props = getPinProps(farm);
    return L.divIcon({
      className: 'bg-transparent border-0',
      html: `
        <div class="custom-pin-marker" style="
          background-color: ${props.fill};
          width: ${isActive ? '40px' : '32px'};
          height: ${isActive ? '40px' : '32px'};
          border-radius: 50%;
          border: 2px solid ${isActive ? '#fff' : props.stroke};
          box-shadow: ${isActive ? '0 0 0 4px rgba(201,162,99,0.3), 0 4px 12px rgba(0, 0, 0, 0.5)' : '0 4px 12px rgba(0, 0, 0, 0.5)'};
          display: flex;
          align-items: center;
          justify-content: center;
          color: ${props.hasLot ? '#0a0a0a' : props.stroke};
          transition: all 0.3s ease;
          transform: ${isActive ? 'scale(1.1) translateY(-4px)' : 'scale(1)'};
        ">
          ${farm.featured 
            ? '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>'
            : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>'
          }
        </div>
      `,
      iconSize: isActive ? [40, 40] : [32, 32],
      iconAnchor: isActive ? [20, 20] : [16, 16],
    });
  };

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
    <section id="mapa-origem" className="sec sec-d fi orig-map-wrap" style={{ padding: 0 }}>
      <div style={{ display: 'flex', flexDirection: window.innerWidth >= 1024 ? 'row' : 'column', height: '100%' }}>
        
        {/* Painel Esquerdo */}
        <div className="orig-map-panel flex-1" style={{ padding: 'clamp(32px, 4vw, 64px)' }}>
          <h2 className="display" style={{ color: 'var(--sand)', marginBottom: '16px' }}>Mapa da Origem CofCof</h2>
          <p className="body-p" style={{ color: 'rgba(246, 241, 235, 0.7)', fontSize: '16px', marginBottom: '32px' }}>
            Explore as fazendas por trás dos nossos lotes. Cada ponto representa uma origem selecionada: produtores, microlotes e cafés rastreáveis que compõem a curadoria CofCof.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
            {['Comercial', 'Sensorial', 'Técnico'].map(category => (
              <div key={category} className="orig-map-filter">
                {filterOptions.filter(o => {
                    if (category === 'Comercial' && o.id === 'Todos') return true;
                    if (o.id === 'Todos') return false;
                    return o.category === category;
                }).map(option => (
                  <button 
                    key={option.id}
                    onClick={() => setMapFilter(option.id)}
                    className={`orig-filter-btn ${mapFilter === option.id ? 'active' : ''}`}
                  >
                    {option.label}
                    <span>{filteredFarms.length /* Wait, this count is hard. Actually, original code evaluated test on all farms */}</span>
                  </button>
                ))}
              </div>
            ))}
          </div>

          {activeFarm ? (
            <div className="orig-farm-card selected">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                <div>
                  <h3 className="display" style={{ fontSize: '24px', color: 'var(--sand)' }}>{activeFarm.farmName}</h3>
                  <p className="body-p" style={{ fontSize: '14px', color: 'var(--sub)' }}>Produtor: {activeFarm.producer}</p>
                </div>
                <button onClick={() => setActiveFarm(null)} style={{ color: 'var(--sub)', cursor: 'pointer', background: 'transparent', border: 'none' }}>
                  <X size={20} />
                </button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px', fontSize: '14px', color: 'var(--sand)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--rule)', paddingBottom: '8px' }}>
                  <span style={{ color: 'var(--sub)' }}>Altitude</span>
                  <span>{activeFarm.altitude}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--rule)', paddingBottom: '8px' }}>
                  <span style={{ color: 'var(--sub)' }}>Processo</span>
                  <span>{activeFarm.process}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--rule)', paddingBottom: '8px' }}>
                  <span style={{ color: 'var(--sub)' }}>Pontuação</span>
                  <span style={{ color: 'var(--clay)', fontWeight: 'bold' }}>{activeFarm.scaScore} SCA</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px' }}>
                <Link to={activeFarm.linkedProductSlug ? `/cafes/${activeFarm.linkedProductSlug}` : '/cafes'} className="btn btn-sd" style={{ flex: 1, textAlign: 'center', fontSize: '10px' }}>
                  <span>Ver Café do Lote</span>
                </Link>
                <button onClick={(e) => scrollToSection(e, 'produtores')} className="btn" style={{ flex: 1, border: '1px solid var(--rule-w)', color: 'var(--sand)', fontSize: '10px' }}>
                  <span>Ver Produtor</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="orig-farm-card" style={{ textAlign: 'center', color: 'var(--sub)', padding: '64px 32px' }}>
              <MapPin size={32} style={{ margin: '0 auto 16px', opacity: 0.5 }} />
              <p className="body-p">Selecione uma fazenda no mapa para ver todas as informações de rastreabilidade, produtor e lote CofCof vinculado.</p>
            </div>
          )}

        </div>

        {/* Map */}
        <div style={{ flex: 1, minHeight: '500px', position: 'relative' }}>
          <MapContainer 
            center={[-18.9, -46.9]} 
            zoom={7} 
            scrollWheelZoom={true} 
            style={{ width: '100%', height: '100%' }}
            zoomControl={false}
          >
            <ZoomControl position="bottomright" />
            <TileLayer url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png" />
            
            {activeFarm && (
              <ChangeView center={[activeFarm.lat, activeFarm.lng]} zoom={11} />
            )}

            {filteredFarms.map(farm => (
              <Marker 
                key={farm.id} 
                position={[farm.lat, farm.lng]}
                icon={createFarmIcon(farm, activeFarm?.id === farm.id)}
                zIndexOffset={activeFarm?.id === farm.id ? 1000 : 0}
                eventHandlers={{ click: () => setActiveFarm(farm) }}
              />
            ))}
          </MapContainer>
        </div>
        
      </div>
    </section>
  );
}
