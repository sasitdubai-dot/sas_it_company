'use client';

import { motion } from 'framer-motion';
import { ClipboardDocumentListIcon, PencilSquareIcon, WrenchScrewdriverIcon, ShieldCheckIcon, DocumentTextIcon } from '@heroicons/react/24/outline';

const steps = [
  {
    title: 'Step 1: Site Survey (Free)',
    desc: 'Walk the space, count points needed, identify challenges. (1-2 hours)',
    icon: ClipboardDocumentListIcon,
    color: 'text-blue-400',
  },
  {
    title: 'Step 2: Design & Quote',
    desc: 'Detailed design, cable path planning, point locations, quote. (2-3 days)',
    icon: PencilSquareIcon,
    color: 'text-purple-400',
  },
  {
    title: 'Step 3: Installation',
    desc: 'Cable pulling, termination, testing. Usually done after hours. (3-7 days depending on size)',
    icon: WrenchScrewdriverIcon,
    color: 'text-green-400',
  },
  {
    title: 'Step 4: Testing & Certification',
    desc: 'Fluke test every cable, provide certification reports. (1 day)',
    icon: ShieldCheckIcon,
    color: 'text-yellow-400',
  },
  {
    title: 'Step 5: Documentation',
    desc: 'Point labels, as-built drawings, test reports, warranty registration. (1 day)',
    icon: DocumentTextIcon,
    color: 'text-red-400',
  },
];

export default function InstallationProcess() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="max-w-5xl mx-auto px-6">
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
            From survey to certification in 5 clear steps
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative border-l border-white/20 pl-8 space-y-12">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              {/* Icon bubble */}
              <div className="absolute -left-10 top-0 flex items-center justify-center w-10 h-10 rounded-full bg-white/10 border border-white/20">
                <step.icon className={`w-6 h-6 ${step.color}`} />
              </div>

              {/* Content */}
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-white/20 transition-all">
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-gray-300 text-sm">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}