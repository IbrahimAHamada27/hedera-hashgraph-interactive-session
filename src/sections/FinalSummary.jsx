import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from '../components/AnimatedButton';

const FinalSummary = () => {
  return (
    <section className="relative h-full w-full flex items-center justify-center py-4 md:py-8 px-4 md:px-6">
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center pointer-events-auto flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-6 md:mb-8 shrink-0"
        >
          <h2 className="text-lg sm:text-xl md:text-3xl lg:text-4xl font-light text-silver leading-tight mb-2 md:mb-4 hover:text-white transition-colors duration-500">
            "Blockchain changed how we think about <span className="font-bold text-white group-hover:text-[#00FFFF] transition-colors">trust</span>..."
          </h2>
          <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-[#00FFFF] text-glow leading-tight hover:scale-105 transition-transform duration-700 cursor-default">
            Hedera is redefining how scalable and efficient that trust can become.
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="mt-4 md:mt-8 shrink-0"
        >
          <AnimatedButton onClick={() => window.open('https://hedera.aou.mlsaegypt.org/', '_blank')}>
            EXPLORE THE ECOSYSTEM
          </AnimatedButton>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 md:mt-12 text-primary-gray text-[0.55rem] md:text-xs tracking-widest uppercase font-medium hover:text-silver transition-colors duration-300 shrink-0"
        >
          Session 2 Complete • Hedera AOU MLSA
        </motion.div>
      </div>
    </section>
  );
};

export default FinalSummary;
