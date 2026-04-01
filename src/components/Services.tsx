'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import TiltCard from './TiltCard';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    number: '01',
    name: 'Oil & Filter',
    description: 'Full synthetic, conventional, or high-mileage. Fast, done right.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="8" />
        <line x1="12" y1="6" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="18" />
        <line x1="18" y1="12" x2="21" y2="12" />
        <line x1="3" y1="12" x2="6" y2="12" />
      </svg>
    ),
  },
  {
    number: '02',
    name: 'Brakes & Rotors',
    description: 'We inspect and advise. Only replace what actually needs it.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 6v6l5 3" />
      </svg>
    ),
  },
  {
    number: '03',
    name: 'Engine Diagnostics',
    description: 'We read codes, dig deeper, explain clearly. No upselling.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <rect x="3" y="5" width="18" height="14" />
        <path d="M7 12h10" />
        <path d="M7 8h10" />
        <path d="M7 16h10" />
      </svg>
    ),
  },
  {
    number: '04',
    name: 'Tires & Alignment',
    description: 'Rotations, balancing, new tires, alignment. Vermont roads are rough.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <circle cx="12" cy="12" r="8" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="12" cy="12" r="1" />
      </svg>
    ),
  },
  {
    number: '05',
    name: 'AC & Heating',
    description: 'Full climate system — refrigerant, compressors, heater cores.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M6 12c0-3.314 2.686-6 6-6s6 2.686 6 6" />
        <line x1="12" y1="12" x2="12" y2="18" />
        <path d="M12 18l-3-2" />
        <path d="M12 18l3-2" />
      </svg>
    ),
  },
  {
    number: '06',
    name: 'Suspension',
    description: 'Shocks, struts, control arms, tie rods. If it pulls or bounces, we fix it.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
        <path d="M4 8h16" />
        <path d="M6 8v8" />
        <path d="M18 8v8" />
        <path d="M8 16h8" />
      </svg>
    ),
  },
];

export default function Services() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll-triggered reveal for service cards
    const cards = gsap.utils.toArray<HTMLElement>('.service-card');

    cards.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 88%',
            once: true,
          },
          delay: index * 0.08,
        }
      );
    });

    // Hover animation setup
    cards.forEach((card) => {
      const bar = card.querySelector('.service-bar');

      card.addEventListener('mouseenter', () => {
        gsap.to(card, { backgroundColor: 'var(--color-charcoal)', duration: 0.3 });
        gsap.to(bar, { width: '100%', duration: 0.5, ease: 'power3.out' });
        gsap.to(card.querySelector('.service-arrow'), { opacity: 1, duration: 0.3 });
      });

      card.addEventListener('mouseleave', () => {
        gsap.to(card, { backgroundColor: 'transparent', duration: 0.3 });
        gsap.to(bar, { width: '0%', duration: 0.5, ease: 'power3.out' });
        gsap.to(card.querySelector('.service-arrow'), { opacity: 0, duration: 0.3 });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="services" className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 lg:mb-20 items-start">
          <div>
            <div className="label label-amber mb-4">Full-Service Repair Shop</div>
            <h2 className="font-bebas text-white">What We Do</h2>
          </div>

          <div className="hidden lg:block text-right">
            <p className="text-sm text-muted max-w-xs ml-auto">
              Everything your car needs, from routine maintenance to major repairs. We handle all makes and models with the same attention to detail.
            </p>
          </div>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-border"
        >
          {services.map((service, idx) => (
            <TiltCard
              key={service.number}
              className="service-card relative border-r border-b border-border p-6 lg:p-8 transition-colors duration-300 cursor-pointer group"
            >
              {/* Service bar - draws from left on hover */}
              <div
                className="service-bar absolute bottom-0 left-0 h-[2px] bg-amber w-0"
                style={{ width: '0%' }}
              />

              {/* Number */}
              <div className="text-xs lg:text-sm font-bebas tracking-widest text-amber mb-6">
                {service.number}
              </div>

              {/* Icon */}
              <div className="w-10 h-10 lg:w-12 lg:h-12 text-amber mb-6 flex items-center justify-center">
                {service.icon}
              </div>

              {/* Name */}
              <h3 className="font-barlow-condensed font-600 tracking-wider uppercase text-white mb-3 text-sm lg:text-base">
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-xs lg:text-sm text-muted leading-relaxed mb-4">
                {service.description}
              </p>

              {/* Arrow - fades in on hover */}
              <div className="service-arrow absolute bottom-6 lg:bottom-8 right-6 lg:right-8 text-amber opacity-0 transition-opacity">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
