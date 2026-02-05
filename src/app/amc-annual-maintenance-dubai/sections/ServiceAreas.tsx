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

export default function ServiceAreas(){
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
              Service Areas Across Dubai
            </h2>
            <p className="text-xl text-gray-400">Rapid deployment across all business zones</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              'Business Bay',
              'DIFC',
              'Dubai Marina',
              'JLT',
              'Media City',
              'Internet City',
              'Knowledge Park',
              'DSO',
              'DAFZA',
              'JAFZA',
              'Downtown Dubai',
              'Sheikh Zayed Road',
              'Dubai Silicon Oasis',
              'Dubai Airport Freezone',
              'Jumeirah',
              'Al Quoz',
            ].map((area, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.03 }}
                className="p-4 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-500/50 hover:bg-white/10 transition-all text-center group"
              >
                <MapPinIcon className="w-5 h-5 text-blue-400 mx-auto mb-2 group-hover:scale-110 transition-transform" />
                <span className="text-sm text-gray-300 font-medium">{area}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );

}