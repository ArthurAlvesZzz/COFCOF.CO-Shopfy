import React from 'react';
import { Link } from 'react-router-dom';

export default function SubscriptionPlans() {
  return (
    <section data-shopify-section="subscription-plans" id="planos" className="sec sec-d fi">
      <div className="bx">
        <div className="head">
          <div>
            <div className="eyebrow">Capítulo 02 — Planos</div>
            <h2 className="display" style={{ fontSize: 'clamp(2rem,5vw,4rem)', color: 'var(--sand)', marginTop: '20px' }}>Escolha seu<br /><span className="ital">ritual</span>.</h2>
          </div>
          <div className="label head-meta">A partir de R$ 1,87 / xícara</div>
        </div>
        <div className="plans">
          <div className="pl fi">
            <div className="pl-head">
              <div className="pl-head-l">
                <div className="eyebrow">Plano 1 / 3</div>
                <div className="pl-name">Essencial</div>
              </div>
              <div className="pl-disc">base</div>
            </div>
            <div className="pl-kg">1kg</div>
            <div className="pl-price-row">
              <span className="pl-price-curr">R$</span><span className="pl-price">179,90</span><span className="pl-per">/mês</span>
            </div>
            <div className="pl-cup">≈ R$ 2,25 por xícara</div>
            <div className="pl-rule"></div>
            <ul>
              <li>1 café premiado por mês</li>
              <li>Torra sob demanda</li>
              <li>Entrega em até 7 dias</li>
            </ul>
            <Link to="/checkout?plan=essencial" className="pl-btn"><span>Assinar Essencial →</span></Link>
          </div>
          <div className="pl feat fi">
            <div className="pl-tag">Mais pedido</div>
            <div className="pl-head">
              <div className="pl-head-l">
                <div className="eyebrow">Plano 2 / 3</div>
                <div className="pl-name">Clássico</div>
              </div>
              <div className="pl-disc has">−8%</div>
            </div>
            <div className="pl-kg">2kg</div>
            <div className="pl-price-row">
              <span className="pl-price-curr">R$</span><span className="pl-price">329,90</span><span className="pl-per">/mês</span>
            </div>
            <div className="pl-cup">≈ R$ 2,06 por xícara</div>
            <div className="pl-rule"></div>
            <ul>
              <li>2 cafés diferentes por mês</li>
              <li>Torra sob demanda</li>
              <li>Frete grátis Sul/Sudeste</li>
            </ul>
            <Link to="/checkout?plan=classico" className="pl-btn"><span>Assinar Clássico →</span></Link>
          </div>
          <div className="pl fi">
            <div className="pl-head">
              <div className="pl-head-l">
                <div className="eyebrow">Plano 3 / 3</div>
                <div className="pl-name">Família</div>
              </div>
              <div className="pl-disc has">−17%</div>
            </div>
            <div className="pl-kg">5kg</div>
            <div className="pl-price-row">
              <span className="pl-price-curr">R$</span><span className="pl-price">749,90</span><span className="pl-per">/mês</span>
            </div>
            <div className="pl-cup">≈ R$ 1,87 por xícara</div>
            <div className="pl-rule"></div>
            <ul>
              <li>Curadoria variada por mês</li>
              <li>Torra sob demanda</li>
              <li>Frete grátis Brasil</li>
            </ul>
            <Link to="/checkout?plan=familia" className="pl-btn"><span>Assinar Família →</span></Link>
          </div>
        </div>
        <div className="emp-row fi">
          <div>
            <div className="eyebrow" style={{ marginBottom: '8px' }}>Para empresas</div>
            <div className="display" style={{ fontSize: '22px', color: 'var(--sand)' }}>10kg ou mais — preço sob consulta</div>
          </div>
          <a href="https://wa.me/5534998728882?text=Ol%C3%A1!%20Quero%20planos%20para%20minha%20empresa%20a%20partir%20de%2010kg%2Fm%C3%AAs." target="_blank" rel="noopener noreferrer" className="lnk label">Falar no WhatsApp →</a>
        </div>
        <p className="plans-foot">Cancele quando quiser · Pause a assinatura a qualquer momento · Cartão, PIX ou boleto</p>
      </div>
    </section>
  );
}
