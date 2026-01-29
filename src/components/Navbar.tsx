import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    const services = [
        "Endpoint protection",
        "Identify and access management",
        "Network security monitoring",
        "Cybersecurity consulting",
        "Vulnerability Assessment & Penetration Testing (VAPT)"
    ];

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services', hasDropdown: true },
        { name: 'Why Choose Us', path: '/why-us' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed w-full transition-all duration-300 ${isOpen ? 'z-[120] bg-transparent border-none' : 'z-50'} ${!isOpen && scrolled ? 'bg-[#0a192f]/90 backdrop-blur-md border-b border-blue-500/20 py-1' : 'py-2'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="relative">
                        <img src="/logo.png" alt="Warnetics Logo" className="w-20 h-20 object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] hover:scale-105 transition-transform" />
                    </div>
                </Link>

                {/* Desktop Nav */}
                {/* Centered Desktop Nav Links */}
                <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-16">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group"
                            onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                            onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}>
                            <Link
                                to={item.path}
                                className={`relative font-mono text-sm font-medium tracking-wide transition-colors duration-300 flex items-center gap-1 ${location.pathname.startsWith(item.path) && item.name !== 'Home' ? 'text-blue-500' :
                                    (location.pathname === item.path ? 'text-blue-500' : 'text-gray-400 hover:text-white')
                                    }`}
                            >
                                {item.name}
                                {item.hasDropdown && <ChevronDown size={14} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                                {location.pathname === item.path && !item.hasDropdown && (
                                    <motion.div
                                        layoutId="navbar-indicator"
                                        className="absolute -bottom-2 left-0 right-0 h-0.5 bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
                                    />
                                )}
                            </Link>

                            {/* Dropdown Menu */}
                            {item.hasDropdown && (
                                <AnimatePresence>
                                    {activeDropdown === item.name && (
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            exit={{ opacity: 0, y: 10 }}
                                            transition={{ duration: 0.2 }}
                                            className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 w-64 bg-white rounded-lg shadow-xl py-2 z-50 text-gray-800"
                                        >
                                            <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div>
                                            {services.map((service, idx) => (
                                                <Link
                                                    key={idx}
                                                    to="/services"
                                                    className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-blue-600 transition-colors border-b border-gray-50 last:border-0 text-left"
                                                >
                                                    {service}
                                                </Link>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            )}
                        </div>
                    ))}
                </div>

                {/* Right Side Button */}
                <div className="hidden md:flex items-center">
                    <button className="px-6 py-2 bg-blue-600/10 border border-blue-500/50 text-blue-500 rounded-sm hover:bg-blue-500 hover:text-white transition-all duration-300 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                        <Terminal size={14} />
                        Client Portal
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white z-[120] relative focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="w-8 h-6 flex flex-col justify-between items-end group">
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 11, width: "100%" } : { rotate: 0, y: 0, width: "100%" }}
                            className="h-0.5 bg-blue-500 block transition-colors duration-300 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -11, width: "100%" } : { rotate: 0, y: 0, width: "70%" }}
                            className="h-0.5 bg-blue-500 block transition-colors duration-300 shadow-[0_0_8px_rgba(59,130,246,0.8)]"
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Nav - Rendered via Portal */}
            {createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed inset-0 w-full h-full bg-[#020617] z-[100] md:hidden flex flex-col justify-center items-center"
                        >
                            <div className="absolute inset-0 overflow-y-auto w-full h-full flex flex-col justify-center items-center">

                                {/* Interactive Background for Mobile Menu */}
                                <div className="absolute inset-0 pointer-events-none opacity-20">
                                    <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-500/20 rounded-full blur-[100px] animate-pulse"></div>
                                    <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-500/20 rounded-full blur-[100px] animate-pulse delay-700"></div>
                                </div>



                                <div className="flex flex-col gap-8 w-full max-w-md px-6 text-center relative z-10">
                                    {navItems.map((item) => (
                                        <div key={item.name} className="flex flex-col items-center">
                                            <div className="flex items-center gap-4">
                                                <Link
                                                    to={item.path}
                                                    className="text-3xl font-mono font-bold text-white hover:text-blue-400 transition-colors"
                                                    onClick={() => !item.hasDropdown && setIsOpen(false)}
                                                >
                                                    {item.name}
                                                </Link>
                                                {item.hasDropdown && (
                                                    <button
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            setMobileServicesOpen(!mobileServicesOpen);
                                                        }}
                                                        className="p-2 focus:outline-none"
                                                    >
                                                        <ChevronDown
                                                            size={24}
                                                            className={`text-white transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                                                        />
                                                    </button>
                                                )}
                                            </div>
                                            {item.hasDropdown && (
                                                <AnimatePresence>
                                                    {mobileServicesOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: "auto", opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            className="overflow-hidden w-full"
                                                        >
                                                            <div className="mt-6 space-y-6 w-full flex flex-col items-center">
                                                                {services.map((service, idx) => (
                                                                    <Link
                                                                        key={idx}
                                                                        to="/services"
                                                                        onClick={() => setIsOpen(false)}
                                                                        className="block text-xl font-mono text-gray-400 hover:text-white transition-colors text-center font-medium"
                                                                    >
                                                                        {service}
                                                                    </Link>
                                                                ))}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </nav>
    );
};

export default Navbar;
