'use client';

import { motion } from 'framer-motion';
import {
  ServerIcon,
  CpuChipIcon,
  CloudIcon,
  CogIcon,
} from '@heroicons/react/24/outline';

const offers = [
  {
    title: 'Physical Servers',
    icon: ServerIcon,
    color: 'from-blue-500 to-cyan-500',
    items: [
      'Rack servers (1U, 2U, 4U)',
      'Tower servers',
      'Blade servers',
      'High-density compute',
    ],
  },
  {
    title: 'Virtualization',
    icon: CpuChipIcon,
    color: 'from-purple-500 to-pink-500',
    items: [
      'VMware vSphere',
      'Microsoft Hyper-V',
      'Proxmox (open source)',
      'Container platforms',
    ],
  },
  {
    title: 'Storage Solutions',
    icon: CloudIcon,
    color: 'from-green-500 to-emerald-500',
    items: [
      'NAS (Network Attached Storage)',
      'SAN (Storage Area Network)',
      'DAS (Direct Attached Storage)',
      'Cloud-hybrid storage',
    ],
  },
  {
    title: 'Server Roles We Configure',
    icon: CogIcon,
    color: 'from-yellow-500 to-orange-500',
    items: [
      'Domain Controllers (Active Directory)',
      'File & Print Servers',
      'Database Servers (SQL, MySQL, MongoDB)',
      'Email Servers (Exchange, Mail servers)',
      'Application Servers',
      'Web Servers (IIS, Apache, Nginx)',
      'Backup Servers',
    ],
  },
];

export default function WhatWeOffer() {
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
            What We Offer
          </h2>
          <p className="text-lg text-gray-400">
            Comprehensive server solutions tailored for modern enterprises
          </p>
        </motion.div>

        {/* Offers Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {offers.map((offer, idx) => (
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
                className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${offer.color} shadow-md mb-6`}
              >
                <offer.icon className="w-8 h-8 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4">{offer.title}</h3>

              {/* Items */}
              <ul className="space-y-2 text-gray-300 text-sm">
                {offer.items.map((item, i) => (
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