export default function Contact() {
    return(
        <div className="flex flex-col justify-content-center items-center mt-12">
            <div className="w-7xl flex flex-col justify-start items-start mt-4">
                <h1 className="text-brown text-4xl font-black">Entre em <b className="text-orange">Contato</b></h1>
                <div id="form" className="w-full flex gap-3 mt-4 mb-16">
                    <input type="email" id="inputEmail" className="w-3xl p-4 border-brown rounded-lg text-lg placeholder:font-medium placeholder:text-lg" placeholder="Digite aqui seu melhor email para entrarmos em contato..." />
                    <button className="p-4 bg-orange w-48 text-2xl text-white rounded font-black cursor-pointer  hover:translate-x-2 transition-all duration-300 ease-in-out">Enviar</button>
                </div>
            </div>
        </div>   
    )
}