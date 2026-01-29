import { useState } from 'react';
import { Shield, Search, Lock, Server, Users, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Services = () => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const services = [
        {
            icon: Shield,
            title: "Endpoint protection",
            desc: "Advanced security for all endpoint devices to prevent malware, ransomware, and zero-day exploits. We deploy next-gen antivirus and EDR solutions to monitor and block threats in real-time."
        },
        {
            icon: Lock,
            title: "Identify and access management",
            desc: "Secure user authentication and authorization to ensure only the right people have access to critical systems. We implement SSO, MFA, and privileged access management (PAM) to secure your digital identity perimeter."
        },
        {
            icon: Server,
            title: "Network security monitoring",
            desc: "24/7 real-time monitoring of network traffic to detect and respond to suspicious activities instantly. Our SOC utilizes advanced SIEM tools to correlate events and identify potential breaches before they escalate."
        },
        {
            icon: Users,
            title: "Cybersecurity consulting",
            desc: "Expert strategic guidance to build robust security frameworks tailored to your business needs. From risk assessment to ISO 27001 compliance, we help you align security with your business objectives."
        },
        {
            icon: Search,
            title: "Vulnerability Assessment & Penetration Testing (VAPT)",
            desc: "Simulated attacks and rigorous testing to uncover and fix security loopholes before hackers exploit them. Our certified ethical hackers perform deep-dive manual and automated testing across web, mobile, and network infrastructure."
        }
    ];

    const toggleService = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-[#020617] text-white pt-24 pb-12">
            <div className="container mx-auto px-6 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >

                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Offensive Security Services</h1>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        We employ advanced methodologies to expose weaknesses and fortify your defenses against evolving threats.
                    </p>
                </motion.div>

                <div className="space-y-4">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`border transition-all duration-300 rounded-lg overflow-hidden ${expandedIndex === index
                                ? 'bg-blue-900/20 border-blue-500/50 shadow-[0_0_20px_rgba(59,130,246,0.15)]'
                                : 'bg-white/5 border-white/10 hover:border-blue-500/30 hover:bg-white/10'
                                }`}
                        >
                            <button
                                onClick={() => toggleService(index)}
                                className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                            >
                                <div className="flex items-center gap-4">
                                    <div className={`p-2 rounded-lg transition-colors ${expandedIndex === index ? 'bg-blue-500 text-white' : 'bg-blue-500/10 text-blue-500 group-hover:bg-blue-500 group-hover:text-white'
                                        }`}>
                                        <service.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className={`text-lg md:text-xl font-bold transition-colors ${expandedIndex === index ? 'text-blue-400' : 'text-gray-100'
                                        }`}>
                                        {service.title}
                                    </h3>
                                </div>
                                <div className={`text-blue-500 transition-transform duration-300 ${expandedIndex === index ? 'rotate-180' : ''}`}>
                                    <ChevronDown className="w-6 h-6" />
                                </div>
                            </button>

                            <AnimatePresence>
                                {expandedIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <div className="px-6 pb-6 pt-0 pl-[4.5rem]">
                                            <p className="text-gray-300 leading-relaxed border-l-2 border-blue-500/30 pl-4">
                                                {service.desc}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;
