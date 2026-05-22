import React from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';

const lots = [
  {
    id: 'lote-01',
    num: '01',
    sca: '88.5',
    producer: 'Wagner Crivelenti Ferrero',
    producerHtml: <>Wagner Crivelenti<br />Ferrero</>,
    varietyFull: 'Paraíso · Natural',
    origin: 'Cerrado Mineiro',
    desc: 'Lote de abertura da curadoria. Paraíso natural com complexidade floral e doçura marcante.',
    variety: 'Paraíso MG H 419-1',
    process: 'Natural',
    roast: 'Média-clara',
    farm: 'A confirmar',
    alt: '~1180m',
    year: '2025',
    traceLink: '/track/01', // Will need real trace link later
    notesDesc: 'Floral · Mel · Mascavo · Fruta cítrica · Final doce e limpo. Corpo aveludado, acidez cítrica delicada. Ideal para V60, Chemex e coado.',
    pills: ['Floral', 'Mel', 'Mascavo', 'Fruta cítrica', 'Doce'],
    profile: { sweet: 88, acid: 74, body: 82, aroma: 91 }
  },
  {
    id: 'lote-02',
    num: '02',
    sca: '88.0',
    producer: 'Marcelo Cocco Urtado',
    producerHtml: <>Marcelo Cocco<br />Urtado</>,
    varietyFull: 'Topázio · Nat. Fermentado',
    origin: 'Cerrado Mineiro',
    desc: 'Topázio natural fermentado com fruta branca no aroma, corpo cremoso e finalização longa.',
    variety: 'Topázio',
    process: 'Natural Fermentado',
    roast: 'Média-clara',
    farm: 'A confirmar',
    alt: '~1150m',
    year: '2025',
    traceLink: '/track/02',
    notesDesc: 'Fruta branca · Melão · Mel · Caramelo · Corpo cremoso. Acidez média e equilibrada. Finalização longa e doce.',
    pills: ['Fruta branca', 'Melão', 'Mel', 'Caramelo', 'Cremoso'],
    profile: { sweet: 88, acid: 66, body: 85, aroma: 86 }
  },
  {
    id: 'lote-03',
    num: '03',
    sca: '87.5',
    producer: 'Claudio Nasser de Carvalho',
    producerHtml: <>Claudio Nasser<br />de Carvalho</>,
    varietyFull: 'Arara · Natural',
    origin: 'Cerrado Mineiro',
    desc: 'Arara licoroso e envolvente. Menta e xarope de caramelo, corpo denso. Intensidade com elegância.',
    variety: 'Arara',
    process: 'Natural',
    roast: 'Média',
    farm: 'A confirmar',
    alt: '~1210m',
    year: '2025',
    traceLink: '/track/03',
    notesDesc: 'Menta · Xarope · Caramelo · Licoroso. Acidez alta e vibrante. Finalização longa e complexa.',
    pills: ['Menta', 'Xarope', 'Caramelo', 'Licoroso'],
    profile: { sweet: 80, acid: 84, body: 82, aroma: 88 }
  },
  {
    id: 'lote-04',
    num: '04',
    sca: '87.5',
    producer: 'Geraldo Magelis Alves de Melo',
    producerHtml: <>Geraldo Magelis<br />Alves de Melo</>,
    varietyFull: 'Rubi · Ferm. Anaeróbica',
    origin: 'Cerrado Mineiro',
    desc: 'Rubi em fermentação anaeróbica. Doçura pura, fruta madura e licor. Corpo delicado, finalização limpa.',
    variety: 'Rubi',
    process: 'Ferm. Anaeróbica',
    roast: 'Média-clara',
    farm: 'A confirmar',
    alt: '~1165m',
    year: '2025',
    traceLink: '/track/04',
    notesDesc: 'Fruta madura · Licor · Mel · Doce. Corpo delicado. Finalização limpa, sem amargor.',
    pills: ['Fruta madura', 'Licor', 'Mel', 'Doce'],
    profile: { sweet: 92, acid: 56, body: 64, aroma: 86 }
  },
  {
    id: 'lote-05',
    num: '05',
    sca: '87.0',
    producer: 'Antônio Mazzo Junior',
    producerHtml: <>Antônio<br />Mazzo Junior</>,
    varietyFull: 'Catuaí 62 · Ferm. Aeróbico',
    origin: 'Cerrado Mineiro',
    desc: 'Catuaí 62 aeróbico com frescor cítrico marcante. Limão, mel e corpo meloso. Ótimo pra filtrados e cold brew.',
    variety: 'Catuaí 62',
    process: 'Fermentado Aeróbico',
    roast: 'Média-clara',
    farm: 'A confirmar',
    alt: '~1140m',
    year: '2025',
    traceLink: '/track/05',
    notesDesc: 'Frutas cítricas · Limão · Mel · Corpo meloso. Acidez alta e bem definida. Finalização longa e refrescante.',
    pills: ['Frutas cítricas', 'Limão', 'Mel', 'Meloso'],
    profile: { sweet: 76, acid: 87, body: 68, aroma: 82 }
  },
  {
    id: 'lote-06',
    num: '06',
    sca: '86.5',
    producer: 'Marcelo Pereira Lima Verde',
    producerHtml: <>Marcelo Pereira<br />Lima Verde</>,
    varietyFull: 'Arara · Nat. Fermentado',
    origin: 'Cerrado Mineiro',
    desc: 'Arara fermentado com perfil equilibrado. Caramelo, uva madura e corpo cremoso. Café do dia a dia.',
    variety: 'Arara',
    process: 'Natural Fermentado',
    roast: 'Média',
    farm: 'A confirmar',
    alt: '~1120m',
    year: '2025',
    traceLink: '/track/06',
    notesDesc: 'Frutado · Caramelo · Uva · Cremoso. Acidez cítrica contida. Finalização doce e equilibrada.',
    pills: ['Frutado', 'Caramelo', 'Uva', 'Cremoso'],
    profile: { sweet: 82, acid: 62, body: 74, aroma: 78 }
  },
  {
    id: 'lote-07',
    num: '07',
    sca: '86.5',
    producer: 'Désio Rodrigo Silva',
    producerHtml: <>Désio Rodrigo<br />Silva</>,
    varietyFull: 'Acauã · Ferm. Anaeróbica',
    origin: 'Cerrado Mineiro',
    desc: 'Acauã anaeróbico com uva verde, frutas frescas e caramelo. Acidez alta. Personalidade marcante.',
    variety: 'Acauã',
    process: 'Ferm. Anaeróbica',
    roast: 'Média-clara',
    farm: 'A confirmar',
    alt: '~1190m',
    year: '2025',
    traceLink: '/track/07',
    notesDesc: 'Uva verde · Frutas frescas · Caramelo · Licorosa. Corpo cremoso. Finalização longa.',
    pills: ['Uva verde', 'Frutas frescas', 'Caramelo', 'Licorosa'],
    profile: { sweet: 76, acid: 83, body: 70, aroma: 84 }
  },
  {
    id: 'lote-08',
    num: '08',
    sca: '86.0',
    producer: 'Décio Bruxel',
    producerHtml: <>Décio<br />Bruxel</>,
    varietyFull: 'Paraíso · Natural',
    origin: 'Cerrado Mineiro',
    desc: 'Paraíso natural com chocolate ao leite, caramelo e frutado sutil. Corpo cremoso, finalização acolhedora.',
    variety: 'Paraíso',
    process: 'Natural',
    roast: 'Média',
    farm: 'A confirmar',
    alt: '~1130m',
    year: '2025',
    traceLink: '/track/08',
    notesDesc: 'Frutado · Caramelo · Chocolate ao leite · Cremoso. Acidez cítrica sutil. Finalização longa e acolhedora.',
    pills: ['Frutado', 'Caramelo', 'Chocolate', 'Cremoso'],
    profile: { sweet: 84, acid: 52, body: 78, aroma: 80 }
  }
];

