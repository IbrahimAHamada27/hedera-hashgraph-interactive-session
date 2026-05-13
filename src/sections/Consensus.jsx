import React from 'react';
import { motion } from 'framer-motion';
import GlowCard from '../components/GlowCard';
import { ShieldCheck, ServerCrash, CheckCircle2 } from 'lucide-react';

const Consensus = () => {
  return (
    <section className="relative h-full w-full flex flex-col justify-center items-center py-4 md:py-8 px-4 md:px-6">
      <div className="relative z-10 w-full max-w-6xl mx-auto pointer-events-auto flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-6 md:mb-8 shrink-0"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2 text-white tracking-tight">Consensus & aBFT</h2>
          <p className="text-xs md:text-sm text-silver max-w-2xl mx-auto">
            How the network agrees on the truth, even under attack.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center flex-1 min-h-0">
          <div className="space-y-4 md:space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
            >
              <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-[#00FFFF] drop-shadow-[0_0_8px_rgba(0,255,255,0.4)]">What is Consensus?</h3>
              <p className="text-xs md:text-sm text-silver leading-relaxed hover:text-white transition-colors duration-300">
                Consensus is the process of all nodes agreeing on the exact same history of transactions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              <h3 className="text-lg md:text-2xl font-bold mb-1 md:mb-2 text-white">aBFT Security</h3>
              <p className="text-xs md:text-sm text-silver leading-relaxed mb-1 md:mb-2 hover:text-white transition-colors duration-300">
                Hedera achieves <strong className="text-[#00FFFF] drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">Asynchronous Byzantine Fault Tolerance (aBFT)</strong>, the highest possible level of security.
              </p>
              <p className="text-xs md:text-sm text-silver leading-relaxed hover:text-white transition-colors duration-300">
                Even if some nodes are malicious or offline, honest nodes still reach a secure agreement.
              </p>
            </motion.div>
          </div>

          <GlowCard className="p-3 md:p-6">
            <div className="flex flex-col gap-2 md:gap-4">
              <div className="flex items-center gap-3 p-2 md:p-3 rounded-xl bg-primary-blue/10 border border-primary-blue/30 hover:border-[#00FFFF]/50 hover:bg-primary-blue/20 transition-all duration-300 group">
                <CheckCircle2 className="w-6 h-6 md:w-8 md:h-8 text-[#00FFFF] group-hover:scale-110 transition-transform flex-shrink-0" />
                <div>
                  <h4 className="text-sm md:text-lg font-bold text-white group-hover:text-[#00FFFF] transition-colors">Honest Nodes</h4>
                  <p className="text-silver text-[0.65rem] md:text-xs">Processing transactions correctly.</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 p-2 md:p-3 rounded-xl bg-red-500/10 border border-red-500/30 hover:border-red-400/50 hover:bg-red-500/20 transition-all duration-300 group">
                <ServerCrash className="w-6 h-6 md:w-8 md:h-8 text-red-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                <div>
                  <h4 className="text-sm md:text-lg font-bold text-white group-hover:text-red-300 transition-colors">Malicious/Failed Nodes</h4>
                  <p className="text-silver text-[0.65rem] md:text-xs">Trying to disrupt the network or offline.</p>
                </div>
              </div>

              <div className="flex justify-center my-1 relative shrink-0">
                <div className="w-1 h-6 md:h-8 bg-gradient-to-b from-primary-gray via-[#00FFFF]/50 to-[#00FFFF] rounded-full animate-pulse" />
              </div>

              <div className="flex items-center gap-3 p-3 md:p-4 rounded-xl bg-gradient-to-r from-dark-navy to-black border border-[#00FFFF]/50 shadow-glow-cyan hover:shadow-glow-cyan-lg transition-shadow duration-500 group overflow-hidden relative">
                <div className="absolute inset-0 bg-[#00FFFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <ShieldCheck className="w-8 h-8 md:w-10 md:h-10 text-[#00FFFF] group-hover:scale-110 transition-transform z-10 flex-shrink-0" />
                <div className="z-10">
                  <h4 className="text-base md:text-xl font-bold text-[#00FFFF] drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">Secure Agreement</h4>
                  <p className="text-white font-medium text-[0.65rem] md:text-xs">Network reaches 100% finality.</p>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>
      </div>
    </section>
  );
};

export default Consensus;
