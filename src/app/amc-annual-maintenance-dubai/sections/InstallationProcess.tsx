'use client';

import { motion } from 'framer-motion';
import {
  ClipboardDocumentListIcon,
  Cog6ToothIcon,
  RocketLaunchIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';

const steps = [
  {
    week: 'Week 1',
    title: 'Discovery',
    icon: ClipboardDocumentListIcon,
    tasks: [
      'Complete IT infrastructure audit',
      'Document existing systems',
      'Identify immediate issues',
      'Risk assessment',
    ],
  },
  {
    week: 'Week 2',
    title: 'Planning',
    icon: Cog6ToothIcon,
    tasks: [
      'Create maintenance schedule',
      'Define escalation procedures',
      'Setup monitoring tools',
      'Configure ticketing system',
    ],
  },
  {
    week: 'Week 3',
    title: 'Implementation',
    icon: RocketLaunchIcon,
    tasks: [
      'Deploy monitoring agents',
      'Configure alerting',
      'Team training',
      'Process documentation',
    ],
  },
  {
    week: 'Week 4',
    title: 'Go-Live',
    icon: CheckBadgeIcon,
    tasks: [
      'Begin scheduled maintenance',
      'Activate 24/7 support',
      'Start reporting',
      'Regular touchpoints',
    ],
  },
];

export default function InstallationOnboarding() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Installation & Onboarding
          </h2>
          <p className="text-lg text-gray-400">
            A structured 4-week journey to get your IT environment fully onboarded.
          </p>
        </motion.div>

        {/* Responsive Stepper */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="flex flex-col items-center text-center md:text-left md:items-start"
            >
              {/* Icon bubble */}
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mb-6">
                <step.icon className="w-10 h-10 text-white" />
              </div>

              {/* Week + Title */}
              <h3 className="text-xl font-bold text-white mb-3">
                {step.week}: {step.title}
              </h3>

              {/* Tasks */}
              <ul className="text-gray-300 space-y-2 text-sm">
                {step.tasks.map((task, i) => (
                  <li key={i}>✓ {task}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}