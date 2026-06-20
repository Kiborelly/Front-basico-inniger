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
                    <img src="https://images.unsplash.com/photo-1612817159949-195b6eb9e31a?q=80&w=900&auto=format&fit=crop" alt="Categoria Essenciais" />
                    <div className="cat-label">
                        <span className="eyebrow">12 Itens</span>
                        <h3>Essenciais <span className="arrow">→</span></h3>
                    </div>
                </div>
                <div className="cat-card reveal">
                    <img src="https://images.unsplash.com/photo-1571781926291-c477ebfd024b?q=80&w=900&auto=format&fit=crop" alt="Categoria Casal" />
                    <div className="cat-label">
                        <span className="eyebrow">18 Itens</span>
                        <h3>Para Casais <span className="arrow">→</span></h3>
                    </div>
                </div>
                <div className="cat-card reveal">
                    <img src="https://images.unsplash.com/photo-1583744946564-b52ac1c389c8?q=80&w=900&auto=format&fit=crop" alt="Categoria Wellness" />
                    <div className="cat-label">
                        <span className="eyebrow">9 Itens</span>
                        <h3>Óleos & Wellness <span className="arrow">→</span></h3>
                    </div>
                </div>
                <div className="cat-card reveal">
                    <img src="https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=900&auto=format&fit=crop" alt="Categoria Lingerie" />
                    <div className="cat-label">
                        <span className="eyebrow">24 Itens</span>
                        <h3>Lingerie Fine <span className="arrow">→</span></h3>
                    </div>
                </div>
            </div>
        </section>
    )
}