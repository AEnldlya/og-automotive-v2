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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Page load animation
    const tl = gsap.timeline();

    tl.fromTo('.eyebrow', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.7, ease: 'power3.out' }, 0.2);

    const lines = gsap.utils.toArray<HTMLElement>('.hero-line');
    lines.forEach((line, i) => {
      tl.fromTo(
        line,
        { clipPath: 'inset(100% 0 0 0)' },
        { clipPath: 'inset(0% 0 0 0)', duration: 1, ease: 'expo.out' },
        0.2 + i * 0.1
      );
    });

    tl.fromTo('.hero-description', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.8);
    tl.fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', stagger: 0.1 }, 1.0);
    tl.fromTo('.scroll-hint', { opacity: 0 }, { opacity: 1, duration: 0.6, ease: 'power2.out' }, 1.4);

    // PINNED SCROLL: Hero stays pinned while video fades out and shader fades in.
    // The page doesn't move until the transition is complete.
    if (sectionRef.current) {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          // Pin for 50vh of scroll distance — user scrolls but hero stays put
          end: '+=50%',
          pin: true,
          scrub: 0.5,
        },
      });

      // Video fades out
      scrollTl.to('.hero-video', { opacity: 0, duration: 0.6 }, 0);
      // Video overlay fades out
      scrollTl.to('.hero-video-overlay', { opacity: 0, duration: 0.6 }, 0);
      // Shader fades in
      scrollTl.to('.shader-layer', { opacity: 0.7, duration: 0.6 }, 0.1);
      // Content fades slightly for transition feel
      scrollTl.to('.hero-content', { y: -20, duration: 0.4 }, 0.3);
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
      {/* Layer 1: Video — fades out while pinned */}
      <video
        ref={videoRef}
        src="/engine-video.mp4"
        autoPlay
        muted
        loop
        playsInline
        className="hero-video absolute inset-0 w-full h-full object-cover opacity-30"
      />
      <div className="hero-video-overlay absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80" />

      {/* Layer 2: Shader — starts hidden, fades in during pin */}
      <div className="shader-layer absolute inset-0 opacity-0">
        <HeroShader />
      </div>

      {/* Radial glows */}
      <div
        className="absolute top-0 right-0 w-[800px] h-[800px] rounded-full opacity-[0.15] blur-[120px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #1565c0 0%, transparent 70%)' }}
      />
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-[0.08] blur-[100px] pointer-events-none"
        style={{ background: 'radial-gradient(circle, #c62828 0%, transparent 60%)' }}
      />

      {/* Grid texture */}
      <svg className="absolute inset-0 w-full h-full opacity-20 pointer-events-none">
        <defs>
          <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="1" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Content — positioned lower so OG is where AUTO used to be */}
      <div className="hero-content relative z-10 h-full flex flex-col justify-end pb-16 lg:pb-20 px-8 lg:px-16 max-w-7xl mx-auto w-full">
        {/* Eyebrow */}
        <div className="eyebrow flex items-center gap-3 mb-6 lg:mb-8">
          <div className="w-10 h-[2px] bg-amber" />
          <span className="text-xs lg:text-sm font-barlow-condensed font-600 tracking-widest text-amber uppercase">
            White River Junction, Vermont
          </span>
        </div>

        {/* Headline — shifted down, tighter to bottom */}
        <div className="mb-4 lg:mb-6">
          <h1 className="font-bebas mb-0" style={{ fontSize: 'clamp(4.5rem, 12vw, 11rem)', lineHeight: 0.92 }}>
            <div className="hero-line" style={{ display: 'block' }}>
              <span
                style={{
                  WebkitTextFillColor: 'transparent',
                  WebkitTextStroke: '2px rgba(245, 245, 245, 0.8)',
                }}
              >
                O. G.
              </span>
            </div>
            <div className="hero-line" style={{ display: 'block' }}>
              <span style={{ color: '#f5f5f5' }}>AUTO</span>
            </div>
          </h1>
        </div>

        {/* Description */}
        <div className="hero-description max-w-sm mb-6 lg:mb-8">
          <p className="text-sm lg:text-base text-muted leading-relaxed">
            Real mechanics. Real work. We fix cars — all makes, all models, all year round.
          </p>
        </div>

        {/* CTA Row — same height, horizontal */}
        <div className="flex flex-row items-center gap-4 lg:gap-6 mb-8">
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

        {/* Scroll hint */}
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
