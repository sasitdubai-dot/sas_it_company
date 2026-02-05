'use client';

import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export default function FAQ() {
  return (
    <section className="py-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <span className="text-sm text-blue-300 font-medium">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">
            Everything you need to know about our AMC services
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {[
            {
              q: 'What if we already have IT staff?',
              a: 'AMC complements your team. We handle routine maintenance, they focus on strategic projects.',
            },
            {
              q: 'Can we upgrade or downgrade plans?',
              a: 'Yes. Flexible contracts allow you to adjust as your needs change.',
            },
            {
              q: 'What about after-hours emergencies?',
              a: 'Silver & Gold plans include 24/7 support. Bronze can add emergency coverage.',
            },
            {
              q: 'Do you replace failed hardware?',
              a: 'Gold plan includes hardware replacement. Bronze/Silver at discounted rates.',
            },
            {
              q: 'How long is the contract?',
              a: 'Minimum 12 months. Then month-to-month or annual renewal.',
            },
            {
              q: 'Can we cancel anytime?',
              a: 'After the initial 12 months, a 30-day notice is required.',
            },
            {
              q: "What if you can't fix the issue?",
              a: 'We escalate to manufacturer or specialist and coordinate the entire process. No extra charge for coordination.',
            },
          ].map((faq, idx) => (
            <Disclosure key={idx}>
              {({ open }) => (
                <div className="bg-white/5 rounded-xl p-6">
                  <Disclosure.Button className="flex justify-between w-full text-white text-lg font-semibold">
                    <span>{faq.q}</span>
                    <ChevronDownIcon
                      className={`w-5 h-5 text-white ${open ? 'rotate-180' : ''} transition-transform`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="mt-2 text-gray-300">
                    <p>{faq.a}</p>
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
}