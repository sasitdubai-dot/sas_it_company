'use client';

import { motion } from 'framer-motion';

export function BrandsWeRepair() {
  return (
    <section className="py-24 relative bg-gradient-to-br from-gray-900 via-slate-800 to-gray-900">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Brands We Repair
          </h2>
          <p className="text-xl text-gray-400">Expert repairs for all major brands</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Laptops */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Laptops</h3>
            <div className="space-y-3">
              {[
                'Dell (Latitude, Inspiron, XPS, Precision)',
                'HP (ProBook, EliteBook, Pavilion, Envy)',
                'Lenovo (ThinkPad, IdeaPad, Yoga)',
                'Apple MacBook (Pro, Air, all models)',
                'ASUS, Acer, MSI, Toshiba',
              ].map((brand, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                >
                  <span className="text-orange-400">✓</span>
                  <span className="text-gray-300">{brand}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Desktops */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Desktops</h3>
            <div className="space-y-3">
              {[
                'Dell OptiPlex, Precision',
                'HP EliteDesk, ProDesk',
                'Lenovo ThinkCentre',
                'Custom-built PCs',
                'All-in-One computers',
              ].map((brand, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                >
                  <span className="text-blue-400">✓</span>
                  <span className="text-gray-300">{brand}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function CommonRepairs() {
  const repairCategories = [
    {
      title: 'Hardware Issues',
      icon: '🔧',
      items: [
        'Screen replacement (cracked, lines, no display)',
        'Keyboard replacement (keys not working, spills)',
        'Trackpad repair (not clicking, jumping cursor)',
        'Charging port repair (not charging, loose connection)',
        'Fan replacement (overheating, loud noise)',
        'RAM upgrade (slow performance)',
        'Hard drive replacement/upgrade to SSD',
        'Motherboard repair (no power, USB issues)',
      ],
    },
    {
      title: 'Software Issues',
      icon: '💻',
      items: [
        'Windows won\'t boot',
        'Blue screen errors (BSOD)',
        'Virus/malware removal',
        'Slow performance',
        'OS reinstallation',
        'Driver issues',
        'Software crashes',
        'Password recovery',
      ],
    },
    {
      title: 'Performance Upgrades',
      icon: '⚡',
      items: [
        'RAM upgrade (4GB to 8GB/16GB/32GB)',
        'HDD to SSD conversion',
        'Dual-drive setup',
        'Graphics card upgrade (desktops)',
        'Thermal paste replacement',
      ],
    },
  ];

  return (
    <section className="py-24 relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Common Repairs
          </h2>
          <p className="text-xl text-gray-400">We fix all types of computer problems</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {repairCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
            >
              <div className="text-5xl mb-4">{category.icon}</div>
              <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
              <ul className="space-y-3">
                {category.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-orange-400 mt-1">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}