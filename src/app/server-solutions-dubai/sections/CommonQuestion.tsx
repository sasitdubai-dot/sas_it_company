'use client';

import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const faqs = [
  {
    q: 'Physical server or cloud?',
    a: 'Depends on your needs. We assess cost, performance, compliance. Often hybrid is best.',
  },
  {
    q: 'How long do servers last?',
    a: '3–5 years typical. We help plan refresh cycles to avoid unexpected failures.',
  },
  {
    q: 'Can you migrate our existing server?',
    a: 'Yes. We migrate files, applications, settings. Usually done over weekend. Zero downtime.',
  },
  {
    q: 'What about backups?',
    a: 'We implement 3-2-1 backup strategy: 3 copies, 2 different media, 1 offsite. Tested monthly.',
  },
  {
    q: 'Do you offer server rentals?',
    a: 'Yes. Monthly rental plans available. Includes hardware, support, monitoring.',
  },
  {
    q: 'What if server fails?',
    a: 'Emergency support within 4 hours. We keep spare parts for common failures. Full replacement if needed.',
  },
  {
    q: 'Can you manage our existing servers?',
    a: 'Absolutely. We take over management, monitoring, maintenance of any server brand.',
  },
];

export default function CommonQuestions() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0">
        <div className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl -top-32 -left-32"></div>
        <div className="absolute w-96 h-96 bg-purple-500/20 rounded-full blur-3xl -bottom-32 -right-32"></div>
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
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
            Answers to frequently asked server queries
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
                  className="bg-white/5 rounded-xl border border-white/10 shadow-lg hover:border-blue-400/40 transition-all"
                >
                  <Disclosure.Button className="flex justify-between w-full text-left px-6 py-4 text-white text-lg font-semibold">
                    <span>{faq.q}</span>
                    <ChevronDownIcon
                      className={`w-6 h-6 text-white transition-transform ${
                        open ? 'rotate-180' : ''
                      }`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-6 pb-4 text-gray-300 text-sm leading-relaxed">
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