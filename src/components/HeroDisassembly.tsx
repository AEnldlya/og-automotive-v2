'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// Logo colors from the actual logo
const LOGO_BLUE = '#0066CC';
const LOGO_RED = '#CC0000';

// Car parts for disassembly animation
const CarDisassembly = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Hood flies up
      gsap.to('.car-hood', {
        y: -150,
        rotation: -25,
        opacity: 0.4,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
      });

      // Engine lifts out and rotates
      gsap.to('.car-engine', {
        y: -250,
        rotation: 15,
        scale: 0.9,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
      });

      // Front wheel rolls away
      gsap.to('.car-wheel-front', {
        x: 180,
        rotation: 360,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
      });

      // Rear wheel rolls away
      gsap.to('.car-wheel-rear', {
        x: -180,
        rotation: -360,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
      });

      // Left door opens
      gsap.to('.car-door-left', {
        x: -80,
        rotationY: -40,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
      });

      // Right door opens
      gsap.to('.car-door-right', {
        x: 80,
        rotationY: 40,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
      });

      // Trunk opens
      gsap.to('.car-trunk', {
        y: -100,
        rotation: 20,
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
    <div ref={containerRef} className="relative w-full h-[500px] md:h-[600px] perspective-[1200px]">
      {/* Car Body - Sedan style */}
      <div className="car-body absolute inset-0 flex items-center justify-center">
        <svg viewBox="0 0 700 300" className="w-full max-w-3xl">
          {/* Main body shape */}
          <path
            d="M80 220 L100 140 L180 100 L320 90 L480 95 L580 130 L620 180 L620 230 L580 250 L120 250 L80 230 Z"
            fill="#1a1a2e"
            stroke={LOGO_BLUE}
            strokeWidth="2"
          />
          {/* Windshield */}
          <path
            d="M180 100 L320 90 L480 95 L460 140 L200 140 Z"
            fill="#0f172a"
            stroke={LOGO_BLUE}
            strokeWidth="1"
            opacity="0.8"
          />
          {/* Side windows */}
          <path
            d="M210 145 L330 140 L450 142 L440 180 L220 180 Z"
            fill="#0f172a"
            stroke={LOGO_BLUE}
            strokeWidth="1"
            opacity="0.8"
          />
          {/* Headlight */}
          <ellipse cx="100" cy="180" rx="25" ry="15" fill={LOGO_BLUE} opacity="0.6" />
          {/* Taillight */}
          <ellipse cx="600" cy="180" rx="15" ry="12" fill={LOGO_RED} opacity="0.8" />
          {/* Grill */}
          <rect x="85" y="190" width="30" height="40" fill="#1a1a2e" stroke={LOGO_BLUE} strokeWidth="1" />
          <line x1="90" y1="200" x2="110" y2="200" stroke={LOGO_BLUE} strokeWidth="1" />
          <line x1="90" y1="210" x2="110" y2="210" stroke={LOGO_BLUE} strokeWidth="1" />
          <line x1="90" y1="220" x2="110" y2="220" stroke={LOGO_BLUE} strokeWidth="1" />
        </svg>
      </div>

      {/* Hood */}
      <div className="car-hood absolute inset-0 flex items-center justify-center origin-bottom pt-4">
        <svg viewBox="0 0 700 300" className="w-full max-w-3xl">
          <path
            d="M100 140 L180 100 L320 90 L480 95 L580 130 L580 145 L480 140 L180 145 L100 155 Z"
            fill="#252540"
            stroke={LOGO_BLUE}
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Engine */}
      <div className="car-engine absolute inset-0 flex items-center justify-center pt-12">
        <svg viewBox="0 0 180 140" className="w-40 md:w-48">
          {/* Engine block */}
          <rect x="10" y="10" width="160" height="120" fill="#3a3a5c" stroke={LOGO_BLUE} strokeWidth="2" rx="8" />
          {/* Cylinders */}
          <circle cx="45" cy="45" r="18" fill="#1a1a2e" stroke="#5a5a7c" strokeWidth="2" />
          <circle cx="90" cy="45" r="18" fill="#1a1a2e" stroke="#5a5a7c" strokeWidth="2" />
          <circle cx="135" cy="45" r="18" fill="#1a1a2e" stroke="#5a5a7c" strokeWidth="2" />
          <circle cx="45" cy="95" r="18" fill="#1a1a2e" stroke="#5a5a7c" strokeWidth="2" />
          <circle cx="90" cy="95" r="18" fill="#1a1a2e" stroke="#5a5a7c" strokeWidth="2" />
          <circle cx="135" cy="95" r="18" fill="#1a1a2e" stroke="#5a5a7c" strokeWidth="2" />
          {/* Center cap */}
          <rect x="70" y="60" width="40" height="20" fill={LOGO_RED} rx="4" />
          {/* Oil cap */}
          <circle cx="150" cy="25" r="8" fill={LOGO_BLUE} />
        </svg>
      </div>

      {/* Front Wheel */}
      <div className="car-wheel-front absolute bottom-16 left-[18%] md:left-[22%]">
        <svg viewBox="0 0 100 100" className="w-20 md:w-28">
          <circle cx="50" cy="50" r="45" fill="#1a1a2e" stroke={LOGO_BLUE} strokeWidth="3" />
          <circle cx="50" cy="50" r="32" fill="#0f172a" stroke="#3a3a5c" strokeWidth="2" />
          <circle cx="50" cy="50" r="12" fill={LOGO_BLUE} />
          {/* Spokes */}
          <path d="M50 18 L50 82 M18 50 L82 50 M28 28 L72 72 M28 72 L72 28" stroke="#3a3a5c" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      {/* Rear Wheel */}
      <div className="car-wheel-rear absolute bottom-16 right-[18%] md:right-[22%]">
        <svg viewBox="0 0 100 100" className="w-20 md:w-28">
          <circle cx="50" cy="50" r="45" fill="#1a1a2e" stroke={LOGO_BLUE} strokeWidth="3" />
          <circle cx="50" cy="50" r="32" fill="#0f172a" stroke="#3a3a5c" strokeWidth="2" />
          <circle cx="50" cy="50" r="12" fill={LOGO_BLUE} />
          {/* Spokes */}
          <path d="M50 18 L50 82 M18 50 L82 50 M28 28 L72 72 M28 72 L72 28" stroke="#3a3a5c" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </div>

      {/* Left Door */}
      <div className="car-door-left absolute top-[30%] left-[28%] origin-left">
        <svg viewBox="0 0 160 220" className="w-28 md:w-36">
          <path
            d="M10 10 L150 10 L140 200 L20 200 Z"
            fill="#252540"
            stroke={LOGO_BLUE}
            strokeWidth="2"
          />
          {/* Window */}
          <path
            d="M20 20 L140 20 L135 80 L25 80 Z"
            fill="#0f172a"
            stroke="#3a3a5c"
            strokeWidth="1"
          />
          {/* Door handle */}
          <rect x="110" y="100" width="25" height="8" fill={LOGO_BLUE} rx="2" />
        </svg>
      </div>

      {/* Right Door */}
      <div className="car-door-right absolute top-[30%] right-[28%] origin-right">
        <svg viewBox="0 0 160 220" className="w-28 md:w-36">
          <path
            d="M10 10 L150 10 L140 200 L20 200 Z"
            fill="#252540"
            stroke={LOGO_BLUE}
            strokeWidth="2"
          />
          {/* Window */}
          <path
            d="M20 20 L140 20 L135 80 L25 80 Z"
            fill="#0f172a"
            stroke="#3a3a5c"
            strokeWidth="1"
          />
          {/* Door handle */}
          <rect x="25" y="100" width="25" height="8" fill={LOGO_BLUE} rx="2" />
        </svg>
      </div>

      {/* Trunk */}
      <div className="car-trunk absolute top-[20%] right-[8%] origin-top">
        <svg viewBox="0 0 200 150" className="w-32 md:w-40">
          <path
            d="M20 50 L180 40 L190 100 L30 120 Z"
            fill="#252540"
            stroke={LOGO_BLUE}
            strokeWidth="2"
          />
          {/* Trunk line */}
          <line x1="40" y1="70" x2="170" y2="65" stroke="#3a3a5c" strokeWidth="1" />
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
            ? 'bg-[#CC0000] text-white hover:bg-[#e60000]'
            : 'border-2 border-[#0066CC] text-white hover:border-[#CC0000]'
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
  return <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#0066CC] origin-left z-[200]" style={{ scaleX }} />;
};

