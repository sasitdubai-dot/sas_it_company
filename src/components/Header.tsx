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
    <header className={`header ${isScrolled ? 'header-scrolled' : ''}`}>
      {/* Logo */}
      <Link href="/" className="header-logo">
        <Image src="/images/logo.jpeg" alt="SAS IT Services" width={40} height={40} />
        <span>SAS IT Services</span>
      </Link>

      {/* Desktop Navigation */}
      <nav className="header-nav">
        {navigation.map((item) => (
          <Link key={item.name} href={item.href} className="header-nav-link">
            {item.name}
          </Link>
        ))}
      </nav>

      {/* Contact Info & CTA */}
      <div className="header-actions">
        <a href="tel:+971526716178" className="header-phone">
          <PhoneIcon className="w-4 h-4" />
          +971-526716178
        </a>
        <Link href="/contact" className="header-cta">
          Get Quote
        </Link>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="header-mobile-btn"
      >
        {isMenuOpen ? (
          <XMarkIcon className="w-6 h-6" />
        ) : (
          <Bars3Icon className="w-6 h-6" />
        )}
      </button>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="header-mobile-menu">
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
          <a
            href="tel:+971526716178"
            className="header-mobile-phone"
            onClick={() => setIsMenuOpen(false)}
          >
            +971-526716178
          </a>
          <Link
            href="/contact"
            className="header-mobile-cta"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Quote
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
