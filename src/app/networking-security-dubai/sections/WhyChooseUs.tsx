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
export default function WhyChooseUs(){
    return(
         <section className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Why Choose SAS IT
            </h2>
            <p className="text-xl text-gray-400">Your trusted network partner in Dubai</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: ShieldCheckIcon,
                title: 'Certified Engineers',
                desc: 'Fortinet NSE & Cisco CCNP certified professionals',
                color: 'from-blue-600 to-blue-400',
              },
              {
                icon: MapPinIcon,
                title: 'Dubai Experience',
                desc: '500+ successful deployments across all business zones',
                color: 'from-purple-600 to-purple-400',
              },
              {
                icon: BoltIcon,
                title: 'Scalable Solutions',
                desc: 'Future-proof infrastructure that grows with your business',
                color: 'from-yellow-600 to-yellow-400',
              },
              {
                icon: ClockIcon,
                title: '24/7 Local Support',
                desc: 'UAE-based support team, onsite within 4 hours',
                color: 'from-green-600 to-green-400',
              },
              {
                icon: CpuChipIcon,
                title: 'Complete Documentation',
                desc: 'Full network diagrams, configs, and handover docs',
                color: 'from-pink-600 to-pink-400',
              },
              {
                icon: LockClosedIcon,
                title: 'Security First',
                desc: 'Zero-trust architecture with layered protection',
                color: 'from-red-600 to-red-400',
              },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
}