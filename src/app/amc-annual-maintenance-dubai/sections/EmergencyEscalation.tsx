'use client';

import { motion } from 'framer-motion';
import {
  PhoneIcon,
  TruckIcon,
  WrenchScrewdriverIcon,
  BuildingOfficeIcon,
} from '@heroicons/react/24/outline';

const tiers = [
  {
    title: 'Tier 1 (15 min)',
    desc: 'Remote engineer attempts resolution',
    icon: PhoneIcon,
    color: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Tier 2 (2–4 hours)',
    desc: 'On-site engineer dispatched',
    icon: TruckIcon,
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'Tier 3 (Same day)',
    desc: 'Senior engineer + parts replacement',
    icon: WrenchScrewdriverIcon,
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: 'Tier 4 (As needed)',
    desc: 'Manufacturer escalation, temporary equipment',
    icon: BuildingOfficeIcon,
    color: 'from-red-500 to-pink-500',
  },
];

export default function EmergencyEscalation() {
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
            Emergency Escalation
          </h2>
          <p className="text-lg text-gray-400">
            Critical issue? Here’s how we respond
          </p>
        </motion.div>

        {/* Escalation Ladder */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-lg hover:scale-105 transition-transform flex flex-col items-center text-center"
            >
              {/* Icon bubble */}
              <div
                className={`flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${tier.color} shadow-md mb-6`}
              >
                <tier.icon className="w-10 h-10 text-white" />
              </div>

              {/* Title + Description */}
              <h3 className="text-xl font-bold text-white mb-3">{tier.title}</h3>
              <p className="text-gray-300 text-sm">{tier.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}