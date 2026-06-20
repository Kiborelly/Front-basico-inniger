import "./Header.css";

export default function Header() {
    return (
        <header>
            <a href="#" className="logo">
                NOIR<span className="carac-esp">&amp;</span>OR
            </a>

            <nav>
                <ul>
                    <li><a href="#categorias">Categorias</a></li>
                    <li><a href="#produtos">Produtos</a></li>
                    <li><a href="#discricao">Discrição</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#contato">Contato</a></li>
                </ul>
            </nav>

            <div className="nav-actions">
                <div className="icon-btn">⌕</div>
                <div className="icon-btn">👤</div>

                <div className="icon-btn">
                    ⛃
                    <span className="cart-count">0</span>
                </div>

                <div className="menu-toggle">☰</div>
            </div>
        </header>
    );
}