import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => setIsMenuOpen(false);

  // Return exactly the class requested, if empty return empty string so it doesn't add 'act' improperly.
  const getDesktopClass = (path: string, exact: boolean = false) => {
    const isB2B = location.pathname === '/para-empresas';

    if (exact) {
      if (location.pathname === path) return isB2B ? 'act b2b-act' : 'act';
      return undefined;
    }
    if (location.pathname.startsWith(path) && path !== '/') return isB2B ? 'act b2b-act' : 'act';
    if (location.pathname === path) return isB2B ? 'act b2b-act' : 'act';
    return undefined;
  };

  const getMobileClass = (path: string, exact: boolean = false) => {
    const isB2B = location.pathname === '/para-empresas';
    if (exact) {
      if (location.pathname === path) return isB2B ? 'mo-c b2b-act' : 'mo-c';
      return undefined;
    }
    if (location.pathname.startsWith(path) && path !== '/') return isB2B ? 'mo-c b2b-act' : 'mo-c';
    if (location.pathname === path) return isB2B ? 'mo-c b2b-act' : 'mo-c';
    return undefined;
  };

  const isB2BPage = location.pathname === '/para-empresas';

  return (
    <>
      <nav className="nv">
        <div className="bx nv-i">
          <Link to="/" className="nv-l" onClick={closeMenu}>COFCOF.CO</Link>
          <div className="nv-r" style={{ gap: '28px' }}>
            <Link to="/" className={getDesktopClass('/', true)} style={{ fontSize: '13px' }}>Início</Link>
            <Link to="/cafes" className={getDesktopClass('/cafes')} style={{ fontSize: '13px' }}>Cafés</Link>
            <Link to="/assinaturas" className={getDesktopClass('/assinaturas')} style={{ fontSize: '13px' }}>Assinaturas</Link>
            <Link to="/origem" className={getDesktopClass('/origem')} style={{ fontSize: '13px' }}>Origem</Link>
            <Link to="/onde-nos-encontrar" className={getDesktopClass('/onde-nos-encontrar')} style={{ fontSize: '13px' }}>Onde Encontrar</Link>
            <Link to="/para-empresas" className={getDesktopClass('/para-empresas')} style={isB2BPage ? { fontSize: '13px', color: 'var(--sand)', borderBottom: '1px solid var(--sand)', paddingBottom: '4px' } : { fontSize: '13px' }}>Para Empresas</Link>
            <Link to="/contato" className={getDesktopClass('/contato')} style={{ fontSize: '13px' }}>Contato</Link>
            <Link to="/assinaturas" className="nv-c" style={{ fontSize: '13px' }}>Comprar →</Link>
          </div>
          <button 
            className={`hb ${isMenuOpen ? 'o' : ''}`} 
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      <div className={`mo ${isMenuOpen ? 'o' : ''}`} id="MO">
        <div className="mo-i">
          <Link to="/" className={getMobileClass('/', true)} onClick={closeMenu}>Início</Link>
          <Link to="/cafes" className={getMobileClass('/cafes')} onClick={closeMenu}>Cafés</Link>
          <Link to="/assinaturas" className={getMobileClass('/assinaturas')} onClick={closeMenu}>Assinaturas</Link>
          <Link to="/origem" className={getMobileClass('/origem')} onClick={closeMenu}>Origem</Link>
          <Link to="/onde-nos-encontrar" className={getMobileClass('/onde-nos-encontrar')} onClick={closeMenu}>Onde Encontrar</Link>
          <Link to="/para-empresas" className={getMobileClass('/para-empresas')} onClick={closeMenu}>Para Empresas</Link>
          <Link to="/contato" className={getMobileClass('/contato')} onClick={closeMenu}>Contato</Link>
          <Link to="/assinaturas" className={`mo-c ${getMobileClass('/assinaturas') || ''}`} onClick={closeMenu}>Comprar →</Link>
        </div>
      </div>
    </>
  );
}
