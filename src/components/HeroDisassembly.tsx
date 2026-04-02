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

// Better looking car SVG with proper proportions
const CarDisassembly = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      // Hood flies up
      gsap.to('.car-hood', {
        y: -120,
        rotation: -20,
        opacity: 0.5,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
      });

      // Engine lifts out
      gsap.to('.car-engine', {
        y: -200,
        rotation: 10,
        scale: 0.85,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
      });

      // Front wheel rolls away
      gsap.to('.car-wheel-front', {
        x: 150,
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
        x: -150,
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
        x: -60,
        rotationY: -35,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
      });

      // Right door opens
      gsap.to('.car-door-right', {
        x: 60,
        rotationY: 35,
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'center center',
          scrub: 1,
        },
      });

      // Trunk opens
      gsap.to('.car-trunk', {
        y: -80,
        rotation: 15,
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
    <div ref={containerRef} className="relative w-full h-[400px] md:h-[500px] mt-8">
      {/* Car silhouette - side view */}
      <div className="car-body absolute inset-0 flex items-end justify-center pb-8">
        <svg viewBox="0 0 800 300" className="w-full max-w-4xl h-auto" preserveAspectRatio="xMidYMax meet">
          {/* Main car body - sedan profile */}
          <path
            d="M50 200 
               Q50 180 70 170
               L120 165
               L150 120
               Q170 90 220 85
               L350 80
               Q450 78 520 85
               L580 95
               Q640 105 680 130
               L720 160
               Q750 175 750 200
               L750 230
               Q750 250 720 250
               L600 250
               Q580 250 580 230
               L580 210
               Q580 190 600 190
               L680 190
               Q700 190 700 210
               L700 230
               Q700 250 680 250
               L220 250
               Q200 250 200 230
               L200 210
               Q200 190 220 190
               L300 190
               Q320 190 320 210
               L320 230
               Q320 250 300 250
               L80 250
               Q50 250 50 230
               Z"
            fill="#1e1e2e"
            stroke={LOGO_BLUE}
            strokeWidth="2"
          />
          
          {/* Windows */}
          <path
            d="M160 130 L220 90 L340 86 L480 88 L560 100 L600 130 L580 155 L180 155 Z"
            fill="#0a0a15"
            stroke={LOGO_BLUE}
            strokeWidth="1"
            opacity="0.9"
          />
          
          {/* Window divider */}
          <line x1="360" y1="87" x2="360" y2="155" stroke={LOGO_BLUE} strokeWidth="2" />
          
          {/* Door lines */}
          <line x1="220" y1="165" x2="220" y2="240" stroke="#2a2a3e" strokeWidth="1" />
          <line x1="500" y1="160" x2="500" y2="240" stroke="#2a2a3e" strokeWidth="1" />
          
          {/* Door handles */}
          <rect x="230" y="175" width="30" height="6" fill={LOGO_BLUE} rx="2" />
          <rect x="510" y="172" width="30" height="6" fill={LOGO_BLUE} rx="2" />
          
          {/* Headlight */}
          <path d="M55 190 Q75 185 85 200 Q75 210 55 205 Z" fill={LOGO_BLUE} opacity="0.7" />
          
          {/* Taillight */}
          <path d="M740 185 Q755 180 748 205 Q735 200 740 185 Z" fill={LOGO_RED} opacity="0.8" />
          
          {/* Side trim line */}
          <line x1="60" y1="200" x2="740" y2="195" stroke={LOGO_BLUE} strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      {/* Hood - separate element */}
      <div className="car-hood absolute bottom-20 left-[5%] md:left-[10%] w-[35%] origin-bottom">
        <svg viewBox="0 0 300 100" className="w-full">
          <path
            d="M10 80 
               Q15 40 50 20
               L150 15
               L280 25
               L290 60
               L280 85
               L20 90
               Z"
            fill="#252540"
            stroke={LOGO_BLUE}
            strokeWidth="2"
          />
        </svg>
      </div>

      {/* Engine */}
      <div className="car-engine absolute bottom-24 left-[30%] md:left-[35%] w-[25%]">
        <svg viewBox="0 0 200 160" className="w-full">
          {/* Engine block */}
          <rect x="20" y="20" width="160" height="120" fill="#3a3a5c" stroke={LOGO_BLUE} strokeWidth="3" rx="10" />
          {/* Cylinder heads */}
          <circle cx="55" cy="55" r="20" fill="#1a1a2e" stroke="#5a5a7c" strokeWidth="2" />
          <circle cx="100" cy="55" r="20" fill="#1a1a2e" stroke="#5a5a7c" strokeWidth="2" />
          <circle cx="145" cy="55" r="20" fill="#1a1a2e" stroke="#5a5a7c" strokeWidth="2" />
          <circle cx="55" cy="105" r="20" fill="#1a1a2e" stroke="#5a5a7c" strokeWidth="2" />
          <circle cx="100" cy="105" r="20" fill="#1a1a2e" stroke="#5a5a7c" strokeWidth="2" />
          <circle cx="145" cy="105" r="20" fill="#1a1a2e" stroke="#5a5a7c" strokeWidth="2" />
          {/* Center detail */}
          <rect x="80" y="70" width="40" height="20" fill={LOGO_RED} rx="4" />
          {/* Oil cap */}
          <circle cx="165" cy="35" r="10" fill={LOGO_BLUE} />
        </svg>
      </div>

      {/* Front Wheel */}
      <div className="car-wheel-front absolute bottom-6 left-[22%] md:left-[25%]">
        <svg viewBox="0 0 100 100" className="w-20 md:w-24">
          <circle cx="50" cy="50" r="45" fill="#1a1a2e" stroke={LOGO_BLUE} strokeWidth="3" />
          <circle cx="50" cy="50" r="32" fill="#0f172a" stroke="#3a3a5c" strokeWidth="2" />
          <circle cx="50" cy="50" r="12" fill={LOGO_BLUE} />
          {/* Spokes */}
          <path d="M50 18 L50 82 M18 50 L82 50 M26 26 L74 74 M26 74 L74 26" stroke="#3a3a5c" strokeWidth="3" strokeLinecap="round" />
          {/* Rim detail */}
          <circle cx="50" cy="50" r="38" fill="none" stroke={LOGO_BLUE} strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      {/* Rear Wheel */}
      <div className="car-wheel-rear absolute bottom-6 right-[22%] md:right-[25%]">
        <svg viewBox="0 0 100 100" className="w-20 md:w-24">
          <circle cx="50" cy="50" r="45" fill="#1a1a2e" stroke={LOGO_BLUE} strokeWidth="3" />
          <circle cx="50" cy="50" r="32" fill="#0f172a" stroke="#3a3a5c" strokeWidth="2" />
          <circle cx="50" cy="50" r="12" fill={LOGO_BLUE} />
          {/* Spokes */}
          <path d="M50 18 L50 82 M18 50 L82 50 M26 26 L74 74 M26 74 L74 26" stroke="#3a3a5c" strokeWidth="3" strokeLinecap="round" />
          {/* Rim detail */}
          <circle cx="50" cy="50" r="38" fill="none" stroke={LOGO_BLUE} strokeWidth="1" opacity="0.5" />
        </svg>
      </div>

      {/* Left Door */}
      <div className="car-door-left absolute bottom-16 left-[28%] origin-left w-[18%]">
        <svg viewBox="0 0 140 200" className="w-full">
          <path
            d="M10 10 L130 8 L128 180 L12 182 Z"
            fill="#252540"
            stroke={LOGO_BLUE}
            strokeWidth="2"
          />
          {/* Window */}
          <path
            d="M15 15 L125 13 L123 70 L17 72 Z"
            fill="#0a0a15"
            stroke="#3a3a5c"
            strokeWidth="1"
          />
          {/* Door handle */}
          <rect x="95" y="85" width="22" height="7" fill={LOGO_BLUE} rx="2" />
          {/* Side mirror */}
          <ellipse cx="125" cy="50" rx="8" ry="12" fill="#1a1a2e" stroke={LOGO_BLUE} strokeWidth="1" />
        </svg>
      </div>

      {/* Right Door */}
      <div className="car-door-right absolute bottom-16 right-[28%] origin-right w-[18%]">
        <svg viewBox="0 0 140 200" className="w-full">
          <path
            d="M10 8 L130 10 L128 182 L12 180 Z"
            fill="#252540"
            stroke={LOGO_BLUE}
            strokeWidth="2"
          />
          {/* Window */}
          <path
            d="M15 13 L125 15 L123 72 L17 70 Z"
            fill="#0a0a15"
            stroke="#3a3a5c"
            strokeWidth="1"
          />
          {/* Door handle */}
          <rect x="23" y="85" width="22" height="7" fill={LOGO_BLUE} rx="2" />
        </svg>
      </div>

      {/* Trunk */}
      <div className="car-trunk absolute bottom-24 right-[5%] w-[20%] origin-top-right">
        <svg viewBox="0 0 180 120" className="w-full">
          <path
            d="M10 40 L170 30 L175 80 L15 100 Z"
            fill="#252540"
            stroke={LOGO_BLUE}
            strokeWidth="2"
          />
          {/* Trunk line detail */}
          <line x1="30" y1="55" x2="160" y2="48" stroke="#3a3a5c" strokeWidth="1" />
          {/* License plate area */}
          <rect x="120" y="65" width="40" height="15" fill="#1a1a2e" stroke="#3a3a5c" strokeWidth="1" rx="2" />
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
      
      <section ref={containerRef} className="relative min-h-[180vh] w-full bg-[#0a0a0f]">
        {/* Fixed hero content */}
        <motion.div 
          style={{ opacity }}
          className="sticky top-0 min-h-screen w-full flex flex-col items-center justify-start pt-24 pb-8 overflow-hidden"
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
              className="mb-4 flex justify-center"
            >
              <Image
                src="/logo.jpg"
                alt="O.G. Automotive"
                width={280}
                height={120}
                className="w-40 md:w-56 h-auto"
                priority
              />
            </motion.div>

            {/* Main headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.9] mb-4"
              style={{ fontFamily: 'var(--font-tanker)' }}
            >
              <span className="text-[#0066CC]">WE FIX</span>
              <span className="text-white"> </span>
              <span className="text-[#CC0000]">EVERYTHING</span>
            </motion.h1>

            {/* Subhead */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-[#8b9db8] text-base md:text-lg max-w-2xl mx-auto mb-6"
              style={{ fontFamily: 'var(--font-general-sans)' }}
            >
              ASE certified technicians. All makes and models. Honest work, fair prices.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap justify-center gap-4 mb-4"
            >
              <MagneticButton href="tel:8024782224" variant="primary">
                (802) 478-2224
              </MagneticButton>
              <MagneticButton href="/services" variant="secondary">
                Services
              </MagneticButton>
            </motion.div>

            {/* Scroll hint */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-[#8b9db8] text-xs tracking-widest uppercase"
            >
              Scroll to see how we work
            </motion.p>
          </div>

          {/* Car disassembly animation - with proper spacing */}
          <div className="relative z-10 w-full max-w-5xl mx-auto px-4 flex-1 flex items-end">
            <CarDisassembly />
          </div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
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
