import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircleQuestion, Heart, Code } from 'lucide-react';

const ThankYou = () => {
  return (
    <section className="relative h-full w-full flex flex-col justify-center items-center py-4 md:py-6 px-4 md:px-6">
      <div className="relative z-10 w-full max-w-3xl mx-auto text-center pointer-events-auto flex flex-col justify-center h-full">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="mb-4 md:mb-6 flex-1 flex flex-col justify-center"
        >
          <div className="flex justify-center mb-3 md:mb-4">
            <div className="p-3 md:p-4 rounded-full bg-[#00FFFF]/10 border border-[#00FFFF]/30 shadow-glow-cyan animate-[pulse_3s_ease-in-out_infinite]">
              <Heart className="w-8 h-8 md:w-12 md:h-12 text-[#00FFFF]" />
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-2 drop-shadow-lg">
            Thank You!
          </h2>
          <p className="text-sm md:text-lg text-silver font-light">
            We appreciate your time and participation.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-4 md:p-6 rounded-2xl bg-gradient-to-br from-dark-navy/80 to-black border border-primary-blue/30 backdrop-blur-md shadow-lg relative overflow-hidden group shrink-0 mb-6 md:mb-8 mx-auto w-full max-w-xl"
        >
          <div className="absolute inset-0 bg-primary-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative z-10 flex flex-col items-center">
            <MessageCircleQuestion className="w-6 h-6 md:w-10 md:h-10 text-primary-gray group-hover:text-[#00FFFF] transition-colors duration-300 mb-2" />
            <h3 className="text-xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-silver to-white mb-2 group-hover:from-primary-blue group-hover:to-[#00FFFF] transition-all duration-500">
              Any Questions?
            </h3>
            <p className="text-xs md:text-sm text-primary-gray group-hover:text-silver transition-colors duration-300">
              We are ready to answer your inquiries about Hedera Hashgraph.
            </p>
          </div>
        </motion.div>

        {/* Footer Signature */}
        <div className="absolute bottom-1 md:bottom-2 left-0 w-full text-center z-50 px-4">
          <p className="text-[0.6rem] md:text-xs text-primary-gray font-medium tracking-wide drop-shadow-md">
            Developed by <span className="text-[#00FFFF] font-bold drop-shadow-[0_0_2px_rgba(0,255,255,0.5)]">Eng. Ibrahim A. Hamada</span> 
            <span className="mx-1.5 md:mx-2 opacity-50">|</span> 
            <span className="text-silver">Microsoft Student Club AOU - Web Team</span>
          </p>
        </div>

      </div>
    </section>
  );
};

export default ThankYou;
