import React from 'react';
import { motion } from 'framer-motion';
import GlowCard from '../components/GlowCard';
import { Clock, TrendingUp, ZapOff, ServerCrash } from 'lucide-react';

const BlockchainProblems = () => {
  const problems = [
    {
      title: "Slow Speeds",
      description: "Bitcoin ~7 TPS. Ethereum ~15-30 TPS. Waiting takes minutes.",
      icon: <Clock className="w-6 h-6 md:w-8 md:h-8 text-red-400 group-hover:scale-110 transition-transform" />
    },
    {
      title: "High Fees",
      description: "During congestion, a $5 tx could cost $20+ in gas.",
      icon: <TrendingUp className="w-6 h-6 md:w-8 md:h-8 text-orange-400 group-hover:scale-110 transition-transform" />
    },
    {
      title: "Energy Intensive",
      description: "PoW mining consumes massive electricity, harming the environment.",
      icon: <ZapOff className="w-6 h-6 md:w-8 md:h-8 text-yellow-400 group-hover:scale-110 transition-transform" />
    },
    {
      title: "Scalability Limits",
      description: "More users = slower & expensive network, creating bottlenecks.",
      icon: <ServerCrash className="w-6 h-6 md:w-8 md:h-8 text-red-500 group-hover:scale-110 transition-transform" />
    }
  ];

  return (
    <section className="relative h-full w-full flex flex-col justify-center items-center py-4 md:py-8 px-4 md:px-6">
      <div className="relative z-10 w-full max-w-6xl mx-auto pointer-events-auto flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-4 md:mb-6"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2 text-white tracking-tight">The Blockchain Bottleneck</h2>
          <p className="text-xs md:text-base text-silver max-w-3xl mx-auto">Traditional blockchains paved the way, but they struggle to scale.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4 flex-1 min-h-0">
          {problems.map((problem, index) => (
            <GlowCard key={problem.title} delay={index * 0.1} className="flex gap-3 md:gap-4 items-center hover:border-red-500/30 p-3 md:p-4">
              <div className="flex-shrink-0 p-2 md:p-3 rounded-xl bg-black/50 border border-primary-gray/30 group-hover:border-red-500/50 transition-colors shadow-[0_0_10px_rgba(255,0,0,0.1)] group-hover:shadow-[0_0_15px_rgba(255,0,0,0.3)]">
                {problem.icon}
              </div>
              <div>
                <h3 className="text-sm md:text-lg font-bold mb-0.5 text-white group-hover:text-red-300 transition-colors">{problem.title}</h3>
                <p className="text-[0.65rem] md:text-xs text-silver leading-tight md:leading-relaxed">{problem.description}</p>
              </div>
            </GlowCard>
          ))}
        </div>

        {/* Animated Congestion Simulation */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-4 md:mt-6 p-3 md:p-4 rounded-xl bg-black/60 border border-red-500/30 relative overflow-hidden group hover:border-red-500/80 transition-colors shrink-0"
        >
          <div className="absolute inset-0 bg-red-500/5 animate-pulse group-hover:bg-red-500/10 transition-colors" />
          <h3 className="text-center text-xs md:text-sm font-bold text-red-400 mb-2 relative z-10">Network Congestion Simulation</h3>
          <div className="flex items-center justify-center gap-1 sm:gap-2 md:gap-3 relative z-10 overflow-hidden py-1">
            {[1, 2, 3, 4, 5, 6, 7].map((block, i) => (
              <motion.div
                key={block}
                animate={{ 
                  x: [-20, 0],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "linear"
                }}
                className="w-10 h-12 md:w-14 md:h-16 rounded-lg bg-dark-navy border border-red-500/50 flex flex-col items-center justify-center flex-shrink-0 relative group-hover:border-red-400"
              >
                <div className="absolute inset-0 bg-red-500/20 rounded-lg animate-[pulse_2s_ease-in-out_infinite]" />
                <Clock className="w-3 h-3 md:w-4 md:h-4 text-red-400 mb-0.5" />
                <span className="text-[0.5rem] md:text-[0.65rem] font-mono text-red-300 hidden sm:block">Pending</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BlockchainProblems;
