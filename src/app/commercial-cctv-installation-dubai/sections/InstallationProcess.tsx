'use client';

import { motion } from 'framer-motion';

export default function InstallationProcess() {
  const steps = [
    { step: '01', title: 'Free Site Survey', desc: 'Assess your facility, identify coverage needs and security concerns' },
    { step: '02', title: 'System Design', desc: 'Camera placement plan, equipment selection, custom quote' },
    { step: '03', title: 'Installation', desc: 'Cameras, NVR, wiring and professional cable management' },
    { step: '04', title: 'Configuration', desc: 'Network setup, remote access and analytics configuration' },
    { step: '05', title: 'Training & Support', desc: 'Staff training, documentation and ongoing support' },
  ];

  return (
    <section className="py-24 bg-gradient-to-r from-purple-950 via-pink-900 to-slate-900">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Installation Process</h2>
        </motion.div>

        <div className="space-y-8">
          {steps.map((process, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}
              className="flex gap-6 group">
              <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-[#00D4FF] via-[#7B2FFF] to-[#FF1B8D] p-[2px] flex items-center justify-center text-2xl font-bold text-[#00D4FF] group-hover:text-white transition-colors">
                <div className="w-full h-full rounded-2xl bg-[#0a0a1a] flex items-center justify-center">{process.step}</div>
              </div>
              <div className="flex-1 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-pink-500/40 transition-all">
                <h3 className="text-2xl font-bold text-white mb-2">{process.title}</h3>
                <p className="text-gray-400">{process.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
