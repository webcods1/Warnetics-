import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import MatrixRain from '../components/MatrixRain';


const Home = () => {
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
            <section ref={targetRef} className="h-screen relative flex items-center justify-center pt-20">
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
            <section className="py-24 bg-[#0a192f]/50 relative overflow-hidden">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-16">
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
                            className="flex-1 relative"
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

            {/* Stats/Trust Section */}
            <section className="py-20 border-y border-white/5 bg-black">
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
