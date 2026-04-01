'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Why Us', href: '/why-us' },
    { label: 'Contact', href: '/contact' },
  ];

  const isActive = (href: string) => pathname === href;

  useEffect(() => {
    const handleScroll = () => {
      if (!navRef.current) return;

      const scrolled = window.scrollY > 80;

      if (scrolled) {
        navRef.current.style.backgroundColor = 'rgba(10, 9, 8, 0.95)';
        navRef.current.style.backdropFilter = 'blur(12px)';
        navRef.current.style.padding = '12px 40px';
      } else {
        navRef.current.style.backgroundColor = 'transparent';
        navRef.current.style.backdropFilter = 'none';
        navRef.current.style.padding = '24px 40px';
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full transition-all duration-400 ease-out"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-1 group">
        <span className="text-lg font-bebas font-bold tracking-wider text-white">O. G.</span>
        <span className="text-lg font-bebas font-bold tracking-wider text-amber">AUTO</span>
      </Link>

      {/* Center Links - Desktop only */}
      <div className="hidden lg:flex items-center gap-8">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`text-sm font-barlow-condensed font-500 tracking-wider uppercase transition-colors duration-300 ${
              isActive(link.href)
                ? 'text-amber'
                : 'text-cream hover:text-amber'
            }`}
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <Link
        href="/contact"
        className="btn-primary hidden lg:inline-block"
      >
        Book Service
      </Link>

      {/* Mobile menu button */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className="lg:hidden text-cream hover:text-amber transition-colors"
        aria-label="Toggle mobile menu"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-black bg-opacity-95 backdrop-blur-md lg:hidden border-b border-border">
          <div className="flex flex-col gap-4 px-8 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-barlow-condensed font-500 tracking-wider uppercase transition-colors duration-300 ${
                  isActive(link.href)
                    ? 'text-amber'
                    : 'text-cream hover:text-amber'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-border pt-4 mt-2">
              <Link
                href="/contact"
                className="btn-primary w-full text-center block"
              >
                Book Service
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
