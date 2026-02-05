'use client';

import { motion } from 'framer-motion';
import {
  BriefcaseIcon,
  ShieldCheckIcon,
  ServerIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'IT Consulting',
    icon: BriefcaseIcon,
    items: [
      'Technology planning',
      'Vendor management',
      'Project management',
      'IT budgeting',
    ],
  },
  {
    title: 'Security Services',
    icon: ShieldCheckIcon,
    items: [
      'Penetration testing',
      'Security audits',
      'Compliance consulting',
      'Incident response',
    ],
  },
  {
    title: 'Infrastructure Projects',
    icon: ServerIcon,
    items: [
      'Server upgrades',
      'Network redesigns',
      'Cloud migrations',
      'Data center setup',
    ],
  },
];

export default function AdditionalServices() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Additional Services
          </h2>
          <p className="text-lg text-gray-400">
            Available to AMC customers at preferred rates
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-lg hover:scale-105 transition-transform"
            >
              {/* Icon */}
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-md mb-6">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4">{service.title}</h3>

              {/* Items */}
              <ul className="text-gray-300 space-y-2 text-sm">
                {service.items.map((item, i) => (
                  <li key={i}>✓ {item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Discount Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-lg text-secondary font-semibold">
            All at 10–20% discount for AMC customers
          </p>
        </motion.div>
      </div>
    </section>
  );
}