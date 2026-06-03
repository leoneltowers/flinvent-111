'use client';

import { motion } from 'framer-motion';

export function CTA() {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Animated background */}
      <motion.div
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl -z-10"
      />
      <motion.div
        animate={{
          opacity: [1, 0.5, 1],
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 rounded-full blur-3xl -z-10"
      />

      <div className="max-w-4xl mx-auto text-center">
        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-black mb-6">
              <span className="glow-text">Transforma tu negocio</span> hoy
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
              No esperes más. Únete a las empresas que ya están usando Flinvent para dominar su industria.
            </p>
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center pt-8"
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: '0 0 50px rgba(0, 212, 255, 0.4)' }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl font-bold text-white text-lg glow-cyan transition-all"
            >
              Comenzar Consulta Gratuita
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 border-2 border-cyan-500/50 rounded-xl font-bold text-white text-lg hover:bg-cyan-500/10 transition-all"
            >
              Ver Pricing
            </motion.button>
          </motion.div>

          {/* Social proof */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-400"
          >
            ✓ Sin tarjeta de crédito requerida
            <span className="mx-4">✓</span>
            Setup en 5 minutos
            <span className="mx-4">✓</span>
            Soporte inmediato
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
