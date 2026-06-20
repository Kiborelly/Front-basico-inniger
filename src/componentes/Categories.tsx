import "./Categories.css";

export default function Categories() {
    return (
        <section className="categories" id="categorias">
            <div className="section-head reveal">
                <span className="eyebrow">Navegue por Curadoria</span>
                <h2>Coleções selecionadas</h2>
                <p>Cada categoria foi organizada para facilitar sua escolha — do primeiro passo à exploração avançada.</p>
            </div>
            <div className="cat-grid">
                <div className="cat-card reveal">
                    <img src="/img/logo-rosa-sem-fundo.png" alt="Categoria Essenciais" />
                    <div className="cat-label">
                        <span className="eyebrow">12 Itens</span>
                        <h3>Essenciais <span className="arrow">→</span></h3>
                    </div>
                </div>
                <div className="cat-card reveal">
                    <img src="/img/logo-rosa-sem-fundo.png" alt="Categoria Casal" />
                    <div className="cat-label">
                        <span className="eyebrow">18 Itens</span>
                        <h3>Para Casais <span className="arrow">→</span></h3>
                    </div>
                </div>
                <div className="cat-card reveal">
                    <img src="/img/logo-rosa-sem-fundo.png" alt="Categoria Wellness" />
                    <div className="cat-label">
                        <span className="eyebrow">9 Itens</span>
                        <h3>Óleos & Wellness <span className="arrow">→</span></h3>
                    </div>
                </div>
                <div className="cat-card reveal">
                    <img src="/img/logo-rosa-sem-fundo.png" alt="Categoria Lingerie" />
                    <div className="cat-label">
                        <span className="eyebrow">24 Itens</span>
                        <h3>Lingerie Fine <span className="arrow">→</span></h3>
                    </div>
                </div>
            </div>
        </section>
    )
}