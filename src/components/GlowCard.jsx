import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring, useTransform } from 'framer-motion';

const GlowCard = ({ children, className = '', delay = 0 }) => {
  const cardRef = useRef(null);
  
  // Mouse position values for the glow effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth values for the 3D tilt
  const smoothX = useSpring(mouseX, { stiffness: 150, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 150, damping: 20 });
  
  // Transform mouse position to rotation degrees
  const rotateX = useTransform(smoothY, [0, 500], [5, -5]); // Inverted Y for natural tilt
  const rotateY = useTransform(smoothX, [0, 500], [-5, 5]);

  function handleMouseMove(e) {
    if (!cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    
    const x = e.clientX - left;
    const y = e.clientY - top;
    
    mouseX.set(x);
    mouseY.set(y);
  }
  
  function handleMouseLeave() {
    // Reset to center on leave
    if (cardRef.current) {
      const { width, height } = cardRef.current.getBoundingClientRect();
      mouseX.set(width / 2);
      mouseY.set(height / 2);
    }
  }

  // The dynamic radial gradient based on mouse position
  const background = useMotionTemplate`radial-gradient(
    600px circle at ${mouseX}px ${mouseY}px,
    rgba(0, 255, 255, 0.1),
    transparent 80%
  )`;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group rounded-2xl p-8 transition-shadow duration-300 hover:shadow-glow-cyan bg-dark-navy/40 backdrop-blur-md border border-primary-blue/30 ${className}`}
    >
      {/* Dynamic Mouse Glow */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{ background }}
      />
      
      {/* Static Cyan Edge Glow */}
      <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-[#00FFFF]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm pointer-events-none" />
      
      {/* Content wrapper with slight z-translation for 3D effect */}
      <div className="relative z-10 pointer-events-auto" style={{ transform: "translateZ(30px)" }}>
        {children}
      </div>
    </motion.div>
  );
};

export default GlowCard;