export default function HeroDisassembly() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <ScrollProgress />
      
      <section ref={containerRef} className="relative min-h-[200vh] w-full bg-[#0a0a0f]">
        {/* Fixed hero content */}
        <motion.div 
          style={{ opacity }}
          className="sticky top-0 h-screen w-full flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background effects */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0f1420] to-[#0a0a0f]" />
            
            {/* Floating particles - logo colors */}
            {[...Array(20)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  width: Math.random() * 4 + 2,
                  height: Math.random() * 4 + 2,
                  background: i % 2 === 0 ? 'rgba(0, 102, 204, 0.5)' : 'rgba(204, 0, 0, 0.4)',
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
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 flex justify-center"
            >
              <Image
                src="/logo.jpg"
                alt="O.G. Automotive"
                width={300}
                height={150}
                className="w-48 md:w-64 h-auto"
                priority
              />
            </motion.div>

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-8"
            >
              <span className="text-[#8b9db8] text-sm tracking-[0.3em] uppercase">Scroll to see how we work</span>
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.85] mb-6"
              style={{ fontFamily: 'var(--font-tanker)' }}
            >
              <span className="text-[#0066CC]">WE FIX</span>
              <br />
              <span className="text-[#CC0000]">EVERYTHING</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#8b9db8] text-lg md:text-xl max-w-2xl mx-auto mb-10"
              style={{ fontFamily: 'var(--font-general-sans)' }}
            >
              From engines to transmissions, our ASE certified technicians diagnose and repair all makes and models.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <MagneticButton href="tel:8024782224" variant="primary">
                Call (802) 478-2224
              </MagneticButton>
              <MagneticButton href="/services" variant="secondary">
                Our Services
              </MagneticButton>
            </motion.div>
          </div>

          {/* Car disassembly animation */}
          <div className="relative z-10 w-full mt-8 px-4">
            <CarDisassembly />
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-[#8b9db8] text-xs tracking-widest uppercase">Scroll</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-5 h-8 border-2 border-[#0066CC] rounded-full flex justify-center pt-1"
            >
              <motion.div className="w-1 h-2 bg-[#0066CC] rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
