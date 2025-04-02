"use client"

import Image from "next/image";

export default function Header() {
    return (
        <div className="w-full flex justify-center items-center p-8">
            <nav className="w-full flex justify-evenly items-center max-[360px]:flex-col pl-16 max-[1000px]:justify-center">
                <div className="flex">
                    <Image
                        className="lg:w-48 md:w-48 max-[640px]:w-24"
                        src="logo.svg"
                        alt="Educator Manager logo"
                        width={180}
                        height={38}
                        priority
                    />

                </div>
                <div className="flex max-[1000px]:ml-12">
                    <ul className="flex items-center lg:gap-16 md:gap-12 sm:gap-8">
                        <li className="menu-active cursor-pointer p-2 w-28 text-center rounded-4xl font-bold transition-all menu-hover max-[640px]:w-20 max-[640px]:text-sm">Home</li>
                        <li className="cursor-pointer p-2 w-28 text-center rounded-4xl font-bold transition-all menu-hover max-[640px]:w-20 max-[640px]text-sm">Sobre</li>
                        <li className="cursor-pointer p-2 w-28 text-center rounded-4xl font-bold transition-all menu-hover max-[640px]:w-20 max-[640px]text-sm">Contato</li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}
