'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="relative w-full py-12 px-8 lg:px-16 bg-charcoal border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 items-center">
          {/* Logo */}
          <div>
            <Link href="/" className="flex items-center gap-1 group">
              <span className="text-base font-bebas font-bold tracking-wider text-white">O. G.</span>
              <span className="text-base font-bebas font-bold tracking-wider text-amber">AUTO</span>
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center">
            <p className="text-xs lg:text-xs font-barlow-condensed tracking-widest text-muted uppercase">
              © 2026 O. G. Auto · White River Junction, VT · All Rights Reserved
            </p>
          </div>

          {/* Links */}
          <div className="flex justify-end gap-8">
            {[
              { label: 'About', href: '/about' },
              { label: 'Services', href: '/services' },
              { label: 'Contact', href: '/contact' },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs lg:text-xs font-barlow-condensed tracking-widest text-cream uppercase transition-colors duration-300 hover:text-amber"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
