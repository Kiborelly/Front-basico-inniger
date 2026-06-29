import Logo from "../componentes/Logo.componentes/Logo";
import SocialButton from "../componentes/LoginButton.componentes/LoginButton";
import LoginForm from "../componentes/Forms.componentes/LoginForm";

export default function Login() {
    return (
        <div className="flex flex-row bg-black-soft min-h-screen place-content-between max-[720px]:justify-center max-[720px]:items-center">
            <div className="flex justify-center items-center bg-black-soft w-[50vw]">      
                <div className="bg-none p-[20px] rounded-[10px] w-[400px] flex flex-col justify-center items-center place-content-between">
                    <div>
                        <div className="bg-none p-[20px]"><Logo /></div>
                    </div>
                    <div>
                        <h1 className=" bg-none text-[clamp(2rem,2vw,4.4rem)]">
                            Seja bem-vindo(a)
                        </h1>
                    </div>
                    <div className="">
                        <div className="bg-none">
                            <LoginForm />
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-[20px] p-[20px]">
                        <p>Ou</p>
                        <div className="flex flex-row justify-center items-center gap-4 w-full mt-2">
                            <SocialButton
                              icon="/icons/google.svg"
                              text="Google"
                              onClick={() => {}}
                            />
                            <SocialButton
                                icon="/icons/facebook.svg"
                                text="Facebook"
                                onClick={() => {}}
                            />
                        </div>
                    </div>
                </div>
            </div >      
            <div className="w-[50vw] h-screen flex items-center justify-center bg-amber-300 max-[720px]:hidden">
                <img src="/img/fundo-principal-2.png" alt="Ambiente escuro e elegante" className="w-full h-full object-cover brightness-40 saturate-100" />
            </div>
        </div>
    )
}
