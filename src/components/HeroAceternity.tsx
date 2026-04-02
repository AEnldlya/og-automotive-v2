'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';

// Mouse spotlight effect - using logo colors
const MouseSpotlight = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-[50] opacity-40"
      style={{
        background: useMotionTemplate`
          radial-gradient(
            600px circle at ${mouseX}px ${mouseY}px,
            rgba(196, 30, 58, 0.15),
            transparent 80%
          )
        `,
      }}
    />
  );
};

// 3D Tilt card effect
const TiltCard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) / 20);
    y.set((e.clientY - centerY) / 20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX: useTransform(y, [-10, 10], [5, -5]),
        rotateY: useTransform(x, [-10, 10], [-5, 5]),
        transformPerspective: 1000,
      }}
      className={`transform-gpu ${className}`}
    >
      {children}
    </motion.div>
  );
};

// Background grid pattern
const GridPattern = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(rgba(30, 58, 95, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(30, 58, 95, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
    </div>
  );
};

// Floating particles - logo colors
const FloatingParticles = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  );
};

// Glowing orbs
const GlowingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(196, 30, 58, 0.15) 0%, transparent 70%)',
          left: '-10%',
          top: '20%',
        }}
        animate={{
          x: [0, 50, 0],
          y: [0, 30, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(30, 58, 95, 0.2) 0%, transparent 70%)',
          right: '-5%',
          bottom: '10%',
        }}
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />
    </div>
  );
};

// Scroll progress indicator - using logo red
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#c41e3a] origin-left z-[200]"
      style={{ scaleX }}
    />
  );
};

// Magnetic button - using logo colors
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
            ? 'bg-[#c41e3a] text-white hover:bg-[#e63950]' 
            : 'border border-[#1e3a5f] text-white hover:border-[#c41e3a] hover:bg-[#1e3a5f]/20'
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

// Text reveal effect
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

// Animated gradient text - logo colors
const GradientText = ({ children }: { children: string }) => {
  return (
    <motion.span
      className="bg-gradient-to-r from-[#c41e3a] via-[#1e3a5f] to-[#c41e3a] bg-clip-text text-transparent"
      style={{ backgroundSize: '200% 100%' }}
      animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
      transition={{ duration: 5, repeat: Infinity, ease: 'linear' }}
    >
      {children}
    </motion.span>
  );
};

// Logo SVG animation
const AnimatedLogo = () => {
  return (
    <motion.div 
      className="w-24 h-24 mb-8"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.1 }}
    >
      <svg viewBox="0 0 40 40" className="w-full h-full">
        <motion.circle 
          cx="20" cy="20" r="18" 
          fill="none" 
          stroke="#c41e3a" 
          strokeWidth="2"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.circle 
          cx="20" cy="20" r="8" 
          fill="#c41e3a"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
        />
        <motion.path
          d="M20 2 L20 10 M20 30 L20 38 M2 20 L10 20 M30 20 L38 20"
          stroke="#1e3a5f"
          strokeWidth="3"
          strokeLinecap="round"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1 }}
        />
      </svg>
    </motion.div>
  );
};

export default function HeroAceternity() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <ScrollProgress />
      <MouseSpotlight />
      
      <section
        ref={containerRef}
        className="relative min-h-screen w-full bg-[#0a0f1a] overflow-hidden flex items-center justify-center pt-20"
      >
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          <GridPattern />
          <FloatingParticles />
          <GlowingOrbs />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-transparent to-[#0a0f1a] z-[1]" />

        {/* Main content */}
        <motion.div 
          style={{ y, opacity }}
          className="relative z-10 max-w-5xl mx-auto px-6 lg:px-16 text-center"
        >
          {/* Animated Logo */}
          <div className="flex justify-center">
            <AnimatedLogo />
          </div>

          {/* Eyebrow */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-6"
          >
            <motion.div 
              className="h-[1px] bg-[#c41e3a]" 
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <span className="text-[#8b9db8] text-xs font-medium tracking-[0.3em] uppercase">
              White River Junction, Vermont
            </span>
            <motion.div 
              className="h-[1px] bg-[#c41e3a]" 
              initial={{ width: 0 }}
              animate={{ width: 40 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          {/* Main headline with 3D tilt */}
          <TiltCard className="inline-block">
            <motion.h1 
              className="text-6xl sm:text-7xl lg:text-9xl font-bold leading-[0.85] mb-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <span className="block font-[family-name:var(--font-bebas)] text-white">
                OG AUTO
              </span>
              <span className="block font-[family-name:var(--font-bebas)]">
                <GradientText>MOTIVE</GradientText>
              </span>
            </motion.h1>
          </TiltCard>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg text-[#8b9db8] max-w-xl mx-auto mb-10"
          >
            <TextReveal delay={0.7}>
              Full-service auto repair in the Upper Valley. Honest work, fair prices, no surprises.
            </TextReveal>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            <MagneticButton href="/contact" variant="primary">
              Book a Service
            </MagneticButton>
            <MagneticButton href="/services" variant="secondary">
              Our Services
            </MagneticButton>
          </motion.div>

          {/* Location indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1.1 }}
            className="mt-12 flex items-center justify-center gap-2 text-[#8b9db8]/60 text-sm"
          >
            <motion.div 
              className="w-2 h-2 rounded-full bg-[#c41e3a]"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>160 Sykes Mountain Ave, White River Junction, VT</span>
          </motion.div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0f1a] to-transparent z-[2]" />
      </section>
    </>
  );
}
