'use client';
/* eslint-disable */

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import React from 'react';
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

  // Mouse position for interactive effects
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

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
      name: 'Ahmed Al-Mansouri',
      company: 'CEO, Dubai Logistics',
      text: 'SAS IT Services transformed our entire network infrastructure. Professional, reliable, and exceptional support.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face',
    },
    {
      name: 'Sarah Johnson',
      company: 'Operations Manager, TechCorp',
      text: 'Outstanding CCTV installation and ongoing maintenance. Their team is always responsive and knowledgeable.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=80&h=80&fit=crop&crop=face',
    },
    {
      name: 'Mohammed Hassan',
      company: 'IT Director, Emirates Solutions',
      text: 'Exceptional service quality and technical expertise. They delivered our project on time and within budget.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face',
    },
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircleIcon },
    { number: '250+', label: 'Happy Clients', icon: StarIcon },
    { number: '24/7', label: 'Support Available', icon: ShieldOutline },
    { number: '10+', label: 'Years Experience', icon: BoltIcon },
  ];

  return (
    <div ref={containerRef} className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden relative">
      {/* Custom Cursor */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 12,
          y: mousePosition.y - 12,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />
      
      {/* Mouse Trail Effect */}
      <motion.div
        className="fixed w-12 h-12 border-2 border-cyan-400/50 rounded-full pointer-events-none z-40"
        animate={{
          x: mousePosition.x - 24,
          y: mousePosition.y - 24,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
        }}
      />
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Floating Orbs */}
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, -30, 0],
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
            opacity: [0.5, 0.3, 0.5],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
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
            y: [0, -80, 0],
            opacity: [0, 0.8, 0],
            scale: [0, 1, 0],
          }}
          transition={{
            duration: 4 + Math.random() * 1,
            repeat: Infinity,
            delay: Math.random() * 3,
            ease: [0.25, 0.46, 0.45, 0.94]
          }}
          />
        ))}
        
        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-4 h-4 border-2 border-blue-400/40"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/4 w-6 h-6 border-2 border-purple-400/40 rounded-full"
          animate={{
            scale: [1, 2, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Animated Lines */}
        <svg className="absolute inset-0 w-full h-full">
          <motion.path
            d="M0,100 Q400,50 800,100 T1600,100"
            stroke="url(#lineGradient)"
            strokeWidth="2"
            fill="none"
            opacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut"
            }}
          />
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#06b6d4" />
              <stop offset="50%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="text-center lg:text-left"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6"
              >
                <SparklesIcon className="w-4 h-4 text-blue-400 mr-2" />
                <span className="text-blue-400 text-sm font-medium">We Make IT Happen!</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight relative"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  Your Trusted{' '}
                </motion.span>
                <motion.span
                  className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent relative inline-block"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                  }}
                  transition={{
                    opacity: { duration: 0.5, delay: 0.8 },
                    scale: { duration: 0.6, delay: 0.8, type: "spring", stiffness: 100 },
                    backgroundPosition: {
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear"
                    }
                  }}
                >
                  IT Partner
                  {/* Sparkle effects around the text */}
                  <motion.div
                    className="absolute -top-2 -right-2 w-4 h-4"
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1,
                    }}
                  >
                    ✨
                  </motion.div>
                  <motion.div
                    className="absolute -bottom-2 -left-2 w-4 h-4"
                    animate={{
                      scale: [0, 1, 0],
                      rotate: [360, 180, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1.5,
                    }}
                  >
                    ⚡
                  </motion.div>
                </motion.span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
              >
                Professional IT solutions for businesses in Dubai, UAE. From networking and security 
                to CCTV surveillance and website development - transforming your digital infrastructure.
              </motion.p>
              
              {/* Animated Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-col sm:flex-row gap-4 mb-12"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link 
                    href="/contact" 
                    className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    Get Free Quote
                    <motion.div
                      className="ml-2"
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      <ChevronRightIcon className="w-5 h-5" />
                    </motion.div>
                  </Link>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a
                    href="tel:+971501234567"
                    className="inline-flex items-center px-8 py-4 border-2 border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-all duration-300"
                  >
                    <PhoneIcon className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </motion.div>
              </motion.div>

              {/* Animated Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.5, y: 50 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.7 + index * 0.1,
                      type: "spring",
                      stiffness: 100
                    }}
                    whileHover={{ 
                      scale: 1.1, 
                      y: -5,
                      transition: { duration: 0.2 }
                    }}
                    className="text-center relative group"
                  >
                    {/* Floating background effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.6, 0.3],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: index * 0.5,
                      }}
                    />
                    
                    <motion.div
                      animate={{ 
                        rotate: 360,
                        scale: [1, 1.1, 1]
                      }}
                      transition={{ 
                        rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                        scale: { duration: 2, repeat: Infinity, delay: index * 0.3 }
                      }}
                      className="relative inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full mb-3 group-hover:shadow-lg group-hover:shadow-blue-500/25"
                    >
                      <stat.icon className="w-8 h-8 text-blue-400" />
                      
                      {/* Orbiting particles */}
                      <motion.div
                        className="absolute w-2 h-2 bg-cyan-400 rounded-full"
                        animate={{
                          rotate: 360,
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.2
                        }}
                        style={{
                          transformOrigin: "0 25px"
                        }}
                      />
                    </motion.div>
                    
                    <motion.div 
                      className="text-3xl font-bold text-white mb-1"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: 1 + index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      {stat.number}
                    </motion.div>
                    
                    <motion.div 
                      className="text-sm text-gray-400"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 1.2 + index * 0.1 }}
                    >
                      {stat.label}
                    </motion.div>
                    
                    {/* Pulse effect on hover */}
                    <motion.div
                      className="absolute inset-0 border-2 border-blue-400/20 rounded-xl opacity-0 group-hover:opacity-100"
                      animate={{
                        scale: [1, 1.05, 1],
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                      }}
                    />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Hero Image/Video Section */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 1, 0]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative group animate-element"
              >
                <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl animate-element">
                  <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=500&fit=crop&crop=center"
                    alt="Modern IT Solutions"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20" />
                  
                  {/* Animated Border */}
                  <motion.div
                    className="absolute inset-0 border-2 border-transparent rounded-2xl"
                    animate={{
                      borderColor: [
                        'rgba(59, 130, 246, 0.5)',
                        'rgba(147, 51, 234, 0.5)',
                        'rgba(59, 130, 246, 0.5)',
                      ]
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  
                  {/* Play Button Overlay */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 }}
                    whileHover={{ scale: 1.1 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <motion.button
                      animate={{ 
                        boxShadow: [
                          '0 0 0 0 rgba(59, 130, 246, 0.7)',
                          '0 0 0 20px rgba(59, 130, 246, 0)',
                        ]
                      }}
                      transition={{ duration: 2, repeat: Infinity }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, 5, -5, 0],
                      }}
                      whileTap={{ scale: 0.95 }}
                      className="w-24 h-24 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 group"
                    >
                      <motion.div
                        animate={{ x: [0, 2, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <PlayIcon className="w-10 h-10 ml-1" />
                      </motion.div>
                    </motion.button>
                  </motion.div>
                  
                  {/* Tech Icons Floating Around */}
                  {[
                    { icon: '💻', position: { top: '20%', left: '10%' }, delay: 0 },
                    { icon: '🔒', position: { top: '30%', right: '15%' }, delay: 0.5 },
                    { icon: '⚡', position: { bottom: '25%', left: '15%' }, delay: 1 },
                    { icon: '🌐', position: { bottom: '20%', right: '10%' }, delay: 1.5 },
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="absolute text-2xl"
                      style={item.position}
                      animate={{
                        y: [0, -15, 0],
                        rotate: [0, 10, -10, 0],
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 3 + index,
                        repeat: Infinity,
                        delay: item.delay,
                        ease: "easeInOut"
                      }}
                    >
                      {item.icon}
                    </motion.div>
                  ))}
                </div>
                
                {/* Enhanced Floating Elements */}
                <motion.div
                  animate={{ 
                    y: [0, -15, 0],
                    x: [0, 8, 0],
                    rotate: [0, 180, 360]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 1
                  }}
                  className="absolute -top-6 -right-6 w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-30 blur-2xl"
                />
                <motion.div
                  animate={{ 
                    y: [0, 12, 0],
                    x: [0, -8, 0],
                    rotate: [360, 180, 0]
                  }}
                  transition={{ 
                    duration: 5, 
                    repeat: Infinity, 
                    ease: "easeInOut",
                    delay: 2
                  }}
                  className="absolute -bottom-6 -left-6 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-30 blur-2xl"
                />
                
                {/* Orbiting Elements */}
                <motion.div
                  className="absolute top-1/2 left-1/2 w-2 h-2 bg-cyan-400 rounded-full"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    transformOrigin: "-100px 0px"
                  }}
                />
                <motion.div
                  className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-400 rounded-full"
                  animate={{ rotate: -360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    transformOrigin: "120px 0px"
                  }}
                />
              </motion.div>
            </motion.div>
            
          </div>
        </div>
      </section>

      {/* Circular Services Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Animation */}
        <div className="absolute inset-0">
          <motion.div
            animate={{
              background: [
                'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 80% 50%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)',
                'radial-gradient(circle at 20% 50%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)',
              ]
            }}
            transition={{ duration: 8, repeat: Infinity }}
            className="absolute inset-0"
          />
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 mb-6"
            >
              <span className="text-orange-400 text-sm font-medium">Our Solutions</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Comprehensive IT Solutions
            </motion.h2>
            
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex justify-center items-center gap-8 mb-8"
            >
              <motion.div
                animate={{ 
                  x: [-15, 15, -15],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  repeatType: "loop"
                }}
                className="text-cyan-400 font-semibold text-xl drop-shadow-lg"
              >
                Consumer
              </motion.div>
              
              <div className="flex items-center gap-2">
                {[...Array(15)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ 
                      scale: [0.8, 1.8, 0.8],
                      opacity: [0.2, 1, 0.2],
                      x: [0, 3, 0]
                    }}
                    transition={{ 
                      duration: 3, 
                      repeat: Infinity,
                      delay: i * 0.08,
                      ease: [0.25, 0.46, 0.45, 0.94],
                      repeatType: "loop"
                    }}
                    className="w-2 h-2 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50"
                  />
                ))}
              </div>
              
              <motion.div
                animate={{ 
                  x: [15, -15, 15],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 6, 
                  repeat: Infinity,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  repeatType: "loop"
                }}
                className="text-cyan-400 font-semibold text-xl drop-shadow-lg"
              >
                Business
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Circular Services Layout */}
          <div className="relative flex items-center justify-center min-h-[600px]">
            {/* Center Logo */}
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute z-10"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ 
                  duration: 25, 
                  repeat: Infinity, 
                  ease: "linear",
                  repeatType: "loop"
                }}
                style={{ willChange: 'transform' }}
                className="w-48 h-48 rounded-full bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 p-1"
              >
                <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center">
                  <div className="text-center">
                    <Image
                      src="/images/logo.jpeg"
                      alt="SAS IT Services"
                      width={60}
                      height={60}
                      className="rounded-full mx-auto mb-2"
                    />
                    <div className="text-white font-bold text-lg">SAS</div>
                    <div className="text-cyan-400 text-sm">IT Services</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Circular Services */}
            {[
              { 
                name: 'Networking & Security', 
                image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=80&h=80&fit=crop&crop=center', 
                position: { top: '10%', left: '15%' }, 
                color: 'from-blue-500 to-cyan-500' 
              },
              { 
                name: 'Server Solutions', 
                image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=80&h=80&fit=crop&crop=center', 
                position: { top: '15%', right: '15%' }, 
                color: 'from-purple-500 to-pink-500' 
              },
              { 
                name: 'CCTV & Surveillance', 
                image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=80&h=80&fit=crop&crop=center', 
                position: { top: '45%', right: '5%' }, 
                color: 'from-green-500 to-teal-500' 
              },
              { 
                name: 'Website Development', 
                image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=80&h=80&fit=crop&crop=center', 
                position: { bottom: '15%', right: '15%' }, 
                color: 'from-orange-500 to-red-500' 
              },
              { 
                name: 'IT Support', 
                image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=80&h=80&fit=crop&crop=center', 
                position: { bottom: '10%', left: '15%' }, 
                color: 'from-red-500 to-pink-500' 
              },
              { 
                name: 'Home Tech Solutions', 
                image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=80&h=80&fit=crop&crop=center', 
                position: { bottom: '45%', left: '5%' }, 
                color: 'from-indigo-500 to-purple-500' 
              }
            ].map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ scale: 0, opacity: 0, y: 50 }}
                whileInView={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 0.8 + index * 0.15,
                  type: "spring",
                  stiffness: 120,
                  damping: 12,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ 
                  scale: 1.15,
                  rotate: [0, -3, 3, 0],
                  y: -5,
                  transition: { 
                    duration: 0.4,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }
                }}
                className="absolute group cursor-pointer"
                style={service.position}
              >
                {/* Connecting Line */}
                <motion.div
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 1 }}
                  transition={{ 
                    duration: 1.5, 
                    delay: 1.2 + index * 0.15,
                    ease: [0.25, 0.46, 0.45, 0.94]
                  }}
                  viewport={{ once: true, margin: "-100px" }}
                  className="absolute inset-0 pointer-events-none"
                >
                  <svg className="absolute inset-0 w-full h-full overflow-visible">
                    <motion.line
                      x1="50%"
                      y1="50%"
                      x2="50%"
                      y2="300%"
                      stroke="url(#gradient)"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                      animate={{
                        strokeDashoffset: [0, -10]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                      }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#06b6d4" />
                        <stop offset="100%" stopColor="#3b82f6" />
                      </linearGradient>
                    </defs>
                  </svg>
                </motion.div>

                {/* Service Circle */}
                <div className={`w-24 h-24 rounded-full bg-gradient-to-br ${service.color} p-1 shadow-2xl`}>
                  <div className="w-full h-full rounded-full bg-slate-900/90 backdrop-blur-sm overflow-hidden group-hover:bg-slate-800/90 transition-all duration-300">
                    <div className="relative w-full h-full">
                      <Image
                        src={service.image}
                        alt={service.name}
                        fill
                        className="object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 rounded-full" />
                    </div>
                  </div>
                </div>

                {/* Service Label */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap"
                >
                  <div className="text-white font-semibold text-sm text-center group-hover:text-cyan-400 transition-colors duration-300">
                    {service.name}
                  </div>
                </motion.div>

                {/* Hover Glow */}
                <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-300`} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amazing Slider Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 mb-6"
            >
              <StarIcon className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">Featured Solutions</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Innovative Technology Showcase
            </motion.h2>
          </motion.div>

          {/* Slider Container */}
          <div className="relative overflow-hidden rounded-2xl">
            <motion.div
              animate={{ x: [0, -100 * 6] }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: [0.25, 0.46, 0.45, 0.94], // Custom cubic-bezier for ultra smooth motion
                repeatType: "loop"
              }}
              className="flex gap-8"
              style={{ 
                width: `${100 * 12}%`,
                willChange: 'transform' // Optimize for animations
              }}
            >
              {[...Array(12)].map((_, index) => {
                const solutions = [
                  {
                    title: 'Cloud Infrastructure',
                    description: 'Scalable cloud solutions for modern businesses',
                    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop',
                    gradient: 'from-blue-600 to-purple-600'
                  },
                  {
                    title: 'Cybersecurity Shield',
                    description: 'Advanced protection against digital threats',
                    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop',
                    gradient: 'from-red-600 to-pink-600'
                  },
                  {
                    title: 'AI & Machine Learning',
                    description: 'Intelligent automation for your business',
                    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop',
                    gradient: 'from-green-600 to-teal-600'
                  },
                  {
                    title: 'Network Solutions',
                    description: 'High-performance networking infrastructure',
                    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop',
                    gradient: 'from-orange-600 to-yellow-600'
                  },
                  {
                    title: 'Data Analytics',
                    description: 'Transform data into actionable insights',
                    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop',
                    gradient: 'from-purple-600 to-indigo-600'
                  },
                  {
                    title: 'Mobile Solutions',
                    description: 'Custom mobile apps for your business',
                    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop',
                    gradient: 'from-pink-600 to-rose-600'
                  }
                ];
                
                const solution = solutions[index % solutions.length];
                
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -10 }}
                    className="flex-shrink-0 w-80 group cursor-pointer"
                  >
                    <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 h-96">
                      {/* Background Image */}
                      <div className="absolute inset-0">
                        <Image
                          src={solution.image}
                          alt={solution.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${solution.gradient} opacity-60`} />
                      </div>
                      
                      {/* Content */}
                      <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                            {solution.title}
                          </h3>
                          <p className="text-gray-200 leading-relaxed">
                            {solution.description}
                          </p>
                        </motion.div>
                      </div>
                      
                      {/* Hover Glow */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-300 bg-gradient-to-t ${solution.gradient} blur-xl`} />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>

          {/* Slider Controls */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/services" 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-600 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Explore All Solutions
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/10 to-red-500/10 border border-orange-500/20 mb-6"
            >
              <CheckCircleIcon className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-orange-400 text-sm font-medium">Recent Projects</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Success Stories
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Successful IT implementations across Dubai and UAE, transforming businesses with cutting-edge technology.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Enterprise Network Upgrade",
                client: "Dubai Logistics Center",
                description: "Complete network infrastructure overhaul for a 50,000 sq ft warehouse facility with 99.9% uptime.",
                image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop&crop=center",
                category: "Networking",
                results: ["50% faster speeds", "Zero downtime", "Enhanced security"]
              },
              {
                title: "CCTV Security System",
                client: "Emirates Retail Chain",
                description: "Advanced surveillance system installation across 15 retail locations with AI-powered analytics.",
                image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=250&fit=crop&crop=center",
                category: "Security",
                results: ["24/7 monitoring", "AI analytics", "Crime reduction"]
              },
              {
                title: "Cloud Migration",
                client: "TechCorp Dubai",
                description: "Seamless migration to cloud infrastructure with zero downtime and enhanced scalability.",
                image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=400&h=250&fit=crop&crop=center",
                category: "Cloud",
                results: ["40% cost savings", "Improved performance", "Auto scaling"]
              }
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 h-full">
                  {/* Project Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-blue-500/80 text-white text-sm font-medium rounded-full backdrop-blur-sm">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-blue-400 font-medium mb-3">
                      {project.client}
                    </p>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    {/* Results */}
                    <div className="space-y-2">
                      {project.results.map((result, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: 0.1 + idx * 0.1 }}
                          className="flex items-center text-sm text-gray-400"
                        >
                          <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {result}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-red-500/10 blur-xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/projects" 
                className="inline-flex items-center px-8 py-4 border-2 border-orange-500/50 text-white font-semibold rounded-xl hover:bg-orange-500/10 transition-all duration-300"
              >
                View All Projects
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-800/50 to-purple-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-6"
            >
              <StarIcon className="w-4 h-4 text-purple-400 mr-2" />
              <span className="text-purple-400 text-sm font-medium">Client Success Stories</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              What Our Clients Say
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 max-w-3xl mx-auto"
            >
              Trusted by businesses across Dubai and UAE for exceptional IT solutions and support.
            </motion.p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 p-8 h-full">
                  {/* Quote Icon */}
                  <div className="absolute top-4 right-4 text-6xl text-blue-500/20 font-serif">"</div>
                  
                  {/* Stars */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="flex mb-4"
                  >
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.3 + i * 0.1 }}
                      >
                        <StarIcon className="w-5 h-5 text-yellow-400 fill-current" />
                      </motion.div>
                    ))}
                  </motion.div>
                  
                  {/* Testimonial Text */}
                  <p className="text-gray-300 mb-6 leading-relaxed italic">
                    "{testimonial.text}"
                  </p>
                  
                  {/* Author */}
                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-white font-semibold">{testimonial.name}</p>
                      <p className="text-gray-400 text-sm">{testimonial.company}</p>
                    </div>
                  </div>
                  
                  {/* Hover Glow Effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 blur-xl" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link 
                href="/clients" 
                className="inline-flex items-center px-8 py-4 border-2 border-purple-500/50 text-white font-semibold rounded-xl hover:bg-purple-500/10 transition-all duration-300"
              >
                View More Testimonials
                <motion.div
                  className="ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ChevronRightIcon className="w-5 h-5" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20" />
          <motion.div
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20 mb-6"
            >
              <SparklesIcon className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">Ready to Get Started?</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Transform Your{' '}
              <motion.span
                className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                animate={{
                  backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear"
                }}
              >
                IT Infrastructure
              </motion.span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            >
              Get a free consultation and personalized quote for your business today. 
              Let's make IT happen together!
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link 
                  href="/contact" 
                  className="group relative inline-flex items-center px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold text-lg rounded-2xl shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden"
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <span className="relative z-10">Get Free Quote</span>
                  <motion.div
                    className="relative z-10 ml-3"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ChevronRightIcon className="w-6 h-6" />
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <a
                  href="https://wa.me/971501234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-10 py-5 border-2 border-white/30 text-white font-bold text-lg rounded-2xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 backdrop-blur-sm"
                >
                  <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.787"/>
                  </svg>
                  WhatsApp Us
                </a>
              </motion.div>
            </motion.div>

            {/* Floating Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-gray-300"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <PhoneIcon className="w-5 h-5 mr-2 text-blue-400" />
                <span>+971-526716178</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <CheckCircleIcon className="w-5 h-5 mr-2 text-green-400" />
                <span>Free Consultation</span>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center"
              >
                <BoltIcon className="w-5 h-5 mr-2 text-yellow-400" />
                <span>24/7 Support</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
