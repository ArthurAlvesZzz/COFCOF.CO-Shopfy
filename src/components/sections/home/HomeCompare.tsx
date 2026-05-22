import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomeCompare() {
  const navigate = useNavigate();

  return (
    <section className="sec sec-d fi" style={{ paddingTop: 'clamp(64px, 8vw, 96px)', paddingBottom: 'clamp(64px, 8vw, 96px)' }}>
      <div className="bx">
        <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 64px' }}>
          <h2 className="display" style={{ color: 'var(--sand)', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Não é só outro café<br />na <span className="ital">prateleira</span>.</h2>
          <p className="body-p" style={{ marginTop: '24px', fontSize: '20px', color: 'rgba(246, 241, 235, 0.75)', lineHeight: '1.6' }}>A diferença entre tomar café por hábito e por escolha.</p>
        </div>

        <div className="hm-cmp" style={{ border: '1px solid var(--rule-w)' }}>
          <div className="hm-cmp-i" style={{ padding: 'clamp(48px, 6vw, 80px)' }}>
            <h3 style={{ fontSize: '28px', marginBottom: '40px' }}>Café Comum</h3>
            <ul className="hm-cmp-ul" style={{ gap: '24px' }}>
              <li style={{ fontSize: '18px' }}>Origem genérica e não rastreável</li>
              <li style={{ fontSize: '18px' }}>Torra muito escura (amarga)</li>
              <li style={{ fontSize: '18px' }}>Meses na prateleira</li>
              <li style={{ fontSize: '18px' }}>Perfil indefinido ou mistura</li>
              <li style={{ fontSize: '18px' }}>Exige açúcar para beber</li>
            </ul>
          </div>
          <div className="hm-cmp-i cof" style={{ padding: 'clamp(48px, 6vw, 80px)' }}>
            <h3 style={{ fontSize: '28px', marginBottom: '40px' }}>CofCof.co</h3>
            <ul className="hm-cmp-ul cof" style={{ gap: '24px' }}>
              <li style={{ fontSize: '18px' }}>100% rastreado até a fazenda</li>
              <li style={{ fontSize: '18px' }}>Torra precisa para ressaltar a doçura</li>
              <li style={{ fontSize: '18px' }}>Torrado fresco sob demanda</li>
              <li style={{ fontSize: '18px' }}>Lotes exclusivos SCA 86+</li>
              <li style={{ fontSize: '18px' }}>Sabor limpo — sem adoçantes</li>
            </ul>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '64px' }}>
          <button onClick={() => navigate('/sobre')} className="btn" style={{ border: '1px solid var(--rule-w)', color: 'var(--sand)', padding: '24px 56px', fontSize: '13px' }}>
            <span>Entender o nosso processo →</span>
          </button>
        </div>
      </div>
    </section>
  );
}
