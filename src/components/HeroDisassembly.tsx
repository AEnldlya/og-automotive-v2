'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Car parts for disassembly animation
const CarParts = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Hood flies up
      gsap.to('.car-hood', {
        y: -200,
        rotation: -30,
        opacity: 0.3,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
      });

      // Engine lifts out
      gsap.to('.car-engine', {
        y: -300,
        scale: 0.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
      });

      // Wheels roll away
      gsap.to('.car-wheel-front', {
        x: 200,
        rotation: 360,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
      });

      gsap.to('.car-wheel-rear', {
        x: -200,
        rotation: -360,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
      });

      // Doors open
      gsap.to('.car-door-left', {
        x: -100,
        rotationY: -45,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
      });

      gsap.to('.car-door-right', {
        x: 100,
        rotationY: 45,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[600px] md:h-[800px] perspective-[1000px]">
      {/* Car Body */}
      <div className="car-body absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 800 400" className="w-full max-w-4xl">
          {/* Main body */}
          <path
            d="M100 250 L150 150 L300 120 L500 120 L650 150 L700 250 L700 300 L100 300 Z"
            fill="#1e293b"
            stroke="#c41e3a"
            strokeWidth="2"
          />
          {/* Windows */}
          <path
            d="M170 160 L290 135 L480 135 L620 160 L600 200 L190 200 Z"
            fill="#0f172a"
            stroke="#334155"
            strokeWidth="1"
          />
        </svg>
      </div>

      {/* Hood */}
      <div className="car-hood absolute inset-0 flex items-center justify-center origin-bottom">
        <svg viewBox="0 0 800 400" className="w-full max-w-4xl">
          <path
            d="M300 120 L500 120 L650 150 L700 250 L500 250 L300 250 L150 150 Z"
            fill="#334155"
            stroke="#c41e3a"
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Engine */}
      <div className="car-engine absolute inset-0 flex items-center justify-center pt-20">
        <svg viewBox="0 0 200 200" className="w-48 md:w-64">
          <rect x="20" y="20" width="160" height="140" fill="#475569" stroke="#c41e3a" strokeWidth="3" rx="10" />
          <circle cx="60" cy="60" r="20" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="140" cy="60" r="20" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="60" cy="120" r="20" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="140" cy="120" r="20" fill="#1e293b" stroke="#94a3b8" strokeWidth="2" />
          <rect x="80" y="80" width="40" height="40" fill="#c41e3a" rx="5" />
        </svg>
      </div>

      {/* Front Wheel */}
      <div className="car-wheel-front absolute bottom-10 left-[15%] md:left-[20%]">
        <svg viewBox="0 0 100 100" className="w-24 md:w-32">
          <circle cx="50" cy="50" r="45" fill="#1e293b" stroke="#334155" strokeWidth="3" />
          <circle cx="50" cy="50" r="30" fill="#0f172a" stroke="#c41e3a" strokeWidth="2" />
          <circle cx="50" cy="50" r="10" fill="#475569" />
          <path d="M50 20 L50 80 M20 50 L80 50" stroke="#334155" strokeWidth="2" />
        </svg>
      </div>

      {/* Rear Wheel */}
      <div className="car-wheel-rear absolute bottom-10 right-[15%] md:right-[20%]">
        <svg viewBox="0 0 100 100" className="w-24 md:w-32">
          <circle cx="50" cy="50" r="45" fill="#1e293b" stroke="#334155" strokeWidth="3" />
          <circle cx="50" cy="50" r="30" fill="#0f172a" stroke="#c41e3a" strokeWidth="2" />
          <circle cx="50" cy="50" r="10" fill="#475569" />
          <path d="M50 20 L50 80 M20 50 L80 50" stroke="#334155" strokeWidth="2" />
        </svg>
      </div>

      {/* Left Door */}
      <div className="car-door-left absolute top-[25%] left-[25%] origin-left">
        <svg viewBox="0 0 200 300" className="w-32 md:w-48">
          <path
            d="M20 20 L180 20 L170 280 L30 280 Z"
            fill="#1e293b"
            stroke="#334155"
            strokeWidth="2"
          />
          <rect x="40" y="50" width="120" height="80" fill="#0f172a" stroke="#475569" strokeWidth="1" />
          <rect x="50" y="200" width="100" height="10" fill="#334155" rx="5" />
        </svg>
      </div>

      {/* Right Door */}
      <div className="car-door-right absolute top-[25%] right-[25%] origin-right">
        <svg viewBox="0 0 200 300" className="w-32 md:w-48">
          <path
            d="M20 20 L180 20 L170 280 L30 280 Z"
            fill="#1e293b"
            stroke="#334155"
            strokeWidth="2"
          />
          <rect x="40" y="50" width="120" height="80" fill="#0f172a" stroke="#475569" strokeWidth="1" />
          <rect x="50" y="200" width="100" height="10" fill="#334155" rx="5" />
        </svg>
      </div>
    </div>
  );
};

