import Image from "next/image"

export default function Slogan()  {
  return (
    <div id="home" className="w-full flex flex-col gap-4 mt-6 justify-center items-center max-[680px]:gap-2">
        <h4 className="text-orange font-bold mt-4 text-2xl mb-2 max-[1180px]:text-lg">EducatorManager</h4>
        <Image
          src="Pencil.svg"
          alt="Pencil"
          width={96}
          height={96}
          className="flex absolute left-80 top-32 float max-[1750px]:hidden"
          />
        <Image
          src="Computer.svg"
          alt="Pencil"
          width={96}
          height={96}
          className="flex absolute left-80 bottom-80 float max-[1750px]:hidden"
          />
        <h1 className="text-brown flex flex-col text-6xl font-black tracking-wide space-y-4 text-center max-[1180px]:text-5xl max-[680px]:text-3xl">
            <div>Transformando o ensino</div>
            <div>com gestão inteligente.</div>
        </h1>
        <Image
          src="Books.svg"
          alt="Pencil"
          width={96}
          height={96}
          className="flex absolute right-80 top-32 float max-[1750px]:hidden"
          />
        <Image
          src="Homework.svg"
          alt="Pencil"
          width={96}
          height={96}
          className="flex absolute right-80 bottom-80 float max-[1750px]:hidden"
          />
        <h4 className="text-brown font-normal text-center mt-8 text-2xl mb-2 max-[1180px]:text-lg max-[680px]:text-xs max-[500px]:pl-6 max-[500px]:pr-6">Sistema de Gestão para Escolas, Colégios Públicos e Privados, e Professores.</h4>
        <button className="bg-orange text-white mt-8 font-black text-2xl p-6 rounded-2xl w-64 cursor-pointer hover:translate-x-2 transition-all duration-300 ease-in-out max-[680px]:p-4 max-[680px]:text-lg max-[680px]:w-48">Saiba Mais</button>
    </div>
  )
};
