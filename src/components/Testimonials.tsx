'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    author: 'Carlos López',
    role: 'CEO TechStartup',
    text: 'Flinvent transformó nuestra infraestructura. Pasamos de 3 deploys por semana a 15. Increíble.',
    avatar: '👨‍💼',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    author: 'María García',
    role: 'CTO InnovateCorp',
    text: 'La integración IA fue transparente. Nuestros procesos se automatizaron en días, no en meses.',
    avatar: '👩‍💻',
    color: 'from-purple-500 to-pink-500',
  },
  {
    author: 'Juan Rodríguez',
    role: 'Founder FinTech Studio',
    text: 'El equipo de Flinvent entiende nuestras necesidades. Soporte 24/7 que realmente funciona.',
    avatar: '👨‍💼',
    color: 'from-pink-500 to-red-500',
  },
  {
    author: 'Ana Martínez',
    role: 'VP Product BigData',
    text: 'Los análisis en tiempo real ahora son posibles. Dashboard personalizado, exactamente como lo pedimos.',
    avatar: '👩‍🔬',
    color: 'from-green-500 to-emerald-500',
  },
  {
    author: 'Pedro Sánchez',
    role: 'Founder AgricTech',
    text: 'Escalabilidad extrema. Manejamos 10M requests/día sin sudar. Arquitectura impeccable.',
    avatar: '👨‍🌾',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    author: 'Laura Fernández',
    role: 'Director Engineering NeoBank',
    text: 'Cumplimiento bancario completo. Seguridad y velocidad sin compromiso. Top tier.',
    avatar: '👩‍⚖️',
    color: 'from-blue-500 to-cyan-500',
  },
];

export function Testimonials() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  // Variants removed - using whileInView instead

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl -z-10" />
      <div className="absolute top-0 left-1/2 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Lo que dicen nuestros <span className="glow-text">clientes</span>
          </h2>
          <p className="text-gray-400 text-lg">
            Empresas de todo el mundo confían en Flinvent
          </p>
        </motion.div>

        {/* Testimonials grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -8, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
              className={`relative p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:border-cyan-500/50 transition-all group overflow-hidden`}
            >
              {/* Gradient background on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity bg-gradient-to-br ${testimonial.color}`} />

              <div className="relative z-10">
                {/* Quote icon */}
                <div className="text-4xl mb-4 text-cyan-400/50">✨</div>

                {/* Text */}
                <p className="text-gray-200 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                  </div>
                </div>

                {/* Bottom accent */}
                <motion.div
                  initial={{ width: 0 }}
                  whileHover={{ width: '100%' }}
                  transition={{ duration: 0.3 }}
                  className={`absolute bottom-0 left-0 h-1 rounded-full bg-gradient-to-r ${testimonial.color}`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 grid md:grid-cols-4 gap-6"
        >
          {[
            { number: '500+', label: 'Clientes activos' },
            { number: '99.99%', label: 'Uptime garantizado' },
            { number: '2M+', label: 'Deployments/mes' },
            { number: '24/7', label: 'Soporte premium' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-xl border border-cyan-500/30 bg-cyan-500/5 text-center"
            >
              <p className="text-3xl font-bold glow-text mb-2">{stat.number}</p>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