// Magnetic button
const MagneticButton = ({ children, href, variant = 'primary' }: { children: React.ReactNode; href: string; variant?: 'primary' | 'secondary' }) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useSpring(0, { stiffness: 150, damping: 15 });
  const y = useSpring(0, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div style={{ x, y }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="inline-block">
      <Link
        ref={ref}
        href={href}
        className={`relative inline-flex items-center justify-center px-8 py-4 font-semibold tracking-wider uppercase overflow-hidden group transition-all duration-300 ${
          variant === 'primary'
            ? 'bg-[#c41e3a] text-white hover:bg-[#e63950]'
            : 'border-2 border-[#1e3a5f] text-white hover:border-[#c41e3a]'
        }`}
      >
        <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <span className="relative z-10">{children}</span>
      </Link>
    </motion.div>
  );
};

// Scroll progress
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#c41e3a] origin-left z-[200]" style={{ scaleX }} />;
};

export default function HeroDisassembly() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);

  return (
    <>
      <ScrollProgress />
      
      <section ref={containerRef} className="relative min-h-[200vh] w-full bg-[#0a0f1a]">
        {/* Fixed hero content */}
        <motion.div 
          style={{ opacity }}
          className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#121929] to-[#0a0f1a]" />
            
            {/* Floating particles */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: Math.random() * 4 + 2,
                  height: Math.random() * 4 + 2,
                  background: i % 2 === 0 ? 'rgba(196, 30, 58, 0.4)' : 'rgba(30, 58, 95, 0.4)',
                }}
                animate={{
                  y: [0, -40, 0],
                  opacity: [0.2, 0.6, 0.2],
                }}
                transition={{
                  duration: Math.random() * 15 + 10,
                  repeat: Infinity,
                  delay: Math.random() * 5,
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6"
            >
              <span className="text-[#8b9db8] text-sm tracking-[0.3em] uppercase">Scroll to explore</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-6xl md:text-8xl lg:text-9xl font-bold leading-[0.85] mb-6"
              style={{ fontFamily: 'var(--font-tanker)' }}
            >
              <span className="text-white">WE FIX</span>
              <br />
              <span className="text-[#c41e3a]">EVERYTHING</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#8b9db8] text-lg md:text-xl max-w-2xl mx-auto mb-10"
              style={{ fontFamily: 'var(--font-general-sans)' }}
            >
              From engines to transmissions, our certified technicians diagnose and repair it all.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <MagneticButton href="/contact" variant="primary">
                Book Service
              </MagneticButton>
              <MagneticButton href="/services" variant="secondary">
                Our Services
              </MagneticButton>
            </motion.div>
          </div>

          {/* Car disassembly animation */}
          <motion.div style={{ y }} className="relative z-10 w-full mt-16">
            <CarParts />
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[#8b9db8] text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-8 border-2 border-[#c41e3a] rounded-full flex justify-center pt-1"
            >
              <motion.div className="w-1 h-2 bg-[#c41e3a] rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
