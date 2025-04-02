"use client"

import Image from "next/image";
import Link from "next/link";

export default function Header() {
    return (
        <div className="w-full flex justify-center items-center p-8">
            <nav className="w-full flex justify-evenly items-center max-[360px]:flex-col pl-16 max-[1000px]:justify-center max-[500px]:flex-col max-[500px]:pl-0 max-[500px]:gap-4">
                <div>
                    <Image
                        className="lg:w-48 md:w-48 max-[640px]:w-32"
                        src="logo.svg"
                        alt="Educator Manager logo"
                        width={180}
                        height={38}
                        priority
                    />

                </div>
                <div className="flex max-[1000px]:ml-12 max-[500px]:ml-0">
                    <div className="flex items-center lg:gap-16 md:gap-12 sm:gap-8">
                        <Link href="#home" className="menu-active cursor-pointer p-2 w-28 text-center rounded-4xl font-bold transition-all menu-hover max-[640px]:w-20 max-[640px]:text-sm">Home</Link>
                        <Link href="#sobre" className="cursor-pointer p-2 w-28 text-center rounded-4xl font-bold transition-all menu-hover max-[640px]:w-20 max-[640px]text-sm">Sobre</Link>
                        <Link href="#contato" className="cursor-pointer p-2 w-28 text-center rounded-4xl font-bold transition-all menu-hover max-[640px]:w-20 max-[640px]text-sm">Contato</Link>
                    </div>
                </div>
            </nav>
        </div>
    );
}
