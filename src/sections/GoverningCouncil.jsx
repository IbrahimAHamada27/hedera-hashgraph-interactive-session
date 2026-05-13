import React from 'react';
import { motion } from 'framer-motion';

const GoverningCouncil = () => {
  const companies = [
    { name: "Google", color: "from-blue-400 to-blue-600" },
    { name: "IBM", color: "from-blue-600 to-blue-800" },
    { name: "Dell", color: "from-slate-400 to-slate-600" },
    { name: "LG", color: "from-pink-600 to-red-600" },
    { name: "Boeing", color: "from-blue-500 to-blue-700" },
    { name: "Standard Bank", color: "from-blue-700 to-indigo-800" },
    { name: "Ubisoft", color: "from-gray-700 to-black" },
    { name: "Chainlink", color: "from-blue-500 to-blue-400" },
  ];

  return (
    <section className="relative h-full w-full flex flex-col justify-center items-center py-4 md:py-8 px-4 md:px-6">
      <div className="relative z-10 w-full max-w-6xl mx-auto pointer-events-auto flex flex-col justify-center h-full">
        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-16 items-center flex-1 min-h-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4 text-white tracking-tight">Hedera Governing Council</h2>
            <p className="text-xs md:text-sm lg:text-base text-silver mb-4 md:mb-6 leading-relaxed hover:text-white transition-colors">
              Hedera is owned and governed by a diverse council of the world's leading organizations.
            </p>
            
            <ul className="space-y-2 md:space-y-4">
              {[
                "Stability: Enterprise-grade reliability without hard forks.",
                "Trust: Governed by established, globally distributed entities.",
                "Decentralized Governance: No single company controls the network."
              ].map((text, i) => (
                <motion.li 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.1 }}
                  className="flex items-start gap-2 md:gap-3 group cursor-default"
                >
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-[#00FFFF] shadow-glow-cyan flex-shrink-0 group-hover:scale-150 transition-transform" />
                  <span className="text-[0.65rem] md:text-xs lg:text-sm text-silver group-hover:text-white transition-colors">{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 perspective-1000">
            {companies.map((company, index) => (
              <motion.div
                key={company.name}
                initial={{ opacity: 0, scale: 0.8, rotateX: 20 }}
                animate={{ opacity: 1, scale: 1, rotateX: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05, y: -2, rotateX: -5, rotateY: 2 }}
                className={`p-2 md:p-3 lg:p-4 rounded-xl flex items-center justify-center h-12 md:h-16 lg:h-20 bg-gradient-to-br ${company.color} shadow-lg relative group overflow-hidden cursor-pointer`}
              >
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300" />
                <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/30 rounded-xl transition-colors duration-300" />
                <span className="relative z-10 font-bold text-white tracking-wider text-center drop-shadow-md group-hover:scale-110 transition-transform duration-300 text-[0.6rem] md:text-[0.7rem] lg:text-xs">{company.name}</span>
              </motion.div>
            ))}
            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: companies.length * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="p-2 md:p-3 lg:p-4 rounded-xl flex items-center justify-center h-12 md:h-16 lg:h-20 bg-dark-navy border border-primary-gray/30 border-dashed hover:border-[#00FFFF] hover:shadow-glow-cyan transition-all duration-300 cursor-pointer group"
              >
                <span className="font-bold text-primary-gray tracking-wider text-center text-[0.55rem] md:text-[0.65rem] lg:text-xs group-hover:text-[#00FFFF] transition-colors">+ up to 39 total</span>
              </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoverningCouncil;
