import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const WhyChooseUs = () => {
    const reasons = [
        "Certified Ethical Hackers (CEH) & OSCP Experts",
        "Confidentiality & Non-Disclosure Agreements (NDA)",
        "Comprehensive Reporting with Actionable Insights",
        "24/7 Support during Critical Vulnerability Patching",
        "Real-world Attack Simulation Scenarios",
        "Zero False Positives Guarantee"
    ];

    return (
        <div className="min-h-screen bg-[#020617] text-white pt-24 pb-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-sm font-mono text-blue-500 uppercase tracking-widest mb-4">Why Warnetics?</h2>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                            Uncompromising Security.<br />
                            Proven Results.
                        </h1>
                        <p className="text-gray-400 mb-8 text-lg leading-relaxed">
                            In a digital landscape filled with uncertainties, Warnetics stands as your unshakeable fortress.
                            We don't just find bugs; we provide strategic security roadmaps tailored to your business logic.
                        </p>

                        <div className="space-y-4">
                            {reasons.map((reason, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.1 * i }}
                                    className="flex items-center gap-4 group"
                                >
                                    <CheckCircle2 className="text-blue-500 w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" />
                                    <span className="text-gray-300 group-hover:text-white transition-colors">{reason}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* Abstract Visual Representation */}
                        <div className="aspect-square rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border border-white/10 p-8 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:20px_20px]"></div>

                            <div className="relative z-10 w-full h-full border border-blue-500/30 rounded-xl bg-black/40 backdrop-blur-sm p-6 flex flex-col justify-between">
                                <div className="flex justify-between items-center border-b border-blue-500/20 pb-4">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                                    </div>
                                    <div className="text-xs font-mono text-blue-500">status: secure</div>
                                </div>
                                <div className="space-y-2 font-mono text-xs text-blue-400/80">
                                    <p>&gt; Initiating system scan...</p>
                                    <p>&gt; Analyzing network protocols...</p>
                                    <p>&gt; Detecting vulnerabilities...</p>
                                    <p className="text-white">&gt; 0 threats found.</p>
                                    <p className="animate-pulse">_</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;
