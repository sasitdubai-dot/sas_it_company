'use client';

import { motion } from 'framer-motion';

export default function WhyChooseSection() {
  const reasons = [
    'Hikvision and Dahua certified installers',
    '300+ businesses secured across Dubai',
    'Same-day installation available',
    '2-year warranty on all systems',
    '24/7 technical support',
    'UAE building code compliant',
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-[#0a0a1a] via-[#3a0a5a] to-[#5a0a7a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Why Choose SAS IT for CCTV?</h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-pink-500/40 transition-all group">
              <p className="text-white font-medium">{reason}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
