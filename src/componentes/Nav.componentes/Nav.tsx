import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

import "./Nav.css";

export default function Nav() {
  const authContext = useAuth();
  const navigate = useNavigate();

  return (
    <header>
      <img src="/img/logo-rosa-sem-fundo.png" alt="logo da marca" />

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
        {authContext?.user ? (
          <button onClick={() => navigate("/account")} className="icon-btn">👤</button>
        ) : (
          <Link to="/login" className="icon-btn">👤</Link>
        )}
        <div className="icon-btn">
          ⛃
          <span className="cart-count">0</span>
        </div>
        <div className="menu-toggle">☰</div>
      </div>
    </header>
  );
}
