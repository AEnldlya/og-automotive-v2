'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroShader = dynamic(() => import('./HeroShader'), { ssr: false });

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // PHASE 1: Page load — only show eyebrow + scroll hint
    // Everything else starts hidden
    gsap.set('.hero-title', { opacity: 0, y: 40 });
    gsap.set('.hero-description', { opacity: 0, y: 30 });
    gsap.set('.hero-cta', { opacity: 0, y: 20 });

    // Small delay then show eyebrow
    const loadTl = gsap.timeline({ delay: 0.3 });
    loadTl.fromTo('.eyebrow', { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
    loadTl.fromTo('.scroll-hint', { opacity: 0 }, { opacity: 0.6, duration: 0.5, ease: 'power2.out' }, 0.6);

    // PHASE 2: Pinned scroll sequence
    // Longer pin distance + higher scrub = butter smooth
    if (sectionRef.current) {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: '+=100%', // Full viewport height of scroll distance while pinned
          pin: true,
          scrub: 2, // Higher = smoother interpolation (2 seconds of easing)
          anticipatePin: 1,
        },
      });

      // 0.0 - 0.2: Video fades out smoothly
      scrollTl.to('.hero-video', { opacity: 0, duration: 0.25, ease: 'power2.inOut' }, 0);
      scrollTl.to('.hero-video-overlay', { opacity: 0, duration: 0.25, ease: 'power2.inOut' }, 0);

      // 0.1 - 0.3: Shader fades in underneath
      scrollTl.to('.shader-layer', { opacity: 0.6, duration: 0.3, ease: 'power2.inOut' }, 0.1);

      // 0.2 - 0.4: Scroll hint fades out
      scrollTl.to('.scroll-hint', { opacity: 0, duration: 0.15, ease: 'power2.out' }, 0.2);

      // 0.3 - 0.5: Title reveals (smooth slide up + fade in)
      scrollTl.to('.hero-title', { opacity: 1, y: 0, duration: 0.3, ease: 'power3.out' }, 0.3);

      // 0.45 - 0.65: Description fades in
      scrollTl.to('.hero-description', { opacity: 1, y: 0, duration: 0.25, ease: 'power3.out' }, 0.45);

      // 0.55 - 0.75: CTA buttons fade in
      scrollTl.to('.hero-cta', { opacity: 1, y: 0, duration: 0.25, ease: 'power3.out', stagger: 0.05 }, 0.55);

      // 0.75 - 1.0: Everything holds, then releases pin
    }

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full h-screen min-h-[700px] bg-black"
    >
      {/* Layer 1: Video — visible on load, fades on scroll */}
      <video
        src="/engine-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="hero-video absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="hero-video-overlay absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/70" />

      {/* Layer 2: Shader — hidden on load, revealed by scroll */}
      <div className="shader-layer absolute inset-0 opacity-0">
        <HeroShader />
      </div>

      {/* Radial glows */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-[0.12] blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1565c0 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.06] blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c62828 0%, transparent 60%)' }}
      />

      {/* Grid texture */}
      <svg className="absolute inset-0 w-full h-full opacity-15 pointer-events-none">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-16 lg:pb-20 px-8 lg:px-16 max-w-7xl mx-auto w-full">
        {/* Eyebrow — visible on load */}
        <div className="eyebrow flex items-center gap-3 mb-6 lg:mb-8">
          <div className="w-10 h-[2px] bg-amber" />
          <span className="text-xs lg:text-sm font-barlow-condensed font-600 tracking-widest text-amber uppercase">
            White River Junction, Vermont
          </span>
        </div>

        {/* Title — hidden on load, revealed by scroll */}
        <div className="hero-title mb-4 lg:mb-6">
          <h1 className="font-bebas mb-0" style={{ fontSize: 'clamp(4.5rem, 12vw, 11rem)', lineHeight: 0.92 }}>
            <div style={{ display: 'block' }}>
              <span
                style={{
                  WebkitTextFillColor: 'transparent',
                  WebkitTextStroke: '2px rgba(245, 245, 245, 0.8)',
                }}
              >
                O. G.
              </span>
            </div>
            <div style={{ display: 'block' }}>
              <span style={{ color: '#f5f5f5' }}>AUTO</span>
            </div>
          </h1>
        </div>

        {/* Description — hidden on load, revealed after title */}
        <div className="hero-description max-w-sm mb-6 lg:mb-8">
          <p className="text-sm lg:text-base text-muted leading-relaxed">
            Real mechanics. Real work. We fix cars — all makes, all models, all year round.
          </p>
        </div>

        {/* CTA Row — hidden on load, revealed last */}
        <div className="flex flex-row items-center gap-4 lg:gap-6 mb-8 flex-wrap">
          <Link href="/contact" className="hero-cta btn-primary inline-flex items-center justify-center h-12">
            Book a Service
          </Link>
          <Link href="/services" className="hero-cta btn-ghost inline-flex items-center justify-center h-12">
            Our Services
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Scroll hint — visible on load, fades on scroll */}
        <div className="absolute bottom-6 lg:bottom-12 right-8 lg:right-16 flex flex-col items-center gap-2">
          <span className="scroll-hint text-xs font-barlow-condensed font-600 tracking-widest text-amber uppercase">
            Scroll
          </span>
          <div className="scroll-hint w-[1px] h-6 bg-amber" />
        </div>
      </div>
    </section>
  );
}
