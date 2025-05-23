export default function About() {
    return (
        <div id="sobre" className="flex w-full flex-col justify-center items-center mt-12">
            <div className="min-[1440px]:w-7xl flex flex-wrap flex-col justify-start items-start mt-4 max-[1440px]:w-full max-[1440px]:justify-center max-[1440px]:flex max-[1440px]:items-center" >
                <h1 className="text-brown text-4xl font-black max-[1440px]:items-center max-[680px]:text-2xl "><b className="text-orange">Sobre</b> a EducatorManager</h1>
                <p className="text-brown font-medium text-2xl mt-6 space-y-4 leading-relaxed max-[1440px]:text-center max-[680px]:text-xl max-[680px]:pl-16 max-[680px]:pr-16">
                    A Educator Manager é uma plataforma de gestão escolar desenvolvida para atender tanto escolas públicas quanto privadas, além de professores. Seu objetivo principal é otimizar a administração de instituições de ensino, facilitando o gerenciamento de processos administrativos, pedagógicos e de comunicação entre os diversos envolvidos na comunidade escolar, como alunos, pais, professores e gestores.
                </p>
            </div>
        </div>
    )
}