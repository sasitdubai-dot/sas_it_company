'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import React from 'react';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import Contact from '@/components/Contact';
import {
  ChevronRightIcon,
  PhoneIcon,
  CheckCircleIcon,
  StarIcon,
  ArrowRightIcon,
  PlayIcon,
  SparklesIcon,
  BoltIcon,
  ShieldCheckIcon as ShieldOutline,
  VideoCameraIcon,
  PresentationChartBarIcon,
} from '@heroicons/react/24/outline';
import {
  ShieldCheckIcon,
  ServerIcon,
  CogIcon,
  GlobeAltIcon,
} from '@heroicons/react/24/solid';

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // NO MOUSE TRACKING - REMOVED FOR PERFORMANCE

  const services = [
    {
      icon: ShieldCheckIcon,
      title: 'Networking & Security',
      description: 'Enterprise-grade network infrastructure and cybersecurity solutions',
      link: '/services#networking',
      image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: ServerIcon,
      title: 'Server Solutions',
      description: 'Complete server setup, maintenance, and cloud migration services',
      link: '/services#servers',
      image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-purple-500 to-pink-500',
    },
    {
      icon: CogIcon,
      title: 'CCTV & Surveillance',
      description: 'Advanced surveillance systems for comprehensive security monitoring',
      link: '/services#cctv',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-green-500 to-teal-500',
    },
    {
      icon: GlobeAltIcon,
      title: 'Website Development',
      description: 'Custom web applications and e-commerce solutions',
      link: '/services#web',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop&crop=center',
      gradient: 'from-orange-500 to-red-500',
    },
  ];

  const clients = [
    { 
      name: 'TechCorp Dubai', 
      logo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=120&h=60&fit=crop&crop=center',
      industry: 'Technology'
    },
    { 
      name: 'Emirates Solutions', 
      logo: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=120&h=60&fit=crop&crop=center',
      industry: 'Consulting'
    },
    { 
      name: 'Dubai Logistics', 
      logo: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=120&h=60&fit=crop&crop=center',
      industry: 'Logistics'
    },
    { 
      name: 'UAE Finance Group', 
      logo: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=120&h=60&fit=crop&crop=center',
      industry: 'Finance'
    },
  ];

  const testimonials = [
    {
      name: 'Ahmed Al-Rashid',
      position: 'CTO, Emirates Tech',
      content: 'Outstanding IT solutions that transformed our business operations. Their expertise in networking and security is unmatched.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      position: 'Operations Manager, Dubai Logistics',
      content: 'Professional, reliable, and innovative. They delivered our project on time and exceeded all expectations.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
      rating: 5
    },
    {
      name: 'Mohammed Hassan',
      position: 'CEO, UAE Finance Group',
      content: 'Their cloud migration services saved us significant costs while improving our system performance dramatically.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
      rating: 5
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircleIcon },
    { number: '100+', label: 'Happy Clients', icon: StarIcon },
    { number: '24/7', label: 'Support Available', icon: PhoneIcon },
    { number: '10+', label: 'Years Experience', icon: ShieldCheckIcon },
  ];

  const technologies = [
    { name: 'Unifi', logo: 'https://logo.clearbit.com/ui.com', fallback: 'U', color: 'from-blue-400 to-cyan-400' },
    { name: 'Fortinet', logo: 'https://logo.clearbit.com/fortinet.com', fallback: 'F', color: 'from-red-400 to-orange-400' },
    { name: 'Ruijie', logo: 'https://www.ruijienetworks.com/wp-content/uploads/2021/06/ruijie-logo.png', fallback: 'R', color: 'from-green-400 to-emerald-400' },
    { name: 'Ruckus', logo: 'https://logo.clearbit.com/ruckusnetworks.com', fallback: 'R', color: 'from-purple-400 to-pink-400' },
    { name: 'Hikvision', logo: 'https://logo.clearbit.com/hikvision.com', fallback: 'H', color: 'from-blue-500 to-indigo-500' },
    { name: 'Samsung', logo: 'https://logo.clearbit.com/samsung.com', fallback: 'S', color: 'from-blue-400 to-purple-400' },
    { name: 'Uniview', logo: 'https://logo.clearbit.com/uniview.com', fallback: 'UNV', color: 'from-cyan-400 to-blue-400' },
    { name: 'ZKTeco', logo: 'https://logo.clearbit.com/zkteco.com', fallback: 'ZK', color: 'from-green-400 to-teal-400' },
    { name: 'Yeastar', logo: 'https://logo.clearbit.com/yeastar.com', fallback: 'Y', color: 'from-yellow-400 to-orange-400' },
    { name: 'Grandstream', logo: 'https://logo.clearbit.com/grandstream.com', fallback: 'G', color: 'from-indigo-400 to-purple-400' },
    { name: 'Logitech', logo: 'https://logo.clearbit.com/logitech.com', fallback: 'L', color: 'from-blue-400 to-cyan-400' },
    { name: 'Avaya', logo: 'https://logo.clearbit.com/avaya.com', fallback: 'A', color: 'from-purple-400 to-pink-400' },
    { name: 'Yealink', logo: 'https://logo.clearbit.com/yealink.com', fallback: 'Y', color: 'from-green-400 to-emerald-400' },
    { name: 'TP-Link', logo: 'https://logo.clearbit.com/tp-link.com', fallback: 'TP', color: 'from-blue-400 to-indigo-400' },
  ];

  return (
    <div ref={containerRef} className="bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 overflow-hidden relative">
      
      {/* NO CURSOR TRACKING ELEMENTS - REMOVED FOR PERFORMANCE */}
      
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.6, 0.3, 0.6],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />

        {/* Floating Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-cyan-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 10,
            }}
          />
        ))}
        
        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 border-2 border-blue-400/40"
          animate={{
            rotate: 360,
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-6 h-6 border-2 border-purple-400/40 rounded-full"
          animate={{
            rotate: -360,
            scale: [1.5, 1, 1.5],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        {/* Subtle Light Streaks */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-full bg-gradient-to-b from-transparent via-white/10 to-transparent"
              style={{
                left: `${20 + i * 20}%`,
                opacity: 0.3,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.1, 0.3, 0.1],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-lg bg-blue-600/20 border border-blue-500/30 mb-6"
              >
                <ArrowRightIcon className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-white text-sm font-medium">We Make IT Happen!</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
              >
                <span className="text-white">Your Trusted</span>{' '}
                <motion.span 
                  className="relative inline-block"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                    IT Partner
                  </span>
                </motion.span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
                className="text-lg md:text-xl text-white mb-8 leading-relaxed max-w-xl"
              >
                Professional IT solutions for businesses in Dubai, UAE. From networking and security to CCTV surveillance and website development - transforming your digital infrastructure.
              </motion.p>
              
              {/* Animated Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                  >
                    Get Free Quote
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="tel:+971-xxx-xxxx"
                    className="inline-flex items-center justify-center px-8 py-4 bg-blue-900 border border-white/40 text-white font-semibold rounded-lg hover:bg-blue-800 transition-all duration-300"
                  >
                    <PhoneIcon className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Logo Section - Simple Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative flex items-center justify-center"
            >
              <div className="relative w-96 h-96 flex items-center justify-center">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/sas-logo.jpg"
                    alt="SAS IT Services Logo"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Why Choose Us Section */}
      <WhyChooseUs />

      {/* Contact Section */}
      <Contact />

      {/* Circular Services Section */}
     

      {/* Amazing Infinite Slider Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-cyan-400 text-sm font-medium">Technologies We Master</span>
            <h2 className="text-4xl font-bold text-white mt-2 mb-4">
              Technologies and brands we work with
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Trusted & Industry-leading solutions we deploy across Dubai & the UAE.
            </p>
          </motion.div>

          {/* Infinite Slider */}
          <div className="relative overflow-hidden">
            <style dangerouslySetInnerHTML={{
              __html: `
                @keyframes infiniteScroll {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(calc(-${technologies.length * 224}px));
                  }
                }
                .infinite-scroll-container {
                  animation: infiniteScroll 30s linear infinite;
                }
              `
            }} />
            <div className="flex gap-8 infinite-scroll-container" style={{ width: 'max-content' }}>
              {/* Duplicate array for seamless loop */}
              {[...technologies, ...technologies].map((tech, index) => (
                <motion.div
                  key={`${tech.name}-${index}`}
                  whileHover={{ 
                    scale: 1.1,
                    rotateY: 15,
                  }}
                  className="flex-shrink-0 w-48 h-32 relative group cursor-pointer"
                >
                  <div className={`absolute inset-0 bg-gradient-to-r ${tech.color} opacity-20 rounded-2xl blur-xl group-hover:opacity-40 transition-opacity duration-500`} />
                  
                  <div className="relative w-full h-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/30 transition-all duration-500 flex flex-col items-center justify-center p-4">
                    <div className="relative w-20 h-20 mb-2 flex items-center justify-center">
                      <Image
                        src={tech.logo}
                        alt={tech.name}
                        fill
                        className="object-contain"
                        unoptimized
                        onError={(e) => {
                          // Fallback to text if image fails to load
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          const parent = target.parentElement;
                          if (parent && !parent.querySelector('.fallback-text')) {
                            const fallback = document.createElement('div');
                            fallback.className = 'fallback-text text-2xl font-bold text-white';
                            const techWithFallback = tech as typeof tech & { fallback?: string };
                            fallback.textContent = techWithFallback.fallback || tech.name.charAt(0);
                            parent.appendChild(fallback);
                          }
                        }}
                      />
                    </div>
                    
                    <h3 className="text-white font-semibold text-sm group-hover:text-cyan-400 transition-colors text-center">
                      {tech.name}
                    </h3>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-green-400 text-sm font-medium">Our Work</span>
            <h2 className="text-4xl font-bold text-white mt-2 mb-4">
              Featured Projects
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Discover how we&apos;ve helped businesses transform their operations with innovative IT solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Enterprise Network Upgrade',
                client: 'Dubai Tech Corp',
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
                category: 'Networking'
              },
              {
                title: 'Cloud Migration Project',
                client: 'Emirates Solutions',
                image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop',
                category: 'Cloud'
              },
              {
                title: 'Security System Implementation',
                client: 'UAE Finance Group',
                image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop',
                category: 'Security'
              }
            ].map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-blue-400/50 transition-all duration-500">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
                    
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-blue-600/80 text-white text-xs font-medium rounded-full">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.client}</p>
                    <Link
                      href="/projects"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Details
                      <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Clients/References Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-blue-400 text-sm font-medium">Our Partners</span>
            <h2 className="text-4xl font-bold text-white mt-2 mb-4">
              Trusted by Leading Companies
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              We&apos;re proud to work with industry leaders across Dubai and the UAE.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 items-center">
            {clients.map((client, index) => (
              <motion.div
                key={client.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group cursor-pointer"
              >
                <div className="relative w-full h-28 md:h-32 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-blue-400/50 transition-all duration-500 flex items-center justify-center p-4 overflow-hidden">
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Image
                      src={client.logo}
                      alt={client.name}
                      fill
                      className="object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                      unoptimized
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-pink-500/10 rounded-xl transition-all duration-500" />
                </div>
                <div className="mt-3 text-center">
                  <p className="text-white text-xs md:text-sm font-medium group-hover:text-blue-400 transition-colors">
                    {client.name}
                  </p>
                  <p className="text-gray-500 text-xs mt-1">{client.industry}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-purple-400 text-sm font-medium">Client Success</span>
            <h2 className="text-4xl font-bold text-white mt-2 mb-4">
              What Our Clients Say
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="relative p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-purple-400/50 transition-all duration-500"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  <span aria-hidden="true">&ldquo;</span>
                  {testimonial.content}
                  <span aria-hidden="true">&rdquo;</span>
                </p>
                
                <div className="flex items-center">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-20 bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900 overflow-hidden">
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl border border-white/10 p-12"
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8"
            >
              Get a free consultation and discover how our IT solutions can accelerate your growth.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
                >
                  Start Your Project
                  <ArrowRightIcon className="w-5 h-5 ml-2" />
                </Link>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-gray-600 text-white font-semibold rounded-xl hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  View All Services
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}