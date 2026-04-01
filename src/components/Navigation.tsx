'use client';

import Link from 'next/link';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Navigation() {
  const navRef = useRef<HTMLElement>(null);

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

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between w-full transition-all duration-400 ease-out"
    >
      {/* Logo */}
      <Link href="#hero" className="flex items-center gap-1 group">
        <span className="text-lg font-bebas font-bold tracking-wider text-white">OG</span>
        <span className="text-lg font-bebas font-bold tracking-wider text-amber">AUTO</span>
      </Link>

      {/* Center Links - Desktop only */}
      <div className="hidden lg:flex items-center gap-8">
        {[
          { label: 'About', href: '#about' },
          { label: 'Services', href: '#services' },
          { label: 'Why Us', href: '#why' },
          { label: 'Reviews', href: '#testimonials' },
          { label: 'Contact', href: '#contact' },
        ].map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="text-sm font-barlow-condensed font-500 tracking-wider text-cream uppercase transition-colors duration-300 hover:text-amber"
          >
            {link.label}
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <Link
        href="#contact"
        className="btn-primary hidden lg:inline-block"
      >
        Book Service
      </Link>

      {/* Mobile menu button placeholder - simplified for v1 */}
      <button className="lg:hidden text-cream hover:text-amber transition-colors">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </nav>
  );
}
