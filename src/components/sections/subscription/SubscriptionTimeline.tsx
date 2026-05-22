import React from 'react';

export default function SubscriptionTimeline() {
  return (
    <section data-shopify-section="subscription-timeline" className="sec sec-d fi">
      <div className="bx">
        <div className="head">
          <div>
            <div className="eyebrow">Dossiê — Da fazenda à xícara</div>
            <h2 className="display" style={{ fontSize: 'clamp(2rem,5vw,4rem)', color: 'var(--sand)', marginTop: '20px', maxWidth: '900px' }}>Cada passo<br /><span className="ital">documentado</span>.</h2>
          </div>
          <div className="label head-meta">09 passos · 11 dias</div>
        </div>
        <div className="prod">
          <div className="prod-row fi">
            <div className="prod-n">01</div>
            <div className="prod-d">D 01</div>
            <div className="prod-t">Colheita seletiva</div>
            <div className="prod-c">Cerejas maduras colhidas à mão no Cerrado Mineiro, entre 1.100 e 1.250m de altitude.</div>
          </div>
          <div className="prod-row fi">
            <div className="prod-n">02</div>
            <div className="prod-d">D 02</div>
            <div className="prod-t">Seleção do lote</div>
            <div className="prod-c">Grãos triados por densidade, tamanho e defeito. Só chegam à torra os que prestam.</div>
          </div>
          <div className="prod-row fi">
            <div className="prod-n">03</div>
            <div className="prod-d">D 03</div>
            <div className="prod-t">Análise SCA</div>
            <div className="prod-c">Cada lote passa por prova às cegas com Q-Graders. Pontuação ≥ 86 é critério mínimo.</div>
          </div>
          <div className="prod-row fi">
            <div className="prod-n">04</div>
            <div className="prod-d">D 05</div>
            <div className="prod-t">Seu pedido</div>
            <div className="prod-c">Você assina e escolhe o plano. A torra só é agendada depois que o pedido cai.</div>
          </div>
          <div className="prod-row fi">
            <div className="prod-n">05</div>
            <div className="prod-d">D 06</div>
            <div className="prod-t">Torra sob demanda</div>
            <div className="prod-c">Perfil de torra ajustado por lote. Zero estoque, zero café velho.</div>
          </div>
          <div className="prod-row fi">
            <div className="prod-n">06</div>
            <div className="prod-d">D 07</div>
            <div className="prod-t">Embalagem com válvula</div>
            <div className="prod-c">Válvula desgaseificadora one-way preserva aromas e expulsa CO₂ da torra recente.</div>
          </div>
          <div className="prod-row fi">
            <div className="prod-n">07</div>
            <div className="prod-d">D 08</div>
            <div className="prod-t">QR de rastreio</div>
            <div className="prod-c">Cada pacote sai com QR code oficial do Cerrado Mineiro — fazenda, produtor, altitude.</div>
          </div>
          <div className="prod-row fi">
            <div className="prod-n">08</div>
            <div className="prod-d">D 09</div>
            <div className="prod-t">Envio</div>
            <div className="prod-c">Postagem em até 48h após torra. Logística otimizada por região.</div>
          </div>
          <div className="prod-row fi">
            <div className="prod-n">09</div>
            <div className="prod-d">D 11</div>
            <div className="prod-t">Sua porta</div>
            <div className="prod-c">Chega até 11 dias depois da colheita. Mais fresco que isso, só indo na fazenda.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
