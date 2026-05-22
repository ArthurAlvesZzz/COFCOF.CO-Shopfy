import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

const scopedStyles = `
  *,*::before,*::after{margin:0;padding:0;box-sizing:border-box}
  :root{--black:#0A0A0A;--sand:#F6F1EB;--sand-2:#EFE7DB;--parch:#E8E0D4;--stone:#252525;--clay:#7A6654;--txt:#0A0A0A;--sub:#6B6B6B;--dim:#999;--rule:rgba(10,10,10,.12);--rule-w:rgba(246,241,235,.14);--fn:'DM Sans',Helvetica,sans-serif;--fl:'Montserrat',sans-serif}
  html,body{background:var(--sand)}
  .ae{font-family:var(--fn);font-weight:400;font-size:15px;line-height:1.65;color:var(--txt);background:var(--sand);overflow-x:hidden;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;min-height:100vh;}
  .ae a{color:inherit;text-decoration:none}
  .ae button{cursor:pointer;border:none;background:none;font:inherit;color:inherit}
  .ae::selection{background:var(--black);color:var(--sand)}
  .ae .bx{max-width:1340px;margin:0 auto;padding:0 28px}
  @media(min-width:768px){.ae .bx{padding:0 56px}}
  .ae .fi{opacity:0;transform:translateY(20px);transition:opacity .9s cubic-bezier(.2,.7,.2,1),transform .9s cubic-bezier(.2,.7,.2,1)}
  .ae .fi.v{opacity:1;transform:none}
  @media(prefers-reduced-motion:reduce){.ae .fi{opacity:1;transform:none;transition:none}}
  .ae .nv{position:fixed;top:0;left:0;width:100%;z-index:90;background:rgba(10,10,10,.92);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);border-bottom:1px solid var(--rule-w)}
  .ae .nv-i{display:flex;align-items:center;justify-content:space-between;height:60px;padding:14px 0}
  @media(min-width:768px){.ae .nv-i{height:68px}}
  .ae .nv-l{font-family:var(--fl);font-weight:800;font-size:15px;letter-spacing:.08em;text-transform:uppercase;color:var(--sand)}
  @media(min-width:768px){.ae .nv-l{font-size:16px}}
  .ae .nv-r{display:none;align-items:center;gap:30px}
  @media(min-width:1000px){.ae .nv-r{display:flex}}
  .ae .nv-r a{font-family:var(--fl);font-weight:600;font-size:11px;letter-spacing:.16em;text-transform:uppercase;color:rgba(246,241,235,.58);transition:color .3s;position:relative;padding-bottom:3px}
  .ae .nv-r a:hover{color:var(--sand)}
  .ae .nv-r a.act{color:var(--sand)}
  .ae .nv-r a.act::after{content:'';position:absolute;left:0;right:0;bottom:-4px;height:1px;background:var(--clay)}
  .ae .nv-c{font-family:var(--fl);font-weight:700;font-size:11px;letter-spacing:.18em;text-transform:uppercase;padding:10px 22px;color:var(--sand);border:1.5px solid var(--sand);transition:background .3s,color .3s}
  .ae .nv-c:hover{background:var(--sand);color:var(--black)}
  .ae .hb{display:flex;flex-direction:column;gap:5px;padding:8px}
  @media(min-width:1000px){.ae .hb{display:none}}
  .ae .hb span{display:block;width:20px;height:1px;background:var(--sand);transition:all .3s}
  .ae .hb.o span:nth-child(1){transform:rotate(45deg) translate(2px,3px)}
  .ae .hb.o span:nth-child(2){opacity:0}
  .ae .hb.o span:nth-child(3){transform:rotate(-45deg) translate(2px,-3px)}
  .ae .mo{overflow:hidden;max-height:0;background:rgba(10,10,10,.96);backdrop-filter:blur(14px);border-bottom:1px solid var(--rule-w);transition:max-height .4s;margin-top:60px}
  @media(min-width:768px){.ae .mo{margin-top:68px}}
  @media(min-width:1000px){.ae .mo{display:none}}
  .ae .mo.o{max-height:440px}
  .ae .mo-i{padding:22px 28px;display:flex;flex-direction:column;gap:16px}
  .ae .mo-i a{font-family:var(--fl);font-weight:600;font-size:14px;letter-spacing:.12em;text-transform:uppercase;color:rgba(246,241,235,.7)}
  .ae .mo-i a.mo-c{color:var(--sand)}
  .ae .eyebrow{font-family:var(--fl);font-weight:700;font-size:10px;letter-spacing:.24em;text-transform:uppercase;color:var(--clay)}
  .ae .label{font-family:var(--fl);font-weight:700;font-size:11px;letter-spacing:.18em;text-transform:uppercase}
  .ae .display{font-family:var(--fl);font-weight:800;text-transform:uppercase;letter-spacing:-.01em;line-height:.96}
  .ae .ital{font-family:var(--fl);font-weight:800;font-style:italic;text-transform:lowercase;letter-spacing:-.005em;color:var(--clay)}
  .ae .body-p{font-family:var(--fn);font-weight:300;line-height:1.65}
  .ae .sec{padding:80px 0}
  @media(min-width:768px){.ae .sec{padding:112px 0}}
  .ae .sec-d{background:var(--black);color:var(--sand)}
  .ae .sec-p{background:var(--parch)}
  .ae .lnk{position:relative;display:inline-block;padding-bottom:3px}
  .ae .lnk::after{content:'';position:absolute;left:0;right:0;bottom:0;height:1px;background:currentColor;transform-origin:right;transform:scaleX(0);transition:transform .42s cubic-bezier(.2,.7,.2,1)}
  .ae .lnk:hover::after{transform-origin:left;transform:scaleX(1)}
  .ae .btn{position:relative;overflow:hidden;display:inline-block;cursor:pointer;font-family:var(--fl);font-weight:700;letter-spacing:.2em;text-transform:uppercase;transition:color .38s}
  .ae .btn>span{position:relative;z-index:1}
  .ae .btn::before{content:'';position:absolute;inset:0;transform:translateY(101%);transition:transform .42s cubic-bezier(.2,.7,.2,1);z-index:0}
  .ae .btn:hover::before{transform:translateY(0)}
  .ae .btn-ds{background:var(--black);color:var(--sand)}
  .ae .btn-ds::before{background:var(--sand)}
  .ae .btn-ds:hover{color:var(--black)}
  .ae .pg-hero{padding:130px 0 72px;background:var(--black);color:var(--sand);position:relative;overflow:hidden}
  @media(min-width:768px){.ae .pg-hero{padding:160px 0 96px}}
  .ae .pg-hero-grid{position:absolute;inset:0;background-image:linear-gradient(to right,var(--rule-w) 1px,transparent 1px);background-size:25% 100%;opacity:.5;pointer-events:none}
  .ae .pg-hero-spot{position:absolute;top:-30%;left:50%;transform:translateX(-50%);width:80%;height:70%;background:radial-gradient(ellipse at center,rgba(122,102,84,.16) 0%,transparent 60%);filter:blur(40px);pointer-events:none}
  .ae .pg-hero-in{position:relative;z-index:2}
  .ae .pg-hero h1{font-size:clamp(2rem,5.5vw,4.4rem);color:var(--sand);font-weight:800;margin-top:20px;max-width:1100px}
  .ae .pg-hero .body-p{font-size:clamp(14px,1.1vw,16px);color:rgba(246,241,235,.7);margin-top:24px;max-width:620px}
  .ae .ct-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:clamp(16px,2vw,24px);margin-top:clamp(40px,8vh,72px)}
  .ae .ct-i{padding:clamp(32px,3vw,44px);border:1px solid var(--rule);background:var(--sand);transition:background .3s,border-color .3s}
  .ae .ct-i:hover{background:var(--sand-2);border-color:var(--black)}
  .ae .ct-svg{width:32px;height:32px;margin-bottom:24px;stroke:var(--clay);fill:none;stroke-width:1.3}
  .ae .ct-t{font-family:var(--fl);font-weight:800;font-size:18px;text-transform:uppercase;letter-spacing:.02em;margin-bottom:10px}
  .ae .ct-d{font-family:var(--fn);font-weight:300;font-size:14px;color:var(--sub);line-height:1.65;margin-bottom:20px}
  .ae .ct-link{font-family:var(--fl);font-weight:700;font-size:12px;letter-spacing:.14em;text-transform:uppercase;color:var(--black)}
  .ae .info-grid{display:grid;gap:clamp(32px,5vw,64px);margin-top:clamp(40px,8vh,72px)}
  @media(min-width:900px){.ae .info-grid{grid-template-columns:minmax(0,1fr) minmax(0,1fr)}}
  .ae .info-col h2{font-size:clamp(1.6rem,3.5vw,2.4rem);margin-top:16px;margin-bottom:28px}
  .ae .ir{border-bottom:1px solid var(--rule);padding:16px 0;display:flex;justify-content:space-between;align-items:baseline;gap:16px;flex-wrap:wrap}
  .ae .ir:first-child{border-top:1px solid var(--black);padding-top:18px}
  .ae .ir-l{font-family:var(--fl);font-weight:700;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:var(--clay);flex-shrink:0}
  .ae .ir-v{font-family:var(--fl);font-weight:700;font-size:13px;color:var(--black);text-align:right;letter-spacing:.02em}
  .ae .ir-v a{color:var(--black);border-bottom:1px solid var(--rule);transition:border-color .3s;padding-bottom:1px}
  .ae .ir-v a:hover{border-color:var(--black)}
  .ae .fq{margin-top:0}
  .ae .fq-i{border-bottom:1px solid var(--rule)}
  .ae .fq-i:first-child{border-top:1px solid var(--black)}
  .ae .fq-q{width:100%;display:flex;justify-content:space-between;align-items:center;padding:20px 0;text-align:left;transition:color .3s}
  .ae .fq-qt{font-family:var(--fl);font-weight:700;font-size:13px;letter-spacing:.02em;color:var(--black);padding-right:16px;text-transform:uppercase}
  .ae .fq-ic{font-family:var(--fl);font-weight:800;font-size:18px;color:var(--clay);transition:transform .3s;line-height:1}
  .ae .fq-i.o .fq-ic{transform:rotate(45deg)}
  .ae .fq-a{overflow:hidden;transition:max-height .4s;max-height:0}
  .ae .fq-i.o .fq-a{max-height:500px}
  .ae .fq-ai{padding-bottom:20px}
  .ae .fq-at{font-family:var(--fn);font-weight:300;font-size:14px;color:var(--sub);line-height:1.7}
  .ae .fq-at a{color:var(--black);border-bottom:1px solid var(--rule);padding-bottom:1px;transition:border-color .3s}
  .ae .fq-at a:hover{border-color:var(--black)}
  .ae .cta-end{background:var(--clay);padding:clamp(100px,16vh,180px) 0;text-align:center;position:relative;overflow:hidden}
  .ae .cta-end-in{position:relative;z-index:1;max-width:720px;margin:0 auto}
  .ae .cta-end .eyebrow{color:var(--sand);opacity:.72;margin-bottom:28px}
  .ae .cta-end h2{font-size:clamp(1.8rem,4.5vw,3.4rem);line-height:1.02;color:var(--sand);margin-bottom:32px}
  .ae .cta-end .ital{color:var(--sand)}
  .ae .cta-end .body-p{color:var(--sand);opacity:.85;font-size:15px;max-width:580px;margin:0 auto 36px}
  .ae .cta-end .btn{font-size:12px;padding:20px 42px;background:var(--black);color:var(--sand);border-radius:0}
  .ae .cta-end .btn::before{background:var(--sand)}
  .ae .cta-end .btn:hover{color:var(--black)}
  .ae .ft{background:var(--black);padding:clamp(60px,10vh,110px) 0 40px;border-top:1px solid var(--rule-w)}
  .ae .ft-grid{display:grid;grid-template-columns:1fr;gap:clamp(32px,5vw,64px);margin-bottom:56px}
  @media(min-width:768px){.ae .ft-grid{grid-template-columns:2fr 1fr 1fr 1fr}}
  .ae .ft-brand{font-family:var(--fl);font-weight:800;font-size:clamp(32px,4.5vw,48px);letter-spacing:.08em;text-transform:uppercase;color:var(--sand);line-height:1;margin-bottom:24px}
  .ae .ft-desc{font-family:var(--fn);font-weight:300;font-size:14px;color:rgba(246,241,235,.55);max-width:360px}
  .ae .ft-col .eyebrow{margin-bottom:20px}
  .ae .ft-col ul{list-style:none;display:flex;flex-direction:column;gap:12px;padding:0}
  .ae .ft-col a{font-family:var(--fn);font-weight:300;font-size:14px;color:rgba(246,241,235,.75)}
  .ae .ft-bottom{padding-top:32px;border-top:1px solid rgba(246,241,235,.1);display:flex;justify-content:space-between;align-items:flex-start;gap:24px;flex-wrap:wrap}
  .ae .ft-legal{font-family:var(--fn);font-weight:300;font-size:12px;color:rgba(246,241,235,.45);line-height:1.7}
  .ae .ft-cr{font-family:var(--fl);font-weight:700;font-size:10px;letter-spacing:.22em;text-transform:uppercase;color:rgba(246,241,235,.45)}
`;

