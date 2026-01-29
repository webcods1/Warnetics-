import { motion } from 'framer-motion';

const Preloader = () => {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#020617]"
        >
            <div className="relative">
                {/* Decorative glowing circles */}
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -inset-8 bg-blue-500/20 rounded-full blur-2xl"
                />

                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{
                        scale: [0.8, 1.05, 1],
                        opacity: 1
                    }}
                    transition={{
                        duration: 1.5,
                        ease: "easeOut"
                    }}
                    className="relative z-10"
                >
                    <img
                        src="/home2.png"
                        alt="Warnetics"
                        className="w-48 h-48 object-contain drop-shadow-[0_0_20px_rgba(59,130,246,0.5)]"
                    />

                    {/* Loading bar animation */}
                    <motion.div
                        className="mt-8 h-1 bg-blue-500/20 rounded-full overflow-hidden"
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: "100%", opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1 }}
                    >
                        <motion.div
                            className="h-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,1)]"
                            initial={{ width: "0%" }}
                            animate={{ width: "100%" }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        className="text-center mt-4 font-mono text-xs uppercase tracking-[0.3em] text-blue-400"
                    >
                        Initializing Secure Environment...
                    </motion.p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Preloader;
