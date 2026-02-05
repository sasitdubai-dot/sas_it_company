'use client';

import { motion } from 'framer-motion';
import { CircleStackIcon, BuildingOffice2Icon, WrenchIcon } from '@heroicons/react/24/outline';

export function DataRecoverySection() {
  const levels = [
    {
      level: 'Level 1',
      title: 'Software Recovery',
      price: 'AED 500-1000',
      icon: '💾',
      features: [
        'Deleted files',
        'Formatted drives',
        'Corrupted partitions',
        'Success rate: 90%+',
      ],
      gradient: 'from-green-600 to-teal-600',
    },
    {
      level: 'Level 2',
      title: 'Hardware Recovery',
      price: 'AED 1500-3000',
      icon: '🔧',
      features: [
        'Clicking hard drives',
        'Not detected',
        'Physical damage',
        'Success rate: 70%+',
      ],
      gradient: 'from-orange-600 to-yellow-600',
    },
    {
      level: 'Level 3',
      title: 'Clean Room Recovery',
      price: 'AED 3000+',
      icon: '🏥',
      features: [
        'Severe physical damage',
        'Water/fire damage',
        'Sent to specialized lab',
        'Success rate: 40-60%',
      ],
      gradient: 'from-red-600 to-pink-600',
    },
  ];

  return (
    <section className="py-24 relative bg-gradient-to-br from-emerald-950 via-teal-900 to-emerald-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-green-600 to-teal-600 flex items-center justify-center mx-auto mb-6">
            <CircleStackIcon className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Data Recovery Services
          </h2>
          <p className="text-xl text-gray-400">Hard drive failed? We can help</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {levels.map((level, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                {level.icon}
              </div>
              <div className="text-sm text-orange-400 font-semibold mb-2">{level.level}</div>
              <h3 className="text-2xl font-bold text-white mb-2">{level.title}</h3>
              <p className="text-3xl font-bold bg-gradient-to-r from-orange-400 to-red-400 bg-clip-text text-transparent mb-6">
                {level.price}
              </p>
              <ul className="space-y-2">
                {level.features.map((feature, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-green-400 mt-1">✓</span>
                    <span>{feature}</span>
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

export function CorporateServices() {
  return (
    <section className="py-24 relative bg-gradient-to-br from-blue-950 via-cyan-900 to-blue-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center mx-auto mb-6">
            <BuildingOffice2Icon className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Corporate Repair Services
          </h2>
          <p className="text-xl text-gray-400">Special services for businesses</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '📊', text: 'Volume discounts (10+ devices)' },
            { icon: '🚚', text: 'Pick-up/delivery service' },
            { icon: '⚡', text: 'Priority queue' },
            { icon: '💻', text: 'Loaner laptops available' },
            { icon: '📅', text: 'Monthly service contracts' },
            { icon: '🏢', text: 'On-site repairs for larger jobs' },
            { icon: '🏷️', text: 'Asset tagging & tracking' },
          ].map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group text-center"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <p className="text-white font-medium">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CommonIssuesSection() {
  const issues = [
    {
      title: 'Laptop Won\'t Turn On',
      items: [
        'Power adapter issue: AED 150-250',
        'Charging port repair: AED 300-450',
        'Motherboard repair: AED 450-800',
      ],
    },
    {
      title: 'Cracked Screen',
      items: [
        'Laptop LCD: AED 350-800',
        'MacBook Retina: AED 800-1500',
        'Touch screen: AED 500-1200',
      ],
    },
    {
      title: 'Slow Performance',
      items: [
        'Virus removal: AED 199',
        'SSD upgrade: AED 250-500',
        'RAM upgrade: AED 150-400',
      ],
    },
    {
      title: 'Overheating/Shutting Down',
      items: [
        'Fan replacement: AED 200-350',
        'Thermal paste: AED 150',
        'Deep cleaning: AED 150',
      ],
    },
    {
      title: 'Keys Not Working',
      items: [
        'Keyboard replacement: AED 250-600',
        'MacBook keyboard: AED 800-1200',
        'Individual key fix: AED 50-100',
      ],
    },
  ];

  return (
    <section className="py-24 relative bg-gradient-to-br from-violet-950 via-fuchsia-900 to-violet-950">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Common Issues We Fix
          </h2>
          <p className="text-xl text-gray-400">Transparent pricing for common problems</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {issues.map((issue, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all"
            >
              <h3 className="text-lg font-bold text-white mb-4">{issue.title}</h3>
              <ul className="space-y-2">
                {issue.items.map((item, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-orange-400 mt-1">→</span>
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

export function PreventiveMaintenanceSection() {
  return (
    <section className="py-24 relative bg-gradient-to-br from-amber-950 via-orange-900 to-amber-950">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-orange-600 to-amber-600 flex items-center justify-center mx-auto mb-6">
            <WrenchIcon className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Preventive Maintenance
          </h2>
          <p className="text-xl text-gray-400">Keep computers running smoothly</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-orange-600/20 to-amber-600/20 border border-orange-500/30"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Basic Service</h3>
            <p className="text-4xl font-bold bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mb-6">
              AED 149
            </p>
            <ul className="space-y-3">
              {[
                'Deep cleaning (dust removal)',
                'Thermal paste replacement',
                'Fan inspection',
                'Software cleanup',
                'Virus scan',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300">
                  <span className="text-orange-400 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-amber-600/20 to-yellow-600/20 border border-amber-500/30 relative"
          >
            <div className="absolute -top-4 right-4 px-4 py-1 rounded-full bg-gradient-to-r from-orange-600 to-amber-600 text-white text-sm font-semibold">
              Best Value
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Premium Service</h3>
            <p className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent mb-6">
              AED 299
            </p>
            <ul className="space-y-3">
              {[
                'Everything in Basic',
                'Hard drive health check',
                'RAM testing',
                'Battery calibration',
                'OS optimization',
                '1-year free diagnostics',
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-gray-300">
                  <span className="text-amber-400 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}