export default function Contact() {
  const aeRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('v');
            observer.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    if (aeRef.current) {
      const elements = aeRef.current.querySelectorAll('.fi');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  const closeMenu = () => setIsMenuOpen(false);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <>
      <section className="pg-hero fi">
        <div className="pg-hero-grid"></div>
        <div className="pg-hero-spot"></div>
        <div className="bx pg-hero-in">
          <div className="eyebrow">Contato</div>
          <h1 className="display">Fale com a <span className="ital">COFCOF.CO</span>.</h1>
          <p className="body-p">Dúvidas sobre assinatura, pedidos, parcerias comerciais ou exportação. A gente responde rápido — sem atendente virtual, sem burocracia.</p>
        </div>
      </section>

      <section className="sec fi">
        <div className="bx">
          <div className="ct-grid">
            <div className="ct-i fi">
              <svg className="ct-svg" viewBox="0 0 32 32">
                <path d="M4 7h24v18H4z"></path>
                <path d="M4 7l12 11L28 7"></path>
              </svg>
              <div className="ct-t">E-mail</div>
              <p className="ct-d">Dúvidas gerais, suporte ao assinante e solicitações formais. Respondemos em até 24h.</p>
              <a href="mailto:contato@cofcof.co" className="lnk ct-link">contato@cofcof.co →</a>
            </div>
            
            <div className="ct-i fi">
              <svg className="ct-svg" viewBox="0 0 32 32">
                <rect x="6" y="3" width="20" height="26" rx="3"></rect>
                <circle cx="16" cy="24" r="1.5" fill="currentColor"></circle>
                <path d="M12 7h8"></path>
              </svg>
              <div className="ct-t">WhatsApp</div>
              <p className="ct-d">Atendimento rápido pra pedidos, trocas e dúvidas. Resposta imediata em horário comercial.</p>
              <a href="https://wa.me/5534998728882?text=Ol%C3%A1!%20Preciso%20de%20ajuda%20com%20a%20COFCOF.CO." target="_blank" rel="noopener noreferrer" className="lnk ct-link">(34) 99872-8882 →</a>
            </div>
            
            <div className="ct-i fi">
              <svg className="ct-svg" viewBox="0 0 32 32">
                <circle cx="16" cy="16" r="12"></circle>
                <path d="M16 8v9l6 3"></path>
              </svg>
              <div className="ct-t">Horário</div>
              <p className="ct-d">Segunda a sexta, das 8h às 17h. Mensagens fora do horário são respondidas no próximo dia útil.</p>
              <span className="ct-link" style={{ color: 'var(--sub)' }}>Horário de Brasília</span>
            </div>
          </div>
        </div>
      </section>

      <section className="sec sec-p fi">
        <div className="bx">
          <div className="info-grid">
            <div className="info-col">
              <div className="eyebrow">Dados oficiais</div>
              <h2 className="display" style={{ color: 'var(--black)' }}>Dados da <span className="ital">empresa</span>.</h2>
              <div>
                <div className="ir">
                  <span className="ir-l">Razão social</span><span className="ir-v">Cof Cof Cafés Especiais do Cerrado LTDA</span>
                </div>
                <div className="ir">
                  <span className="ir-l">CNPJ</span><span className="ir-v">52.639.486/0001-06</span>
                </div>
                <div className="ir">
                  <span className="ir-l">E-mail</span><span className="ir-v"><a href="mailto:contato@cofcof.co">contato@cofcof.co</a></span>
                </div>
                <div className="ir">
                  <span className="ir-l">WhatsApp</span><span className="ir-v"><a href="https://wa.me/5534998728882" target="_blank" rel="noopener noreferrer">(34) 99872-8882</a></span>
                </div>
                <div className="ir">
                  <span className="ir-l">Instagram</span><span className="ir-v"><a href="https://instagram.com/cofcof.company" target="_blank" rel="noopener noreferrer">@cofcof.company</a></span>
                </div>
                <div className="ir">
                  <span className="ir-l">Região</span><span className="ir-v">Patrocínio · MG · Cerrado Mineiro</span>
                </div>
                <div className="ir">
                  <span className="ir-l">Horário</span><span className="ir-v">Seg–Sex, 8h–17h</span>
                </div>
              </div>
            </div>

            <div className="info-col">
              <div className="eyebrow">Dúvidas rápidas</div>
              <h2 className="display" style={{ color: 'var(--black)' }}>Perguntas <span className="ital">comuns</span>.</h2>
              <div className="fq">
                
                <div className={`fq-i ${openFaq === 0 ? 'o' : ''}`}>
                  <button className="fq-q" onClick={() => toggleFaq(0)}>
                    <span className="fq-qt">Como cancelo minha assinatura?</span>
                    <span className="fq-ic">+</span>
                  </button>
                  <div className="fq-a">
                    <div className="fq-ai">
                      <p className="fq-at">Direto na sua área de assinante, sem precisar falar com ninguém. Sem multa, sem contrato. Se preferir, pode fazer pelo WhatsApp ou e-mail também.</p>
                    </div>
                  </div>
                </div>

                <div className={`fq-i ${openFaq === 1 ? 'o' : ''}`}>
                  <button className="fq-q" onClick={() => toggleFaq(1)}>
                    <span className="fq-qt">Meu pedido não chegou. E agora?</span>
                    <span className="fq-ic">+</span>
                  </button>
                  <div className="fq-a">
                    <div className="fq-ai">
                      <p className="fq-at">Entre em contato pelo WhatsApp ou e-mail com o número do pedido. A gente rastreia o envio e resolve rápido. Se houver extravio, reenviamos sem custo.</p>
                    </div>
                  </div>
                </div>

                <div className={`fq-i ${openFaq === 2 ? 'o' : ''}`}>
                  <button className="fq-q" onClick={() => toggleFaq(2)}>
                    <span className="fq-qt">Quero trocar o plano. Como faço?</span>
                    <span className="fq-ic">+</span>
                  </button>
                  <div className="fq-a">
                    <div className="fq-ai">
                      <p className="fq-at">Acesse sua área de assinante e altere o plano. A mudança entra em vigor no próximo ciclo de cobrança. Sem custo adicional.</p>
                    </div>
                  </div>
                </div>

                <div className={`fq-i ${openFaq === 3 ? 'o' : ''}`}>
                  <button className="fq-q" onClick={() => toggleFaq(3)}>
                    <span className="fq-qt">Vocês atendem empresas?</span>
                    <span className="fq-ic">+</span>
                  </button>
                  <div className="fq-a">
                    <div className="fq-ai">
                      <p className="fq-at">Sim. Planos a partir de 10kg/mês com preço personalizado pra cafeterias, escritórios, hotéis e coworkings. <Link to="/empresas">Saiba mais na página Empresas</Link>.</p>
                    </div>
                  </div>
                </div>

                <div className={`fq-i ${openFaq === 4 ? 'o' : ''}`}>
                  <button className="fq-q" onClick={() => toggleFaq(4)}>
                    <span className="fq-qt">Exportam pro exterior?</span>
                    <span className="fq-ic">+</span>
                  </button>
                  <div className="fq-a">
                    <div className="fq-ai">
                      <p className="fq-at">Sim. Café torrado e grãos verdes para qualquer país. <Link to="/empresas#exportacao">Veja os detalhes na seção de exportação</Link>.</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-end fi">
        <div className="bx cta-end-in">
          <div className="eyebrow">Parcerias · Empresas</div>
          <h2 className="display">Quer servir Cof Cof<br />no seu <span className="ital">negócio</span>?</h2>
          <p className="body-p">Cafeterias, escritórios, hotéis, restaurantes e coworkings. Condições especiais pra volume a partir de 10kg/mês.</p>
          <Link to="/empresas" className="btn"><span>Ver planos pra empresas →</span></Link>
        </div>
      </section>
    </>
  );
}
