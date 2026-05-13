import React from 'react';
import { motion } from 'framer-motion';
import GlowCard from '../components/GlowCard';
import { Coins, ListChecks, Code2, FileDigit } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: "Hedera Token Service (HTS)",
      description: "Configure, mint, and manage native fungible and NFTs without writing smart contracts.",
      icon: <Coins className="w-5 h-5 md:w-8 md:h-8 text-[#00FFFF] group-hover:scale-110 transition-transform" />,
      cases: "Payments, NFTs, Reward Points"
    },
    {
      title: "Hedera Consensus Service (HCS)",
      description: "Create verifiable timestamps and ordering of events for any application or permissioned network.",
      icon: <ListChecks className="w-5 h-5 md:w-8 md:h-8 text-primary-blue group-hover:scale-110 group-hover:text-[#00FFFF] transition-all" />,
      cases: "Supply Chain Tracking, Audit Logs"
    },
    {
      title: "Smart Contracts",
      description: "EVM-compatible smart contracts running at the speed of Hashgraph. Written in Solidity or Vyper.",
      icon: <Code2 className="w-5 h-5 md:w-8 md:h-8 text-purple-400 group-hover:scale-110 group-hover:text-[#00FFFF] transition-all" />,
      cases: "DeFi, DAOs, Complex Logic"
    },
    {
      title: "File Service",
      description: "A decentralized file system to store data, configurations, or credentials, governed by multi-signature keys.",
      icon: <FileDigit className="w-5 h-5 md:w-8 md:h-8 text-emerald-400 group-hover:scale-110 group-hover:text-[#00FFFF] transition-all" />,
      cases: "Credentials, Contract Bytecode"
    }
  ];

  return (
    <section className="relative h-full w-full flex flex-col justify-center items-center py-4 md:py-8 px-4 md:px-6">
      <div className="relative z-10 w-full max-w-6xl mx-auto pointer-events-auto flex flex-col justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-4 md:mb-6 shrink-0"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2 text-white tracking-tight">Hedera Native Services</h2>
          <p className="text-xs md:text-sm text-silver max-w-2xl mx-auto hover:text-white transition-colors duration-300">
            The building blocks for decentralized applications.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 lg:gap-6 flex-1 min-h-0">
          {services.map((service, index) => (
            <GlowCard key={service.title} delay={index * 0.1} className="flex flex-col h-full group hover:bg-dark-navy/60 p-3 md:p-4 lg:p-6">
              <div className="flex items-start gap-2 md:gap-4 mb-2 md:mb-3">
                <div className="p-2 md:p-3 rounded-xl bg-dark-navy/50 border border-primary-gray/30 group-hover:border-[#00FFFF]/50 group-hover:shadow-glow-cyan transition-all duration-300 flex-shrink-0">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-sm md:text-base lg:text-lg font-bold text-white mb-0.5 group-hover:text-[#00FFFF] transition-colors">{service.title}</h3>
                  <div className="text-[0.55rem] md:text-[0.65rem] font-bold tracking-wider text-primary-gray uppercase group-hover:text-silver transition-colors">USE CASES: {service.cases}</div>
                </div>
              </div>
              <p className="text-[0.65rem] md:text-xs text-silver leading-tight flex-1 group-hover:text-white transition-colors">{service.description}</p>
            </GlowCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
