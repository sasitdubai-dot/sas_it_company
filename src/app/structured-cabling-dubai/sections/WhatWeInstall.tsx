'use client';

import { motion } from 'framer-motion';
import {
  ServerIcon,
  CpuChipIcon,
  BoltIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
} from '@heroicons/react/24/outline';

export default function WhatWeInstall() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What We Install
          </h2>
          <p className="text-xl text-gray-400">
            Professional copper & fiber optic cabling solutions
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Copper Cabling */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <CpuChipIcon className="w-10 h-10 text-blue-400" />
              <h3 className="text-2xl font-bold text-white">Copper Cabling</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li><strong>Cat5e</strong> – Basic data, voice (up to 1 Gbps)</li>
              <li><strong>Cat6</strong> – Standard business networks (up to 10 Gbps short distances)</li>
              <li><strong>Cat6A</strong> – High-performance, future-proof (10 Gbps 100m)</li>
              <li><strong>Cat7</strong> – Shielded, industrial environments</li>
            </ul>
          </motion.div>

          {/* Fiber Optic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-purple-400/40 transition-all"
          >
            <div className="flex items-center gap-3 mb-6">
              <GlobeAltIcon className="w-10 h-10 text-purple-400" />
              <h3 className="text-2xl font-bold text-white">Fiber Optic</h3>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li><strong>Single-mode</strong> – Long distance, building-to-building</li>
              <li><strong>Multi-mode</strong> – Indoor, backbone, high bandwidth</li>
              <li><strong>OM3/OM4</strong> – 10G/40G/100G applications</li>
            </ul>
          </motion.div>
        </div>

        {/* Brands */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow-lg">
            <ShieldCheckIcon className="w-6 h-6" />
            <span>Brands: Panduit • Commscope • Belden • Legrand</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}