'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  CloudArrowUpIcon,
  FireIcon,
  DocumentTextIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

const strategies = [
  {
    title: 'Regular Backup Testing',
    icon: ShieldCheckIcon,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Offsite Backup Copies',
    icon: CloudArrowUpIcon,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Hot/Warm/Cold Standby Options',
    icon: FireIcon,
    color: 'from-red-500 to-pink-500',
  },
  {
    title: 'Documented Recovery Procedures',
    icon: DocumentTextIcon,
    color: 'from-purple-500 to-pink-500',
    center: true,
  },
  {
    title: 'Annual DR Drills',
    icon: ArrowPathIcon,
    color: 'from-yellow-500 to-orange-500',
    center: true,
  },
];

export default function DisasterRecovery() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      <div className="relative max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Disaster Recovery
          </h2>
          <p className="text-lg text-gray-400">
            Protecting your business from costly downtime
          </p>
        </motion.div>

        {/* Cost Comparison */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-md text-center"
          >
            <h3 className="text-xl font-bold text-white mb-2">Average Cost of 1 Hour Downtime</h3>
            <p className="text-2xl font-semibold text-red-400">AED 15,000 – 50,000</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-lg backdrop-blur-md text-center"
          >
            <h3 className="text-xl font-bold text-white mb-2">Average Cost of Disaster Recovery Plan</h3>
            <p className="text-2xl font-semibold text-green-400">AED 8,000 – 25,000</p>
          </motion.div>
        </div>

        {/* First 3 Strategies */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {strategies.filter(s => !s.center).map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-all shadow-lg backdrop-blur-md"
            >
              <div
                className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${s.color} shadow-md mb-6`}
              >
                <s.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
            </motion.div>
          ))}
        </div>

        {/* Last 2 Strategies Centered */}
        <div className="flex flex-col md:flex-row justify-center gap-8">
          {strategies.filter(s => s.center).map((s, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 w-full md:w-1/3 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-all shadow-lg backdrop-blur-md text-center"
            >
              <div
                className={`flex items-center justify-center w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${s.color} shadow-md mb-6`}
              >
                <s.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{s.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}