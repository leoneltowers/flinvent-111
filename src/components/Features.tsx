'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const features = [
  {
    num: '01',
    title: 'Velocidad Extrema',
    description: 'Deploy en segundos, no en horas. Infraestructura optimizada para máximo rendimiento.',
  },
  {
    num: '02',
    title: 'Escalabilidad Infinita',
    description: 'Crece sin límites. Nuestra arquitectura soporta millones de transacciones por segundo.',
  },
  {
    num: '03',
    title: 'Seguridad Banco-Grade',
    description: 'Encriptación end-to-end y compliance con regulaciones internacionales.',
  },
  {
    num: '04',
    title: 'Soporte 24/7',
    description: 'Equipo de expertos siempre disponible para resolver tus problemas al instante.',
  },
];

export function Features() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.5]);

  return (
    <section ref={containerRef} className="py-32 px-4 relative overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        style={{ opacity }}
        className="absolute inset-0 bg-gradient-to-b from-cyan-500/5 via-transparent to-pink-500/5 -z-10"
      />

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="glow-text">Características</span> Premium
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Todo lo que necesitas para dominar tu industria, integrado en una plataforma cohesiva
          </p>
        </motion.div>

        {/* Features timeline */}
        <div className="space-y-20">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: idx * 0.1 }}
              className={`flex items-center gap-8 ${idx % 2 === 1 ? 'flex-row-reverse' : ''}`}
            >
              {/* Number badge */}
              <motion.div
                whileHover={{ scale: 1.2 }}
                className="flex-shrink-0 w-24 h-24 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-pink-500/20 border border-cyan-500/30 flex items-center justify-center"
              >
                <span className="text-3xl font-bold glow-text">{feature.num}</span>
              </motion.div>

              {/* Content */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex-grow p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:border-cyan-500/50 transition-all"
              >
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>

                <motion.div
                  whileHover={{ width: '100%' }}
                  initial={{ width: 0 }}
                  className="h-1 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-full mt-4"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <p className="text-gray-400 text-lg mb-6">
            Listo para transformar tu negocio?
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: '0 0 40px rgba(0, 212, 255, 0.4)' }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-pink-500 rounded-xl font-semibold text-white text-lg glow-cyan transition-all"
          >
            Solicitar Consulta Gratuita
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
