import Link from 'next/link';
import Image from 'next/image';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  ClockIcon,
} from '@heroicons/react/24/outline';

const Footer = () => {
  const services = [
    { name: 'Networking & Security', href: '/networking-security-dubai' },
    { name: 'Server Solutions', href: '/server-solutions-dubai' },
    { name: 'Structured Cabling', href: '/structured-cabling-dubai' },
    { name: 'IP Telephony', href: '/ip-telephony-dubai' },
    { name: 'AMC Annual Maintenance', href: '/amc-annual-maintenance-dubai' },
    { name: 'Computer Repair', href: '/computer-repair-dubai' },
    { name: 'Access Control System', href: '/access-control-system-dubai' },
    { name: 'CCTV & Surveillance', href: '/commercial-cctv-installation-dubai' },
    { name: 'Smart Meeting Rooms', href: '/smart-meeting-room-solutions-dubai' },
  ];

  const quickLinks = [
    { name: 'About Us', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Clients', href: '/clients' },
    { name: 'Blog', href: '/blog' },
    { name: 'Careers', href: '/careers' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & Conditions', href: '/terms-conditions' },
    { name: 'Sitemap', href: '/sitemap' },
  ];

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Company Info */}
        <div className="footer-brand">
          <Link href="/" className="footer-logo">
            <Image src="/images/logo.jpeg" alt="SAS IT Services Dubai" width={50} height={50} />
            <div>
              <div className="footer-logo-name">SAS IT Services</div>
              <div className="footer-logo-tagline">We Make IT Happen!</div>
            </div>
          </Link>
          <p className="footer-description">
            Professional IT solutions provider in Dubai, UAE. Specializing in networking,
            security, CCTV surveillance, server solutions, and comprehensive IT support
            for businesses of all sizes.
          </p>

          {/* Contact Info */}
          <div className="footer-contact">
            <a href="tel:+971526716178" className="footer-contact-item">
              <PhoneIcon className="w-4 h-4" />
              +971-526716178
            </a>
            <span className="footer-contact-sep"> | </span>
            <a href="tel:+971545829411" className="footer-contact-item">
              +971-545829411
            </a>
          </div>
          <a href="mailto:Info@sasitdubai.com" className="footer-contact-item">
            <EnvelopeIcon className="w-4 h-4" />
            Info@sasitdubai.com
          </a>
          <div className="footer-contact-item">
            <MapPinIcon className="w-4 h-4" />
            Business Bay, Dubai, UAE
          </div>
          <div className="footer-contact-item">
            <ClockIcon className="w-4 h-4" />
            Mon-Fri: 9:00 AM - 6:00 PM
          </div>
        </div>

        {/* Services */}
        <div className="footer-col">
          <h3 className="footer-col-title">Our Services</h3>
          <ul>
            {services.map((service) => (
              <li key={service.name}>
                <Link href={service.href} className="footer-link">
                  {service.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-col">
          <h3 className="footer-col-title">Quick Links</h3>
          <ul>
            {quickLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.href} className="footer-link">
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} SAS IT Services. All rights reserved.</p>

        {/* Social Media & Legal Links */}
        <div className="footer-bottom-links">
          <a href="https://www.instagram.com/sasitservices" target="_blank" rel="noopener noreferrer" className="footer-social">Instagram</a>
          <a href="https://www.linkedin.com/company/sasitservices" target="_blank" rel="noopener noreferrer" className="footer-social">LinkedIn</a>
          <a href="https://www.facebook.com/sasitservices" target="_blank" rel="noopener noreferrer" className="footer-social">Facebook</a>
          {legalLinks.map((link) => (
            <Link key={link.name} href={link.href} className="footer-legal-link">
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
