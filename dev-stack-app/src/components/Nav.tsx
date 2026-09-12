import { useState } from 'react';
import Logo from '../assets/logo-text.png';
import Hamburger from '../ui/hamburger.png';

const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="sticky top-0 z-10 bg-white border-b border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-1 focus:outline-none cursor-pointer"
                        aria-label="Toggle menu">
                        <img src={Hamburger} alt="Menu" className="w-5 h-5 object-contain" />
                    </button>

                    <a href="#home">
                        <img src={Logo} alt="DevStack Logo" className="h-7 sm:h-8 w-auto" />
                    </a>
                </div>

                <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
                    <a href="#home" className="text-[#db2777] font-semibold">
                        Home
                    </a>
                    <a href="#technologies" className="text-gray-600 hover:text-[#db2777] transition-colors">
                        Technologies
                    </a>
                    <a href="#projects" className="text-gray-600 hover:text-[#db2777] transition-colors">
                        Projects
                    </a>
                    <a href="#about" className="text-gray-600 hover:text-[#db2777] transition-colors">
                        About
                    </a>
                    <a href="#contact" className="text-gray-600 hover:text-[#db2777] transition-colors">
                        Contact
                    </a>
                </nav>

                <div className="flex items-center gap-3 sm:gap-6">
                    <a href="#sign-in" className="text-sm font-medium text-gray-700 hover:text-[#db2777] transition-colors">
                        Sign In
                    </a>
                    <a href="#sign-up" className="bg-[#db2777] hover:bg-[#be185d] text-white px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-colors shadow-sm">
                        Sign Up
                    </a>
                </div>

            </div>

            {isOpen && (
                <div className="md:hidden border-t border-gray-100 px-6 py-4 bg-white flex flex-col gap-4 text-sm font-medium">
                    <a href="#home" onClick={() => setIsOpen(false)} className="text-[#db2777] font-semibold">
                        Home
                    </a>
                    <a href="#technologies" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-[#db2777] transition-colors">
                        Technologies
                    </a>
                    <a href="#projects" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-[#db2777] transition-colors">
                        Projects
                    </a>
                    <a href="#about" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-[#db2777] transition-colors">
                        About
                    </a>
                    <a href="#contact" onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-[#db2777] transition-colors">
                        Contact
                    </a>
                </div>
            )}
        </header>
    );
};

export default Nav;