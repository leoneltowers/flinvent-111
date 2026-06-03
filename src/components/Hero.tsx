'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    <section className="relative min-h-screen overflow-hidden pt-20 flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            x: mousePosition.x * 30,
            y: mousePosition.y * 30,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: -mousePosition.x * 30,
            y: -mousePosition.y * 30,
          }}
          transition={{ type: 'spring', stiffness: 100, damping: 30 }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"
        />
      </div>

      {/* 3D Card Effect */}
      <motion.div
        style={{
          perspective: '1200px',
        }}
        animate={{
          rotateX: mousePosition.y * 5,
          rotateY: mousePosition.x * 5,
        }}
        transition={{ type: 'spring', stiffness: 100, damping: 30 }}
        className="relative z-10"
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center px-4"
        >
          {/* Animated badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="inline-block mb-6"
          >
            <span className="px-4 py-2 rounded-full border border-cyan-500/50 text-cyan-400 text-sm font-medium bg-cyan-500/5 backdrop-blur">
              ✨ Transformación Digital 2026
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-6xl md:text-7xl lg:text-8xl font-black mb-6 glow-text leading-tight"
          >
            Flinvent
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Software a medida, IA integrada y soluciones que transforman tu negocio en la era digital
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex gap-4 justify-center flex-wrap"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(0, 212, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg font-semibold text-white hover:shadow-lg transition-all glow-cyan"
            >
              Comenzar Ahora
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-cyan-500/50 rounded-lg font-semibold text-white hover:bg-cyan-500/10 transition-all"
            >
              Ver Demo
            </motion.button>
          </motion.div>

          {/* Floating cards */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-20 grid grid-cols-3 gap-4 max-w-2xl mx-auto"
          >
            {[
              { icon: '⚡', label: 'Rápido' },
              { icon: '🔒', label: 'Seguro' },
              { icon: '📈', label: 'Escalable' },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -8 }}
                className="p-4 rounded-xl bg-white/5 border border-cyan-500/20 backdrop-blur hover:border-cyan-500/50 transition-all"
              >
                <div className="text-3xl mb-2">{item.icon}</div>
                <p className="text-sm text-gray-400">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-2 bg-cyan-500 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
