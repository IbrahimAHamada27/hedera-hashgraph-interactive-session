import React, { useState } from 'react';
import { motion } from 'framer-motion';
import GlowCard from '../components/GlowCard';
import { Terminal, Download, UserPlus, PlayCircle, Copy, Check } from 'lucide-react';

const EnvironmentSetup = () => {
  const [copied, setCopied] = useState(false);
  const codeToCopy = "npm init -y\nnpm install @hashgraph/sdk";

  const handleCopy = () => {
    navigator.clipboard.writeText(codeToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative h-full w-full flex flex-col justify-center items-center py-4 md:py-8 px-4 md:px-6">
      <div className="relative z-10 w-full max-w-7xl mx-auto pointer-events-auto flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-6 md:mb-10 shrink-0"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-1 md:mb-2 text-white tracking-tight">Prepare for Development</h2>
          <p className="text-sm md:text-lg text-silver max-w-2xl mx-auto">
            Before the next session, set up your local environment to start building on Hedera.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto w-full flex-1 min-h-0">
          <GlowCard className="p-4 md:p-6 flex flex-col items-center text-center hover:border-[#00FFFF]/30 transition-colors" delay={0.1}>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-blue/20 flex items-center justify-center mb-4 group-hover:bg-primary-blue/40 group-hover:scale-110 transition-all shrink-0">
              <Download className="w-6 h-6 md:w-8 md:h-8 text-white group-hover:text-[#00FFFF] transition-colors" />
            </div>
            <div className="flex-1 flex flex-col items-center">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#00FFFF] transition-colors">1. Install Node.js</h3>
              <p className="text-xs md:text-sm text-silver mb-4 group-hover:text-white transition-colors flex-1">Download and install the latest LTS version of Node.js for your operating system.</p>
              <a href="https://nodejs.org" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 rounded-lg bg-dark-navy hover:bg-primary-blue text-white font-medium transition-colors border border-primary-blue/30 text-xs md:text-sm hover:shadow-glow-cyan hover:scale-105 shrink-0 mt-auto">
                node.js / download
              </a>
            </div>
          </GlowCard>

          <GlowCard className="p-4 md:p-6 flex flex-col items-center text-center" delay={0.15}>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#00FFFF]/20 flex items-center justify-center mb-4 shadow-glow-cyan group-hover:scale-110 group-hover:shadow-glow-cyan-lg transition-all shrink-0">
              <UserPlus className="w-6 h-6 md:w-8 md:h-8 text-[#00FFFF]" />
            </div>
            <div className="flex-1 flex flex-col items-center">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#00FFFF] transition-colors">2. Create Portal Account</h3>
              <p className="text-xs md:text-sm text-silver mb-4 group-hover:text-white transition-colors flex-1">Sign up on the Hedera Portal to get your free Testnet account credentials.</p>
              <a href="https://portal.hedera.com" target="_blank" rel="noreferrer" className="inline-block px-4 py-2 rounded-lg bg-primary-blue hover:bg-[#00FFFF] hover:text-black text-white font-bold transition-all text-xs md:text-sm hover:shadow-glow-cyan hover:scale-105 shrink-0 mt-auto">
                portal.hedera.com
              </a>
            </div>
          </GlowCard>

          <GlowCard className="p-4 md:p-6 flex flex-col items-center text-center hover:border-primary-blue/80 transition-colors" delay={0.2}>
            <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-primary-gray/20 flex items-center justify-center mb-4 group-hover:bg-primary-gray/40 group-hover:scale-110 transition-all shrink-0">
              <Terminal className="w-6 h-6 md:w-8 md:h-8 text-silver group-hover:text-white transition-colors" />
            </div>
            <div className="flex-1 flex flex-col items-center w-full">
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-[#00FFFF] transition-colors">3. Install Hedera SDK</h3>
              <p className="text-xs md:text-sm text-silver mb-4 group-hover:text-white transition-colors flex-1">In your terminal, initialize a new project and install the SDK.</p>
              <div className="relative w-full bg-black/80 rounded-lg p-3 font-mono text-[0.65rem] md:text-xs text-left border border-primary-gray/30 group-hover:border-[#00FFFF]/30 transition-colors mt-auto shrink-0">
                <button 
                  onClick={handleCopy}
                  className="absolute top-2 right-2 p-1.5 rounded-md bg-dark-navy/80 hover:bg-primary-blue border border-primary-gray/30 hover:border-[#00FFFF]/50 text-silver hover:text-white transition-all z-20 cursor-pointer"
                  title="Copy to clipboard"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-[#00FFFF]" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
                <div className="overflow-x-auto pr-8">
                  <div className="text-primary-gray"># Initialize project</div>
                  <div className="text-[#00FFFF] group-hover:text-white transition-colors">npm init -y</div>
                  <div className="text-primary-gray mt-2"># Install SDK</div>
                  <div className="text-[#00FFFF] group-hover:text-white transition-colors">npm install @hashgraph/sdk</div>
                </div>
              </div>
            </div>
          </GlowCard>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-center pt-6 md:pt-8 shrink-0"
        >
           <button className="flex items-center justify-center gap-2 mx-auto text-silver hover:text-[#00FFFF] hover:scale-105 transition-all drop-shadow-md">
              <PlayCircle className="w-5 h-5 md:w-6 md:h-6" />
              <span className="font-medium underline underline-offset-4 text-xs md:text-base">Watch Setup Tutorial</span>
           </button>
        </motion.div>
      </div>
    </section>
  );
};

export default EnvironmentSetup;
