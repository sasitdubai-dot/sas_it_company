'use client';

import { motion } from 'framer-motion';
import { PhoneIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-950 via-indigo-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Commercial CCTV Installation Dubai
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Enterprise security camera systems for offices, warehouses and retail
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a href="tel:+971526716178" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2">
              <PhoneIcon className="w-5 h-5" />
              Call Now: +971-526716178
            </motion.a>

            <motion.a href="https://wa.me/971526716178" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl border-2 border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2">
              WhatsApp for Free Quote
            </motion.a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['300+ Businesses Secured','Same-Day Installation Available','2-Year Warranty Included','24/7 Remote Monitoring'].map((item, idx) => (
              <motion.div key={idx} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 + idx * 0.1 }}
                className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 text-white text-sm font-medium">
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
