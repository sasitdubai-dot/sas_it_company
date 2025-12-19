'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  ShieldCheckIcon,
  ServerIcon,
  CogIcon,
  GlobeAltIcon,
  ComputerDesktopIcon,
  WrenchScrewdriverIcon,
  HomeIcon,
  CloudIcon,
  VideoCameraIcon,
  ArrowRightIcon,
} from '@heroicons/react/24/outline';
import { CheckCircleIcon } from '@heroicons/react/24/solid';

interface Service {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  technologies: string[];
  pricing: string;
  gradient: string;
  bgGradient: string;
}

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      id={service.id}
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20">
        {/* Gradient Background */}
        <div className={`absolute inset-0 bg-gradient-to-r ${service.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        <div className="relative p-8 lg:p-10">
          <div className="flex flex-col lg:flex-row gap-8 items-start">
            {/* Left Section - Icon & Title */}
            <div className="flex-shrink-0">
              <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-r ${service.gradient} p-4 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                <service.icon className="w-10 h-10 text-white" />
              </div>
              <div className="mt-6">
                <h2 className="text-2xl lg:text-3xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-cyan-400 transition-all duration-300">
                  {service.title}
                </h2>
                <div className={`inline-flex items-center px-4 py-2 rounded-lg bg-gradient-to-r ${service.gradient} text-white font-semibold text-sm shadow-lg`}>
                  {service.pricing}
                </div>
              </div>
            </div>

            {/* Middle Section - Description & Features */}
            <div className="flex-1 min-w-0">
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features Grid */}
              <div className="mb-6">
                <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {service.features.slice(0, 4).map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircleIcon className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                {service.features.length > 4 && (
                  <div className="mt-3 text-sm text-gray-400">
                    + {service.features.length - 4} more features
                  </div>
                )}
              </div>

              {/* Technologies */}
              <div>
                <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                  Technologies We Use
                </h3>
                <div className="flex flex-wrap gap-2">
                  {service.technologies.map((tech: string, idx: number) => (
                    <span
                      key={idx}
                      className="px-3 py-1.5 rounded-lg bg-white/10 text-gray-300 text-xs font-medium border border-white/20 hover:bg-white/20 hover:border-white/40 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - CTA Button */}
            <div className="flex-shrink-0 w-full lg:w-auto">
              <Link
                href="/contact"
                className="group/btn inline-flex items-center justify-center w-full lg:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-blue-500/50 hover:scale-105"
              >
                Get Quote
                <ArrowRightIcon className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              <p className="mt-3 text-xs text-gray-400 text-center lg:text-left">
                Professional installation included
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesPage() {
  const services = [
    {
      id: 'networking',
      icon: ShieldCheckIcon,
      title: 'Networking & Security',
      description: 'Comprehensive network infrastructure and cybersecurity solutions for enterprises.',
      features: [
        'Network Design & Implementation',
        'Firewall Configuration & Management',
        'VPN Setup & Remote Access',
        'Network Monitoring & Maintenance',
        'Cybersecurity Assessment',
        'Data Backup & Recovery',
      ],
      technologies: ['Cisco', 'Fortinet', 'SonicWall', 'Ubiquiti', 'Meraki'],
      pricing: 'Starting from AED 2,500',
      gradient: 'from-blue-500 to-cyan-500',
      bgGradient: 'from-blue-500/10 to-cyan-500/10',
    },
    {
      id: 'cabling',
      icon: CogIcon,
      title: 'Structured Cabling',
      description: 'Professional cabling solutions for offices, warehouses, and commercial spaces.',
      features: [
        'Cat6/Cat6A Cable Installation',
        'Fiber Optic Cabling',
        'Cable Management Systems',
        'Patch Panel Configuration',
        'Cable Testing & Certification',
        'Future-Proof Infrastructure',
      ],
      technologies: ['Panduit', 'Commscope', 'Legrand', 'Schneider Electric'],
      pricing: 'Starting from AED 50/point',
      gradient: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-500/10 to-pink-500/10',
    },
    {
      id: 'cctv',
      icon: VideoCameraIcon,
      title: 'CCTV & Surveillance',
      description: 'Advanced surveillance systems for comprehensive security monitoring.',
      features: [
        'IP Camera Installation',
        'NVR/DVR Setup & Configuration',
        'Remote Monitoring Access',
        'Motion Detection & Alerts',
        'Night Vision Capabilities',
        'Mobile App Integration',
      ],
      technologies: ['Hikvision', 'Dahua', 'Axis', 'Bosch', 'Uniview'],
      pricing: 'Starting from AED 800/camera',
      gradient: 'from-green-500 to-teal-500',
      bgGradient: 'from-green-500/10 to-teal-500/10',
    },
    {
      id: 'servers',
      icon: ServerIcon,
      title: 'Server & System Solutions',
      description: 'Complete server infrastructure and cloud migration services.',
      features: [
        'Server Installation & Setup',
        'Virtualization Solutions',
        'Cloud Migration Services',
        'Server Maintenance & Support',
        'Backup & Disaster Recovery',
        'Performance Optimization',
      ],
      technologies: ['Dell', 'HP', 'VMware', 'Microsoft', 'AWS', 'Azure'],
      pricing: 'Starting from AED 5,000',
      gradient: 'from-indigo-500 to-purple-500',
      bgGradient: 'from-indigo-500/10 to-purple-500/10',
    },
    {
      id: 'access-control',
      icon: ShieldCheckIcon,
      title: 'Access Control & Attendance',
      description: 'Modern access control and time attendance management systems.',
      features: [
        'Biometric Access Control',
        'RFID Card Systems',
        'Time & Attendance Tracking',
        'Integration with HR Systems',
        'Mobile App Access',
        'Visitor Management',
      ],
      technologies: ['ZKTeco', 'Suprema', 'Anviz', 'Honeywell', 'Bosch'],
      pricing: 'Starting from AED 1,200/door',
      gradient: 'from-red-500 to-orange-500',
      bgGradient: 'from-red-500/10 to-orange-500/10',
    },
    {
      id: 'repair',
      icon: WrenchScrewdriverIcon,
      title: 'Computer Repair & Maintenance',
      description: 'Professional computer and laptop repair services with quick turnaround.',
      features: [
        'Hardware Diagnostics & Repair',
        'Software Troubleshooting',
        'Virus Removal & Security',
        'Data Recovery Services',
        'Preventive Maintenance',
        'On-site & Remote Support',
      ],
      technologies: ['Dell', 'HP', 'Lenovo', 'Apple', 'ASUS', 'Acer'],
      pricing: 'Starting from AED 150/hour',
      gradient: 'from-yellow-500 to-orange-500',
      bgGradient: 'from-yellow-500/10 to-orange-500/10',
    },
    {
      id: 'automation',
      icon: HomeIcon,
      title: 'Home Automation',
      description: 'Smart home solutions for modern living and convenience.',
      features: [
        'Smart Lighting Control',
        'Climate Control Systems',
        'Security Integration',
        'Audio/Video Systems',
        'Mobile App Control',
        'Voice Assistant Integration',
      ],
      technologies: ['Lutron', 'Control4', 'Crestron', 'KNX', 'Zigbee'],
      pricing: 'Starting from AED 3,000/room',
      gradient: 'from-pink-500 to-rose-500',
      bgGradient: 'from-pink-500/10 to-rose-500/10',
    },
    {
      id: 'web',
      icon: GlobeAltIcon,
      title: 'Website Development',
      description: 'Custom web applications and e-commerce solutions for businesses.',
      features: [
        'Responsive Web Design',
        'E-commerce Development',
        'Content Management Systems',
        'SEO Optimization',
        'Mobile App Development',
        'Website Maintenance & Support',
      ],
      technologies: ['React', 'Next.js', 'WordPress', 'Shopify', 'Laravel', 'Node.js'],
      pricing: 'Starting from AED 2,000',
      gradient: 'from-cyan-500 to-blue-500',
      bgGradient: 'from-cyan-500/10 to-blue-500/10',
    },
    {
      id: 'crm',
      icon: ComputerDesktopIcon,
      title: 'CRM / ERP Solutions',
      description: 'Business management systems to streamline operations and increase efficiency.',
      features: [
        'Customer Relationship Management',
        'Inventory Management',
        'Financial Management',
        'Reporting & Analytics',
        'Integration Services',
        'Staff Training & Support',
      ],
      technologies: ['Salesforce', 'Microsoft Dynamics', 'SAP', 'Odoo', 'Zoho'],
      pricing: 'Starting from AED 8,000',
      gradient: 'from-violet-500 to-purple-500',
      bgGradient: 'from-violet-500/10 to-purple-500/10',
    },
    {
      id: 'cloud',
      icon: CloudIcon,
      title: 'Email & Cloud Services',
      description: 'Professional email hosting and cloud infrastructure solutions.',
      features: [
        'Business Email Hosting',
        'Cloud Storage Solutions',
        'Microsoft 365 Setup',
        'Google Workspace',
        'Email Migration Services',
        'Backup & Security',
      ],
      technologies: ['Microsoft 365', 'Google Workspace', 'AWS', 'Azure', 'cPanel'],
      pricing: 'Starting from AED 25/user/month',
      gradient: 'from-sky-500 to-blue-500',
      bgGradient: 'from-sky-500/10 to-blue-500/10',
    },
  ];

  return (
    <div className="page-container">
      {/* Hero Section */}
      <section className="hero-gradient page-section">
        <div className="page-content">
          <div style={{textAlign: 'center'}}>
            <h1 className="page-title">
              Our <span className="text-gradient">IT Services</span>
            </h1>
            <p className="page-subtitle">
              Comprehensive technology solutions designed to empower your business 
              with reliability, security, and innovation.
            </p>
            <div className="cta-buttons" style={{marginTop: '2rem'}}>
              <Link href="/contact" className="btn-primary btn-large">
                Get Free Consultation
              </Link>
              <a
                href="tel:+971501234567"
                className="btn-secondary btn-large"
              >
                Call for Quote
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="page-section" style={{backgroundColor: '#16213e'}}>
        <div className="page-content">
          <div style={{textAlign: 'center', marginBottom: '4rem'}}>
            <h2 className="page-title">
              Why Choose SAS IT Services?
            </h2>
            <p className="page-subtitle" style={{marginBottom: 0}}>
              Your trusted technology partner in Dubai, UAE
            </p>
          </div>

          <div className="why-choose-grid">
            <div className="card why-choose-item">
              <div className="why-choose-icon">
                <ShieldCheckIcon style={{height: '2rem', width: '2rem', color: '#ffffff'}} />
              </div>
              <h3 className="why-choose-title">
                Licensed & Certified
              </h3>
              <p className="why-choose-description">
                All our technicians are certified professionals with extensive experience 
                in their respective fields.
              </p>
            </div>

            <div className="card why-choose-item">
              <div className="why-choose-icon">
                <CogIcon style={{height: '2rem', width: '2rem', color: '#ffffff'}} />
              </div>
              <h3 className="why-choose-title">
                24/7 Support
              </h3>
              <p className="why-choose-description">
                Round-the-clock technical support to ensure your systems run smoothly 
                without interruption.
              </p>
            </div>

            <div className="card why-choose-item">
              <div className="why-choose-icon">
                <CheckCircleIcon style={{height: '2rem', width: '2rem', color: '#ffffff'}} />
              </div>
              <h3 className="why-choose-title">
                Quality Guarantee
              </h3>
              <p className="why-choose-description">
                We stand behind our work with comprehensive warranties and satisfaction 
                guarantees on all services.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-container">
          <h2 className="cta-title">
            Ready to Upgrade Your IT Infrastructure?
          </h2>
          <p className="cta-description">
            Contact us today for a free consultation and customized quote
          </p>
          
          <div className="cta-buttons">
            <Link href="/contact" className="cta-btn-primary">
              Get Free Quote
            </Link>
            <a
              href="https://wa.me/971501234567"
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn-secondary"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
