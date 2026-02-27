'use client';

import { motion } from 'framer-motion';

export default function BrandsSection() {
  const brands = ['Hikvision','Dahua','Samsung','Uniview','Axis','CP Plus','Bosch'];

  return (
    <section className="py-24 bg-gradient-to-r from-blue-950 via-indigo-900 to-slate-900">
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
          <p className="text-xl text-gray-400">Trusted enterprise CCTV solutions</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6">
          {brands.map((brand, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center justify-center p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pink-500/40 transition-all group"
            >
              <span className="text-lg font-bold text-gray-400 group-hover:text-white transition-colors">
                {brand}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
