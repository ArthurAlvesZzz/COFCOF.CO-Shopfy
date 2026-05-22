import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { Mountain, Award, Flame, QrCode, ChevronRight, CheckCircle2 } from 'lucide-react';
import { publicContentService } from '../services/publicContentService';
import { mockOriginFarms, mockProducts } from '../data/seed';
import { OriginFarm } from '../types';

import '../origin.css';

import OriginHero from '../components/sections/origin/OriginHero';
import OriginWhy from '../components/sections/origin/OriginWhy';
import OriginMap from '../components/sections/origin/OriginMap';
import OriginProducers from '../components/sections/origin/OriginProducers';

export default function Origin() {
  const [content, setContent] = useState<any>({});
  const [activeFarm, setActiveFarm] = useState<OriginFarm | null>(null);
  const [mapFilter, setMapFilter] = useState('Todos');

  const filterOptionsRaw = [
    { id: 'Todos', label: 'Todos', test: (f: OriginFarm) => true, category: 'Técnico' },
    { id: '86+ SCA', label: '86+ SCA', test: (f: OriginFarm) => (f.scaScore || 0) >= 86, category: 'Técnico' },
    { id: 'Natural', label: 'Natural', test: (f: OriginFarm) => f.process.toLowerCase().includes('natural'), category: 'Técnico' },
    { id: 'Fermentado', label: 'Fermentado', test: (f: OriginFarm) => f.process.toLowerCase().includes('fermentado'), category: 'Técnico' },
    { id: 'Honey', label: 'Honey', test: (f: OriginFarm) => f.process.toLowerCase().includes('honey'), category: 'Técnico' },
    { id: 'Cup of Excellence', label: 'Cup of Excellence', test: (f: OriginFarm) => f.featured || (f.scaScore || 0) >= 88, category: 'Técnico' },
    { id: 'Mais doce', label: 'Mais doce', test: (f: OriginFarm) => f.sensoryNotes.toLowerCase().includes('caramelo') || f.sensoryNotes.toLowerCase().includes('doce') || f.sensoryNotes.toLowerCase().includes('chocolate') || f.sensoryNotes.toLowerCase().includes('melaço'), category: 'Sensorial' },
    { id: 'Mais floral', label: 'Mais floral', test: (f: OriginFarm) => f.sensoryNotes.toLowerCase().includes('floral') || f.sensoryNotes.toLowerCase().includes('jasmim') || f.sensoryNotes.toLowerCase().includes('chá'), category: 'Sensorial' },
    { id: 'Mais frutado', label: 'Mais frutado', test: (f: OriginFarm) => f.sensoryNotes.toLowerCase().includes('fruta') || f.sensoryNotes.toLowerCase().includes('morango') || f.sensoryNotes.toLowerCase().includes('pêssego') || f.sensoryNotes.toLowerCase().includes('licor'), category: 'Sensorial' },
    { id: 'Disponível agora', label: 'Disponível agora', test: (f: OriginFarm) => f.active && !!f.linkedProductSlug, category: 'Comercial' },
  ];

  const filterOptions = filterOptionsRaw.map(opt => ({
    ...opt,
    count: mockOriginFarms.filter(opt.test).length
  }));

  const filteredFarms = mockOriginFarms.filter(farm => {
    const opt = filterOptionsRaw.find(o => o.id === mapFilter);
    return opt ? opt.test(farm) : true;
  });

  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (filteredFarms.length === 1) {
      if (activeFarm?.id !== filteredFarms[0].id) {
        setActiveFarm(filteredFarms[0]);
      }
    } else if (filteredFarms.length > 0 && (!activeFarm || !filteredFarms.find(f => f.id === activeFarm.id))) {
      const defaultFarm = filteredFarms.find(f => f.featured) || filteredFarms.find(f => f.active) || filteredFarms[0];
      setActiveFarm(defaultFarm);
    } else if (filteredFarms.length === 0) {
      setActiveFarm(null);
    }
  }, [mapFilter]);

  useEffect(() => {
    const farmId = searchParams.get('farmId');
    const filterFromUrl = searchParams.get('originFilter');
    const focusMap = searchParams.get('focusMap');

    window.scrollTo(0, 0);
    document.title = "Origem | CofCof.co";

    if (filterFromUrl && filterOptionsRaw.some(o => o.id === filterFromUrl)) {
      setMapFilter(filterFromUrl);
    }

    if (farmId) {
      const farmTarget = mockOriginFarms.find(f => f.id === farmId);
      if (farmTarget) {
        setActiveFarm(farmTarget);
        if (focusMap === '1' || window.location.hash.includes('mapa-origem')) {
          setTimeout(() => {
            const el = document.getElementById('mapa-origem');
            if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
          }, 500);
        }
      }
    } else if (!activeFarm && filteredFarms.length > 0) {
      const defaultFarm = filteredFarms.find(f => f.featured) || filteredFarms.find(f => f.active) || filteredFarms[0];
      setActiveFarm(defaultFarm);
    }

    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: 'smooth' });
      }, 500);
    }

    const fetchContent = async () => {
      const blocks = await publicContentService.getPageContent('origem');
      const contentMap: any = {};
      blocks.forEach(b => { contentMap[b.key] = b; });
      setContent(contentMap);
    };
    fetchContent();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('v');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );
    const elements = document.querySelectorAll('.fi');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <OriginHero content={content} />
      <OriginWhy />
      
      <OriginMap 
        activeFarm={activeFarm} 
        setActiveFarm={setActiveFarm} 
        filteredFarms={filteredFarms} 
        filterOptions={filterOptions} 
        mapFilter={mapFilter} 
        setMapFilter={setMapFilter} 
      />

      <OriginProducers farms={mockOriginFarms} onSelectFarm={setActiveFarm} />

      {/* 6. TIMELINE */}
      <section className="sec sec-d fi">
        <div className="bx">
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 className="display" style={{ color: 'var(--sand)' }}>Da origem até você</h2>
            <p className="body-p" style={{ fontSize: '18px', color: 'rgba(246, 241, 235, 0.7)', maxWidth: '600px', margin: '24px auto 0' }}>
              Uma cadeia curta, rastreável e focada em preservar a qualidade e o frescor de cada gota.
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '32px', textAlign: 'center' }}>
            <div>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--black)', border: '1px solid var(--rule-w)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--clay)' }}>
                <Mountain size={32} />
              </div>
              <h4 className="display" style={{ fontSize: '20px', color: 'var(--sand)', marginBottom: '8px' }}>1. Fazenda</h4>
              <p className="body-p" style={{ fontSize: '12px', color: 'rgba(246, 241, 235, 0.6)' }}>Seleção de produtores focados em microlotes e manejo cuidadoso.</p>
            </div>
            <div>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--black)', border: '1px solid var(--rule-w)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--clay)' }}>
                <Award size={32} />
              </div>
              <h4 className="display" style={{ fontSize: '20px', color: 'var(--sand)', marginBottom: '8px' }}>2. Avaliação</h4>
              <p className="body-p" style={{ fontSize: '12px', color: 'rgba(246, 241, 235, 0.6)' }}>Apenas lotes acima de 86 pontos entram na curadoria.</p>
            </div>
            <div>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--black)', border: '1px solid var(--rule-w)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--clay)' }}>
                <Flame size={32} />
              </div>
              <h4 className="display" style={{ fontSize: '20px', color: 'var(--sand)', marginBottom: '8px' }}>3. Torra</h4>
              <p className="body-p" style={{ fontSize: '12px', color: 'rgba(246, 241, 235, 0.6)' }}>Torrado apenas após seu pedido garantindo frescor máximo.</p>
            </div>
            <div>
              <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--black)', border: '1px solid var(--rule-w)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', color: 'var(--clay)' }}>
                <QrCode size={32} />
              </div>
              <h4 className="display" style={{ fontSize: '20px', color: 'var(--sand)', marginBottom: '8px' }}>4. Rastreio</h4>
              <p className="body-p" style={{ fontSize: '12px', color: 'rgba(246, 241, 235, 0.6)' }}>QR Code leva aos dados de origem na palma da mão.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CAFÉS DISPONÍVEIS */}
      <section className="sec sec-p fi">
        <div className="bx">
          <div className="head" style={{ marginBottom: '64px' }}>
            <div style={{ maxWidth: '600px' }}>
              <div className="eyebrow" style={{ marginBottom: '24px' }}>Lotes Ativos</div>
              <h2 className="display" style={{ color: 'var(--black)' }}>Escolha um café com <span className="ital">origem comprovada</span>.</h2>
            </div>
            <div>
              <Link to="/cafes" className="btn btn-sd" style={{ fontSize: '11px', padding: '16px 32px' }}>
                <span>Ir para o catálogo →</span>
              </Link>
            </div>
          </div>
          
          <div className="hm-prd-grid" style={{ marginTop: 0 }}>
            {mockProducts.filter(p => p.category === 'grão' && p.stock > 0).slice(0, 4).map(product => {
              const isLinkedToActive = activeFarm?.linkedProductSlug === product.slug;
              return (
                <div key={product.id} className="hm-prd-i" style={{ border: isLinkedToActive ? '1px solid var(--clay)' : 'none' }}>
                  <div className="hm-prd-head">
                    <div className="hm-prd-reg">{product.region}</div>
                    {product.isAwardWinning && <div className="label" style={{ color: 'var(--sand)', fontSize: '9px' }}>86+ SCA</div>}
                  </div>
                  <h3 className="hm-prd-t">{product.name}</h3>
                  <p className="hm-prd-n">{product.sensoryNotes.join(' • ')}.</p>
                  
                  <div className="hm-prd-b">
                    <div className="hm-prd-pr">R$ {product.price.toFixed(2)}</div>
                    <Link to={`/cafes/${product.slug}`} className="lnk" style={{ fontSize: '10px', color: 'var(--clay)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Detalhes</Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
