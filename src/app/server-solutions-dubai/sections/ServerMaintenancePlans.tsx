'use client';

import { motion } from 'framer-motion';
import { CheckCircleIcon, StarIcon, ShieldCheckIcon } from '@heroicons/react/24/outline';

const plans = [
  {
    name: 'Bronze Plan',
    price: 'AED 500/month',
    color: 'from-gray-500 to-gray-700',
    features: [
      'Monthly health checks',
      'Security updates',
      'Performance monitoring',
      'Email support (24-hour response)',
    ],
  },
  {
    name: 'Silver Plan',
    price: 'AED 1,200/month',
    color: 'from-blue-500 to-purple-500',
    features: [
      'Everything in Bronze',
      '24/7 monitoring',
      'Quarterly optimization',
      'Phone support (4-hour response)',
      'Free emergency callouts',
    ],
  },
  {
    name: 'Gold Plan',
    price: 'AED 2,500/month',
    color: 'from-yellow-500 to-orange-500',
    features: [
      'Everything in Silver',
      'Proactive management',
      'Monthly reports',
      'Dedicated engineer',
      '2-hour emergency response',
      'Hardware replacement coverage',
    ],
  },
];

export default function ServerMaintenancePlans() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-32 -left-32"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-32 -right-32"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Server Maintenance Plans
          </h2>
          <p className="text-lg text-gray-400">
            Choose the right plan for your business needs
          </p>
        </motion.div>

        {/* Plans Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-blue-400/40 transition-all shadow-lg hover:shadow-xl hover:scale-105 flex flex-col"
            >
              {/* Icon bubble */}
              <div
                className={`flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${plan.color} shadow-md mb-6`}
              >
                {plan.name.includes('Gold') ? (
                  <StarIcon className="w-8 h-8 text-white" />
                ) : plan.name.includes('Silver') ? (
                  <ShieldCheckIcon className="w-8 h-8 text-white" />
                ) : (
                  <CheckCircleIcon className="w-8 h-8 text-white" />
                )}
              </div>

              {/* Title + Price */}
              <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
              <p className="text-lg font-semibold text-blue-300 mb-6">{plan.price}</p>

              {/* Features */}
              <ul className="space-y-2 text-gray-300 text-sm flex-1">
                {plan.features.map((f, i) => (
                  <li key={i}>✓ {f}</li>
                ))}
              </ul>

              {/* CTA */}
              <motion.a
                href="tel:+971526716178"
                whileHover={{ scale: 1.05 }}
                className="mt-6 block w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold text-center"
              >
                Call to Subscribe
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}