'use client';

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
              name: 'Small Business Server',
              price: '8,999',
              popular: false,
              features: [
                'Dell PowerEdge T340 or equivalent',
                'Intel Xeon processor',
                '16GB RAM (expandable to 64GB)',
                '2TB storage (RAID 1)',
                'Windows Server 2022 Standard',
                'Installation & configuration',
                'Active Directory setup',
                'Basic backup configuration',
                '1-Year warranty',
              ],
            },
            {
              name: 'Popular - Business Server',
              price: '18,999',
              popular: true,
              features: [
                'Dell PowerEdge R450 rack server',
                'Dual Intel Xeon processors',
                '64GB RAM (expandable to 256GB)',
                '4TB storage (RAID 5)',
                'Windows Server 2022 Standard (2 VMs)',
                'Virtualization setup (Hyper-V or VMware)',
                'Domain controller + file server',
                'Email server optional',
                'Backup system included',
                'UPS included',
                '3-Year warranty',
                '6 months free monitoring',
              ],
            },
            {
              name: 'Enterprise Server Solution',
              price: '45,999+',
              popular: false,
              features: [
                'Dell PowerEdge R650 or R750',
                'Dual Xeon Scalable processors',
                '128GB+ RAM',
                '10TB+ storage (RAID 6/10)',
                'VMware vSphere Enterprise Plus',
                'High availability clustering',
                'SAN/NAS integration',
                'Complete virtualization',
                'Disaster recovery setup',
                '5-Year warranty',
                'Managed services included',
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
      </div>
    </section>
  );
}
