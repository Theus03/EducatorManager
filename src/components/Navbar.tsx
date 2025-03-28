"use client"

import Image from "next/image";

export default function Header() {
    return (
        <div className="w-screen flex justify-center items-center">
            <nav className="flex items-center lg:gap-32 md:gap-24 sm:gap-16 p-8 max-[360px]:flex-col gap-2">
                <Image
                    className="lg:w-48 md:w-48 max-[640px]:w-24"
                    src="/logo.svg"
                    alt="Educator Manager logo"
                    width={180}
                    height={38}
                    priority
                />
                
                <ul className="flex items-center lg:gap-24 md:gap-16 sm:gap-12">
                    <li className="menu-active cursor-pointer p-2 w-28 text-center rounded-4xl font-bold transition-all menu-hover max-[640px]:w-20 max-[640px]:text-sm">Home</li>
                    <li className="cursor-pointer p-2 w-28 text-center rounded-4xl font-bold transition-all menu-hover max-[640px]:w-20 max-[640px]text-sm">Sobre</li>
                    <li className="cursor-pointer p-2 w-28 text-center rounded-4xl font-bold transition-all menu-hover max-[640px]:w-20 max-[640px]text-sm">Contato</li>
                </ul>
            </nav>
        </div>
    );
}
