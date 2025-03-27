"use client"

import { useState } from 'react';
import Image from "next/image";
import { FaBars, FaTimes } from 'react-icons/fa'; 

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false); 

    const toggleMenu = () => setMenuOpen(!menuOpen); 

    return (
        <div className="w-screen flex justify-center items-center">
            <nav className="flex items-center lg:gap-32 md:gap-24 sm:gap-16 p-8">
                <Image
                    className="md:w-48 sm:w-24"
                    src="/logo.svg"
                    alt="Educator Manager logo"
                    width={180}
                    height={38}
                    priority
                />
                
                <ul className={`flex lg:gap-24 md:gap-16 sm:gap-12 items-center ${menuOpen ? "flex-col absolute top-16 left-0 w-full bg-white p-4" : "lg:flex md:flex hidden"}`}>
                    <li className="menu-active cursor-pointer p-2 w-28 text-center rounded-4xl font-bold transition-all menu-hover">Home</li>
                    <li className="cursor-pointer p-2 w-28 text-center rounded-4xl font-bold transition-all menu-hover">Sobre</li>
                    <li className="cursor-pointer p-2 w-28 text-center rounded-4xl font-bold transition-all menu-hover">Contato</li>
                </ul>
                
                <button 
                    className="lg:hidden md:hidden sm:block text-3xl p-2" 
                    onClick={toggleMenu}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />} 
                </button>
            </nav>
        </div>
    );
}
