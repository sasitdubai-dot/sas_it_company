'use client';

import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  SparklesIcon,
  StarIcon,
  ClipboardDocumentCheckIcon,
  BuildingOfficeIcon,
  CpuChipIcon,
} from '@heroicons/react/24/outline';

const reasons = [
  {
    title: 'Certified Installers',
    desc: 'BICSI certified. Trained on latest standards. Not general electricians.',
    icon: ShieldCheckIcon,
    color: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Clean Professional Work',
    desc: 'Hidden cable runs, proper management, building-standard aesthetics.',
    icon: SparklesIcon,
    color: 'from-green-500 to-teal-500',
  },
  {
    title: '25-Year Warranty',
    desc: 'Industry-leading warranty on complete structured cabling system.',
    icon: StarIcon,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Fluke Certified Testing',
    desc: 'Every cable tested and certified. You get official test reports.',
    icon: ClipboardDocumentCheckIcon,
    color: 'from-red-500 to-pink-500',
  },
  {
    title: 'UAE Building Code Compliant',
    desc: 'DDA approved methods. Civil Defense compliant. Municipality standards.',
    icon: BuildingOfficeIcon,
    color: 'from-indigo-500 to-blue-500',
  },
  {
    title: 'Future-Proof Design',
    desc: 'Cat6A supports current and future network speeds. Room for growth.',
    icon: CpuChipIcon,
    color: 'from-purple-500 to-pink-500',
  },
];

export default function WhyChooseSASIT() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose SAS IT for Cabling?
          </h2>
          <p className="text-lg text-gray-400">
            Trusted structured cabling partner with certified expertise
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
              className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-lg hover:scale-105 transition-transform flex flex-col items-start"
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