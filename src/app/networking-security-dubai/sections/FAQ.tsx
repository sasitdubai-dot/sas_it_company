'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
import {
  CheckCircleIcon,
  ShieldCheckIcon,
  ServerIcon,
  WifiIcon,
  ClockIcon,
  StarIcon,
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ArrowRightIcon,
  BoltIcon,
  GlobeAltIcon,
  LockClosedIcon,
  ChartBarIcon,
  UserGroupIcon,
  CpuChipIcon,
  CloudIcon,
  CogIcon,
  ChevronDownIcon,

} from '@heroicons/react/24/outline';
export default function FAQ(){
    return(
         <section className="py-12 relative overflow-hidden">
    <div className="max-w-6xl mx-auto px-6">
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
            Everything you need to know about our network solutions
        </p>
        </motion.div>

        <div className="space-y-4">
        {[
            {
            q: 'How long does installation take?',
            a: 'Small office (10–25 users): 1 day. Medium office (50–100 users): 2–3 days. Large office: 5–7 days.',
            },
            {
            q: 'Can you work after hours?',
            a: 'Yes. We install during evenings/weekends to avoid business disruption. No extra charge.',
            },
            {
            q: 'What if our internet goes down?',
            a: 'We respond within 4 hours for emergencies. Usually resolved remotely. Onsite if needed.',
            },
            {
            q: 'Do you support multiple locations?',
            a: 'Yes. We specialize in multi-site VPN, centralized management, site-to-site connectivity.',
            },
            {
            q: 'Can you upgrade our existing network?',
            a: 'Absolutely. We assess what you have, recommend upgrades, and keep what works.',
            },
            {
            q: 'What about WiFi coverage issues?',
            a: 'We do professional WiFi surveys (heat mapping), optimize placement, and eliminate dead zones.',
            },
            {
            q: 'Do you provide managed services?',
            a: 'Yes. Monthly plans include monitoring, updates, support, and reporting.',
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