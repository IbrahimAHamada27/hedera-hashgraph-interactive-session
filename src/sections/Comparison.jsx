import React from 'react';
import { motion } from 'framer-motion';
import GlowCard from '../components/GlowCard';

const Comparison = () => {
  const comparisons = [
    { feature: "Data Structure", bc: "Blocks in a Chain", hg: "Events in a Graph" },
    { feature: "Creator Selection", bc: "Mining or Staking", hg: "No Mining (All participate)" },
    { feature: "Speed (TPS)", bc: "Slower (10s - 100s)", hg: "Faster (10,000+)" },
    { feature: "Tx Fees", bc: "High & Unpredictable", hg: "Very Low & Predictable" },
    { feature: "Finality", bc: "Probabilistic (Wait)", hg: "Fast & Absolute (Seconds)" },
    { feature: "Energy Usage", bc: "High", hg: "Extremely Low" }
  ];

  return (
    <section className="relative h-full w-full flex flex-col justify-center items-center py-4 md:py-8 px-4 md:px-6">
      <div className="relative z-10 w-full max-w-5xl mx-auto pointer-events-auto flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-4 md:mb-6 shrink-0"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2 text-white tracking-tight">Blockchain vs Hashgraph</h2>
          <p className="text-xs md:text-sm text-silver">A side-by-side comparison of the core mechanics.</p>
        </motion.div>

        <GlowCard className="p-0 overflow-hidden backdrop-blur-xl bg-black/60 shadow-lg mb-4 md:mb-6 shrink-0">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[500px]">
              <thead>
                <tr>
                  <th className="p-2 md:p-3 text-xs md:text-sm font-bold text-silver border-b border-primary-gray/30 w-1/3">Feature</th>
                  <th className="p-2 md:p-3 text-xs md:text-sm font-bold text-white border-b border-primary-gray/30 w-1/3 bg-dark-navy/30">Traditional Blockchain</th>
                  <th className="p-2 md:p-3 text-xs md:text-sm font-bold text-[#00FFFF] border-b border-primary-gray/30 w-1/3 bg-primary-blue/20">Hedera Hashgraph</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map((row, index) => (
                  <motion.tr 
                    key={row.feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="border-b border-primary-gray/20 last:border-0 hover:bg-white/5 transition-colors group text-[0.65rem] md:text-xs"
                  >
                    <td className="p-1.5 md:p-2 font-medium text-silver group-hover:text-white transition-colors">{row.feature}</td>
                    <td className="p-1.5 md:p-2 text-primary-gray bg-dark-navy/10">{row.bc}</td>
                    <td className="p-1.5 md:p-2 text-white font-medium bg-primary-blue/10 relative overflow-hidden">
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#00FFFF] shadow-glow-cyan transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
                      {row.hg}
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </GlowCard>

        {/* Visualizer for structure */}
        <div className="grid grid-cols-2 gap-2 md:gap-4 text-center shrink-0">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="p-3 md:p-4 rounded-2xl border border-primary-gray/30 bg-black/40 hover:border-white/20 transition-colors"
          >
            <h4 className="text-xs md:text-sm font-bold text-silver mb-2 md:mb-4">Blockchain Structure</h4>
            <div className="flex items-center justify-center gap-1">
              {[1, 2, 3].map((b, i) => (
                <React.Fragment key={b}>
                  <motion.div 
                     animate={{ x: [-2, 0] }} 
                     transition={{ duration: 0.5, delay: i * 0.1 }}
                     className="w-6 h-6 md:w-8 md:h-8 border-2 border-silver rounded flex items-center justify-center font-bold text-silver text-[0.6rem] md:text-xs"
                  >B{b}</motion.div>
                  {i < 2 && <div className="h-0.5 w-3 md:w-4 bg-silver" />}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="p-3 md:p-4 rounded-2xl border border-primary-blue/50 bg-primary-blue/10 shadow-glow-cyan hover:shadow-glow-cyan-lg transition-shadow duration-500 flex flex-col items-center justify-center"
          >
            <h4 className="text-xs md:text-sm font-bold text-[#00FFFF] mb-2 md:mb-4">Hashgraph Structure</h4>
            <div className="relative h-6 md:h-8 flex items-center justify-center w-full max-w-[150px]">
              <svg viewBox="0 0 200 50" className="w-full h-full stroke-[#00FFFF] fill-[#00FFFF] drop-shadow-[0_0_8px_rgba(0,255,255,0.8)]">
                <circle cx="20" cy="10" r="4" />
                <circle cx="80" cy="40" r="4" />
                <circle cx="140" cy="10" r="4" />
                <circle cx="180" cy="40" r="4" />
                <circle cx="40" cy="25" r="4" />
                <circle cx="100" cy="25" r="4" />
                <circle cx="160" cy="25" r="4" />
                <motion.line x1="20" y1="10" x2="40" y2="25" strokeWidth="2" opacity="0.6" animate={{ pathLength: [0, 1] }} transition={{ duration: 0.5 }} />
                <motion.line x1="40" y1="25" x2="80" y2="40" strokeWidth="2" opacity="0.6" animate={{ pathLength: [0, 1] }} transition={{ duration: 0.5, delay: 0.1 }} />
                <motion.line x1="40" y1="25" x2="100" y2="25" strokeWidth="2" opacity="0.6" animate={{ pathLength: [0, 1] }} transition={{ duration: 0.5, delay: 0.1 }} />
                <motion.line x1="80" y1="40" x2="100" y2="25" strokeWidth="2" opacity="0.6" animate={{ pathLength: [0, 1] }} transition={{ duration: 0.5, delay: 0.2 }} />
                <motion.line x1="100" y1="25" x2="140" y2="10" strokeWidth="2" opacity="0.6" animate={{ pathLength: [0, 1] }} transition={{ duration: 0.5, delay: 0.3 }} />
                <motion.line x1="100" y1="25" x2="160" y2="25" strokeWidth="2" opacity="0.6" animate={{ pathLength: [0, 1] }} transition={{ duration: 0.5, delay: 0.3 }} />
                <motion.line x1="140" y1="10" x2="160" y2="25" strokeWidth="2" opacity="0.6" animate={{ pathLength: [0, 1] }} transition={{ duration: 0.5, delay: 0.4 }} />
                <motion.line x1="160" y1="25" x2="180" y2="40" strokeWidth="2" opacity="0.6" animate={{ pathLength: [0, 1] }} transition={{ duration: 0.5, delay: 0.5 }} />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
