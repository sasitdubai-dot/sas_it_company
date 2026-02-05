'use client';

import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    q: 'How long does cabling take?',
    a: '20 points: 2 days. 50 points: 4–5 days. 100+ points: 1–2 weeks. We work after hours to minimize disruption.',
  },
  {
    q: 'Can you work after business hours?',
    a: 'Yes. Most cabling is done evenings/weekends. No extra charge.',
  },
  {
    q: 'What about ceiling/floor access?',
    a: 'We coordinate with property management and handle all access requirements.',
  },
  {
    q: 'Cat6 or Cat6A?',
    a: 'Cat6A is recommended for new installations. It is future-proof, supports 10G full distance, with only a marginal cost difference.',
  },
  {
    q: 'Do you move existing cabling?',
    a: 'Yes. We relocate existing points, add new ones, and can rewire entire offices.',
  },
  {
    q: 'What if we expand later?',
    a: 'We design with 20–30% spare capacity, making it easy to add more points later.',
  },
  {
    q: 'How long is the warranty?',
    a: '25 years on the complete structured cabling system. Covers cable, terminations, and performance.',
  },
];

export default function CommonQuestions() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
      <div className="max-w-5xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Common Questions
          </h2>
          <p className="text-lg text-gray-400">
            Everything you need to know about our cabling services
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <Disclosure key={idx}>
              {({ open }) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white/5 rounded-xl p-6 border border-white/10"
                >
                  <Disclosure.Button className="flex justify-between w-full text-left text-white text-lg font-semibold">
                    <span>{faq.q}</span>
                    <ChevronDownIcon
                      className={`w-5 h-5 text-white transition-transform ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 text-gray-300 text-sm leading-relaxed">
                    {faq.a}
                  </Disclosure.Panel>
                </motion.div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}