'use client';

import { motion } from 'framer-motion';
import {
  ExclamationTriangleIcon,
  ClockIcon,
  ComputerDesktopIcon,
  UserGroupIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

const services = [
  { text: '4-hour emergency response', icon: ClockIcon },
  { text: 'Remote diagnosis 24/7', icon: ComputerDesktopIcon },
  { text: 'Onsite engineer dispatch', icon: UserGroupIcon },
  { text: 'Data recovery services', icon: ArrowPathIcon },
];

export default function EmergencyServerSupport() {
  return (
   <section className="py-24 bg-gradient-to-br from-[#4A0D0D] via-[#7A1C1C] to-[#B3472D] relative overflow-hidden">
  {/* Background accents */}
  <div className="absolute inset-0">
    <div className="absolute w-96 h-96 bg-red-800/30 rounded-full blur-3xl -top-32 -left-32 animate-pulse"></div>
    <div className="absolute w-96 h-96 bg-amber-700/30 rounded-full blur-3xl -bottom-32 -right-32 animate-pulse"></div>
  </div>


      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 flex items-center justify-center gap-3">
            <ExclamationTriangleIcon className="w-10 h-10 text-yellow-400" />
            Emergency Server Support
          </h2>
          <p className="text-lg text-gray-200">
            Server down? Data loss? We’ve got you covered.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex flex-col items-center gap-3 p-6 rounded-xl bg-white/10 border border-white/20 hover:border-yellow-400/40 transition-all shadow-lg"
            >
              <s.icon className="w-8 h-8 text-yellow-300" />
              <span className="text-gray-200 text-sm font-medium">{s.text}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.a
          href="tel:+971526716178"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block py-4 px-8 rounded-xl bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold shadow-lg shadow-red-500/25 hover:shadow-xl hover:shadow-orange-500/40 transition-all"
        >
          Call Emergency: +971-526716178
        </motion.a>
      </div>
    </section>
  );
}