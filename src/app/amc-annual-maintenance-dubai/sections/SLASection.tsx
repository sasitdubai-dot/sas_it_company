'use client';

import { motion } from 'framer-motion';
import { ShieldCheckIcon, XCircleIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline';

export default function SLASection() {
  return (
    <section className="py-24 relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900" id="sla">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Service Level Agreements (SLA)</h2>
          <p className="text-lg text-gray-400">Clear commitments, exclusions, and preventive maintenance activities.</p>
        </motion.div>

        {/* SLA Tiers */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {[
            {
              tier: 'Bronze',
              response: ['Email: 24 hours', 'Phone: Next business day', 'On-site: 48 hours'],
              uptime: '98% uptime',
            },
            {
              tier: 'Silver',
              response: ['Email: 8 hours', 'Phone: 4 hours', 'On-site: 8 hours', 'Emergency: Same day'],
              uptime: '99% uptime',
            },
            {
              tier: 'Gold',
              response: ['Email: 2 hours', 'Phone: 2 hours', 'On-site: 4 hours', 'Emergency: Within 2 hours'],
              uptime: '99.5% uptime',
            },
          ].map((sla, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-xl bg-white/5 border border-white/10 text-white shadow-lg hover:scale-105 transition-transform"
            >
              <ShieldCheckIcon className="w-10 h-10 text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-4">{sla.tier} SLA</h3>
              <ul className="text-gray-300 space-y-2 mb-4">
                {sla.response.map((r, i) => (
                  <li key={i}>{r}</li>
                ))}
              </ul>
              <p className="text-sm text-secondary font-semibold">{sla.uptime}</p>
            </motion.div>
          ))}
        </div>

        {/* Exclusions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="p-10 rounded-2xl bg-red-900/20 border border-red-500/30 text-white">
            <div className="flex items-center gap-3 mb-6">
              <XCircleIcon className="w-10 h-10 text-red-400" />
              <h3 className="text-2xl font-bold">What's Not Included</h3>
            </div>
            <ul className="grid md:grid-cols-2 gap-4 text-gray-300">
              {[
                'Major hardware failures (10–20% discount)',
                'New equipment purchases',
                'Major infrastructure upgrades',
                'Data recovery from failed drives',
                'Third-party software issues',
                'Physical damage/accidents',
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-2">• {item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* Preventive Maintenance Checklist */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="p-10 rounded-2xl bg-green-900/20 border border-green-500/30 text-white">
            <div className="flex items-center gap-3 mb-6">
              <ClipboardDocumentCheckIcon className="w-10 h-10 text-green-400" />
              <h3 className="text-2xl font-bold">Preventive Maintenance Checklist</h3>
            </div>

            <div className="grid md:grid-cols-3 gap-8 text-gray-300">
              <div>
                <h4 className="text-lg font-semibold mb-3">Monthly</h4>
                <ul className="space-y-2">
                  <li>✓ Server health & performance check</li>
                  <li>✓ Backup system verification</li>
                  <li>✓ Security patch deployment</li>
                  <li>✓ Network equipment inspection</li>
                  <li>✓ UPS battery testing</li>
                  <li>✓ Disk space monitoring</li>
                  <li>✓ Antivirus updates</li>
                  <li>✓ Event log review</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Quarterly</h4>
                <ul className="space-y-2">
                  <li>✓ Security audit</li>
                  <li>✓ Network optimization</li>
                  <li>✓ Capacity planning</li>
                  <li>✓ Disaster recovery testing</li>
                  <li>✓ Password policy compliance</li>
                  <li>✓ Software license audit</li>
                  <li>✓ Hardware lifecycle review</li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Annual</h4>
                <ul className="space-y-2">
                  <li>✓ Infrastructure review</li>
                  <li>✓ Upgrade planning</li>
                  <li>✓ Security assessment</li>
                  <li>✓ Business continuity planning</li>
                  <li>✓ IT roadmap development</li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}