import React from 'react';
import { Link } from 'react-router-dom';

export default function SubscriptionCurators() {
  return (
    <section data-shopify-section="subscription-curators" id="cafes" className="sec fi">
      <div className="bx">
        <div className="head">
          <div>
            <div className="eyebrow">Capítulo 03 — Curadoria</div>
            <h2 className="display" style={{ fontSize: 'clamp(2rem,5vw,4rem)', color: 'var(--black)', marginTop: '20px' }}>8 lotes premiados.<br />8 produtores.</h2>
          </div>
          <Link to="/cafes" className="lnk label" style={{ color: 'var(--black)' }}>Ver os 8 cafés →</Link>
        </div>
        <div className="cof-grid">
          <div className="cof fi">
            <div className="cof-lbl">
              <div className="cof-wm">01</div>
              <div className="cof-top">
                <div>
                  <div className="eyebrow" style={{ marginBottom: '4px' }}>Lote N° 01</div>
                  <div className="label" style={{ fontSize: '10px', color: 'var(--sub)' }}>Natural</div>
                </div>
                <div className="cof-top-r">
                  <div className="eyebrow" style={{ marginBottom: '4px' }}>SCA</div>
                  <div className="cof-sca">88.5</div>
                </div>
              </div>
              <div className="cof-bot">
                <div className="cof-dash"></div>
                <div className="cof-name">Wagner Crivelenti Ferrero</div>
                <div className="label" style={{ fontSize: '10px', color: 'var(--clay)' }}>Paraíso · 1180m</div>
              </div>
            </div>
            <p className="cof-notes">Floral · Mel · Mascavo</p>
          </div>
          <div className="cof fi">
            <div className="cof-lbl">
              <div className="cof-wm">02</div>
              <div className="cof-top">
                <div>
                  <div className="eyebrow" style={{ marginBottom: '4px' }}>Lote N° 02</div>
                  <div className="label" style={{ fontSize: '10px', color: 'var(--sub)' }}>Nat. Fermentado</div>
                </div>
                <div className="cof-top-r">
                  <div className="eyebrow" style={{ marginBottom: '4px' }}>SCA</div>
                  <div className="cof-sca">88.0</div>
                </div>
              </div>
              <div className="cof-bot">
                <div className="cof-dash"></div>
                <div className="cof-name">Marcelo Cocco Urtado</div>
                <div className="label" style={{ fontSize: '10px', color: 'var(--clay)' }}>Topázio · 1150m</div>
              </div>
            </div>
            <p className="cof-notes">Fruta branca · Melão · Mel</p>
          </div>
          <div className="cof fi">
            <div className="cof-lbl">
              <div className="cof-wm">03</div>
              <div className="cof-top">
                <div>
                  <div className="eyebrow" style={{ marginBottom: '4px' }}>Lote N° 03</div>
                  <div className="label" style={{ fontSize: '10px', color: 'var(--sub)' }}>Natural</div>
                </div>
                <div className="cof-top-r">
                  <div className="eyebrow" style={{ marginBottom: '4px' }}>SCA</div>
                  <div className="cof-sca">87.5</div>
                </div>
              </div>
              <div className="cof-bot">
                <div className="cof-dash"></div>
                <div className="cof-name">Claudio Nasser de Carvalho</div>
                <div className="label" style={{ fontSize: '10px', color: 'var(--clay)' }}>Arara · 1210m</div>
              </div>
            </div>
            <p className="cof-notes">Menta · Xarope · Caramelo</p>
          </div>
          <div className="cof fi">
            <div className="cof-lbl">
              <div className="cof-wm">04</div>
              <div className="cof-top">
                <div>
                  <div className="eyebrow" style={{ marginBottom: '4px' }}>Lote N° 04</div>
                  <div className="label" style={{ fontSize: '10px', color: 'var(--sub)' }}>Ferm. Anaeróbica</div>
                </div>
                <div className="cof-top-r">
                  <div className="eyebrow" style={{ marginBottom: '4px' }}>SCA</div>
                  <div className="cof-sca">87.5</div>
                </div>
              </div>
              <div className="cof-bot">
                <div className="cof-dash"></div>
                <div className="cof-name">Geraldo Magelis A. de Melo</div>
                <div className="label" style={{ fontSize: '10px', color: 'var(--clay)' }}>Rubi · 1165m</div>
              </div>
            </div>
            <p className="cof-notes">Fruta madura · Licor · Mel</p>
          </div>
        </div>
      </div>
    </section>
  );
}
