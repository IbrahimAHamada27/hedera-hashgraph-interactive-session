import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import NetworkScene from './canvas/NetworkScene';

import Hero from './sections/Hero';
import QuickRecap from './sections/QuickRecap';
import BlockchainProblems from './sections/BlockchainProblems';
import IntroToHedera from './sections/IntroToHedera';
import Comparison from './sections/Comparison';
import WhatIsHashgraph from './sections/WhatIsHashgraph';
import GossipAboutGossip from './sections/GossipAboutGossip';
import Consensus from './sections/Consensus';
import Speed from './sections/Speed';
import GoverningCouncil from './sections/GoverningCouncil';
import Services from './sections/Services';
import UseCases from './sections/UseCases';
import EnvironmentSetup from './sections/EnvironmentSetup';
import FinalSummary from './sections/FinalSummary';
import ThankYou from './sections/ThankYou';

const sections = [
  Hero,
  QuickRecap,
  BlockchainProblems,
  IntroToHedera,
  Comparison,
  WhatIsHashgraph,
  GossipAboutGossip,
  Consensus,
  Speed,
  GoverningCouncil,
  Services,
  UseCases,
  EnvironmentSetup,
  FinalSummary,
  ThankYou
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  // Refs for debouncing scroll/touch to prevent rapid firing
  const lastScrollTime = useRef(Date.now());
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);

  const navigate = useCallback((newDirection) => {
    const now = Date.now();
    // 800ms cooldown to ensure cinematic transition finishes
    if (now - lastScrollTime.current < 800) return;
    
    setDirection(newDirection);
    setCurrentIndex((prev) => {
      let nextIndex = prev + newDirection;
      if (nextIndex < 0) return prev; // Prevent changing direction state if hitting boundaries
      if (nextIndex >= sections.length) return prev;
      
      lastScrollTime.current = now;
      return nextIndex;
    });
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') navigate(1);
      if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') navigate(-1);
    };

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > 20) {
        if (e.deltaY > 0) navigate(1);
        else navigate(-1);
      }
    };

    const handleTouchStart = (e) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = (e) => {
      if (!e.changedTouches || e.changedTouches.length === 0) return;
      const deltaY = e.changedTouches[0].clientY - touchStartY.current;
      const deltaX = e.changedTouches[0].clientX - touchStartX.current;
      
      // Allow both vertical and horizontal swipes
      if (Math.abs(deltaY) > 50 || Math.abs(deltaX) > 50) {
        if (Math.abs(deltaY) > Math.abs(deltaX)) {
          if (deltaY > 0) navigate(-1); // Swipe down -> prev
          else navigate(1); // Swipe up -> next
        } else {
          if (deltaX > 0) navigate(-1); // Swipe right -> prev
          else navigate(1); // Swipe left -> next
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('wheel', handleWheel, { passive: true });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [navigate]);

  const CurrentSection = sections[currentIndex];

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 0.95,
      rotateY: dir > 0 ? 15 : -15,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1,
      rotateY: 0,
    },
    exit: (dir) => ({
      zIndex: 0,
      x: dir < 0 ? '100%' : '-100%',
      opacity: 0,
      scale: 1.05,
      rotateY: dir < 0 ? -15 : 15,
    })
  };

  return (
    <div className="bg-black min-h-[100dvh] w-screen text-white overflow-hidden selection:bg-[#00FFFF] selection:text-black relative" style={{ perspective: '1000px' }}>
      {/* Global Persisting 3D Background */}
      <NetworkScene />
      
      {/* Global Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-blue/10 via-black to-black opacity-80 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-cyber-grid opacity-10 pointer-events-none z-0" />

      {/* Main Slide Content */}
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.25 },
            scale: { duration: 0.3 },
            rotateY: { duration: 0.3 }
          }}
          className="absolute inset-0 w-full h-full z-10 flex flex-col justify-center"
        >
          <CurrentSection isActive={true} />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="fixed bottom-3 right-3 md:bottom-4 md:right-6 flex items-center gap-2 md:gap-3 z-50">
        <button
          onClick={() => navigate(-1)}
          disabled={currentIndex === 0}
          className="p-1.5 md:p-2 rounded-full bg-black/20 border border-primary-gray/20 text-silver disabled:opacity-20 disabled:cursor-not-allowed hover:bg-primary-blue/40 hover:text-[#00FFFF] hover:border-[#00FFFF]/50 hover:shadow-glow-cyan transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        
        <div className="flex gap-0.5 md:gap-1">
           {sections.map((_, i) => (
             <div 
               key={i} 
               className={`h-0.5 md:h-1 rounded-full transition-all duration-500 ${i === currentIndex ? 'w-3 md:w-5 bg-[#00FFFF] shadow-glow-cyan' : 'w-1 md:w-1.5 bg-primary-gray/30'}`}
             />
           ))}
        </div>

        <button
          onClick={() => navigate(1)}
          disabled={currentIndex === sections.length - 1}
          className="p-1.5 md:p-2 rounded-full bg-black/20 border border-primary-gray/20 text-silver disabled:opacity-20 disabled:cursor-not-allowed hover:bg-primary-blue/40 hover:text-[#00FFFF] hover:border-[#00FFFF]/50 hover:shadow-glow-cyan transition-all duration-300 backdrop-blur-sm"
        >
          <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
      </div>
    </div>
  );
}

export default App;
