import React from 'react';
import { motion } from 'framer-motion';
import { PackageSearch, Activity, CreditCard, Gamepad2, Image, BrainCircuit } from 'lucide-react';

const UseCases = () => {
  const cases = [
    { title: "Supply Chain", desc: "Tracking product provenance and movement.", icon: <PackageSearch className="w-5 h-5 md:w-6 md:h-6 text-[#00FFFF]" /> },
    { title: "Healthcare", desc: "Securing patient records & medical data.", icon: <Activity className="w-5 h-5 md:w-6 md:h-6 text-[#00FFFF]" /> },
    { title: "Payments", desc: "Fast, cheap cross-border settlements.", icon: <CreditCard className="w-5 h-5 md:w-6 md:h-6 text-[#00FFFF]" /> },
    { title: "Gaming", desc: "High-speed in-game assets and economies.", icon: <Gamepad2 className="w-5 h-5 md:w-6 md:h-6 text-[#00FFFF]" /> },
    { title: "NFTs", desc: "Minting green NFTs with predictable fees.", icon: <Image className="w-5 h-5 md:w-6 md:h-6 text-[#00FFFF]" /> },
    { title: "AI + Web3", desc: "Verifiable AI models and data marketplaces.", icon: <BrainCircuit className="w-5 h-5 md:w-6 md:h-6 text-[#00FFFF]" /> }
  ];

  return (
    <section className="relative h-full w-full flex flex-col justify-center items-center py-4 md:py-8 px-4 md:px-6">
      <div className="relative z-10 w-full max-w-6xl mx-auto pointer-events-auto flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-4 md:mb-8 shrink-0"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2 text-white tracking-tight">Real World Adoption</h2>
          <p className="text-xs md:text-sm text-silver max-w-2xl mx-auto hover:text-white transition-colors duration-300">
            Beyond speculation, Hedera is powering real enterprise and consumer applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 flex-1 min-h-0">
          {cases.map((useCase, index) => (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, scale: 0.9, rotateY: 30 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05, rotateY: 10 }}
              className="group p-3 md:p-4 rounded-xl md:rounded-2xl bg-black border border-primary-blue/30 hover:border-[#00FFFF]/50 hover:shadow-glow-cyan transition-all duration-300 cursor-pointer overflow-hidden relative flex flex-col justify-center"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="mb-2 p-1.5 md:p-2 rounded-lg bg-dark-navy/50 inline-flex self-start group-hover:scale-110 group-hover:bg-primary-blue/30 transition-all duration-300 shrink-0">
                {useCase.icon}
              </div>
              <h3 className="text-xs sm:text-sm md:text-base font-bold text-white mb-0.5 md:mb-1 group-hover:text-[#00FFFF] transition-colors">{useCase.title}</h3>
              <p className="text-[0.6rem] md:text-xs text-silver group-hover:text-white transition-colors leading-tight">{useCase.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCases;
