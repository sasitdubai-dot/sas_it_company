'use client';

import { motion } from 'framer-motion';
import { ServerIcon, WifiIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

export default function ServicesOverview() {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-blue-600/20 to-purple-600/20">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What's Covered Under AMC
          </h2>
          <p className="text-xl text-gray-400">Comprehensive IT infrastructure and services covered under our AMC packages.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* IT Infrastructure Section */}
          <motion.div
            className="p-8 rounded-xl bg-blue-700/30 text-white shadow-lg backdrop-blur-md transform transition-all duration-300 hover:scale-105 hover:bg-blue-700/40"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-6">
              <ServerIcon className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">IT Infrastructure</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Servers (physical & virtual)</li>
              <li>Network equipment (switches, routers, firewalls)</li>
              <li>Workstations & laptops</li>
              <li>Printers & scanners</li>
              <li>UPS systems</li>
              <li>Storage systems (NAS/SAN)</li>
            </ul>
          </motion.div>

          {/* Services Included Section */}
          <motion.div
            className="p-8 rounded-xl bg-blue-800/20 text-white shadow-lg backdrop-blur-md transform transition-all duration-300 hover:scale-105 hover:bg-blue-800/30"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-6">
              <WifiIcon className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Services Included</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Regular health checks</li>
              <li>Performance monitoring</li>
              <li>Backup verification</li>
              <li>Security updates</li>
              <li>Software licensing management</li>
              <li>Asset tracking</li>
              <li>Documentation updates</li>
            </ul>
          </motion.div>

          {/* Support Activities Section */}
          <motion.div
            className="p-8 rounded-xl bg-purple-700/20 text-white shadow-lg backdrop-blur-md transform transition-all duration-300 hover:scale-105 hover:bg-purple-700/30"
            whileHover={{ scale: 1.05 }}
          >
            <div className="flex justify-center mb-6">
              <ShieldCheckIcon className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Support Activities</h3>
            <ul className="text-gray-300 space-y-2">
              <li>User support & troubleshooting</li>
              <li>Password resets</li>
              <li>New user setup</li>
              <li>Hardware repairs</li>
              <li>Configuration changes</li>
              <li>Network optimization</li>
              <li>Email system maintenance</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
