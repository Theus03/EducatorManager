export default function Numbers() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="bg-brown w-7xl p-10 rounded-l-4xl rounded-bl-none rounded-br-4xl rounded-r-none flex max-[1440px]:flex-col max-[1440px]:w-lg">
                <div className="flex flex-col gap-4 text-white text-center justify-center items-center w-4/12 max-[1440px]:w-full">
                    <span className="text-6xl font-black">+86</span>
                    <span className="text-2xl font-black">Escolas e Colégios</span>
                </div>
                <hr className="inline-block h-[150px] min-h-[0.2em] w-0.5 self-stretch bg-neutral-100 max-[1440px]:h-[2px] max-[1440px]:w-[390px] max-[1440px]:m-8"/>
                <div className="flex flex-col gap-4 text-white text-center justify-center items-center w-4/12 max-[1440px]:w-full">
                    <span className="text-6xl font-black">+100</span>
                    <span className="text-2xl font-black">Alunos e Professores satisfeitos</span>
                </div>
                <hr className="inline-block h-[150px] min-h-[0.2em] w-0.5 self-stretch bg-neutral-100 max-[1440px]:h-[2px] max-[1440px]:w-[390px] max-[1440px]:m-8"/>
                <div className="flex flex-col gap-4 text-white text-center justify-center items-center w-4/12 max-[1440px]:w-full">
                    <span className="text-6xl font-black">+50</span>
                    <span className="text-2xl font-black">Novas Matérias</span>
                </div>
            </div>
        </div>
    )
}