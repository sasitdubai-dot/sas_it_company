import Link from 'next/link';
import {
  HomeIcon,
  UserGroupIcon,
  WrenchScrewdriverIcon,
  FolderOpenIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  PhoneIcon,
  ShieldCheckIcon,
  MapIcon,
} from '@heroicons/react/24/outline';

export default function SitemapPage() {
  const siteStructure = [
    {
      title: 'Main Pages',
      icon: HomeIcon,
      links: [
        { name: 'Home', href: '/', description: 'Homepage with services overview and contact information' },
        { name: 'About Us', href: '/about', description: 'Company information, team, and values' },
        { name: 'Services', href: '/services', description: 'Complete list of IT services we provide' },
        { name: 'Projects', href: '/projects', description: 'Portfolio and case studies' },
        { name: 'Clients', href: '/clients', description: 'Client testimonials and success stories' },
        { name: 'Blog', href: '/blog', description: 'IT insights, tips, and industry news' },
        { name: 'Contact', href: '/contact', description: 'Contact forms and office information' },
      ]
    },
    {
      title: 'Services',
      icon: WrenchScrewdriverIcon,
      links: [
        { name: 'Networking & Security', href: '/services#networking', description: 'Network infrastructure and cybersecurity' },
        { name: 'Structured Cabling', href: '/services#cabling', description: 'Professional cabling solutions' },
        { name: 'CCTV & Surveillance', href: '/services#cctv', description: 'Security camera systems' },
        { name: 'Server Solutions', href: '/services#servers', description: 'Server setup and maintenance' },
        { name: 'Access Control', href: '/services#access-control', description: 'Access control and attendance systems' },
        { name: 'Computer Repair', href: '/services#repair', description: 'Computer and laptop repair services' },
        { name: 'Home Automation', href: '/services#automation', description: 'Smart home solutions' },
        { name: 'Website Development', href: '/services#web', description: 'Web development services' },
        { name: 'CRM/ERP Solutions', href: '/services#crm', description: 'Business management systems' },
        { name: 'Email & Cloud Services', href: '/services#cloud', description: 'Cloud and email hosting' },
      ]
    },
    {
      title: 'Legal & Information',
      icon: ShieldCheckIcon,
      links: [
        { name: 'Privacy Policy', href: '/privacy-policy', description: 'How we handle your personal information' },
        { name: 'Terms & Conditions', href: '/terms-conditions', description: 'Service terms and agreements' },
        { name: 'Sitemap', href: '/sitemap', description: 'Complete website structure (this page)' },
      ]
    },
    {
      title: 'Admin Panel',
      icon: DocumentTextIcon,
      links: [
        { name: 'Admin Login', href: '/admin', description: 'Content management system access' },
        { name: 'Dashboard', href: '/admin/dashboard', description: 'Admin dashboard overview' },
        { name: 'Blog Management', href: '/admin/blogs', description: 'Manage blog posts and articles' },
        { name: 'Testimonials', href: '/admin/testimonials', description: 'Manage client testimonials' },
      ]
    }
  ];

  const quickLinks = [
    { name: 'Get Free Quote', href: '/contact', color: 'bg-[#4a9eff] hover:bg-[#3a8ae8]' },
    { name: 'Call Now: +971-526716178', href: 'tel:+971501234567', color: 'bg-green-600 hover:bg-green-700' },
    { name: 'WhatsApp Us', href: 'https://wa.me/971501234567', color: 'bg-[#25d366] hover:bg-[#1faa52]' },
    { name: 'Email Us', href: 'mailto:Info@sasitdubai.com', color: 'bg-purple-600 hover:bg-purple-700' },
  ];

  return (
    <div className="bg-[#1a1a2e] min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <MapIcon className="h-16 w-16 text-[#4a9eff] mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Website Sitemap
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Complete navigation guide for SAS IT Services website. Find all our pages, 
            services, and resources in one organized location.
          </p>
        </div>

        {/* Quick Action Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {quickLinks.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`${link.color} text-white px-6 py-4 rounded-lg font-semibold text-center transition-colors block`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Site Structure */}
        <div className="space-y-12">
          {siteStructure.map((section, index) => (
            <div key={index} className="card">
              <div className="flex items-center mb-8">
                <section.icon className="h-8 w-8 text-[#4a9eff] mr-4" />
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.links.map((link, linkIndex) => (
                  <Link
                    key={linkIndex}
                    href={link.href}
                    className="group p-6 bg-[#0f3460] rounded-lg hover:bg-[#16213e] transition-colors"
                  >
                    <h3 className="text-white font-semibold mb-2 group-hover:text-[#4a9eff] transition-colors">
                      {link.name}
                    </h3>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {link.description}
                    </p>
                    <div className="mt-4 text-[#4a9eff] text-sm font-medium">
                      Visit Page →
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Website Statistics */}
        <div className="mt-16">
          <div className="card text-center">
            <h2 className="text-2xl font-bold text-white mb-8">Website Overview</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-[#4a9eff] mb-2">25+</div>
                <div className="text-gray-300 text-sm">Total Pages</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">10</div>
                <div className="text-gray-300 text-sm">Services Offered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">6</div>
                <div className="text-gray-300 text-sm">Blog Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">4</div>
                <div className="text-gray-300 text-sm">Admin Panels</div>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-16">
          <div className="card bg-[#0f3460] border-[#4a9eff]">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Need Help Finding Something?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-white font-semibold mb-4">Contact Information</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center">
                    <PhoneIcon className="h-5 w-5 mr-3 text-[#4a9eff]" />
                    <div>
                      <a href="tel:+971501234567" className="hover:text-[#4a9eff] transition-colors">
                        +971-526716178
                      </a>
                      <span className="mx-2">|</span>
                      <a href="tel:+97143214567" className="hover:text-[#4a9eff] transition-colors">
                        +971-545829411
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <ChatBubbleLeftRightIcon className="h-5 w-5 mr-3 text-[#4a9eff]" />
                    <a href="mailto:Info@sasitdubai.com" className="hover:text-[#4a9eff] transition-colors">
                      Info@sasitdubai.com
                    </a>
                  </div>
                  
                  <div className="flex items-start">
                    <MapIcon className="h-5 w-5 mr-3 text-[#4a9eff] mt-0.5" />
                    <span>Business Bay, Dubai, UAE</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-white font-semibold mb-4">Business Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                  <div className="flex justify-between border-t border-gray-600 pt-2 mt-4">
                    <span>Emergency Support:</span>
                    <span className="text-[#4a9eff]">24/7 Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="text-center mt-12">
          <Link href="/" className="btn-primary mr-4">
            Back to Home
          </Link>
          <Link href="/contact" className="btn-secondary">
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}

