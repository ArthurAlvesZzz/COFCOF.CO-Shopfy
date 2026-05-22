import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomeCTA() {
  const navigate = useNavigate();

  return (
    <section className="cta-end fi">
      <div className="bx cta-end-in">
        <h2 className="display">Pare de beber café com<br />gosto de <span className="ital">carvão</span>.</h2>
        <p className="body-p">
          Descubra o sabor verdadeiro de um café cultivado, colhido e torrado para entregar doçura máxima.
        </p>
        <button onClick={() => navigate('/cafes')} className="btn">
          <span>Escolher meu CofCof →</span>
        </button>
      </div>
    </section>
  );
}
