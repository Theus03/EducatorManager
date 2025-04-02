export default function Contact() {
    return(
        <div className="flex flex-col justify-content-center items-center mt-12 max-[1440px]:w-full" >
            <div className="flex flex-col justify-start items-start mt-4 max-[1440px]:justify-center max-[1440px]:items-center">
                <h1 className="text-brown text-4xl font-black max-[1440px]:items-center max-[680px]:text-2xl">Entre em <b className="text-orange">Contato</b></h1>
                <div id="form" className="w-full flex gap-3 mt-4 mb-16 max-[1440px]:justify-center max-[1440px]:mt-6 max-[680px]:flex-col">
                    <input type="email" id="inputEmail" className="w-3xl p-4 border-brown rounded-lg text-lg placeholder:font-medium placeholder:text-lg max-[1440px]:w-lg max-[680px]:w-96 max-[680px]:placeholder:text-sm" placeholder="Digite aqui seu melhor email para entrarmos em contato..." />
                    <button className="p-4 bg-orange w-48 text-2xl text-white rounded font-black cursor-pointer  hover:translate-x-2 transition-all duration-300 ease-in-out max-[680px]:w-96">Enviar</button>
                </div>
            </div>
        </div>   
    )
}