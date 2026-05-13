import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import GlowCard from '../components/GlowCard';

const AnimatedCounter = ({ value, label, prefix = "", suffix = "", delay = 0, isActive }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isActive) {
      let start = 0;
      const duration = 1000;
      const increment = value / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, 16);

      return () => {
        clearInterval(timer);
        setCount(0);
      };
    } else {
      setCount(0);
    }
  }, [value, isActive]);

  const formattedCount = Number.isInteger(value) ? Math.floor(count) : count.toFixed(4);

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      animate={isActive ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4, delay }}
      className="text-center group"
    >
      <div className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] to-primary-blue mb-0.5 md:mb-1 text-glow group-hover:scale-110 transition-transform duration-500 drop-shadow-[0_0_10px_rgba(0,255,255,0.8)]">
        {prefix}{formattedCount}{suffix}
      </div>
      <div className="text-[0.65rem] sm:text-xs md:text-sm text-silver font-medium uppercase tracking-widest group-hover:text-white transition-colors">{label}</div>
    </motion.div>
  );
};

const Speed = ({ isActive }) => {
  return (
    <section className="relative h-full w-full flex flex-col justify-center items-center py-4 md:py-8 px-4 md:px-6">
      <div className="relative z-10 w-full max-w-6xl mx-auto pointer-events-auto flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-4 md:mb-8 shrink-0"
        >
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2 text-white tracking-tight">Why Hedera is Fast</h2>
          <p className="text-xs md:text-sm lg:text-base text-silver max-w-3xl mx-auto hover:text-white transition-colors duration-300">
            Parallel gossiping, no mining, and efficient communication result in unprecedented performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-8 flex-1 min-h-0">
          <GlowCard className="flex items-center justify-center py-4 md:py-8 px-2" delay={0.1}>
            <AnimatedCounter isActive={isActive} value={10000} prefix="+" label="TPS" />
          </GlowCard>
          
          <GlowCard className="flex items-center justify-center py-4 md:py-8 px-2" delay={0.15}>
            <AnimatedCounter isActive={isActive} value={0.001} prefix="$" label="Avg Fee" />
          </GlowCard>
          
          <GlowCard className="flex items-center justify-center py-4 md:py-8 px-2" delay={0.2}>
            <AnimatedCounter isActive={isActive} value={3} suffix="s" label="Finality" />
          </GlowCard>
          
          <GlowCard className="flex items-center justify-center py-4 md:py-8 px-2" delay={0.25}>
            <AnimatedCounter isActive={isActive} value={0.0001} label="kWh/Tx" />
          </GlowCard>
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-4 md:mt-8 p-1 rounded-full bg-gradient-to-r from-transparent via-[#00FFFF]/50 to-transparent max-w-2xl mx-auto hover:via-[#00FFFF] transition-all duration-500 shadow-glow-cyan shrink-0"
        >
          <div className="bg-black rounded-full px-3 py-1.5 md:px-6 md:py-3 text-center">
            <span className="text-silver italic text-[0.65rem] md:text-sm hover:text-white transition-colors">“Fast enough for real-time applications, cheap enough for micro-transactions.”</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Speed;
