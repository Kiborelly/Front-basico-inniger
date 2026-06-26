import Logo from "../componentes/Logo.componentes/Logo";

export default function Login() {
    return (
        <div className="flex flex-row bg-gray-400 justify-center min-[721px]:justify-between">
            <div className="flex justify-center items-center bg-blue-700 w-[50vw]">      
                <div className="bg-pink-500 p-[10px] rounded-[10px] w-[400px] flex flex-col justify-center items-center place-content-between">
                    <div>
                        <div className="bg-[#eb0a0a]"><Logo /></div>
                    </div>
                    <form className="">
                        <div className="bg-[#21a632]">
                            <p>Form content</p>
                            <p>Form content</p>
                            <p>Form content</p>
                            <p>Form content</p>
                            <p>Form content</p>
                            <p>Form content</p>
                        </div>
                    </form>
                    <div>
                        <p>Or</p>
                        <div>
                            <a>google</a>
                            <a>facebook</a>
                        </div>
                    </div>
                </div>
            </div >      
            <div className="w-[50vw] h-screen flex items-center justify-center bg-amber-300 max-[720px]:hidden">
                <img src="/img/fundo-principal-2.png" alt="Ambiente escuro e elegante" />
            </div>
        </div>
    )
}
