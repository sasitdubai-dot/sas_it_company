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
    { name: 'Networking & Security', href: '/services#networking' },
    { name: 'Structured Cabling', href: '/services#cabling' },
    { name: 'CCTV & Surveillance', href: '/services#cctv' },
    { name: 'Server Solutions', href: '/services#servers' },
    { name: 'Website Development', href: '/services#web' },
    { name: 'Computer Repair', href: '/services#repair' },
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
    <footer className="footer-section">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Company Info */}
          <div className="footer-company">
            <Link href="/" className="footer-logo-link">
              <Image
                src="/images/logo.jpeg"
                alt="SAS IT Services"
                width={50}
                height={50}
                className="footer-logo-image"
              />
              <div className="footer-logo-text">
                <div className="footer-company-name">
                  SAS <span className="footer-accent">IT Services</span>
                </div>
                <div className="footer-tagline">We Make IT Happen!</div>
              </div>
            </Link>
            
            <p className="footer-description">
              Professional IT solutions provider in Dubai, UAE. Specializing in networking, 
              security, CCTV surveillance, server solutions, and comprehensive IT support 
              for businesses of all sizes.
            </p>

            {/* Contact Info */}
            <div className="footer-contact">
              <div className="footer-contact-item">
                <PhoneIcon className="footer-contact-icon" />
                <div className="footer-contact-text">
                  <a href="tel:+971501234567" className="footer-contact-link">
                    +971-526716178
                  </a>
                  <span className="footer-separator">|</span>
                  <a href="tel:+97143214567" className="footer-contact-link">
                    +971-545829411
                  </a>
                </div>
              </div>
              
              <div className="footer-contact-item">
                <EnvelopeIcon className="footer-contact-icon" />
                <a href="mailto:Info@sasitdubai.com" className="footer-contact-link">
                  Info@sasitdubai.com
                </a>
              </div>
              
              <div className="footer-contact-item">
                <MapPinIcon className="footer-contact-icon footer-contact-icon-top" />
                <span className="footer-contact-text">Business Bay, Dubai, UAE</span>
              </div>
              
              <div className="footer-contact-item">
                <ClockIcon className="footer-contact-icon" />
                <span className="footer-contact-text">Mon-Fri: 9:00 AM - 6:00 PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="footer-column">
            <h3 className="footer-column-title">Our Services</h3>
            <ul className="footer-column-list">
              {services.map((service) => (
                <li key={service.name} className="footer-list-item">
                  <Link href={service.href} className="footer-link">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer-column">
            <h3 className="footer-column-title">Quick Links</h3>
            <ul className="footer-column-list">
              {quickLinks.map((link) => (
                <li key={link.name} className="footer-list-item">
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
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              © {new Date().getFullYear()} SAS IT Services. All rights reserved.
            </div>
            
            {/* Social Media & Legal Links */}
            <div className="footer-links-section">
              <div className="footer-social">
                <a
                  href="https://www.instagram.com/sasitservices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  Instagram
                </a>
                <a
                  href="https://www.linkedin.com/company/sasitservices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.facebook.com/sasitservices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                >
                  Facebook
                </a>
              </div>
              
              <div className="footer-legal">
                {legalLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="footer-legal-link"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
