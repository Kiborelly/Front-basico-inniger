import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <div>
            <div>
                <Link to="/">
                    <img src="/img/logo-rosa-sem-fundo.png" alt="logo da marca" />
                </Link>
            </div>
        </div>
    );
}