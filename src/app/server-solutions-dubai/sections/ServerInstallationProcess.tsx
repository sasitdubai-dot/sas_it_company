'use client';

import { motion } from 'framer-motion';
import {
  ClipboardDocumentListIcon,
  CogIcon,
  ShoppingCartIcon,
  WrenchScrewdriverIcon,
  AcademicCapIcon,
} from '@heroicons/react/24/outline';

const steps = [
  {
    title: 'Step 1: Requirements Gathering',
    desc: 'We discuss your applications, users, growth plans, budget. (1-2 hours)',
    icon: ClipboardDocumentListIcon,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Step 2: Server Design',
    desc: 'Custom server specification, OS selection, virtualization plan. (2-3 days)',
    icon: CogIcon,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Step 3: Procurement',
    desc: 'We order equipment, handle customs, coordinate delivery. (1-2 weeks)',
    icon: ShoppingCartIcon,
    color: 'from-green-500 to-emerald-500',
  },
  {
    title: 'Step 4: Installation',
    desc: 'Physical installation, OS setup, application migration, testing. (1-3 days)',
    icon: WrenchScrewdriverIcon,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Step 5: Go-Live & Training',
    desc: 'Staff training, documentation, support handover. (1 day)',
    icon: AcademicCapIcon,
    color: 'from-red-500 to-pink-500',
    center: true, // special flag
  },
];

export default function ServerInstallationProcess() {
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
            Installation Process
          </h2>
          <p className="text-lg text-gray-400">
            From requirements to go-live in 5 clear steps
          </p>
        </motion.div>

        {/* Grid for first 4 steps */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {steps.filter(s => !s.center).map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-start gap-6 p-6 rounded-xl bg-white/5 border border-white/10 hover:border-blue-400/40 transition-all shadow-lg backdrop-blur-md"
            >
              <div
                className={`flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-r ${step.color} shadow-md flex-shrink-0`}
              >
                <step.icon className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Centered Step 5 */}
        {steps.filter(s => s.center).map((step, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mx-auto max-w-2xl flex items-start gap-6 p-8 rounded-2xl bg-white/10 border border-white/20 hover:border-red-400/40 transition-all shadow-xl backdrop-blur-md"
          >
            <div
              className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${step.color} shadow-md flex-shrink-0`}
            >
              <step.icon className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-2 text-center">{step.title}</h3>
              <p className="text-gray-300 text-sm text-center">{step.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}