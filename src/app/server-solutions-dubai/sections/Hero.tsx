'use client';

import { motion } from 'framer-motion';
import { PhoneIcon, ArrowRightIcon, CheckCircleIcon, ShieldCheckIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline';

export default function ServerHero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Section */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <ShieldCheckIcon className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-blue-300">SERVER SOLUTIONS & MAINTENANCE IN DUBAI</span>
          </div>
        
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                 Professional  Server <br />
                <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                 Solutions in 
                </span>
                <motion.span
                  className="relative inline-block ml-2"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    Dubai, UAE
                  </span>
                </motion.span>
              </h1>
          <motion.span
            className="relative inline-block ml-2"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Enterprise Server Infrastructure for Business Reliability
            </span>
          </motion.span>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Dell & HP authorized • VMware certified • 24/7 monitoring • Free server health check
          </p>

          {/* Primary & Secondary CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
              href="tel:+971526716178"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/40 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <PhoneIcon className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              Call Now: +971-526716178
            </motion.a>

            <motion.a
              href="https://wa.me/971526716178"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl border-2 border-white/20 bg-white/5 text-white font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ArrowRightIcon className="w-5 h-5" />
              WhatsApp for Free Quote
            </motion.a>
          </div>

          {/* Trust Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto mb-12 text-gray-400">
            <div className="flex items-center gap-2">
              <CheckCircleIcon className="w-8 h-8 text-green-400" />
              <span className="text-sm">250+ Servers Deployed in UAE</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheckIcon className="w-8 h-8 text-blue-400" />
              <span className="text-sm">Dell & HP Authorized Partners</span>
            </div>
            <div className="flex items-center gap-2">
              <ClockIcon className="w-8 h-8 text-purple-400" />
              <span className="text-sm">VMware vSphere Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <StarIcon className="w-8 h-8 text-yellow-400" />
              <span className="text-sm">99.9% Uptime Guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>

    </section>
  );
}
