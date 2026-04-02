'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const LOGO_BLUE = '#0066CC';
const LOGO_RED = '#CC0000';

// Simple, clean car that looks like a real sedan
const CarDisassembly = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to('.part-hood', { y: -100, rotation: -25, opacity: 0.6, scrollTrigger: { trigger: containerRef.current, start: 'top 60%', end: 'center center', scrub: 1 }});
      gsap.to('.part-engine', { y: -180, rotation: 15, scrollTrigger: { trigger: containerRef.current, start: 'top 60%', end: 'center center', scrub: 1 }});
      gsap.to('.part-wheel-front', { x: 120, rotation: 360, scrollTrigger: { trigger: containerRef.current, start: 'top 60%', end: 'center center', scrub: 1 }});
      gsap.to('.part-wheel-rear', { x: -120, rotation: -360, scrollTrigger: { trigger: containerRef.current, start: 'top 60%', end: 'center center', scrub: 1 }});
      gsap.to('.part-door-left', { x: -50, rotationY: -30, scrollTrigger: { trigger: containerRef.current, start: 'top 60%', end: 'center center', scrub: 1 }});
      gsap.to('.part-door-right', { x: 50, rotationY: 30, scrollTrigger: { trigger: containerRef.current, start: 'top 60%', end: 'center center', scrub: 1 }});
      gsap.to('.part-trunk', { y: -60, rotation: 20, scrollTrigger: { trigger: containerRef.current, start: 'top 60%', end: 'center center', scrub: 1 }});
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full max-w-3xl mx-auto h-[350px] md:h-[400px]">
      {/* Car Body - Main silhouette */}
      <svg viewBox="0 0 700 280" className="absolute inset-0 w-full h-full">
        {/* Main body shape */}
        <path
          d="M60 200 
             C60 180, 80 160, 110 155
             L140 100
             C160 70, 200 60, 300 58
             L450 60
             C520 65, 580 85, 620 120
             L660 150
             C680 165, 685 185, 680 205
             L675 235
             C670 250, 650 255, 620 255
             L560 255
             C540 255, 535 240, 535 225
             L535 205
             C535 190, 550 185, 580 185
             L620 185
             L180 185
             C150 185, 140 190, 140 205
             L140 225
             C140 240, 135 255, 115 255
             L90 255
             C70 255, 60 245, 60 230
             Z"
          fill="#1a1a2e"
          stroke={LOGO_BLUE}
          strokeWidth="2"
        />
        
        {/* Windshield */}
        <path d="M145 102 L295 62 L440 65 L445 100 L150 100 Z" fill="#0d1b2a" stroke={LOGO_BLUE} strokeWidth="1" />
        
        {/* Side windows */}
        <path d="M155 105 L290 68 L430 70 L435 98 L158 98 Z" fill="#0d1b2a" opacity="0.9" />
        <line x1="295" y1="65" x2="295" y2="98" stroke={LOGO_BLUE} strokeWidth="2" />
        
        {/* Door lines */}
        <line x1="200" y1="155" x2="200" y2="245" stroke="#2a2a40" strokeWidth="1" />
        <line x1="490" y1="150" x2="490" y2="240" stroke="#2a2a40" strokeWidth="1" />
        
        {/* Door handles */}
        <rect x="220" y="165" width="25" height="6" fill={LOGO_BLUE} rx="2" />
        <rect x="510" y="162" width="25" height="6" fill={LOGO_BLUE} rx="2" />
        
        {/* Headlight */}
        <ellipse cx="75" cy="190" rx="20" ry="12" fill={LOGO_BLUE} opacity="0.6" />
        
        {/* Taillight */}
        <ellipse cx="665" cy="185" rx="12" ry="10" fill={LOGO_RED} opacity="0.8" />
        
        {/* Bumper lines */}
        <line x1="65" y1="215" x2="130" y2="215" stroke="#2a2a40" strokeWidth="1" />
        <line x1="580" y1="215" x2="670" y2="215" stroke="#2a2a40" strokeWidth="1" />
      </svg>

      {/* Hood */}
      <div className="part-hood absolute top-[28%] left-[3%] w-[32%]">
        <svg viewBox="0 0 250 80" className="w-full">
          <path d="M10 70 Q20 30 60 15 L200 10 Q230 12 240 40 L235 70 Q200 75 100 75 L20 75 Z" fill="#252545" stroke={LOGO_BLUE} strokeWidth="2" />
        </svg>
      </div>

      {/* Engine */}
      <div className="part-engine absolute top-[35%] left-[30%] w-[22%]">
        <svg viewBox="0 0 160 130" className="w-full">
          <rect x="10" y="10" width="140" height="110" fill="#3a3a5c" stroke={LOGO_BLUE} strokeWidth="2" rx="8" />
          <circle cx="40" cy="45" r="18" fill="#1a1a2e" stroke="#5a5a7c" strokeWidth="2" />
          <circle cx="80" cy="45" r="18" fill="#1a1a2e" stroke="#5a5a7c" strokeWidth="2" />
          <circle cx="120" cy="45" r="18" fill="#1a1a2e" stroke="#5a5a7c" strokeWidth="2" />
          <circle cx="40" cy="90" r="18" fill="#1a1a2e" stroke="#5a5a7c" strokeWidth="2" />
          <circle cx="80" cy="90" r="18" fill="#1a1a2e" stroke="#5a5a7c" strokeWidth="2" />
          <circle cx="120" cy="90" r="18" fill="#1a1a2e" stroke="#5a5a7c" strokeWidth="2" />
          <rect x="60" y="55" width="40" height="20" fill={LOGO_RED} rx="3" />
        </svg>
      </div>

      {/* Front Wheel */}
      <div className="part-wheel-front absolute bottom-[5%] left-[18%] w-[14%]">
        <svg viewBox="0 0 100 100" className="w-full">
          <circle cx="50" cy="50" r="45" fill="#1a1a2e" stroke={LOGO_BLUE} strokeWidth="3" />
          <circle cx="50" cy="50" r="30" fill="#0d1520" stroke="#3a3a5c" strokeWidth="2" />
          <circle cx="50" cy="50" r="10" fill={LOGO_BLUE} />
          <path d="M50 15 L50 85 M15 50 L85 50 M25 25 L75 75 M25 75 L75 25" stroke="#3a3a5c" strokeWidth="3" />
        </svg>
      </div>

      {/* Rear Wheel */}
      <div className="part-wheel-rear absolute bottom-[5%] right-[18%] w-[14%]">
        <svg viewBox="0 0 100 100" className="w-full">
          <circle cx="50" cy="50" r="45" fill="#1a1a2e" stroke={LOGO_BLUE} strokeWidth="3" />
          <circle cx="50" cy="50" r="30" fill="#0d1520" stroke="#3a3a5c" strokeWidth="2" />
          <circle cx="50" cy="50" r="10" fill={LOGO_BLUE} />
          <path d="M50 15 L50 85 M15 50 L85 50 M25 25 L75 75 M25 75 L75 25" stroke="#3a3a5c" strokeWidth="3" />
        </svg>
      </div>

      {/* Left Door */}
      <div className="part-door-left absolute top-[30%] left-[26%] w-[16%] origin-left">
        <svg viewBox="0 0 120 180" className="w-full">
          <path d="M5 5 L115 3 L112 170 L8 172 Z" fill="#252545" stroke={LOGO_BLUE} strokeWidth="2" />
          <path d="M10 10 L110 8 L108 65 L12 67 Z" fill="#0d1b2a" stroke="#3a3a5c" strokeWidth="1" />
          <rect x="85" y="78" width="20" height="6" fill={LOGO_BLUE} rx="2" />
        </svg>
      </div>

      {/* Right Door */}
      <div className="part-door-right absolute top-[30%] right-[26%] w-[16%] origin-right">
        <svg viewBox="0 0 120 180" className="w-full">
          <path d="M5 3 L115 5 L112 172 L8 170 Z" fill="#252545" stroke={LOGO_BLUE} strokeWidth="2" />
          <path d="M10 8 L110 10 L108 67 L12 65 Z" fill="#0d1b2a" stroke="#3a3a5c" strokeWidth="1" />
          <rect x="15" y="78" width="20" height="6" fill={LOGO_BLUE} rx="2" />
        </svg>
      </div>

      {/* Trunk */}
      <div className="part-trunk absolute top-[25%] right-[4%] w-[18%] origin-top-right">
        <svg viewBox="0 0 150 100" className="w-full">
          <path d="M10 35 L140 28 L145 70 L15 85 Z" fill="#252545" stroke={LOGO_BLUE} strokeWidth="2" />
          <rect x="95" y="55" width="35" height="12" fill="#1a1a2e" stroke="#3a3a5c" strokeWidth="1" rx="2" />
        </svg>
      </div>
    </div>
  );
};

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

  const handleMouseLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.div style={{ x, y }} onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} className="inline-block">
      <Link ref={ref} href={href} className={`relative inline-flex items-center justify-center px-8 py-4 font-semibold tracking-wider uppercase overflow-hidden group transition-all duration-300 ${variant === 'primary' ? 'bg-[#CC0000] text-white hover:bg-[#e60000]' : 'border-2 border-[#0066CC] text-white hover:border-[#CC0000]'}`}>
        <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <span className="relative z-10">{children}</span>
      </Link>
    </motion.div>
  );
};

