'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';

// Spotlight component - Aceternity style
const Spotlight = ({ className, fill }: { className?: string; fill?: string }) => {
  return (
    <svg
      className={`animate-spotlight pointer-events-none absolute z-[1] h-[169%] w-[138%] lg:w-[84%] opacity-0 group-hover:opacity-100 transition-opacity duration-700 ${className}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1924.71"
          cy="273.501"
          rx="1924.71"
          ry="273.501"
          transform="matrix(-0.822377 -0.568943 -0.568943 0.822377 3631.88 2291.09)"
          fill={fill || 'white'}
          fillOpacity="0.21"
        ></ellipse>
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};

// Lamp component - Aceternity style
const Lamp = () => {
  return (
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl pointer-events-none">
      <motion.div
        initial={{ opacity: 0.5, width: '15rem' }}
        whileInView={{ opacity: 1, width: '30rem' }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[200px] bg-gradient-to-b from-[#e07b2a]/40 to-transparent blur-[100px]"
      />
    </div>
  );
};

// Background boxes - Aceternity style
const Boxes = () => {
  const rows = new Array(150).fill(1);
  const cols = new Array(100).fill(1);

  return (
    <div className="absolute left-1/4 -top-1/4 flex -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 pointer-events-none rotate-[-15deg]">
      {rows.map((_, i) => (
        <motion.div
          key={`row${i}`}
          className="w-16 h-8 border-l border-[#e07b2a]/20 relative"
        >
          {cols.map((_, j) => (
            <motion.div
              whileHover={{
                backgroundColor: 'rgba(224, 123, 42, 0.3)',
                transition: { duration: 0 },
              }}
              key={`col${j}`}
              className="w-16 h-8 border-r border-t border-[#e07b2a]/10 relative"
            />
          ))}
        </motion.div>
      ))}
    </div>
  );
};

// Text reveal effect - Aceternity style
const TextReveal = ({ children, delay = 0 }: { children: string; delay?: number }) => {
  const words = children.split(' ');
  
  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          className="inline-block mr-[0.25em]"
          initial={{ opacity: 0, filter: 'blur(10px)', y: 20 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{
            duration: 0.4,
            delay: delay + i * 0.1,
            ease: 'easeOut',
          }}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

// Magnetic button - Aceternity style
const MagneticButton = ({ 
  children, 
  href,
  variant = 'primary'
}: { 
  children: React.ReactNode; 
  href: string;
  variant?: 'primary' | 'secondary';
}) => {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const x = (clientX - left - width / 2) * 0.3;
    const y = (clientY - top - height / 2) * 0.3;
    setPosition({ x, y });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const x = useSpring(position.x, springConfig);
  const y = useSpring(position.y, springConfig);

  return (
    <motion.div
      style={{ x, y }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Link
        ref={ref}
        href={href}
        className={`relative inline-flex items-center justify-center gap-2 px-8 py-4 overflow-hidden transition-all duration-300 group ${
          variant === 'primary' 
            ? 'bg-[#e07b2a] text-black hover:bg-[#f08a3a]' 
            : 'border border-white/20 text-white hover:border-white/40 hover:bg-white/5'
        }`}
      >
        <span className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        <span className="relative z-10 font-[family-name:var(--font-barlow-condensed)] text-sm tracking-[0.22em] uppercase font-semibold">
          {children}
        </span>
      </Link>
    </motion.div>
  );
};

// Floating particles
const Particles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-[#e07b2a]/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            width: Math.random() * 3 + 1,
            height: Math.random() * 3 + 1,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: Math.random() * 20 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

export default function HeroAceternity() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full bg-[#0a0908] overflow-hidden flex items-center justify-center"
    >
      {/* Background effects */}
      <div className="absolute inset-0 z-0">
        <Boxes />
        <Particles />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0908] via-transparent to-[#0a0908] z-[1]" />
      <div 
        className="absolute top-0 right-0 w-[80%] h-[80%] opacity-20 z-[1]"
        style={{
          background: 'radial-gradient(ellipse at 70% 20%, rgba(224, 123, 42, 0.3) 0%, transparent 60%)',
        }}
      />

      {/* Lamp effect */}
      <Lamp />

      {/* Content */}
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-7xl mx-auto px-6 lg:px-16 text-center"
      >
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-8"
        >
          <div className="h-[1px] w-12 bg-[#e07b2a]" />
          <span className="text-[#e07b2a] text-xs font-medium tracking-[0.3em] uppercase">
            White River Junction, Vermont
          </span>
          <div className="h-[1px] w-12 bg-[#e07b2a]" />
        </motion.div>

        {/* Main headline with lamp effect */}
        <div className="relative">
          <motion.h1 
            className="text-5xl sm:text-6xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] mb-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
          >
            <span 
              className="block font-[family-name:var(--font-bebas)]"
              style={{
                WebkitTextStroke: '1px rgba(255,255,255,0.9)',
                WebkitTextFillColor: 'transparent',
              }}
            >
              OG
            </span>
            <span className="block font-[family-name:var(--font-bebas)] text-white">
              AUTOMOTIVE
            </span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-lg text-[#8b8680] max-w-xl mx-auto mb-10"
        >
          <TextReveal delay={0.6}>
            Full-service auto repair in the Upper Valley. Honest work, fair prices, no surprises.
          </TextReveal>
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <MagneticButton href="/contact" variant="primary">
            Book a Service
          </MagneticButton>
          <MagneticButton href="/services" variant="secondary">
            Our Services
          </MagneticButton>
        </motion.div>

        {/* Location */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-12 flex items-center justify-center gap-2 text-[#8b8680]/60 text-sm"
        >
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
          <span>160 Sykes Mountain Ave, White River Junction, VT</span>
        </motion.div>
      </motion.div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0908] to-transparent z-[2]" />
    </section>
  );
}
