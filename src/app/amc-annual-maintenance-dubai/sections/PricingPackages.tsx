'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function PricingPackages() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/10 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Flexible Pricing Plans
          </h2>
          <p className="text-xl text-gray-400">Choose the perfect solution for your business</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: 'Bronze AMC',
              price: '1,999',
              popular: false,
              features: [
                'Monthly on-site visits',
                'Hardware health checks',
                'Software updates & patches',
                'Email support (24-hour response)',
                'Remote assistance',
                'Quarterly reports',
                '10% discount on repairs',
                'Business hours support (9am-6pm)',
              ],
            },
            {
              name: 'Silver AMC',
              price: '4,999',
              popular: true,
              features: [
                'Everything in Bronze PLUS:',
                'Bi-weekly on-site visits',
                '24/7 monitoring',
                'Phone support (4-hour response)',
                'Network performance optimization',
                'Security patch management',
                'Monthly detailed reports',
                'Priority parts procurement',
                'Free emergency callouts',
                'Extended hours support (7am-10pm)',
              ],
            },
            {
              name: 'Gold AMC',
              price: '9,999',
              popular: false,
              features: [
                'Everything in Silver PLUS:',
                'Weekly on-site visits',
                'Dedicated engineer',
                '24/7 phone support (2-hour response)',
                'Proactive system management',
                'Capacity planning',
                'Disaster recovery planning',
                'Hardware replacement coverage',
                'Free equipment loans during repairs',
                'Unlimited remote support',
                'Executive monthly reviews',
                '24/7/365 support',
              ],
            },
          ].map((pkg, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative p-8 rounded-2xl backdrop-blur-sm transition-all duration-300 ${
                pkg.popular
                  ? 'bg-gradient-to-br from-blue-600/20 to-purple-600/20 border-2 border-blue-500 scale-105 shadow-2xl shadow-blue-500/25'
                  : 'bg-white/5 border border-white/10 hover:border-white/20'
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  {pkg.price}
                </span>
                <span className="text-gray-400 ml-2">AED</span>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <motion.a
                href="tel:+971526716178"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`block w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 ${
                  pkg.popular
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                Get Started
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Redesigned Custom Enterprise AMC */}
        {/* <div className="mt-16 p-8 rounded-xl bg-gradient-to-r from-blue-700 to-purple-700 shadow-2xl text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <h3 className="text-3xl font-bold mb-4">Custom Enterprise AMC</h3>
            <div className="flex items-baseline justify-center mb-6">
              <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                POA
              </span>
              <span className="text-gray-300 ml-2">Tailored to Your Needs</span>
            </div>

            <ul className="space-y-3 mb-8">
              <li className="text-gray-200">Multi-site support</li>
              <li className="text-gray-200">Specialized equipment coverage</li>
              <li className="text-gray-200">Integration with existing IT team</li>
              <li className="text-gray-200">Custom SLAs</li>
              <li className="text-gray-200">Advanced security services</li>
              <li className="text-gray-200">Compliance management</li>
            </ul>

            <motion.a
              href="tel:+971526716178"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="block w-full py-4 px-6 rounded-xl font-semibold text-center transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/25"
            >
              Contact for Custom Quote
            </motion.a>
          </motion.div>
        </div> */}
      </div>
    </section>
  );
}
