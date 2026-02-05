'use client';

import { motion } from 'framer-motion';
import {
  ClipboardDocumentListIcon,
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  WifiIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    title: 'Structured Cabling Design',
    icon: ClipboardDocumentListIcon,
    color: 'from-blue-500 to-purple-500',
    items: [
      'Site survey & planning',
      'Point location mapping',
      'Cable path design',
      'Capacity planning',
      'TIA-568 compliance',
    ],
  },
  {
    title: 'Installation',
    icon: WrenchScrewdriverIcon,
    color: 'from-green-500 to-teal-500',
    items: [
      'Cable pulling & termination',
      'Patch panel mounting',
      'Rack setup & organization',
      'Cable tray installation',
      'Proper labeling',
    ],
  },
  {
    title: 'Testing & Certification',
    icon: ShieldCheckIcon,
    color: 'from-yellow-500 to-orange-500',
    items: [
      'Fluke DSX-5000 testing',
      'Certification reports',
      'Cable performance verification',
      'Documentation package',
    ],
  },
  {
    title: 'Voice & Data Integration',
    icon: WifiIcon,
    color: 'from-red-500 to-pink-500',
    items: [
      'IP phone cabling',
      'Wireless AP cabling',
      'CCTV cable infrastructure',
      'Access control cabling',
    ],
  },
];

export default function OurCablingServices() {
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
            Our Cabling Services
          </h2>
          <p className="text-lg text-gray-400">
            End-to-end structured cabling solutions for modern businesses
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-lg hover:scale-105 transition-transform flex flex-col"
            >
              {/* Icon bubble */}
              <div
                className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${service.color} shadow-md mb-6`}
              >
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
      </div>
    </section>
  );
}