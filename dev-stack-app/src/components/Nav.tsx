import { useState } from 'react';
import Logo from '../assets/logo-text.png';

const Nav = () => {
    const [activeNav, setActiveNav] = useState('Home');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Technologies', href: '#technologies' },
        { name: 'Projects', href: '#projects' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    const handleNavClick = (name: string) => {
        setActiveNav(name);
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-sm border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 sm:h-20">
                    <div className="flex items-center gap-2 sm:gap-3">
                        <button
                            type="button"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="md:hidden p-2 -ml-1 text-slate-700 hover:text-[#db2777] hover:bg-slate-50 rounded-lg transition-colors focus:outline-none"
                            aria-label="Toggle navigation menu"
                            aria-expanded={isMobileMenuOpen}>
                            {isMobileMenuOpen ? (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="2"
                                    stroke="currentColor">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5"
                                    />
                                </svg>
                            )}
                        </button>

                        <a href="#" className="flex items-center">
                            <img
                                src={Logo}
                                alt="DevStack Logo"
                                className="h-7 sm:h-8 w-auto object-contain"
                            />
                        </a>
                    </div>
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => {
                            const isActive = activeNav === link.name;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => handleNavClick(link.name)}
                                    className={`text-sm transition-colors ${isActive
                                        ? 'text-[#db2777] font-semibold'
                                        : 'text-slate-600 font-medium hover:text-[#db2777]'
                                        }`}>
                                    {link.name}
                                </a>
                            );
                        })}
                    </nav>
                    <div className="flex items-center gap-3 sm:gap-6">
                        <a
                            href="#sign-in"
                            className="text-sm font-medium text-slate-700 hover:text-[#db2777] transition-colors">
                            Sign In
                        </a>
                        <a
                            href="#sign-up"
                            className="inline-flex items-center justify-center px-4 py-2 sm:px-6 sm:py-2.5 text-sm font-semibold text-white bg-[#db2777] hover:bg-[#be185d] active:scale-95 rounded-full shadow-sm hover:shadow transition-all duration-200">
                            Sign Up
                        </a>
                    </div>
                </div>
            </div>
            {isMobileMenuOpen && (
                <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-5 shadow-lg">
                    <nav className="flex flex-col space-y-1">
                        {navLinks.map((link) => {
                            const isActive = activeNav === link.name;
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => handleNavClick(link.name)}
                                    className={`px-3 py-2.5 rounded-lg text-base transition-colors ${isActive
                                        ? 'bg-pink-50 text-[#db2777] font-semibold'
                                        : 'text-slate-600 font-medium hover:bg-slate-50 hover:text-[#db2777]'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            );
                        })}
                    </nav>
                </div>
            )}
        </header>
    );
};

export default Nav;