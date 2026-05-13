import React from 'react';
import { motion } from 'framer-motion';
import AnimatedButton from '../components/AnimatedButton';

const Hero = () => {
  return (
    <section className="relative h-full w-full flex flex-col items-center justify-center pointer-events-none px-4 py-4 md:py-8">
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center pointer-events-auto flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="inline-block mb-3 md:mb-4 px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-primary-blue/50 bg-dark-navy/30 backdrop-blur-md hover:shadow-glow-cyan transition-shadow duration-300"
        >
          <span className="text-[#00FFFF] font-medium tracking-wide text-[0.65rem] md:text-sm">SESSION TIME: 11:00 AM</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 font-sans tracking-tight text-white hover:scale-[1.02] transition-transform duration-500 leading-tight"
        >
          Inside <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-[#00FFFF] text-glow">Hedera Hashgraph</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2, ease: "easeOut" }}
          className="text-sm sm:text-base md:text-xl text-silver mb-6 md:mb-8 max-w-3xl mx-auto font-light leading-relaxed"
        >
          Beyond Blockchain: Understanding the Future of Distributed Networks
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3, ease: "easeOut" }}
        >
          <AnimatedButton onClick={() => {
            const rightArrow = new KeyboardEvent('keydown', { key: 'ArrowRight' });
            window.dispatchEvent(rightArrow);
          }}>
            START EXPLORING
          </AnimatedButton>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
