import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isOndeEncontrar = location.pathname === '/onde-nos-encontrar';

  const isB2B = location.pathname === '/para-empresas';

  return (
    <footer className="ft">
      <div className="bx">
        <div className="ft-grid" style={{ rowGap: '48px' }}>
          <div>
            <div className="ft-brand">COFCOF.CO</div>
            <p className="ft-desc" style={{ marginBottom: '32px', fontSize: '15px', color: 'rgba(246, 241, 235, 0.8)' }}>Cafés especiais do Cerrado Mineiro. Premiados pela Cup of Excellence. Entrega mensal, rastreabilidade QR, torra sob demanda.</p>
            {isB2B ? (
              <div style={{ padding: '24px', background: 'rgba(246, 241, 235, 0.05)', borderRadius: '8px', border: '1px solid rgba(246, 241, 235, 0.1)' }}>
                <div className="eyebrow" style={{ marginBottom: '12px', color: 'var(--sand)' }}>Atendimento B2B</div>
                <p style={{ fontSize: '14px', color: 'rgba(246, 241, 235, 0.7)', marginBottom: '16px' }}>Fale diretamente com nosso comercial para orçamentos e propostas.</p>
                <a href="https://wa.me/5534998728882?text=Ol%C3%A1!%20Quero%20falar%20com%20o%20setor%20comercial%20B2B." target="_blank" rel="noopener noreferrer" className="btn btn-sd" style={{ width: '100%', justifyContent: 'center', padding: '16px' }}><span>Falar pelo WhatsApp →</span></a>
              </div>
            ) : (
              <div style={{ display: 'flex', gap: '8px', maxWidth: '360px' }}>
                <input type="email" placeholder="Assinar newsletter" style={{ flex: 1, background: 'rgba(246, 241, 235, 0.05)', border: '1px solid rgba(246, 241, 235, 0.2)', padding: '12px 16px', color: 'var(--sand)', fontSize: '14px', borderRadius: '4px', outline: 'none' }} />
                <button style={{ background: 'var(--sand)', color: 'var(--black)', padding: '0 20px', fontSize: '13px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.05em', borderRadius: '4px', cursor: 'pointer' }}>Assinar</button>
              </div>
            )}
          </div>
          <div className="ft-col">
            <div className="eyebrow" style={{ opacity: 0.7 }}>Assinatura</div>
            <ul style={{ fontSize: '16px' }}>
              {!isOndeEncontrar && (
                <>
                  <li><Link to="/assinaturas" className="lnk">Planos</Link></li>
                  <li><Link to="/cafes" className="lnk">Nossos cafés</Link></li>
                  <li><Link to="/para-empresas" className="lnk" style={isB2B ? { color: 'var(--sand)', fontWeight: 600 } : {}}>Empresas</Link></li>
                </>
              )}
            </ul>
          </div>
          <div className="ft-col">
            <div className="eyebrow" style={{ opacity: 0.7 }}>Institucional</div>
            <ul style={{ fontSize: '16px' }}>
              {!isOndeEncontrar && (
                <>
                  <li><Link to="/origem" className="lnk">Origem</Link></li>
                  <li><Link to="/onde-nos-encontrar" className="lnk">Onde Encontrar</Link></li>
                  <li><Link to="/contato" className="lnk">Contato</Link></li>
                  {isB2B && (
                    <li><a href="https://wa.me/5534998728882?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20uma%20proposta." target="_blank" rel="noopener noreferrer" className="lnk" style={{ color: 'var(--sand)', fontWeight: 600 }}>Solicitar Proposta B2B</a></li>
                  )}
                </>
              )}
            </ul>
          </div>
          <div className="ft-col">
            <div className="eyebrow" style={{ opacity: 0.7 }}>Contato</div>
            <ul style={{ fontSize: '16px' }}>
              {!isOndeEncontrar && (
                <>
                  <li><a href="https://wa.me/5534998728882" target="_blank" rel="noopener noreferrer" className="lnk" style={isB2B ? { color: 'var(--sand)', fontWeight: 700 } : {}}>+55 34 99872-8882</a></li>
                  {isB2B && <li><a href="mailto:comercial@cofcof.co" className="lnk" style={{ color: 'var(--sand)' }}>comercial@cofcof.co</a></li>}
                  {!isB2B && <li><a href="mailto:contato@cofcof.co" className="lnk">contato@cofcof.co</a></li>}
                  <li><a href="https://instagram.com/cofcof.company" target="_blank" rel="noopener noreferrer" className="lnk">@cofcof.company</a></li>
                </>
              )}
            </ul>
          </div>
        </div>
        <div className="ft-bottom">
          <div className="ft-legal">Cof Cof Cafés Especiais do Cerrado LTDA · CNPJ 52.639.486/0001-06<br />Patrocínio / MG · Cerrado Mineiro · Seg–Sex 8h–17h</div>
          <div className="ft-cr">© {new Date().getFullYear()} — Todos os direitos reservados</div>
        </div>
      </div>
    </footer>
  );
}
