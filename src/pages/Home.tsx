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
