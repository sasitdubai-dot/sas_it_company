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
              width={45}
              height={45}
              className="rounded-full"
            />
            <div className="header-logo-text">
              SAS <span className="header-logo-accent">IT Services</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="header-nav">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="header-nav-link"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Contact Info & CTA */}
          <div className="header-contact">
            <a
              href="tel:+971501234567"
              className="header-phone"
            >
              <PhoneIcon className="h-4 w-4 mr-2" />
              <span className="text-sm">+971-526716178</span>
            </a>
            <Link
              href="/contact"
              className="btn-primary header-cta-primary"
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="header-mobile-btn"
          >
            {isMenuOpen ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="header-mobile-menu">
            <div className="mobile-nav-items">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="header-mobile-link"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="mobile-nav-footer">
              <a
                href="tel:+971501234567"
                className="mobile-phone-link"
                onClick={() => setIsMenuOpen(false)}
              >
                <PhoneIcon className="h-4 w-4 mr-2" />
                <span>+971-526716178</span>
              </a>
              <Link
                href="/contact"
                className="btn-primary mobile-cta-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
