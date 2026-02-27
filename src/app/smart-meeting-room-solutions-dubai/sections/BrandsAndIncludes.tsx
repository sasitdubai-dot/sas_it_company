'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export function BrandsSection() {
  const brands = [
    'Logitech',
    'Poly',
    'Cisco',
    'Yealink',
    'Crestron',
    'Extron',
    'Samsung',
    'LG',
    'Barco',
  ];

  return (
    <section className="py-24 relative bg-gradient-to-br from-amber-950 via-orange-900 to-amber-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Brands We Install
          </h2>
          <p className="text-xl text-gray-400">Industry-leading AV equipment partners</p>
        </motion.div>

        <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-6">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="flex items-center justify-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group"
            >
              <span className="text-lg font-bold text-gray-400 group-hover:text-white transition-colors text-center">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function WhatsIncluded() {
  const includes = [
    'Free room assessment',
    'Custom equipment design',
    'Professional installation',
    'Cable management',
    'System programming',
    'User training',
    'Warranty and support',
  ];

  return (
    <section className="py-24 relative bg-gradient-to-br from-rose-950 via-pink-900 to-rose-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What is Included
          </h2>
          <p className="text-xl text-gray-400">Complete turnkey solution from start to finish</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {includes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center gap-4 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <CheckCircleIcon className="w-7 h-7 text-white" />
              </div>
              <span className="text-lg font-semibold text-white">{item}</span>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 text-center"
        >
          <p className="text-xl text-white font-semibold mb-2">
            Complete Peace of Mind
          </p>
          <p className="text-gray-300">
            From design to deployment, we handle everything so you can focus on your meetings
          </p>
        </motion.div>
      </div>
    </section>
  );
}