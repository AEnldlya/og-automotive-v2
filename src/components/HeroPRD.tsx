'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Custom Cursor Component
function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mousePos = useRef({ x: 0, y: 0 });
  const ringPos = useRef({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Check for touch device
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      
      // Dot follows exactly
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    // Lerp loop for ring
    let rafId: number;
    const loop = () => {
      if (ringRef.current) {
        // Lerp factor 0.12 for smooth lag
        ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12;
        ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12;
        
        ringRef.current.style.left = `${ringPos.current.x}px`;
        ringRef.current.style.top = `${ringPos.current.y}px`;
      }
      rafId = requestAnimationFrame(loop);
    };

    // Add hover detection for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"]');
    const handleEnter = () => setIsHovering(true);
    const handleLeave = () => setIsHovering(false);

    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleEnter);
      el.addEventListener('mouseleave', handleLeave);
    });

    window.addEventListener('mousemove', handleMouseMove);
    rafId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(rafId);
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleEnter);
        el.removeEventListener('mouseleave', handleLeave);
      });
    };
  }, []);

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${isHovering ? 'expanded' : ''}`} />
    </>
  );
}

// Marquee Ticker Component
function MarqueeTicker() {
  const services = [
    'Oil Change',
    'Brakes & Rotors',
    'Engine Diagnostics',
    'Transmission',
    'Suspension',
    'Tire Service',
    'AC & Heat',
    'Exhaust',
  ];

  const content = services.join(' ◆ ');

  return (
    <div className="w-full bg-[#e07b2a] py-3.5 overflow-hidden">
      <div className="marquee-content flex whitespace-nowrap">
        <span className="font-[family-name:var(--font-bebas)] text-black text-[0.95rem] tracking-[0.18em] px-4">
          {content} ◆ {content} ◆
        </span>
        <span className="font-[family-name:var(--font-bebas)] text-black text-[0.95rem] tracking-[0.18em] px-4">
          {content} ◆ {content} ◆
        </span>
      </div>
    </div>
  );
}

export default function HeroPRD() {
  const heroRef = useRef<HTMLElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollHintRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Page load sequence - PRD spec
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Step 1: Eyebrow fades in (0.2s delay, 0.7s duration)
      tl.fromTo(
        eyebrowRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.7 },
        0.2
      );

      // Step 2: Title words clip reveal (stagger 0.08s, 1.1s duration, expo.out)
      const words = titleRef.current?.querySelectorAll('.word-inner');
      if (words) {
        tl.fromTo(
          words,
          { y: '110%' },
          { 
            y: '0%', 
            duration: 1.1, 
            ease: 'expo.out',
            stagger: 0.08 
          },
          0.3 // overlaps step 1 slightly
        );
      }

      // Step 3: Description fades in (overlaps step 2)
      tl.fromTo(
        descRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        0.8
      );

      // Step 4: CTAs fade in (overlaps step 3)
      tl.fromTo(
        ctaRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8 },
        1.0
      );

      // Step 5: Scroll hint fades in (after step 4)
      tl.fromTo(
        scrollHintRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: 'power2.out' },
        1.4
      );

      // Parallax on background (yPercent: 25 over hero scroll)
      if (bgRef.current) {
        gsap.to(bgRef.current, {
          yPercent: 25,
          ease: 'none',
          scrollTrigger: {
            trigger: heroRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        });
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <CustomCursor />
      
      {/* Hero Section - PRD spec */}
      <section
        ref={heroRef}
        id="hero"
        className="relative min-h-screen w-full overflow-hidden bg-[#0a0908]"
        style={{ minHeight: '700px' }}
      >
        {/* Background layers - bottom to top */}
        <div ref={bgRef} className="absolute inset-0 pointer-events-none">
          {/* Base */}
          <div className="absolute inset-0 bg-[#0a0908]" />
          
          {/* Radial glow - rust/amber at upper-right */}
          <div 
            className="absolute top-0 right-0 w-[80%] h-[80%]"
            style={{
              background: 'radial-gradient(ellipse at 70% 20%, rgba(196, 90, 43, 0.18) 0%, transparent 60%)',
            }}
          />
          
          {/* Subtle amber warmth at lower-left */}
          <div 
            className="absolute bottom-0 left-0 w-[60%] h-[60%]"
            style={{
              background: 'radial-gradient(ellipse at 20% 80%, rgba(224, 123, 42, 0.08) 0%, transparent 50%)',
            }}
          />
          
          {/* Grid texture - masked */}
          <div className="absolute inset-0 grid-overlay" />
        </div>

        {/* Content - anchored bottom-left */}
        <div className="relative z-10 h-screen min-h-[700px] flex flex-col justify-end px-6 lg:px-16 pb-16 lg:pb-20">
          <div className="max-w-4xl">
            {/* Eyebrow label */}
            <div ref={eyebrowRef} className="eyebrow mb-6 opacity-0">
              White River Junction, Vermont · Est. Since Day One
            </div>

            {/* Main headline - "OG" outlined, "AUTO MOTIVE" solid */}
            <h1 
              ref={titleRef}
              className="text-[clamp(4rem,12vw,10rem)] leading-[0.85] mb-8"
            >
              <span className="word-wrapper">
                <span 
                  className="word-inner font-[family-name:var(--font-bebas)]"
                  style={{
                    WebkitTextStroke: '1px rgba(255,255,255,0.9)',
                    WebkitTextFillColor: 'transparent',
                    color: 'transparent',
                  }}
                >
                  OG
                </span>
              </span>{' '}
              <span className="word-wrapper">
                <span className="word-inner font-[family-name:var(--font-bebas)] text-white">
                  AUTO
                </span>
              </span>
              <br />
              <span className="word-wrapper">
                <span className="word-inner font-[family-name:var(--font-bebas)] text-white">
                  MOTIVE
                </span>
              </span>
            </h1>

            {/* Description */}
            <p 
              ref={descRef}
              className="font-[family-name:var(--font-barlow)] font-light text-[#8b8680] text-base lg:text-lg max-w-[360px] mb-10 opacity-0"
            >
              Full-service auto repair in the Upper Valley. Honest work, fair prices, no surprises.
            </p>

            {/* CTA Row */}
            <div ref={ctaRef} className="flex flex-wrap items-center gap-6 opacity-0">
              <Link href="/contact" className="btn-primary no-rounded">
                <span>Book a Service</span>
              </Link>
              
              <Link href="/services" className="btn-ghost">
                <span>Our Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Scroll hint - bottom right */}
          <div 
            ref={scrollHintRef}
            className="absolute bottom-16 right-6 lg:right-16 flex flex-col items-center gap-3 opacity-0"
          >
            <span className="font-[family-name:var(--font-barlow-condensed)] text-[0.65rem] tracking-[0.3em] text-[#8b8680] uppercase rotate-90 origin-center translate-x-4">
              Scroll
            </span>
            <div className="w-px h-12 bg-[#e07b2a] scroll-hint-line mt-4" />
          </div>
        </div>
      </section>

      {/* Marquee Ticker - between Hero and About */}
      <MarqueeTicker />
    </>
  );
}
