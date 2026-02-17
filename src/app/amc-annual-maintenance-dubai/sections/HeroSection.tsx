'use client';

import { PhoneIcon, ArrowRightIcon, ShieldCheckIcon, CheckCircleIcon, ClockIcon, StarIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-96 h-96 bg-blue-500/30 rounded-full blur-3xl -top-48 -left-48 animate-pulse"></div>
        <div className="absolute w-96 h-96 bg-purple-500/30 rounded-full blur-3xl -bottom-48 -right-48 animate-pulse delay-700"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
            <ShieldCheckIcon className="w-5 h-5 text-blue-400" />
            <span className="text-sm text-blue-300">Certified IT Support & Maintenance</span>
          </div>

          {/* Main Headline */}
         <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              IT Annual Maintenance <br /> Contracts&nbsp;
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                in Dubai
              </span>
            </h1>


          {/* Subheadline */}
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            24/7 support • Preventive maintenance • Fixed monthly cost • Free initial audit
          </p>

          {/* CTAs */}
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
              className="px-8 py-4 rounded-xl border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2"
            >
              <ArrowRightIcon className="w-5 h-5" />
              WhatsApp for Free Quote
            </motion.a>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[{ icon: CheckCircleIcon, text: '200+ Companies Under AMC', color: 'text-green-400' },
              { icon: ShieldCheckIcon, text: 'Average 99.5% Uptime', color: 'text-blue-400' },
              { icon: ClockIcon, text: '4-Hour Response SLA', color: 'text-purple-400' },
              { icon: StarIcon, text: 'Flexible Contract Terms', color: 'text-yellow-400' }]
              .map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <item.icon className={`w-8 h-8 ${item.color}`} />
                  <span className="text-sm text-gray-300 font-medium">{item.text}</span>
                </motion.div>
              ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