const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });
  return <motion.div className="fixed top-0 left-0 right-0 h-1 bg-[#0066CC] origin-left z-[200]" style={{ scaleX }} />;
};

export default function HeroDisassembly() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ['start start', 'end start'] });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <ScrollProgress />
      <section ref={containerRef} className="relative min-h-[160vh] w-full bg-[#0a0a0f]">
        <motion.div style={{ opacity }} className="sticky top-0 min-h-screen w-full flex flex-col items-center justify-start pt-20 pb-4 overflow-hidden">
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#0d1420] to-[#0a0a0f]" />
          
          {/* Particles */}
          {[...Array(15)].map((_, i) => (
            <motion.div key={i} className="absolute rounded-full" style={{ left: `${Math.random() * 100}%`, top: `${Math.random() * 100}%`, width: Math.random() * 3 + 1, height: Math.random() * 3 + 1, background: i % 2 === 0 ? 'rgba(0, 102, 204, 0.4)' : 'rgba(204, 0, 0, 0.3)' }} animate={{ y: [0, -30, 0], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: Math.random() * 10 + 8, repeat: Infinity, delay: Math.random() * 4 }} />
          ))}

          {/* Content */}
          <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mb-4 flex justify-center">
              <Image src="/logo.jpg" alt="O.G. Automotive" width={240} height={100} className="w-36 md:w-48 h-auto" priority />
            </motion.div>

            <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[0.9] mb-4" style={{ fontFamily: 'var(--font-tanker)' }}>
              <span className="text-[#0066CC]">WE FIX</span>{' '}
              <span className="text-[#CC0000]">EVERYTHING</span>
            </motion.h1>

            <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }} className="text-[#8b9db8] text-base md:text-lg max-w-xl mx-auto mb-6" style={{ fontFamily: 'var(--font-general-sans)' }}>
              ASE certified technicians. All makes and models.
            </motion.p>

            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }} className="flex flex-wrap justify-center gap-4 mb-6">
              <MagneticButton href="tel:8024782224" variant="primary">(802) 478-2224</MagneticButton>
              <MagneticButton href="/services" variant="secondary">Services</MagneticButton>
            </motion.div>

            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="text-[#8b9db8] text-xs tracking-widest uppercase">Scroll to see how we work</motion.p>
          </div>

          {/* Car */}
          <div className="relative z-10 w-full max-w-4xl mx-auto px-4 flex-1 flex items-end mt-4">
            <CarDisassembly />
          </div>

          {/* Scroll indicator */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }} className="absolute bottom-4 left-1/2 -translate-x-1/2">
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-5 h-8 border-2 border-[#0066CC] rounded-full flex justify-center pt-1">
              <motion.div className="w-1 h-2 bg-[#0066CC] rounded-full" />
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
