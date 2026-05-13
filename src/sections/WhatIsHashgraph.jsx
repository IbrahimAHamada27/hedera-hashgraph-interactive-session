import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Sphere, MeshDistortMaterial } from '@react-three/drei';
import GlowCard from '../components/GlowCard';

const AnimatedNode = ({ position, color }) => {
  const mesh = useRef();
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime * 2 + position[0]) * 0.1;
    }
  });

  return (
    <Sphere ref={mesh} position={position} args={[0.3, 32, 32]}>
      <MeshDistortMaterial color={color} envMapIntensity={1} clearcoat={1} clearcoatRoughness={0} metalness={0.8} distort={0.2} speed={2} />
    </Sphere>
  );
};

const WhatIsHashgraph = () => {
  return (
    <section className="relative h-full w-full flex flex-col md:flex-row items-center justify-center py-4 md:py-8 px-4 md:px-6">
      {/* 3D Canvas specific to this scene */}
      <div className="absolute inset-0 z-0 opacity-80 md:w-1/2 md:right-0 md:left-auto pointer-events-none">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight position={[-10, -10, -10]} intensity={0.5} color="#00FFFF" />
          
          <AnimatedNode position={[-1.5, 1, 0]} color="#165D9E" />
          <AnimatedNode position={[1.5, 1.5, -1]} color="#00FFFF" />
          <AnimatedNode position={[0, -1.5, 0]} color="#203A5F" />
          <AnimatedNode position={[-1, -0.5, 1]} color="#EAEAEA" />
          <AnimatedNode position={[1, -1, -0.5]} color="#737373" />
        </Canvas>
      </div>

      <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col md:flex-row pointer-events-auto h-full items-center">
        <div className="w-full md:w-1/2 md:pr-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 md:mb-4 text-white tracking-tight drop-shadow-md">What is Hashgraph?</h2>
            <p className="text-xs md:text-sm text-silver mb-4 md:mb-6 leading-relaxed">
              Hashgraph is a fundamentally different way for computers (nodes) to communicate and agree on transactions.
            </p>

            <div className="space-y-2 md:space-y-4">
              <GlowCard delay={0.1} className="p-3 md:p-4">
                <h3 className="text-sm md:text-lg font-bold text-[#00FFFF] mb-1 drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">Node</h3>
                <p className="text-[0.65rem] md:text-xs text-silver">A computer connected to the network that helps process transactions.</p>
              </GlowCard>

              <GlowCard delay={0.2} className="p-3 md:p-4">
                <h3 className="text-sm md:text-lg font-bold text-[#00FFFF] mb-1 drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">Transaction</h3>
                <p className="text-[0.65rem] md:text-xs text-silver">Any action on the network, such as sending crypto or creating an NFT.</p>
              </GlowCard>

              <GlowCard delay={0.3} className="p-3 md:p-4">
                <h3 className="text-sm md:text-lg font-bold text-[#00FFFF] mb-1 drop-shadow-[0_0_5px_rgba(0,255,255,0.5)]">Event</h3>
                <p className="text-[0.65rem] md:text-xs text-silver">A container that holds transactions, a timestamp, and signatures—faster than blocks.</p>
              </GlowCard>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsHashgraph;
