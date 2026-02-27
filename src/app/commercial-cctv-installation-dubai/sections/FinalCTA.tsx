'use client';

import { motion } from 'framer-motion';
import { PhoneIcon, EnvelopeIcon, ArrowRightIcon, CheckCircleIcon } from '@heroicons/react/24/outline';

export default function FinalCTA() {
  return (
    <section className="py-32 relative overflow-hidden bg-gradient-to-r from-[#0a0a1a] via-[#2a0a3a] to-[#3a0a5a]">
      {/* Decorative background glows */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 mb-6">
              <div className="w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-pink-300 font-medium">Free Consultation</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Secure Your Business with<br />
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Professional CCTV Solutions
              </span>
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Custom surveillance solutions designed for Dubai businesses. Complete design, installation and support.
            </p>

            <div className="space-y-4 mb-8">
              {[
                'Free site survey',
                'Custom system design',
                'Professional installation',
                'Mobile app setup',
                'Staff training',
                '2-year warranty',
                '24/7 support',
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-br from-pink-600 to-purple-600 flex items-center justify-center text-white text-xs font-bold">
                    ✓
                  </div>
                  <span className="text-gray-300 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Contact Box */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:ml-auto w-full max-w-md">
                       <div className="p-8 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 shadow-2xl">
              <h3 className="text-2xl font-bold text-white mb-6">Get Free Consultation</h3>
              
              <div className="space-y-4">
                <motion.a
                  href="tel:+971526716178"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 transition-all shadow-lg shadow-green-500/25 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <PhoneIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-green-100 mb-1">Call us now</div>
                    <div className="text-white font-bold">+971-526716178</div>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="https://wa.me/971526716178"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-500 hover:to-cyan-500 transition-all shadow-lg shadow-teal-500/25 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-teal-100 mb-1">Chat on WhatsApp</div>
                    <div className="text-white font-bold">Message Us</div>
                  </div>
                  <ArrowRightIcon className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <motion.a
                  href="mailto:Info@sasitdubai.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/20 hover:bg-white/10 transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <EnvelopeIcon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="text-xs text-gray-400 mb-1">Email us</div>
                    <div className="text-white font-semibold text-sm">Info@sasitdubai.com</div>
                  </div>
                </motion.a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-3 text-xs">
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircleIcon className="w-4 h-4 text-green-400" />
                  <span>200+ Systems</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircleIcon className="w-4 h-4 text-green-400" />
                  <span>Certified</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircleIcon className="w-4 h-4 text-green-400" />
                  <span>99.9% Uptime</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <CheckCircleIcon className="w-4 h-4 text-green-400" />
                  <span>24/7 Support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
             