import Image from "next/image";

export default function Header() {
    return (
        <div className="flex justify-items-center">
            <Image
                className=""
                src="/logo.svg"
                alt="Educator Manager logo"
                width={180}
                height={38}
                priority
                />
            <nav >

            </nav>
        </div>
    )
}