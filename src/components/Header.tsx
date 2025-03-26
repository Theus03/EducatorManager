import Image from "next/image";

export default function Header() {
    return (
        <div className="w-screen flex justify-items-center items-center">
            <nav className="flex items-center gap-16" >
                <Image
                    className=""
                    src="/logo.svg"
                    alt="Educator Manager logo"
                    width={180}
                    height={38}
                    priority
                    />
                <ul className="flex gap-8">
                    <li>Home</li>
                    <li>Sobre</li>
                    <li>Contato</li>
                </ul>
            </nav>
        </div>
    )
}