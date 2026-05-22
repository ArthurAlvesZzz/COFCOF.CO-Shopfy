import React from 'react';

export default function CafesIndex() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <section data-shopify-section="cafes-index" className="idx fi">
      <div className="bx">
        <div className="idx-h">
          <h2 className="display">Índice dos <span className="ital">lotes</span>.</h2>
          <a href="#lote-01" onClick={(e) => handleScroll(e, 'lote-01')} className="lnk label">Ir para o primeiro lote →</a>
        </div>
        <div className="idx-grid">
          <a href="#lote-01" onClick={(e) => handleScroll(e, 'lote-01')} className="idx-i">
            <span className="idx-n">01</span>
            <div className="idx-m">
              <div className="label">88.5 SCA</div>
              <div className="eyebrow">Paraíso</div>
            </div>
          </a>
          <a href="#lote-02" onClick={(e) => handleScroll(e, 'lote-02')} className="idx-i">
            <span className="idx-n">02</span>
            <div className="idx-m">
              <div className="label">88.0 SCA</div>
              <div className="eyebrow">Topázio</div>
            </div>
          </a>
          <a href="#lote-03" onClick={(e) => handleScroll(e, 'lote-03')} className="idx-i">
            <span className="idx-n">03</span>
            <div className="idx-m">
              <div className="label">87.5 SCA</div>
              <div className="eyebrow">Arara</div>
            </div>
          </a>
          <a href="#lote-04" onClick={(e) => handleScroll(e, 'lote-04')} className="idx-i">
            <span className="idx-n">04</span>
            <div className="idx-m">
              <div className="label">87.5 SCA</div>
              <div className="eyebrow">Rubi</div>
            </div>
          </a>
          <a href="#lote-05" onClick={(e) => handleScroll(e, 'lote-05')} className="idx-i">
            <span className="idx-n">05</span>
            <div className="idx-m">
              <div className="label">87.0 SCA</div>
              <div className="eyebrow">Catuaí 62</div>
            </div>
          </a>
          <a href="#lote-06" onClick={(e) => handleScroll(e, 'lote-06')} className="idx-i">
            <span className="idx-n">06</span>
            <div className="idx-m">
              <div className="label">86.5 SCA</div>
              <div className="eyebrow">Arara</div>
            </div>
          </a>
          <a href="#lote-07" onClick={(e) => handleScroll(e, 'lote-07')} className="idx-i">
            <span className="idx-n">07</span>
            <div className="idx-m">
              <div className="label">86.5 SCA</div>
              <div className="eyebrow">Acauã</div>
            </div>
          </a>
          <a href="#lote-08" onClick={(e) => handleScroll(e, 'lote-08')} className="idx-i">
            <span className="idx-n">08</span>
            <div className="idx-m">
              <div className="label">86.0 SCA</div>
              <div className="eyebrow">Paraíso</div>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
