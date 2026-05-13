import React from 'react';
import { motion } from 'framer-motion';
import GlowCard from '../components/GlowCard';

const IntroToHedera = () => {
  return (
    <section className="relative h-full w-full flex flex-col justify-center items-center py-4 md:py-8 px-4 md:px-6">
      <div className="relative z-10 w-full max-w-6xl mx-auto text-center pointer-events-auto h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="mb-6 md:mb-8 shrink-0"
        >
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-primary-blue via-[#00FFFF] to-primary-blue bg-[length:200%_auto] animate-[shimmer_3s_linear_infinite] hover:scale-105 transition-transform duration-500">
            <div className="px-4 py-2 md:px-6 md:py-3 bg-black rounded-xl">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white">
                Hedera is <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">NOT</span> a traditional blockchain.
              </h2>
            </div>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 text-left items-center flex-1 min-h-0">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 md:mb-4 text-[#00FFFF] drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">A New Paradigm</h3>
            <p className="text-xs sm:text-sm md:text-base text-silver leading-tight md:leading-relaxed mb-3 md:mb-4">
              Hedera is a decentralized public network where developers can build secure, fair applications with near real-time consensus.
            </p>
            <p className="text-xs sm:text-sm md:text-base text-silver leading-tight md:leading-relaxed">
              Instead of a chain of blocks, Hedera uses a <strong className="text-white relative inline-block group">Hashgraph<span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#00FFFF] shadow-glow-cyan transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" /></strong> — a totally different data structure and consensus algorithm.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 h-full">
            {[
              { title: "Distributed Ledger", desc: "Shared DB without central authority." },
              { title: "Hashgraph Tech", desc: "Uses a directed acyclic graph (DAG)." },
              { title: "Fast Consensus", desc: "Finality in seconds, not minutes." },
              { title: "No Mining", desc: "Fair ordering without energy-wasting PoW." }
            ].map((feature, i) => (
              <GlowCard key={feature.title} delay={i * 0.1} className="p-3 md:p-4 h-full flex flex-col justify-center">
                <h4 className="text-sm md:text-base font-bold text-white mb-1 group-hover:text-[#00FFFF] transition-colors">{feature.title}</h4>
                <p className="text-[0.65rem] md:text-xs text-primary-gray leading-tight">{feature.desc}</p>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroToHedera;
