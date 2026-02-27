'use client';

import { motion } from 'framer-motion';

export default function IndustriesSection() {
  const industries = [
    'Corporate offices and business parks',
    'Retail stores and shopping centers',
    'Warehouses and logistics facilities',
    'Manufacturing plants and factories',
    'Schools and universities',
    'Hotels and hospitality venues',
    'Healthcare and medical facilities',
    'Construction sites',
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-blue-950 via-cyan-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Industries We Serve</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-cyan-500/40 transition-all group text-center">
              <p className="text-white font-medium">{ind}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
