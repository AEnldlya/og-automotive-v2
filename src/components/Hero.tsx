'use client';

import Link from 'next/link';
import dynamic from 'next/dynamic';
import { useEffect } from 'react';
import gsap from 'gsap';
import TextScramble from './TextScramble';

// Hero3DCarousel removed for performance
const HeroShader = dynamic(() => import('./HeroShader'), { ssr: false });

export default function Hero() {
  useEffect(() => {
    // Page load animation sequence
    const tl = gsap.timeline();

    // 1. Eyebrow fade in
    tl.fromTo(
      '.eyebrow',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' },
      0.2
    );

    // 2. Title words clip reveal (stagger)
    const words = gsap.utils.toArray<HTMLElement>('.word-wrapper');
    tl.fromTo(
      words,
      { y: '110%' },
      { y: '0%', duration: 1.1, ease: 'expo.out', stagger: 0.08 },
      0.2
    );

    // 3. Description fade in (overlaps with title)
    tl.fromTo(
      '.hero-description',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' },
      0.8
    );

    // 4. CTA buttons fade in
    tl.fromTo(
      '.hero-cta',
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 },
      1.2
    );

    // 5. Scroll hint fade in
    tl.fromTo(
      '.scroll-hint',
      { opacity: 0 },
      { opacity: 1, duration: 0.6, ease: 'power2.out' },
      1.7
    );
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-screen min-h-[700px] overflow-hidden bg-black"
    >
      {/* Background gradients */}
      <div className="absolute inset-0">
        {/* Base dark background */}
        <div className="absolute inset-0 bg-black" />

        {/* Engine video background */}
        <video
          src="/engine-video.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />

        {/* Hero Shader */}
        <HeroShader />

        {/* 3D Photo Carousel */}
        {/* Removed 3D carousel for performance */}

        {/* Radial glow - rust at upper right */}
        <div
          className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-[0.18] blur-[120px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #1565c0 0%, transparent 70%)',
          }}
        />

        {/* Subtle amber warmth at lower left */}
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-[100px] pointer-events-none"
          style={{
            background: 'radial-gradient(circle, #c62828 0%, transparent 60%)',
          }}
        />

        {/* Grid texture overlay */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          style={{
            background: 'radial-gradient(circle at center, transparent 0%, rgba(0,0,0,0.8) 100%)',
          }}
        >
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end pb-24 px-8 lg:px-16 max-w-7xl mx-auto w-full">
        {/* Eyebrow label */}
        <div className="eyebrow flex items-center gap-3 mb-8 lg:mb-12">
          <div className="w-10 h-[2px] bg-amber" />
          <TextScramble className="text-xs lg:text-sm font-barlow-condensed font-600 tracking-widest text-amber uppercase">
            White River Junction, Vermont · Est. Since Day One
          </TextScramble>
        </div>

        {/* Main headline with clip reveal */}
        <div className="mb-6 lg:mb-8">
          <h1 className="font-bebas mb-0" style={{ fontSize: 'clamp(5rem, 14vw, 13rem)', lineHeight: 1 }}>
            {/* OG - outlined/stroked */}
            <div className="word-wrapper inline-block overflow-hidden" style={{ lineHeight: 1.15, marginBottom: '-0.08em' }}>
              <span
                style={{
                  WebkitTextFillColor: 'transparent',
                  WebkitTextStroke: '2px rgba(245, 240, 232, 0.8)',
                  display: 'inline-block',
                  lineHeight: 'inherit',
                }}
              >
                OG
              </span>
            </div>
            <br />
            {/* AUTOMOTIVE - split into AUTO and MOTIVE for layout */}
            <div className="word-wrapper inline-block overflow-hidden" style={{ lineHeight: 1.15, marginBottom: '-0.08em' }}>
              <span className="inline-block" style={{ color: '#f5f0e8', lineHeight: 'inherit' }}>AUTO</span>
            </div>
            <br />
            <div className="word-wrapper inline-block overflow-hidden" style={{ lineHeight: 1.15 }}>
              <span className="inline-block" style={{ color: '#f5f0e8', lineHeight: 'inherit' }}>MOTIVE</span>
            </div>
          </h1>
        </div>

        {/* Description */}
        <div className="hero-description max-w-sm mb-8 lg:mb-12">
          <p className="text-sm lg:text-base text-muted leading-relaxed">
            Real mechanics. Real work. We fix cars — all makes, all models, all year round.
          </p>
        </div>

        {/* CTA Row */}
        <div className="flex flex-col lg:flex-row items-start gap-4 lg:gap-6 mb-16 lg:mb-24">
          <Link href="/contact" className="hero-cta btn-primary">
            Book a Service
          </Link>
          <Link href="/services" className="hero-cta btn-ghost">
            Our Services
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Scroll hint - bottom right */}
        <div className="absolute bottom-8 lg:bottom-16 right-8 lg:right-16 flex flex-col items-center gap-2">
          <span className="scroll-hint text-xs font-barlow-condensed font-600 tracking-widest text-amber uppercase">
            Scroll
          </span>
          <div className="scroll-hint w-[1px] h-6 bg-amber" />
        </div>
      </div>
    </section>
  );
}