export default function CafesList() {
  return (
    <>
      {lots.map((lote) => (
        <section key={lote.id} data-shopify-section={`cafe-${lote.id}`} className="cf fi" id={lote.id}>
          <div className="bx">
            <div className="cf-grid">
              
              <div className="cf-media">
                <div className="cf-label">
                  <div className="cf-label-wm">{lote.num}</div>
                  <div className="cf-label-top">
                    <div>
                      <div className="eyebrow">Lote N° {lote.num}</div>
                      <div className="label">Safra 25</div>
                    </div>
                    <div className="cf-label-top-r">
                      <div className="eyebrow">SCA</div>
                      <div className="cf-label-sca">{lote.sca}</div>
                    </div>
                  </div>
                  <div className="cf-label-mid">
                    <div className="cf-label-dash"></div>
                    <div className="cf-label-name">{lote.producerHtml}</div>
                    <div className="cf-label-var">{lote.varietyFull}</div>
                    <div className="cf-label-origin">{lote.origin}</div>
                  </div>
                </div>
                
                <div className="cf-vid">
                  <div className="cf-vid-bg"></div>
                  <div className="cf-vid-grain"></div>
                  <div className="cf-vid-tag">Entrevista com produtor</div>
                  <div className="cf-vid-play">
                    <Play size={14} className="ml-0.5 fill-current" />
                  </div>
                </div>
              </div>

              <div className="cf-info">
                <div className="eyebrow">Produtor premiado · COE</div>
                <h2 className="display">{lote.producerHtml}</h2>
                <p className="body-p">{lote.desc}</p>
                
                <div className="cf-specs">
                  <div className="cf-spec">
                    <div className="eyebrow">Variedade</div>
                    <div className="label">{lote.variety}</div>
                  </div>
                  <div className="cf-spec">
                    <div className="eyebrow">Processo</div>
                    <div className="label">{lote.process}</div>
                  </div>
                  <div className="cf-spec">
                    <div className="eyebrow">Torra</div>
                    <div className="label">{lote.roast}</div>
                  </div>
                  <div className="cf-spec">
                    <div className="eyebrow">Fazenda</div>
                    <div className="label">{lote.farm}</div>
                  </div>
                  <div className="cf-spec">
                    <div className="eyebrow">Altitude</div>
                    <div className="label">{lote.alt}</div>
                  </div>
                  <div className="cf-spec">
                    <div className="eyebrow">Safra</div>
                    <div className="label">{lote.year}</div>
                  </div>
                </div>
                
                <a href={lote.traceLink} rel="noopener noreferrer" className="cf-trace">
                  <div className="cf-trace-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 2v20M2 12h20" opacity="0.3"/>
                      <circle cx="12" cy="12" r="6"/>
                    </svg>
                  </div>
                  <div className="cf-trace-txt">
                    <div className="eyebrow cf-trace-t">Rastreabilidade · Cerrado Mineiro D.O.</div>
                    <div className="cf-trace-v">Rastreie até a fazenda de origem</div>
                  </div>
                  <span className="cf-trace-arrow">→</span>
                </a>
                
                <div className="cf-notes">
                  <div className="eyebrow">Notas sensoriais</div>
                  <p>{lote.notesDesc}</p>
                </div>
                
                <div className="cf-pills">
                  {lote.pills.map((p, i) => <span key={i} className="cf-pill">{p}</span>)}
                </div>
                
                <div className="cf-profile">
                  <div className="eyebrow">Perfil sensorial</div>
                  <div className="cf-bars">
                    
                    <div className="fi v">
                      <div className="cf-bar-head"><span className="label">Doçura</span><span className="label v">{lote.profile.sweet}/100</span></div>
                      <div className="cf-bar-track">
                        <div className="cf-bar-fill" style={{ '--w': lote.profile.sweet / 100 } as React.CSSProperties}></div>
                      </div>
                    </div>
                    
                    <div className="fi v">
                      <div className="cf-bar-head"><span className="label">Acidez</span><span className="label v">{lote.profile.acid}/100</span></div>
                      <div className="cf-bar-track">
                        <div className="cf-bar-fill" style={{ '--w': lote.profile.acid / 100 } as React.CSSProperties}></div>
                      </div>
                    </div>
                    
                    <div className="fi v">
                      <div className="cf-bar-head"><span className="label">Corpo</span><span className="label v">{lote.profile.body}/100</span></div>
                      <div className="cf-bar-track">
                        <div className="cf-bar-fill" style={{ '--w': lote.profile.body / 100 } as React.CSSProperties}></div>
                      </div>
                    </div>
                    
                    <div className="fi v">
                      <div className="cf-bar-head"><span className="label">Aroma</span><span className="label v">{lote.profile.aroma}/100</span></div>
                      <div className="cf-bar-track">
                        <div className="cf-bar-fill" style={{ '--w': lote.profile.aroma / 100 } as React.CSSProperties}></div>
                      </div>
                    </div>

                  </div>
                </div>
                
                <div className="cf-cta">
                  <Link to="/assinaturas#planos" className="btn btn-ds"><span>Assinar e receber →</span></Link>
                </div>
              </div>

            </div>
          </div>
        </section>
      ))}
    </>
  );
}
