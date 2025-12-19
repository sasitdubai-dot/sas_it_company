import Link from 'next/link';
import {
  StarIcon,
  BuildingOfficeIcon,
  TruckIcon,
  ShoppingBagIcon,
  HeartIcon,
  AcademicCapIcon,
  HomeIcon,
} from '@heroicons/react/24/solid';
import { CheckCircleIcon } from '@heroicons/react/24/outline';

export default function ClientsPage() {
  const testimonials = [
    {
      id: 1,
      name: 'Ahmed Al-Mansouri',
      position: 'CEO',
      company: 'Dubai Logistics Hub',
      industry: 'Logistics',
      rating: 5,
      text: 'SAS IT Services transformed our entire network infrastructure. The improvement in efficiency and reliability has been remarkable. Their team is professional, knowledgeable, and always available when we need support.',
      project: 'Enterprise Network Upgrade',
      image: '/images/testimonials/ahmed.jpg',
      logo: '/images/clients/dubai-logistics.png',
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      position: 'Operations Manager',
      company: 'Emirates Retail Chain',
      industry: 'Retail',
      rating: 5,
      text: 'The CCTV system installation across our 15 locations was flawlessly executed. The centralized monitoring has significantly improved our security posture. Excellent project management and technical expertise.',
      project: 'Multi-Location CCTV System',
      image: '/images/testimonials/sarah.jpg',
      logo: '/images/clients/emirates-retail.png',
    },
    {
      id: 3,
      name: 'Dr. Mohammed Hassan',
      position: 'IT Director',
      company: 'Emirates Healthcare Center',
      industry: 'Healthcare',
      rating: 5,
      text: 'SAS IT Services provided a robust and secure infrastructure that supports our critical healthcare operations seamlessly. Their understanding of healthcare compliance requirements is exceptional.',
      project: 'Hospital IT Infrastructure',
      image: '/images/testimonials/mohammed.jpg',
      logo: '/images/clients/emirates-healthcare.png',
    },
    {
      id: 4,
      name: 'Lisa Kumar',
      position: 'Facilities Manager',
      company: 'TechCorp Dubai',
      industry: 'Technology',
      rating: 5,
      text: 'The smart office automation solution has transformed our workplace. Energy savings exceeded expectations and employee satisfaction has improved significantly. Outstanding technical implementation.',
      project: 'Smart Office Automation',
      image: '/images/testimonials/lisa.jpg',
      logo: '/images/clients/techcorp-dubai.png',
    },
    {
      id: 5,
      name: 'Mark Thompson',
      position: 'IT Coordinator',
      company: 'Dubai International School',
      industry: 'Education',
      rating: 5,
      text: 'The campus-wide network infrastructure has revolutionized our digital learning capabilities. Students and staff now have seamless connectivity throughout the campus. Exceptional project delivery.',
      project: 'Educational Campus Network',
      image: '/images/testimonials/mark.jpg',
      logo: '/images/clients/dubai-school.png',
    },
    {
      id: 6,
      name: 'Fatima Al-Zahra',
      position: 'Store Manager',
      company: 'Golden Mall Dubai',
      industry: 'Retail',
      rating: 5,
      text: 'The structured cabling and network setup for our shopping mall was completed on time and within budget. The quality of work and attention to detail is commendable.',
      project: 'Mall Network Infrastructure',
      image: '/images/testimonials/fatima.jpg',
      logo: '/images/clients/golden-mall.png',
    },
  ];

  const clients = [
    {
      name: 'Dubai Logistics Hub',
      logo: '/images/clients/dubai-logistics.png',
      industry: 'Logistics & Warehousing',
      services: ['Network Infrastructure', 'CCTV Systems', 'Server Solutions'],
    },
    {
      name: 'Emirates Retail Chain',
      logo: '/images/clients/emirates-retail.png',
      industry: 'Retail',
      services: ['CCTV Surveillance', 'Access Control', 'Network Security'],
    },
    {
      name: 'TechCorp Dubai',
      logo: '/images/clients/techcorp-dubai.png',
      industry: 'Technology',
      services: ['Smart Office Automation', 'Server Infrastructure', 'Cloud Migration'],
    },
    {
      name: 'Emirates Healthcare',
      logo: '/images/clients/emirates-healthcare.png',
      industry: 'Healthcare',
      services: ['Hospital IT Infrastructure', 'Security Systems', 'Compliance Solutions'],
    },
    {
      name: 'Dubai International School',
      logo: '/images/clients/dubai-school.png',
      industry: 'Education',
      services: ['Campus Network', 'WiFi Infrastructure', 'Content Filtering'],
    },
    {
      name: 'Golden Mall Dubai',
      logo: '/images/clients/golden-mall.png',
      industry: 'Retail',
      services: ['Mall Network', 'CCTV Systems', 'Access Control'],
    },
    {
      name: 'Skyline Properties',
      logo: '/images/clients/skyline-properties.png',
      industry: 'Real Estate',
      services: ['Building Automation', 'Security Systems', 'Network Infrastructure'],
    },
    {
      name: 'Azure Restaurant Group',
      logo: '/images/clients/azure-restaurants.png',
      industry: 'Hospitality',
      services: ['POS Systems', 'WiFi Network', 'CCTV Installation'],
    },
    {
      name: 'Emirates Transport',
      logo: '/images/clients/emirates-transport.png',
      industry: 'Transportation',
      services: ['Fleet Management', 'GPS Tracking', 'Communication Systems'],
    },
    {
      name: 'Green Valley Farms',
      logo: '/images/clients/green-valley.png',
      industry: 'Agriculture',
      services: ['IoT Solutions', 'Monitoring Systems', 'Wireless Networks'],
    },
    {
      name: 'Dubai Financial Group',
      logo: '/images/clients/dubai-financial.png',
      industry: 'Finance',
      services: ['Secure Networks', 'Data Centers', 'Compliance Solutions'],
    },
    {
      name: 'Oasis Spa & Wellness',
      logo: '/images/clients/oasis-spa.png',
      industry: 'Wellness',
      services: ['WiFi Systems', 'Booking Systems', 'Audio/Visual Setup'],
    },
  ];

  const stats = [
    { value: '250+', label: 'Happy Clients' },
    { value: '500+', label: 'Projects Completed' },
    { value: '99.9%', label: 'Client Satisfaction' },
    { value: '24/7', label: 'Support Available' },
  ];

  return (
    <div className="bg-[#1a1a2e]">
      {/* Hero Section */}
      <section className="hero-gradient py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-gradient">Valued Clients</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Trusted by leading businesses across Dubai and UAE. Our success is measured 
              by the satisfaction and growth of our clients.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-[#4a9eff] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-gray-300">
              Real testimonials from satisfied clients across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="card h-full">
                {/* Rating */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>

                {/* Project */}
                <div className="mb-4">
                  <span className="px-3 py-1 bg-[#0f3460] text-[#4a9eff] rounded-full text-xs font-medium">
                    {testimonial.project}
                  </span>
                </div>

                {/* Author Info */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-[#0f3460] rounded-full flex items-center justify-center mr-4">
                    <span className="text-[#4a9eff] font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="text-white font-semibold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.position}</p>
                    <p className="text-[#4a9eff] text-sm">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="py-20 bg-[#16213e]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Trusted by Industry Leaders
            </h2>
            <p className="text-gray-300">
              We work with businesses across diverse industries
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {clients.map((client, index) => (
              <div key={index} className="card text-center group hover:bg-[#1a1a2e] transition-colors">
                <div className="w-16 h-16 bg-[#0f3460] rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:bg-[#4a9eff] transition-colors">
                  <BuildingOfficeIcon className="h-8 w-8 text-[#4a9eff] group-hover:text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2 text-sm">
                  {client.name}
                </h3>
                <p className="text-gray-400 text-xs mb-3">
                  {client.industry}
                </p>
                <div className="space-y-1">
                  {client.services.map((service, idx) => (
                    <span
                      key={idx}
                      className="block text-xs text-gray-500"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Study Highlights */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Success Stories
            </h2>
            <p className="text-gray-300">
              Measurable results that speak for themselves
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-[#16213e] text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircleIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                99.9% Uptime
              </h3>
              <p className="text-gray-300 mb-4">
                Achieved for Dubai Logistics Hub&apos;s network infrastructure
              </p>
              <div className="text-[#4a9eff] font-semibold">
                Enterprise Network Upgrade
              </div>
            </div>

            <div className="card bg-[#16213e] text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircleIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                50% Crime Reduction
              </h3>
              <p className="text-gray-300 mb-4">
                Security incidents decreased across Emirates Retail Chain locations
              </p>
              <div className="text-[#4a9eff] font-semibold">
                CCTV Surveillance System
              </div>
            </div>

            <div className="card bg-[#16213e] text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircleIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">
                35% Energy Savings
              </h3>
              <p className="text-gray-300 mb-4">
                Achieved through smart office automation at TechCorp Dubai
              </p>
              <div className="text-[#4a9eff] font-semibold">
                Smart Office Solutions
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Client Satisfaction Process */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-4">
              Our Client Success Process
            </h2>
            <p className="text-gray-300">
              How we ensure every client achieves their goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <div className="w-12 h-12 bg-[#4a9eff] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                1
              </div>
              <h3 className="text-white font-semibold mb-3">Listen & Understand</h3>
              <p className="text-gray-300 text-sm">
                We start by understanding your unique business needs and challenges.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-[#4a9eff] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                2
              </div>
              <h3 className="text-white font-semibold mb-3">Design Solutions</h3>
              <p className="text-gray-300 text-sm">
                Custom solutions designed specifically for your business requirements.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-[#4a9eff] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                3
              </div>
              <h3 className="text-white font-semibold mb-3">Deliver Excellence</h3>
              <p className="text-gray-300 text-sm">
                Professional implementation with minimal disruption to your operations.
              </p>
            </div>

            <div className="card text-center">
              <div className="w-12 h-12 bg-[#4a9eff] rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold">
                4
              </div>
              <h3 className="text-white font-semibold mb-3">Ongoing Support</h3>
              <p className="text-gray-300 text-sm">
                Continuous support and optimization to ensure long-term success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#0f3460] to-[#4a9eff]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Join Our Growing List of Satisfied Clients
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Experience the SAS IT Services difference. Let us help you achieve your IT goals.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-[#0f3460] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Become Our Next Success Story
            </Link>
            <Link href="/projects" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#0f3460] transition-colors">
              View Case Studies
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

