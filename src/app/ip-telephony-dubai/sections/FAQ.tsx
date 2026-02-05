'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

export function InstallationProcess() {
  const steps = [
    {
      step: '01',
      title: 'Requirements Analysis',
      desc: 'Discuss call flow, features needed, number of users, budget.',
      duration: '1 hour',
    },
    {
      step: '02',
      title: 'System Design',
      desc: 'Custom design: PBX sizing, phone selection, IVR flow, quote.',
      duration: '2-3 days',
    },
    {
      step: '03',
      title: 'Installation',
      desc: 'PBX setup, phone deployment, number porting coordination.',
      duration: '2-5 days',
    },
    {
      step: '04',
      title: 'Configuration & Testing',
      desc: 'IVR setup, call routing, extensions, testing with telco.',
      duration: '1-2 days',
    },
    {
      step: '05',
      title: 'Training & Go-Live',
      desc: 'Staff training, admin training, documentation.',
      duration: '1 day',
    },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Installation Process
          </h2>
          <p className="text-xl text-gray-400">From consultation to go-live in 5 simple steps</p>
        </motion.div>

        <div className="space-y-8">
          {steps.map((process, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="flex gap-6 group"
            >
              <div className="flex-shrink-0">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform">
                  {process.step}
                </div>
              </div>
              <div className="flex-1 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:border-white/20 transition-all">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-2xl font-bold text-white">{process.title}</h3>
                  <span className="text-sm text-blue-400 font-medium">{process.duration}</span>
                </div>
                <p className="text-gray-400">{process.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FAQSection() {
  const faqs = [
    {
      q: 'Cloud or on-premise PBX?',
      a: 'Cloud: lower upfront cost, subscription model. On-premise: own it, one-time cost. We recommend based on your company size and requirements.',
    },
    {
      q: 'Can we keep our existing numbers?',
      a: 'Yes. We handle number porting from Etisalat/du. Usually takes 7-10 business days.',
    },
    {
      q: 'What about call quality?',
      a: 'We configure QoS (Quality of Service) on your network. Dedicated bandwidth for voice ensures crystal clear quality.',
    },
    {
      q: 'Can staff use mobile phones?',
      a: 'Yes. Mobile app gives them same features as desk phone. Works on any smartphone (iOS/Android).',
    },
    {
      q: 'What if internet goes down?',
      a: 'Cloud systems can forward calls to mobile. On-premise systems can use backup 4G connection. We design redundancy into every solution.',
    },
    {
      q: 'Can we integrate with our CRM?',
      a: 'Yes. We integrate with Salesforce, Zoho, HubSpot, and custom systems. Features include click-to-dial and automatic call logging.',
    },
    {
      q: 'What about international calls?',
      a: 'Much cheaper than traditional phone lines. We can get SIP trunks with very competitive international rates.',
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-4">
            <span className="text-sm text-blue-300 font-medium">Got Questions?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-400">Everything you need to know about IP phone systems</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} faq={faq} index={idx} />
          ))}
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400 mb-4">Still have questions? We're here to help!</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971526716178"
              className="px-6 py-3 rounded-xl border border-blue-500/50 text-blue-400 font-semibold hover:bg-blue-500/10 transition-all"
            >
              📞 Call Us
            </a>
            <a
              href="https://wa.me/971526716178"
              className="px-6 py-3 rounded-xl border border-green-500/50 text-green-400 font-semibold hover:bg-green-500/10 transition-all"
            >
              💬 WhatsApp
            </a>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}

function FAQItem({ faq, index }: { faq: { q: string; a: string }; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      className="border border-white/10 rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm hover:border-blue-500/30 transition-all"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-white/5 transition-all"
      >
        <span className="text-lg font-semibold text-white pr-4">{faq.q}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0"
        >
          <ChevronDownIcon className="w-6 h-6 text-blue-400" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-5 text-gray-400 leading-relaxed">
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}