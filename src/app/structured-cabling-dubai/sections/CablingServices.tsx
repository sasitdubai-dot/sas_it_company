'use client';

import { motion } from 'framer-motion';
import {
  BuildingOfficeIcon,
  WrenchScrewdriverIcon,
  ServerIcon,
  CpuChipIcon,
  BoltIcon,
  ShieldCheckIcon,
  DocumentTextIcon,
} from '@heroicons/react/24/outline';

export default function CablingServices() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="max-w-7xl mx-auto px-6 space-y-24">
        {/* Office Fit-Out Cabling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Office Fit-Out Cabling
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Pre-wiring before furniture',
              'Coordination with fit-out contractor',
              'Floor box installations',
              'Meeting room cabling',
              'Reception area infrastructure',
              'Server room setup',
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 flex items-start gap-3"
              >
                <BuildingOfficeIcon className="w-6 h-6 text-blue-400 flex-shrink-0" />
                <span className="text-gray-300">{item}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Specialized Cabling */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Specialized Cabling
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Data Centers */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <ServerIcon className="w-8 h-8 text-purple-400" />
                <h3 className="text-xl font-bold text-white">Data Centers</h3>
              </div>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>Hot/cold aisle design</li>
                <li>High-density patching</li>
                <li>Overhead cable management</li>
                <li>Color-coded systems</li>
              </ul>
            </div>

            {/* Industrial */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <CpuChipIcon className="w-8 h-8 text-green-400" />
                <h3 className="text-xl font-bold text-white">Industrial</h3>
              </div>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>Shielded Cat7 cabling</li>
                <li>Harsh environment protection</li>
                <li>Vibration-resistant installations</li>
                <li>IP-rated connectors</li>
              </ul>
            </div>

            {/* Outdoor */}
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <BoltIcon className="w-8 h-8 text-yellow-400" />
                <h3 className="text-xl font-bold text-white">Outdoor</h3>
              </div>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>Underground conduit</li>
                <li>Weather-proof terminations</li>
                <li>Building-to-building fiber</li>
                <li>Lightning protection</li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Testing & Certification */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Testing & Certification
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <ShieldCheckIcon className="w-8 h-8 text-red-400" />
                <h3 className="text-xl font-bold text-white">We Test Every Cable</h3>
              </div>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>Wire mapping</li>
                <li>Length measurement</li>
                <li>Insertion loss</li>
                <li>Return loss</li>
                <li>NEXT/FEXT</li>
                <li>Delay skew</li>
              </ul>
            </div>

            <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
              <div className="flex items-center gap-3 mb-4">
                <DocumentTextIcon className="w-8 h-8 text-blue-400" />
                <h3 className="text-xl font-bold text-white">You Receive</h3>
              </div>
              <ul className="text-gray-300 space-y-2 text-sm">
                <li>Detailed test reports</li>
                <li>Pass/fail certification</li>
                <li>Cable ID labels</li>
                <li>Performance graphs</li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}