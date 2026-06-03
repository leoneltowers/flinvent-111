'use client';

import { motion } from 'framer-motion';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-black/50 backdrop-blur py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold glow-text mb-4">flinvent</h3>
            <p className="text-gray-400 text-sm">
              Transformación digital para empresas que quieren liderar
            </p>
          </motion.div>

          {/* Product */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Producto</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition">Características</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Pricing</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Documentación</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">API</a></li>
            </ul>
          </motion.div>

          {/* Empresa */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Empresa</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition">Acerca de</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Blog</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Carreras</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Contacto</a></li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><a href="#" className="hover:text-cyan-400 transition">Privacidad</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Términos</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Cookies</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition">Seguridad</a></li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-sm text-gray-400">
            © {currentYear} Flinvent. Todos los derechos reservados.
          </p>
          <div className="flex gap-6">
            {['Twitter', 'LinkedIn', 'GitHub'].map((social) => (
              <motion.a
                key={social}
                href="#"
                whileHover={{ color: 'var(--accent-cyan)' }}
                className="text-sm text-gray-400 hover:text-cyan-400 transition"
              >
                {social}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
