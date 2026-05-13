import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlowCard from '../components/GlowCard';
import { Play, RotateCcw } from 'lucide-react';

const GossipAboutGossip = ({ isActive }) => {
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (!isActive) setIsPlaying(false);
  }, [isActive]);

  useEffect(() => {
    let interval;
    if (isPlaying && step < 4) {
      interval = setInterval(() => {
        setStep(prev => prev + 1);
      }, 1500);
    } else if (step >= 4) {
      setIsPlaying(false);
    }
    return () => clearInterval(interval);
  }, [isPlaying, step]);

  const resetSimulation = () => {
    setStep(0);
    setIsPlaying(false);
  };

  const getNodesOpacity = (nodeIndex) => {
    if (step === 0) return nodeIndex === 0 ? 1 : 0.2;
    if (step === 1) return nodeIndex <= 1 ? 1 : 0.2;
    if (step === 2) return nodeIndex <= 3 ? 1 : 0.2;
    if (step === 3) return nodeIndex <= 7 ? 1 : 0.2;
    return 1;
  };

  const getGlow = (nodeIndex) => {
    return getNodesOpacity(nodeIndex) === 1 ? 'shadow-glow-cyan scale-110' : 'shadow-none scale-100';
  };

  const nodes = Array.from({ length: 16 });

  return (
    <section className="relative h-full w-full flex flex-col justify-center items-center py-4 md:py-8 px-4 md:px-6">
      <div className="relative z-10 w-full max-w-6xl mx-auto pointer-events-auto flex flex-col h-full justify-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-2 md:mb-4 shrink-0"
        >
          <div className="inline-block px-2 py-0.5 md:px-3 md:py-1 rounded-full border border-red-500/50 bg-red-500/10 mb-1 md:mb-2 hover:bg-red-500/20 transition-colors">
            <span className="text-red-400 font-bold tracking-widest text-[0.55rem] md:text-[0.65rem] uppercase">Core Concept</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 text-white tracking-tight">Gossip About Gossip</h2>
          <p className="text-xs md:text-sm text-silver max-w-3xl mx-auto hidden sm:block">
            Information spreads exponentially until everyone knows.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-3 md:gap-6 items-center flex-1 min-h-0">
          {/* Interactive Simulation */}
          <GlowCard className="p-3 md:p-4 lg:p-6 flex flex-col h-full max-h-[50vh] lg:max-h-full">
            <div className="flex justify-between items-center mb-2 md:mb-4 shrink-0">
              <h3 className="text-sm md:text-lg font-bold text-[#00FFFF] drop-shadow-[0_0_8px_rgba(0,255,255,0.5)]">Network Simulation</h3>
              <div className="flex gap-2">
                <button 
                  onClick={() => setIsPlaying(true)}
                  disabled={isPlaying || step >= 4}
                  className="p-1.5 md:p-2 rounded-full bg-primary-blue text-white disabled:opacity-50 hover:bg-[#00FFFF] hover:text-black hover:scale-110 hover:shadow-glow-cyan transition-all"
                >
                  <Play className="w-3 h-3 md:w-4 md:h-4 fill-current" />
                </button>
                <button 
                  onClick={resetSimulation}
                  className="p-1.5 md:p-2 rounded-full border border-primary-gray text-silver hover:bg-white/10 hover:scale-110 transition-all"
                >
                  <RotateCcw className="w-3 h-3 md:w-4 md:h-4" />
                </button>
              </div>
            </div>

            <div className="flex-1 relative border border-primary-blue/30 rounded-xl bg-dark-navy/20 p-2 overflow-hidden group min-h-[120px]">
              <div className="absolute inset-0 bg-[#00FFFF]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
                <div className="grid grid-cols-4 gap-2 w-full h-full p-2 aspect-square max-w-[300px] mx-auto">
                  {nodes.map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{ opacity: getNodesOpacity(i) }}
                      transition={{ duration: 0.3 }}
                      className={`relative w-full h-full rounded-full border border-[#00FFFF]/50 bg-primary-blue/40 flex items-center justify-center transition-all duration-300 ${getGlow(i)}`}
                    >
                      <div className="w-1 h-1 md:w-1.5 md:h-1.5 rounded-full bg-white drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]" />
                      <AnimatePresence>
                        {getNodesOpacity(i) === 1 && (
                          <motion.div
                            initial={{ scale: 1, opacity: 0.8 }}
                            animate={{ scale: 2, opacity: 0 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                            className="absolute inset-0 rounded-full bg-[#00FFFF]"
                          />
                        )}
                      </AnimatePresence>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-2 text-center text-silver h-4 md:h-6 font-mono tracking-wider text-[0.55rem] md:text-[0.65rem] shrink-0">
              {step === 0 && "Node A creates an event..."}
              {step === 1 && "Node A gossips to Node B..."}
              {step === 2 && "Nodes A & B gossip to C & D..."}
              {step === 3 && "Information spreads exponentially..."}
              {step >= 4 && <span className="text-[#00FFFF] font-bold drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">Network Synchronized!</span>}
            </div>
          </GlowCard>

          {/* Explanation */}
          <div className="grid grid-cols-1 gap-2 md:gap-4 lg:flex lg:flex-col lg:justify-center pr-2 pb-8 md:pb-0 shrink-0 lg:shrink">
            <GlowCard className="p-3 md:p-4">
              <h3 className="text-sm md:text-base font-bold text-white mb-0.5 group-hover:text-[#00FFFF] transition-colors">1. The Gossip</h3>
              <p className="text-silver text-[0.65rem] md:text-xs leading-tight">Every node picks another node at random and tells them everything they know.</p>
            </GlowCard>

            <GlowCard className="p-3 md:p-4">
              <h3 className="text-sm md:text-base font-bold text-[#00FFFF] mb-0.5 drop-shadow-[0_0_5px_rgba(0,255,255,0.3)]">2. The "About Gossip"</h3>
              <p className="text-silver text-[0.65rem] md:text-xs leading-tight">They share the transaction AND <span className="text-white font-bold">who they heard it from</span>.</p>
            </GlowCard>

            <GlowCard className="p-3 md:p-4">
              <h3 className="text-sm md:text-base font-bold text-white mb-0.5 group-hover:text-[#00FFFF] transition-colors">3. Virtual Voting</h3>
              <p className="text-silver text-[0.65rem] md:text-xs leading-tight">Nodes agree on transaction order <span className="text-white font-bold border-b border-[#00FFFF]">without sending a vote.</span></p>
            </GlowCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GossipAboutGossip;
