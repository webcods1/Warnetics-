import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Terminal, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a192f]/90 backdrop-blur-md border-b border-blue-500/20 py-1' : 'bg-transparent py-2'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link to="/" className="flex items-center gap-2 group">
                    <div className="relative">
                        <img src="/logo.png" alt="Warnetics Logo" className="w-20 h-20 object-contain drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] hover:scale-105 transition-transform" />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <div key={item.name} className="relative group"
                            onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.name)}
                            onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}>
                            <Link
                                to={item.path}
                                className={`relative text-sm font-medium tracking-wide transition-colors duration-300 flex items-center gap-1 ${location.pathname.startsWith(item.path) && item.name !== 'Home' ? 'text-blue-500' :
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
                                            className="absolute top-full left-0 mt-4 w-64 bg-white rounded-lg shadow-xl py-2 z-50 text-gray-800"
                                        >
                                            <div className="absolute -top-2 left-4 w-4 h-4 bg-white transform rotate-45 border-t border-l border-gray-100"></div>
                                            {services.map((service, idx) => (
                                                <Link
                                                    key={idx}
                                                    to="/services"
                                                    className="block px-4 py-3 text-sm hover:bg-gray-50 hover:text-blue-600 transition-colors border-b border-gray-50 last:border-0"
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
                    <button className="px-6 py-2 bg-blue-600/10 border border-blue-500/50 text-blue-500 rounded-sm hover:bg-blue-500 hover:text-white transition-all duration-300 font-mono text-xs uppercase tracking-widest flex items-center gap-2">
                        <Terminal size={14} />
                        Client Portal
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-white z-50 relative focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <div className="w-6 h-5 flex flex-col justify-between">
                        <motion.span
                            animate={isOpen ? { rotate: 45, y: 9 } : { rotate: 0, y: 0 }}
                            className="w-full h-0.5 bg-white block transition-colors duration-300"
                        />
                        <motion.span
                            animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                            className="w-full h-0.5 bg-white block transition-colors duration-300"
                        />
                        <motion.span
                            animate={isOpen ? { rotate: -45, y: -9 } : { rotate: 0, y: 0 }}
                            className="w-full h-0.5 bg-white block transition-colors duration-300"
                        />
                    </div>
                </button>
            </div>

            {/* Mobile Nav */}
            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
                        />
                        <motion.div
                            initial={{ x: '100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 right-0 h-full w-3/4 max-w-sm bg-[#0a192f] border-l border-blue-900/50 z-40 md:hidden shadow-[-10px_0_30px_rgba(0,0,0,0.5)] flex flex-col pt-24 px-6"
                        >
                            <div className="flex flex-col gap-6">
                                {navItems.map((item) => (
                                    <div key={item.name}>
                                        <Link
                                            to={item.path}
                                            className="text-xl font-bold text-white hover:text-blue-400 transition-colors flex items-center justify-between"
                                            onClick={() => !item.hasDropdown && setIsOpen(false)}
                                        >
                                            {item.name}
                                            {item.hasDropdown && <ChevronDown size={18} className={`transition-transform duration-300 ${activeDropdown === item.name ? 'rotate-180' : ''}`} />}
                                        </Link>
                                        {item.hasDropdown && (
                                            <div className="pl-4 mt-3 border-l-2 border-blue-500/20 space-y-3">
                                                {services.map((service, idx) => (
                                                    <Link
                                                        key={idx}
                                                        to="/services"
                                                        onClick={() => setIsOpen(false)}
                                                        className="block text-sm text-gray-400 hover:text-blue-400 transition-colors"
                                                    >
                                                        {service}
                                                    </Link>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                ))}
                                <button className="mt-8 w-full py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-widest text-sm rounded transition-colors shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                                    Client Portal
                                </button>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
