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
export default function TechnologyPartners(){
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
              What We Install
            </h2>
            <p className="text-xl text-gray-400">Industry-leading brands with full warranty</p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {['Fortinet', 'Cisco', 'Unifi', 'Ruckus', 'Aruba'].map((brand, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center justify-center p-8 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 transition-all group"
              >
                <span className="text-2xl font-bold text-gray-400 group-hover:text-white transition-colors">
                  {brand}
                </span>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 p-6 rounded-xl bg-blue-600/10 border border-blue-500/20 text-center"
          >
            <p className="text-gray-300">
              All equipment comes with <span className="text-blue-400 font-semibold">manufacturer warranty</span> + 
              <span className="text-purple-400 font-semibold"> installation warranty</span>
            </p>
          </motion.div>
        </div>
      </section>
    );
}