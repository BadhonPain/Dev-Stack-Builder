import Logo from '../assets/logo-text.png';

const Footer = () => {
    return (
        <footer className="bg-white border-t border-gray-100 mt-20">
            <div className="max-w-7xl mx-auto px-6 py-12">

                {/* Mobile View*/}
                <div className="md:hidden flex flex-col items-center text-center">
                    <a href="#home">
                        <img src={Logo} alt="DevStack Logo" className="h-8 w-auto" />
                    </a>

                    <p className="mt-4 text-sm text-[#64748B] leading-relaxed max-w-xs">
                        Curated tools, technologies, and resources for developers building modern software.
                    </p>

                    <div className="flex items-center justify-center gap-3 mt-4 text-sm font-medium text-[#64748B]">
                        <a href="https://github.com/BadhonPain" target="_blank" rel="noreferrer" className="hover:text-[#db2777] transition-colors">
                            GitHub
                        </a>
                        <span className="text-gray-400">•</span>
                        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#db2777] transition-colors">
                            Twitter
                        </a>
                        <span className="text-gray-400">•</span>
                        <a href="https://www.linkedin.com/in/badhon-pain-634341378/" target="_blank" rel="noreferrer" className="hover:text-[#db2777] transition-colors">
                            LinkedIn
                        </a>
                    </div>
                </div>

                {/* PC view */}
                <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
                    {/* Brand Info */}
                    <div className="lg:col-span-2">
                        <a href="#home">
                            <img src={Logo} alt="DevStack Logo" className="h-8 w-auto" />
                        </a>
                        <p className="mt-4 text-sm text-[#64748B] leading-relaxed max-w-sm">
                            Curated tools, technologies, and resources for developers building modern software.
                        </p>
                        <div className="flex items-center gap-5 mt-6 text-sm font-medium text-gray-600">
                            <a href="https://github.com/BadhonPain" target="_blank" rel="noreferrer" className="hover:text-[#db2777] transition-colors">
                                GitHub
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-[#db2777] transition-colors">
                                Twitter
                            </a>
                            <a href="https://www.linkedin.com/in/badhon-pain-634341378/" target="_blank" rel="noreferrer" className="hover:text-[#db2777] transition-colors">
                                LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Product Column */}
                    <div>
                        <h4 className="text-xs font-bold text-[#0F172A] tracking-wider uppercase mb-4">
                            Product
                        </h4>
                        <ul className="space-y-3 text-sm text-[#64748B]">
                            <li>
                                <a href="#home" className="hover:text-[#db2777] transition-colors">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#technologies" className="hover:text-[#db2777] transition-colors">
                                    Technologies
                                </a>
                            </li>
                            <li>
                                <a href="#projects" className="hover:text-[#db2777] transition-colors">
                                    Projects
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Company Column */}
                    <div>
                        <h4 className="text-xs font-bold text-[#0F172A] tracking-wider uppercase mb-4">
                            Company
                        </h4>
                        <ul className="space-y-3 text-sm text-[#64748B]">
                            <li>
                                <a href="#about" className="hover:text-[#db2777] transition-colors">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#contact" className="hover:text-[#db2777] transition-colors">
                                    Contact
                                </a>
                            </li>
                            <li>
                                <a href="#careers" className="hover:text-[#db2777] transition-colors">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Legal Column */}
                    <div>
                        <h4 className="text-xs font-bold text-[#0F172A] tracking-wider uppercase mb-4">
                            Legal
                        </h4>
                        <ul className="space-y-3 text-sm text-[#64748B]">
                            <li>
                                <a href="#privacy" className="hover:text-[#db2777] transition-colors">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#terms" className="hover:text-[#db2777] transition-colors">
                                    Terms of Service
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Copyright & Links */}
                <div className="border-t border-gray-100 mt-8 md:mt-12 pt-6 flex items-center justify-between text-xs text-[#64748B]">
                    <p>© 2026 Dev Stack. All rights reserved.</p>
                    <div className="flex items-center gap-4 sm:gap-6">
                        <a href="#privacy" className="hover:text-[#db2777] transition-colors">
                            Privacy
                        </a>
                        <a href="#terms" className="hover:text-[#db2777] transition-colors">
                            Terms
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;