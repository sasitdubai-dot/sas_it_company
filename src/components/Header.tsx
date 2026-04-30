'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Bars3Icon, XMarkIcon, PhoneIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Clients', href: '/clients' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className={`header-fixed ${isScrolled ? 'header-scrolled' : ''}`}>
      <div className="header-container">
        <div className="header-content">

          {/* Logo */}
          <Link href="/" className="header-logo">
            <Image
              src="/images/logo.jpeg"
              alt="SAS IT Services"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <div className="header-logo-text">
                SAS IT <span className="header-logo-accent">Services</span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header-nav">
            {navigation.map((item) => (
              <div key={item.name} className="nav-item-wrapper">
                <Link href={item.href} className="header-nav-link">
                  {item.name}
                </Link>
              </div>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="header-contact">
            <a href="tel:+971526716178" className="header-phone">
              <PhoneIcon className="w-4 h-4 mr-1" />
              +971-526716178
            </a>
            <Link href="/contact" className="header-cta-primary">
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="header-mobile-btn"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="header-mobile-menu">
            <div className="mobile-nav-items">
              {navigation.map((item) => (
                <div key={item.name} className="mobile-nav-item">
                  <Link
                    href={item.href}
                    className="header-mobile-link"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              <div className="mobile-nav-actions">
                <a
                  href="tel:+971526716178"
                  className="mobile-phone-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <PhoneIcon className="w-4 h-4" />
                  +971-526716178
                </a>
                <Link
                  href="/contact"
                  className="mobile-cta-btn"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
