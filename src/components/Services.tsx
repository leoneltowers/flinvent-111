'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const services = [
  {
    icon: '💻',
    title: 'Software a Medida',
    description: 'Desarrollamos soluciones personalizadas que se adaptan perfectamente a tu negocio y tus procesos únicos.',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: '🤖',
    title: 'Integración IA',
    description: 'Automatización inteligente y sistemas de IA que potencian la productividad y reducen costos operacionales.',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: '📊',
    title: 'Analytics & Data',
    description: 'Visualización de datos en tiempo real para tomar decisiones más inteligentes y estratégicas.',
    color: 'from-pink-500 to-red-500',
  },
  {
    icon: '🔐',
    title: 'Seguridad Enterprise',
    description: 'Infraestructura segura con cumplimiento normativo y protección de datos de clase mundial.',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '⚙️',
    title: 'DevOps & Cloud',
    description: 'Deployment automático, CI/CD y gestión de infraestructura en la nube con máxima disponibilidad.',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: '🎨',
    title: 'Design Moderno',
    description: 'Interfaces intuitivas y experiencias visuales que enamoran a tus usuarios desde el primer click.',
    color: 'from-orange-500 to-pink-500',
  },
];

export function Services() {
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
    <section id="servicios" ref={ref} className="py-24 px-4 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-4">
            Nuestros <span className="glow-text">Servicios</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Soluciones integrales diseñadas para llevar tu negocio al siguiente nivel
          </p>
        </motion.div>

        {/* Services grid */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ y: -12, boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)' }}
              className="group p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur hover:border-cyan-500/50 transition-all duration-300"
            >
              {/* Card gradient background on hover */}
              <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity bg-gradient-to-br ${service.color}`} />

              <div className="relative z-10">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3 group-hover:glow-text transition-all">{service.title}</h3>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Bottom accent line on hover */}
              <motion.div
                initial={{ width: 0 }}
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
                className={`absolute bottom-0 left-0 h-1 rounded-full bg-gradient-to-r ${service.color}`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
