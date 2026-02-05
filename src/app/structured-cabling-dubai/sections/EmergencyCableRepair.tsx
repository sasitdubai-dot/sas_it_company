'use client';

import { motion } from 'framer-motion';
import { BoltIcon, PhoneIcon, WrenchScrewdriverIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const services = [
  { text: 'Same-day repair service', icon: WrenchScrewdriverIcon },
  { text: 'Cable fault finding', icon: BoltIcon },
  { text: 'Re-termination', icon: ShieldCheckIcon },
  { text: 'Emergency patching', icon: PhoneIcon },
];

export default function EmergencyCableRepair() {
  return (
    <section className="py-24 bg-gradient-to-br from-red-500 via-red-700 to-orange-800 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-red-400/30 rounded-full blur-3xl -top-32 -left-32 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-orange-400/30 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Emergency Cable Repair
          </h2>
          <p className="text-lg text-gray-200">
            Cable damage? Network down? We’ve got you covered.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/10 border border-white/20 hover:border-red-400/40 transition-all"
            >
              <service.icon className="w-8 h-8 text-red-300" />
              <span className="text-gray-200 text-sm font-medium">{service.text}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="tel:+971526716178"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="block w-full sm:w-auto mx-auto py-4 px-8 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all text-center"
        >
          Call Emergency: +971-526716178
        </motion.a>
      </div>
    </section>
  );
}