'use client';

import { motion } from 'framer-motion';
import { PhoneIcon, DevicePhoneMobileIcon, VideoCameraIcon, ChartBarIcon } from '@heroicons/react/24/outline';

export default function FeaturesSection() {
  return (
    <>
      {/* Phone System Brands */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Phone System Brands
            </h2>
            <p className="text-xl text-gray-400">Industry-leading IP telephony solutions</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { name: 'Yeastar', desc: 'Best all-around, great UI, reliable' },
              { name: 'Grandstream', desc: 'Cost-effective, feature-rich' },
              { name: 'Yealink', desc: 'Premium desk phones, excellent quality' },
              { name: '3CX', desc: 'Software PBX, flexible deployment' },
              { name: 'Avaya', desc: 'Enterprise legacy systems' },
            ].map((brand, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group text-center"
              >
                <div className="text-2xl font-bold text-gray-400 group-hover:text-white transition-colors mb-2">
                  {brand.name}
                </div>
                <p className="text-xs text-gray-500">{brand.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 rounded-xl bg-blue-600/10 border border-blue-500/20 text-center"
          >
            <p className="text-gray-300">
              All systems include <span className="text-blue-400 font-semibold">manufacturer warranty</span> + 
              <span className="text-purple-400 font-semibold"> installation warranty</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              What's Included
            </h2>
            <p className="text-xl text-gray-400">Comprehensive telephony features for modern businesses</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: PhoneIcon,
                title: 'PBX Features',
                items: [
                  'Auto attendant (IVR)',
                  'Call routing & queuing',
                  'Voicemail to email',
                  'Call recording',
                  'Music on hold',
                  'Call parking',
                  'Call transfer',
                  'Conference calling',
                  'Extension dialing',
                ],
                gradient: 'from-blue-600 to-cyan-600',
              },
              {
                icon: DevicePhoneMobileIcon,
                title: 'Advanced Features',
                items: [
                  'Mobile app integration',
                  'Softphone support',
                  'Call analytics & reports',
                  'CRM integration',
                  'Ring groups',
                  'Time conditions',
                  'Call tagging',
                  'Hot desking',
                ],
                gradient: 'from-purple-600 to-pink-600',
              },
              {
                icon: VideoCameraIcon,
                title: 'Communication Tools',
                items: [
                  'Video conferencing',
                  'Screen sharing',
                  'Instant messaging',
                  'Presence status',
                  'Fax to email',
                  'SMS integration',
                ],
                gradient: 'from-green-600 to-teal-600',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <ul className="space-y-2">
                  {feature.items.map((item, i) => (
                    <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                      <span className="text-blue-400 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call Center Features */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-purple-900/20"></div>
        
        <div className="relative max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Call Center Features
            </h2>
            <p className="text-xl text-gray-400 mb-8">Need call center capability?</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {[
              'Queue management',
              'Agent status monitoring',
              'Call recording & quality monitoring',
              'Real-time dashboards',
              'Historical reporting',
              'Skill-based routing',
              'Callback queuing',
              'Wallboard displays',
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-4 rounded-xl bg-gradient-to-br from-blue-600/10 to-purple-600/10 border border-blue-500/20 hover:border-blue-500/40 transition-all"
              >
                <p className="text-white font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-6 rounded-xl bg-blue-600/10 border border-blue-500/20"
          >
            <p className="text-gray-300">
              <span className="text-white font-semibold">Ideal for:</span> Customer support, sales teams, help desks
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mobile Workforce Solution */}
      <section className="py-24 relative">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Mobile Workforce Solution
            </h2>
            <p className="text-xl text-gray-400">Remote staff? Multiple locations?</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '📱', text: 'Mobile apps with full features' },
              { icon: '💻', text: 'Softphones for laptops' },
              { icon: '📞', text: 'Extension-to-extension calls (free)' },
              { icon: '🟢', text: 'Presence & availability status' },
              { icon: '📹', text: 'Video calls & conferencing' },
              { icon: '🔒', text: 'Secure encrypted calls' },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <p className="text-white font-medium">{feature.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center p-6 rounded-xl bg-gradient-to-r from-green-600/10 to-teal-600/10 border border-green-500/20"
          >
            <p className="text-xl text-white font-semibold">
              Your team stays connected anywhere
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Conferencing & SIP Trunking */}
      <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Video Conferencing */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 flex items-center justify-center mb-6">
                <VideoCameraIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Video Conferencing</h3>
              <p className="text-gray-300 mb-6">Included in most packages:</p>
              <ul className="space-y-3">
                {[
                  'HD video meetings',
                  'Screen sharing',
                  'Recording capability',
                  'Calendar integration',
                  'Join from browser/app',
                  'Meeting rooms with video hardware',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <span className="text-purple-400 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-purple-400 font-semibold">No Zoom subscription needed</p>
            </motion.div>

            {/* SIP Trunking */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-gradient-to-br from-blue-600/20 to-cyan-600/20 border border-blue-500/30"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mb-6">
                <ChartBarIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">SIP Trunking</h3>
              <p className="text-gray-300 mb-6">Replace traditional phone lines:</p>
              <ul className="space-y-3">
                {[
                  'Cost savings: 40-60% reduction',
                  'Scalability: add lines instantly',
                  'Redundancy: automatic failover',
                  'International: cheaper rates',
                  'DID numbers: get Dubai/UAE numbers',
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-300">
                    <span className="text-blue-400 mt-1">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-blue-400 font-semibold">We handle all telco coordination</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}