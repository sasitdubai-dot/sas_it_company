'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  ServerIcon,
  WifiIcon,
  ClockIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowRightIcon,
  BoltIcon,
  GlobeAltIcon,
  LockClosedIcon,
  ChartBarIcon,
  UserGroupIcon,
  CpuChipIcon,
  CloudIcon,
  CogIcon,
  ChevronDownIcon,

} from '@heroicons/react/24/outline';
export default function InstallationProcess(){
    return(
        <section className="py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Simple Installation Process
            </h2>
            <p className="text-xl text-gray-400">From consultation to go-live in 5 steps</p>
          </motion.div>

          <div className="space-y-8">
            {[
              {
                step: '01',
                title: 'Free Assessment',
                desc: 'Site survey, needs analysis, and current infrastructure review',
                duration: '1-2 days',
              },
              {
                step: '02',
                title: 'Design Proposal',
                desc: 'Custom network design, equipment list, and detailed quote',
                duration: '2-3 days',
              },
              {
                step: '03',
                title: 'Installation',
                desc: 'Professional cabling, equipment deployment, and configuration',
                duration: '3-7 days',
              },
              {
                step: '04',
                title: 'Testing & Training',
                desc: 'Performance testing, security validation, and team training',
                duration: '1-2 days',
              },
              {
                step: '05',
                title: 'Ongoing Support',
                desc: '24/7 monitoring, regular maintenance, and updates',
                duration: 'Continuous',
              },
            ].map((process, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-6 group"
              >
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                    {process.step}
                  </div>
                </div>
                <div className="flex-1 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl font-bold text-white">{process.title}</h3>
                    <span className="text-sm text-blue-400 font-medium">{process.duration}</span>
                  </div>
                  <p className="text-gray-400">{process.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );

}