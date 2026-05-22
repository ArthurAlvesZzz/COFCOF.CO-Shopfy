import React from 'react';

export default function HomeReviews() {
  return (
    <section className="sec fi">
      <div className="bx">
        <div className="head" style={{ justifyContent: 'center', textAlign: 'center' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: '24px' }}>O que os clientes dizem</div>
            <h2 className="display" style={{ color: 'var(--black)' }}>A diferença entre tomar café<br />por hábito e por <span className="ital">prazer</span>.</h2>
          </div>
        </div>

        <div className="hm-rvw">
          <div className="hm-rvw-i">
            <p className="hm-rvw-q">"Foi o primeiro café que não precisei adoçar. O cuidado com a torra é perceptível em cada xícara. Mudou meu padrão."</p>
            <div className="hm-rvw-n">
              <strong>Marcelo T.</strong>
              <span>Uberlândia, MG</span>
            </div>
          </div>
          <div className="hm-rvw-i">
            <p className="hm-rvw-q">"Sensacional a experiência de conhecer a fazenda e a história de quem produziu antes mesmo de abrir o pacote."</p>
            <div className="hm-rvw-n">
              <strong>Camila R.</strong>
              <span>São Paulo, SP</span>
            </div>
          </div>
          <div className="hm-rvw-i">
            <p className="hm-rvw-q">"Passamos a servir CofCof no nosso escritório de arquitetura e a diferença no impacto dos clientes foi imediata."</p>
            <div className="hm-rvw-n">
              <strong>Roberto & Assoc.</strong>
              <span>Curitiba, PR</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
