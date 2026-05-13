import React from 'react';
import { motion } from 'framer-motion';

const AnimatedButton = ({ children, onClick, className = '' }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`relative px-8 py-4 rounded-full font-bold tracking-wider text-white overflow-hidden group ${className}`}
    >
      <div className="absolute inset-0 bg-primary-blue transition-colors duration-300 group-hover:bg-[#00FFFF]" />
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
      <span className="relative z-10 drop-shadow-md group-hover:text-black transition-colors duration-300">
        {children}
      </span>
      <div className="absolute inset-0 shadow-glow-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />
    </motion.button>
  );
};

export default AnimatedButton;
