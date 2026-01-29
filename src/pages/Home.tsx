import { useRef, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, Activity, ArrowUp, ArrowRight, Target, Cpu, Zap } from 'lucide-react';
import MatrixRain from '../components/MatrixRain';


const Home = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

    return (
        <div className="min-h-screen bg-[#020617] text-white overflow-hidden">
            {/* Hero Section */}
            <section ref={targetRef} className="h-auto min-h-[70vh] md:h-screen relative flex items-start md:items-center justify-center pt-28 md:pt-20 pb-20 md:pb-0">
                <motion.div style={{ opacity, scale }} className="text-center z-10 px-4 max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-900/20 border border-green-500/30 text-green-400 mb-8 shadow-[0_0_15px_rgba(34,197,94,0.2)]"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-xs font-mono uppercase tracking-widest">System Secure • 24/7 Monitoring</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-6xl md:text-8xl font-black mb-6 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-200 to-gray-500"
                    >
                        FORTIFY YOUR <br /><span className="text-blue-500">DIGITAL ASSETS</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed"
                    >
                        Elite ethical hacking and cybersecurity solutions for the modern enterprise.
                        We identify vulnerabilities before the adversaries do.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <Link to="/contact" className="inline-block px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold uppercase tracking-widest rounded transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)] hover:shadow-[0_0_30px_rgba(37,99,235,0.6)] hover:-translate-y-1">
                            Let's Start
                        </Link>
                    </motion.div>


                </motion.div>

                {/* Background Elements */}
                <div className="absolute inset-0 pointer-events-none">
                    <MatrixRain />
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-[100px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[100px] animate-pulse delay-1000"></div>
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)]"></div>
                </div>
            </section>



            {/* Feature Section */}
            <section className="py-12 md:py-24 bg-[#0a192f]/50 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col-reverse md:flex-row items-center gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex-1"
                        >
                            <h3 className="text-blue-500 font-mono text-sm uppercase tracking-widest mb-4">
                                Proactive Defense
                            </h3>
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                Stay Ahead of <br />
                                <span className="text-white">Cyber Threats</span>
                            </h2>
                            <p className="text-gray-400 text-lg leading-relaxed mb-8">
                                In a landscape where threats evolve daily, passive defense is no longer enough.
                                Our team of elite security researchers actively hunts for vulnerabilities
                                in your infrastructure before malicious actors can exploit them.
                            </p>
                            <div className="flex items-center gap-4 text-sm font-mono text-blue-400">
                                <span className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    Real-time Analysis
                                </span>
                                <span className="flex items-center gap-2">
                                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                                    Zero-day Detection
                                </span>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex-1 relative -mt-8 md:mt-0"
                        >
                            <div className="relative z-10 rounded-2xl overflow-hidden border border-blue-500/20 shadow-[0_0_50px_rgba(59,130,246,0.1)]">
                                <img
                                    src="/home1.png"
                                    alt="Cybersecurity Analysis"
                                    className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-blue-500/10 mix-blend-overlay"></div>
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl"></div>
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Security Protocols Section */}
            <section className="py-24 bg-white relative">

                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight text-slate-900">
                            ADVANCED <span className="text-blue-600">PROTOCOLS</span>
                        </h2>
                        <p className="text-slate-500 max-w-2xl mx-auto font-mono text-sm uppercase tracking-widest">
                            Implementing Military-Grade Security Standards
                        </p>
                    </motion.div>

                    {/* Mobile View: Stacked Slider */}
                    <div className="md:hidden relative max-w-2xl mx-auto h-[400px] flex items-center justify-center">
                        <div className="relative w-full h-full flex items-center justify-center">
                            <AnimatePresence mode='popLayout'>
                                {[
                                    {
                                        icon: <ShieldCheck className="text-blue-600" size={48} />,
                                        title: "Infrastructural Shield",
                                        desc: "Hardening cloud and on-premise infrastructure against persistent threats with automated perimeter defense systems."
                                    },
                                    {
                                        icon: <Lock className="text-cyan-600" size={48} />,
                                        title: "Zero Trust Architecture",
                                        desc: "Strict identity verification for every person and device trying to access resources, ensuring internal security."
                                    },
                                    {
                                        icon: <Activity className="text-purple-600" size={48} />,
                                        title: "Continuous Oversight",
                                        desc: "Automated systems monitoring traffic patterns for anomalous behavior 24/7, with instant incident reporting."
                                    }
                                ].map((item, idx) => {
                                    // Calculate relative position based on activeIndex
                                    const total = 3;
                                    const position = (idx - activeIndex + total) % total;

                                    return (
                                        <motion.div
                                            key={idx}
                                            initial={false}
                                            animate={{
                                                scale: 1 - position * 0.05,
                                                y: position * 40,
                                                opacity: 1 - position * 0.3,
                                                zIndex: total - position,
                                            }}
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                            className="absolute w-full max-w-md p-10 bg-blue-50 border border-blue-100 rounded-[2rem] shadow-xl group cursor-pointer"
                                            onClick={() => setActiveIndex((idx + 1) % 3)}
                                        >
                                            <div className="mb-8 p-4 bg-white rounded-2xl inline-block shadow-sm group-hover:scale-110 transition-transform">
                                                {item.icon}
                                            </div>
                                            <h3 className="text-2xl font-bold mb-4 text-slate-900">{item.title}</h3>
                                            <p className="text-slate-600 leading-relaxed text-lg">{item.desc}</p>
                                        </motion.div>
                                    );
                                })}
                            </AnimatePresence>
                        </div>

                        {/* Navigation Arrow */}
                        <motion.button
                            whileTap={{ scale: 0.9, backgroundColor: "#2563eb", color: "#ffffff" }}
                            onClick={() => setActiveIndex((prev) => (prev + 1) % 3)}
                            className="absolute -right-4 top-1/2 -translate-y-1/2 w-16 h-16 bg-white border border-slate-200 rounded-full flex items-center justify-center text-blue-600 shadow-xl hover:bg-blue-600 hover:text-white transition-all duration-300 z-50 group scale-90"
                        >
                            <ArrowUp size={32} className="group-hover:-translate-y-1 transition-transform" />
                        </motion.button>
                    </div>

                    {/* Desktop View: Horizontal Grid */}
                    <div className="hidden md:grid grid-cols-3 gap-8 relative z-10">
                        {[
                            {
                                icon: <ShieldCheck className="text-blue-600" size={40} />,
                                title: "Infrastructural Shield",
                                desc: "Hardening cloud and on-premise infrastructure against persistent threats with automated perimeter defense systems."
                            },
                            {
                                icon: <Lock className="text-cyan-600" size={40} />,
                                title: "Zero Trust Architecture",
                                desc: "Strict identity verification for every person and device trying to access resources, ensuring internal security."
                            },
                            {
                                icon: <Activity className="text-purple-600" size={40} />,
                                title: "Continuous Oversight",
                                desc: "Automated systems monitoring traffic patterns for anomalous behavior 24/7, with instant incident reporting."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
                                className="p-8 bg-blue-50 border border-blue-100 rounded-3xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
                            >
                                <div className="mb-6 p-4 bg-white rounded-2xl inline-block shadow-sm group-hover:scale-110 transition-transform">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-slate-900">{item.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Subtle Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-blue-500/5 rounded-full blur-[120px] pointer-events-none"></div>
            </section>

            {/* What Makes Us Unique Section */}
            <section className="py-24 bg-[#0a192f]/30 relative overflow-hidden">
                <div className="container mx-auto px-6 relative z-10">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="mb-16"
                    >
                        <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tight">
                            WHAT MAKES US <span className="text-blue-500">UNIQUE</span>
                        </h2>
                        <div className="h-1 w-20 bg-blue-500 rounded-full"></div>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        {[
                            {
                                icon: <Target className="text-blue-500" size={32} />,
                                title: "Offensive Mindset",
                                desc: "Our team consists of elite ethical hackers who use the same techniques as real adversaries to stress-test your systems."
                            },
                            {
                                icon: <Cpu className="text-cyan-500" size={32} />,
                                title: "Proprietary Intelligence",
                                desc: "We deploy custom-built AI vulnerability scanners that identify zero-day threats long before traditional commercial tools."
                            },
                            {
                                icon: <Zap className="text-blue-400" size={32} />,
                                title: "Rapid Remediation",
                                desc: "Security shouldn't wait. Our average detection-to-fix timeline is 70% faster than industry standard."
                            }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: idx * 0.2 }}
                                className="group"
                            >
                                <div className="mb-6 relative">
                                    <div className="absolute -inset-2 bg-blue-500/20 rounded-lg blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                                    <div className="relative p-4 bg-black/40 border border-white/5 rounded-xl inline-block group-hover:border-blue-500/50 transition-colors">
                                        {item.icon}
                                    </div>
                                </div>
                                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{item.title}</h3>
                                <p className="text-gray-400 leading-relaxed">
                                    {item.desc}
                                </p>
                                <motion.div
                                    className="mt-6 h-0.5 bg-blue-500/30 w-0 group-hover:w-full transition-all duration-500"
                                />
                            </motion.div>
                        ))}
                    </div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="mt-16 text-center"
                    >
                        <Link to="/services" className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600/10 border border-blue-500/50 text-blue-500 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-bold uppercase tracking-widest text-sm group">
                            Discover More
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                {/* Background decorative elements */}
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"></div>
            </section>

            {/* Stats/Trust Section */}
            <section className="py-10 md:py-20 border-y border-white/5 bg-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                        {[
                            { label: 'Vulnerabilities Found', value: '10k+' },
                            { label: 'Enterprise Clients', value: '500+' },
                            { label: 'Success Rate', value: '100%' },
                        ].map((stat, i) => (
                            <div key={i} className="p-6 border border-white/5 rounded-lg hover:border-blue-500/30 transition-colors group">
                                <h3 className="text-4xl font-bold text-white mb-2 group-hover:text-blue-500 transition-colors">{stat.value}</h3>
                                <p className="text-gray-500 font-mono text-sm uppercase tracking-wider">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;
