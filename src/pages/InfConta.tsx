import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function Account() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Usuário saiu!");
      navigate("/"); // volta para Home
    } catch (error) {
      console.error("Erro ao sair:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black-soft">
      <button
        onClick={handleLogout}
        className="bg-pink-main text-white px-6 py-3 rounded-lg shadow-md hover:bg-pink-light transition-all duration-300"
      >
        Sair
      </button>
    </div>
  );
}
