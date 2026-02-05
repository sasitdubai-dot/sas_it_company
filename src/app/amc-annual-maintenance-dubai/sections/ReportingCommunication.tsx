'use client';

import { motion } from 'framer-motion';
import {
  DocumentChartBarIcon,
  ChartPieIcon,
  CalendarDaysIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/outline';

const reports = [
  {
    title: 'Monthly Reports',
    icon: DocumentChartBarIcon,
    items: [
      'Service activities performed',
      'System health status',
      'Upcoming maintenance',
      'Recommendations',
      'Ticket statistics',
    ],
    color: 'from-blue-500 to-purple-500',
  },
  {
    title: 'Quarterly Reviews',
    icon: ChartPieIcon,
    items: [
      'Performance trends',
      'Capacity planning',
      'Security posture',
      'Budget forecasting',
    ],
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'Annual Planning',
    icon: CalendarDaysIcon,
    items: [
      'Infrastructure roadmap',
      'Technology refresh plan',
      'Investment priorities',
    ],
    color: 'from-yellow-500 to-orange-500',
  },
  {
    title: '24/7 Access',
    icon: GlobeAltIcon,
    items: [
      'Ticket portal',
      'Knowledge base',
      'Emergency contacts',
      'Remote session requests',
    ],
    color: 'from-red-500 to-pink-500',
  },
];

export default function ReportingCommunication() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Reporting & Communication
          </h2>
          <p className="text-lg text-gray-400">
            Transparent updates and proactive communication at every stage
          </p>
        </motion.div>

        {/* Reports Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reports.map((report, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 shadow-lg hover:scale-105 transition-transform flex flex-col items-center text-center"
            >
              {/* Icon bubble */}
              <div
                className={`flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${report.color} shadow-md mb-6`}
              >
                <report.icon className="w-10 h-10 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-white mb-4">{report.title}</h3>

              {/* Items */}
              <ul className="text-gray-300 space-y-2 text-sm text-left">
                {report.items.map((item, i) => (
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