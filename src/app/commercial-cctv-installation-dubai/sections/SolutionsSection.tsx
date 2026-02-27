'use client';

import { motion } from 'framer-motion';

export default function SolutionsSection() {
  const solutions = [
    { title: 'IP Camera Systems', desc: 'HD, 4K and thermal cameras with advanced analytics' },
    { title: 'NVR/DVR Installation', desc: 'Enterprise recording with redundancy and remote access' },
    { title: '24/7 Remote Monitoring', desc: 'Access from mobile, tablet or desktop anywhere in the world' },
    { title: 'Video Analytics', desc: 'People counting, facial recognition, license plate reading' },
    { title: 'Multi-Site Management', desc: 'Centralized monitoring for multiple locations' },
    { title: 'System Integration', desc: 'Connect with access control, alarms and IT systems' },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-[#0a0a1a] via-[#2a0a3a] to-[#3a0a5a]">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our CCTV Solutions</h2>
          <p className="text-xl text-gray-400">Professional CCTV Solutions for Your Business</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((sol, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-[#FF1B8D]/40 transition-all group">
              <h3 className="text-xl font-bold text-white mb-2">{sol.title}</h3>
              <p className="text-gray-400">{sol.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
