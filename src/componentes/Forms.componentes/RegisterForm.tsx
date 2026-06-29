import { auth } from "../../firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterForm() {
  const [nome, setNome] = useState("");
  const [cpf, setCpf] = useState("");
  const [telefone, setTelefone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      // Cria usuário no Firebase com email e senha
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      console.log("Usuário registrado!");
      console.log(userCredential.user);

      // Aqui você pode salvar nome, cpf e telefone em Firestore
      // Exemplo: await setDoc(doc(db, "users", userCredential.user.uid), { nome, cpf, telefone, email });

      // Redireciona para Home
      navigate("/");

    } catch (error: any) {
      console.error("Erro ao registrar:", error.code, error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col gap-5 mt-4">
      {/* Nome completo */}
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor="nome" className="text-sm font-light text-cream-dim font-inter">
          Nome completo
        </label>
        <input
          id="nome"
          type="text"
          required
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Seu nome completo"
          className="w-full bg-black-soft border border-line rounded-lg px-4 py-3 text-cream"
        />
      </div>

      {/* CPF */}
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor="cpf" className="text-sm font-light text-cream-dim font-inter">
          CPF
        </label>
        <input
          id="cpf"
          type="text"
          required
          value={cpf}
          onChange={(e) => setCpf(e.target.value)}
          placeholder="000.000.000-00"
          className="w-full bg-black-soft border border-line rounded-lg px-4 py-3 text-cream"
        />
      </div>

      {/* Telefone */}
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor="telefone" className="text-sm font-light text-cream-dim font-inter">
          Telefone
        </label>
        <input
          id="telefone"
          type="tel"
          required
          value={telefone}
          onChange={(e) => setTelefone(e.target.value)}
          placeholder="(11) 99999-9999"
          className="w-full bg-black-soft border border-line rounded-lg px-4 py-3 text-cream"
        />
      </div>

      {/* E-mail */}
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
          className="w-full bg-black-soft border border-line rounded-lg px-4 py-3 text-cream"
        />
      </div>

      {/* Senha */}
      <div className="flex flex-col gap-1.5 w-full">
        <label htmlFor="password" className="text-sm font-light text-cream-dim font-inter">
          Senha
        </label>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="••••••••"
          className="w-full bg-black-soft border border-line rounded-lg px-4 py-3 text-cream"
        />
      </div>

      {/* Botão de Registrar */}
      <button
        type="submit"
        className="w-full bg-pink-main hover:bg-pink-light text-cream font-inter text-sm font-medium tracking-wide rounded-lg py-3 mt-2 cursor-pointer transition-all duration-300 ease-in-out shadow-md hover:shadow-pink-neon"
      >
        Criar conta
      </button>
    </form>
  );
}
