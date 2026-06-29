import { auth } from "../../firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useState, type FormEvent } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("Login realizado!");
      console.log(userCredential.user);

      // Redireciona para Home
      navigate("/");

    } catch (error: any) {
      console.error("Erro ao logar:", error.code, error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 mt-4">
      {/* Input de E-mail */}
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor="email" className="text-sm font-light text-cream-dim font-inter">
          E-mail
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="seu@email.com"
          className="w-full bg-black-soft border border-line rounded-lg px-4 py-3 
                     text-cream font-inter text-sm font-light placeholder:text-cream-faint
                     focus:outline-none focus:border-pink-main focus:ring-1 focus:ring-pink-main
                     transition-all duration-200"
        />
      </div>

      {/* Input de Senha */}
      <div className="flex flex-col gap-1.5 w-full">
        <div className="flex justify-between items-center">
          <label htmlFor="password" className="text-sm font-light text-cream-dim font-inter">
            Senha
          </label>
          <a href="#" className="text-xs font-light text-pink-light hover:text-pink-main transition-colors font-inter">
            Esqueceu a senha?
          </a>
        </div>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full bg-black-soft border border-line rounded-lg px-4 py-3 
                     text-cream font-inter text-sm font-light placeholder:text-cream-faint
                     focus:outline-none focus:border-pink-main focus:ring-1 focus:ring-pink-main
                     transition-all duration-200"
        />
      </div>

      {/* Link para registro */}
      <div className="text-center">
        <Link
          to="/register"
          className="text-sm text-pink-light hover:text-pink-main transition-colors font-inter"
        >
          Não tem conta? Registre-se
        </Link>
      </div>

      {/* Botão de Enviar */}
      <button
        type="submit"
        className="w-full bg-pink-main hover:bg-pink-light 
                   text-cream font-inter text-sm font-medium tracking-wide
                   rounded-lg py-3 mt-2 cursor-pointer
                   transition-all duration-300 ease-in-out
                   shadow-md hover:shadow-pink-neon"
      >
        Entrar na conta
      </button>
    </form>
  );
}
