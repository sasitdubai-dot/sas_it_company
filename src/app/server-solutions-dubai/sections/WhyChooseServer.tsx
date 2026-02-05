'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  ChartBarIcon,
  EyeIcon,
  BuildingOfficeIcon,
  ArrowPathIcon,
  CloudIcon,
} from '@heroicons/react/24/outline';

const reasons = [
  {
    title: 'Certified Engineers',
    desc: 'Microsoft MCSE, VMware VCP, Dell EMC certified. Real expertise.',
    icon: ShieldCheckIcon,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Right-Sized Solutions',
    desc: "We don't oversell. You get what you need, with room to grow.",
    icon: ChartBarIcon,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: '24/7 Monitoring',
    desc: 'Proactive monitoring catches issues before they cause downtime.',
    icon: EyeIcon,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Dubai Data Center Experience',
    desc: 'We work with all UAE data centers. DEWA compliance. DDA approved.',
    icon: BuildingOfficeIcon,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Migration Specialists',
    desc: 'Seamless migration from old to new servers. Zero data loss.',
    icon: ArrowPathIcon,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Backup Obsessed',
    desc: 'Every server includes comprehensive backup strategy. Tested regularly.',
    icon: CloudIcon,
    color: 'from-red-500 to-pink-500',
  },
];

export default function WhyChooseServers() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-32 -left-32"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-32 -right-32"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose SAS IT for Servers?
          </h2>
          <p className="text-lg text-gray-400">
            Trusted expertise and enterprise-grade reliability
          </p>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-400/40 transition-all shadow-lg hover:shadow-xl hover:scale-105"
            >
              {/* Icon bubble */}
              <div
                className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${reason.color} shadow-md mb-6`}
              >
                <reason.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title + Description */}
              <h3 className="text-xl font-bold text-white mb-3">{reason.title}</h3>
              <p className="text-gray-300 text-sm">{reason.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}