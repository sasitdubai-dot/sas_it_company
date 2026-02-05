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
export default function SecurityThreats(){
    return(
    <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute w-full h-full bg-gradient-to-r from-red-900/20 via-orange-900/20 to-red-900/20"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Security Threats We Prevent
            </h2>
            <p className="text-xl text-gray-400">Protection against modern cyber threats</p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12">
            {[
              { name: 'Ransomware', icon: '🔒' },
              { name: 'Data Breaches', icon: '🛡️' },
              { name: 'DDoS Attacks', icon: '⚡' },
              { name: 'Phishing', icon: '🎣' },
              { name: 'Malware', icon: '🦠' },
              { name: 'Insider Threats', icon: '👤' },
              { name: 'Zero-Day Exploits', icon: '💥' },
              { name: 'Man-in-Middle', icon: '🔗' },
            ].map((threat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="p-6 rounded-xl bg-gradient-to-br from-red-600/10 to-orange-600/10 border border-red-500/20 hover:border-red-500/40 transition-all group"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {threat.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{threat.name}</h3>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center p-8 rounded-2xl bg-gradient-to-r from-red-600/20 to-orange-600/20 border border-red-500/30"
          >
            <p className="text-2xl text-white mb-2">
              Average breach cost in UAE: <span className="font-bold text-red-400">AED 2.5M+</span>
            </p>
            <p className="text-xl text-gray-300">
              Prevention cost: <span className="font-bold text-green-400">AED 12K-35K</span>
            </p>
          </motion.div>
        </div>
      </section>
    );
}