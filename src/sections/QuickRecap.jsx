import React from 'react';
import { motion } from 'framer-motion';
import GlowCard from '../components/GlowCard';
import { Globe, Database, Key } from 'lucide-react';

const QuickRecap = () => {
  const steps = [
    {
      title: "Web1",
      subtitle: "Read Only",
      description: "Static pages, info consumption, no interaction.",
      icon: <Globe className="w-5 h-5 md:w-6 md:h-6 text-primary-gray" />,
      color: "from-primary-gray/20 to-transparent",
      glow: "shadow-none"
    },
    {
      title: "Web2",
      subtitle: "Read + Write",
      description: "Social media, UGC, centralized platforms.",
      icon: <Database className="w-5 h-5 md:w-6 md:h-6 text-primary-blue" />,
      color: "from-primary-blue/20 to-transparent",
      glow: "shadow-glow-cyan"
    },
    {
      title: "Web3",
      subtitle: "Read + Write + Own",
      description: "Decentralized networks, digital ownership.",
      icon: <Key className="w-5 h-5 md:w-6 md:h-6 text-[#00FFFF]" />,
      color: "from-[#00FFFF]/20 to-transparent",
      glow: "shadow-glow-cyan-lg"
    }
  ];

  return (
    <section className="relative h-full w-full flex flex-col justify-center items-center py-4 md:py-8 px-4 md:px-6">
      <div className="relative z-10 w-full max-w-6xl mx-auto pointer-events-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-center mb-4 md:mb-8"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1 md:mb-2 text-white tracking-tight">The Evolution of the Web</h2>
          <p className="text-sm md:text-base text-silver max-w-2xl mx-auto">From consuming information to owning digital assets.</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-6 relative">
          <div className="hidden sm:block absolute top-1/2 left-10 right-10 h-0.5 bg-gradient-to-r from-primary-gray via-primary-blue to-[#00FFFF] -translate-y-1/2 opacity-30" />

          {steps.map((step, index) => (
            <div key={step.title} className="relative z-10">
              <GlowCard delay={index * 0.1} className={`h-full p-4 md:p-6 lg:p-6 border-t-4 border-t-${index === 2 ? '[#00FFFF]' : index === 1 ? 'primary-blue' : 'primary-gray'}`}>
                <div className={`w-10 h-10 md:w-14 md:h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-2 md:mb-4 mx-auto ${step.glow} group-hover:scale-110 transition-transform duration-500`}>
                  {step.icon}
                </div>
                <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-center mb-1 text-white group-hover:text-[#00FFFF] transition-colors">{step.title}</h3>
                <h4 className="text-xs md:text-sm lg:text-base font-medium text-center mb-1 md:mb-2 text-[#00FFFF]">{step.subtitle}</h4>
                <p className="text-[0.65rem] md:text-xs lg:text-sm text-silver text-center leading-relaxed">{step.description}</p>
              </GlowCard>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="mt-6 md:mt-10 text-center"
        >
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-white max-w-3xl mx-auto hover:scale-105 transition-transform duration-500 leading-tight">
            "If Web3 is built on blockchain... <br className="hidden sm:block" /><span className="text-[#00FFFF] font-bold">can blockchain scale for billions of users?</span>"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default QuickRecap;
