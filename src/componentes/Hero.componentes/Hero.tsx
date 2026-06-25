import "./Hero.css";

export default function Hero() {
    return (
        <section className="hero">
          <div className="hero-bg">
            <img src="/img/fundo-principal-2.png" alt="Ambiente escuro e elegante" />
          </div>
          <div className="hero-content">
            <span className="eyebrow">Curadoria Premium · Desde 2016</span>
           <h1>O prazer merece <em>sofisticação</em>.</h1>
            <p>Uma boutique de bem-estar íntimo pensada para quem valoriza discrição, qualidade de materiais e uma experiência de compra à altura do momento.</p>
            <div className="btn-group">
              <a href="#produtos" className="btn btn-primary">Explorar Coleção →</a>
              <a href="#discricao" className="btn btn-outline">Como funciona a entrega</a>
            </div>
          </div>
          <div className="hero-trust">
            <div className="trust-item"><span className="ico">✦</span><div className="txt"><strong>Embalagem neutra</strong>Sem identificação externa</div></div>
            <div className="trust-item"><span className="ico">✦</span><div className="txt"><strong>Fatura discreta</strong>Nome genérico na cobrança</div></div>
            <div className="trust-item"><span className="ico">✦</span><div className="txt"><strong>Materiais certificados</strong>Silicone medicinal e ABS premium</div></div>
            <div className="trust-item"><span className="ico">✦</span><div className="txt"><strong>Frete em 24-48h</strong>Todo o Brasil</div></div>
        </div>
        </section>
    );
}




