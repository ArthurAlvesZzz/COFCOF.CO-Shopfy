import React from 'react';
import { Link } from 'react-router-dom';
import { mockProducts } from '../../../data/seed';
import { useCartStore } from '../../../store/cartStore';

export default function HomeFeatured() {
  const { addItem } = useCartStore();
  const featuredProducts = mockProducts.filter(p => !!p.featured && p.category !== 'kit').slice(0, 6);

  return (
    <section className="sec fi">
      <div className="bx">
        <div className="head">
          <div style={{ maxWidth: '600px' }}>
            <div className="eyebrow" style={{ marginBottom: '24px' }}>Curadoria Especial</div>
            <h2 className="display" style={{ color: 'var(--black)', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Escolhas do <span className="ital">Mestre</span>.</h2>
            <p className="body-p" style={{ marginTop: '24px', color: 'var(--sub)', fontSize: '18px' }}>
              Selecionamos poucos lotes por vez para garantir o máximo frescor e qualidade na sua xícara.
            </p>
          </div>
          <div style={{ alignSelf: 'flex-end', marginTop: '24px' }}>
            <Link to="/cafes" className="btn btn-sd" style={{ fontSize: '13px', padding: '20px 42px' }}>
              <span>Ver catálogo completo →</span>
            </Link>
          </div>
        </div>

        <div className="hm-prd-grid" style={{ gridTemplateColumns: featuredProducts.length <= 2 ? 'repeat(auto-fit, minmax(400px, 1fr))' : 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2px' }}>
          {featuredProducts.map(product => (
            <div key={product.id} className="hm-prd-i" style={{ padding: 'clamp(40px, 5vw, 56px)', minHeight: '320px' }}>
              <div className="hm-prd-head" style={{ marginBottom: '40px' }}>
                <div className="hm-prd-reg" style={{ fontSize: '11px', padding: '6px 14px' }}>{product.region}</div>
                {product.isAwardWinning && <div className="label" style={{ color: 'var(--sand)', fontSize: '11px' }}>86+ SCA</div>}
              </div>
              <h3 className="hm-prd-t" style={{ fontSize: '32px', marginBottom: '16px' }}>{product.name}</h3>
              <p className="hm-prd-n" style={{ fontSize: '16px', marginBottom: '48px' }}>{product.sensoryNotes.join(' • ')}.</p>
              
              <div className="hm-prd-b" style={{ marginTop: 'auto' }}>
                <div className="hm-prd-pr" style={{ fontSize: '20px' }}>R$ {product.price.toFixed(2)}</div>
                <div style={{ display: 'flex', gap: '24px' }}>
                  <Link to={`/cafes/${product.slug}`} className="lnk" style={{ fontSize: '12px', color: 'var(--clay)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Detalhes</Link>
                  <button onClick={() => addItem(product, product.formats[0])} className="lnk" style={{ fontSize: '12px', color: 'var(--sand)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Adicionar</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
