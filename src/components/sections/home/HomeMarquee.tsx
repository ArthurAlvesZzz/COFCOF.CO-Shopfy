import React from 'react';

const claims = [
  "86+ pts SCA",
  "Cerrado Mineiro D.O.",
  "Torra sob demanda",
  "Rastreabilidade QR",
  "Cup of Excellence",
  "Lotes selecionados",
  "Zero amargor",
  "Doce por natureza"
];

export default function HomeMarquee() {
  return (
    <section className="tk fi">
      <div className="tk-i">
        {[...claims, ...claims, ...claims, ...claims].map((claim, idx) => (
          <div key={idx} className="tk-item">
            {claim} <span>✦</span>
          </div>
        ))}
      </div>
    </section>
  );
}
