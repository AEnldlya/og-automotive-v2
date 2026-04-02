'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform, useSpring, useMotionValue, useMotionTemplate } from 'framer-motion';

// Mouse spotlight effect
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
      className="pointer-events-none fixed inset-0 z-[100] opacity-50"
      style={{
        background: useMotionTemplate`
          radial-gradient(
            600px circle at ${mouseX}px ${mouseY}px,
            rgba(196, 30, 58, 0.12),
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

// Glowing border button
const GlowButton = ({ children, href }: { children: React.ReactNode; href: string }) => {
  return (
    <Link
      href={href}
      className="group relative inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 bg-transparent border border-[#e07b2a]/50 font-[family-name:var(--font-barlow-condensed)] text-sm tracking-[0.22em] uppercase"
    >
      {/* Animated border glow */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <span className="absolute inset-0 bg-[#e07b2a]/20 blur-xl" />
      </span>
      
      {/* Corner accents */}
      <span className="absolute top-0 left-0 w-2 h-2 border-t-2 border-l-2 border-[#e07b2a] transition-all duration-300 group-hover:w-full group-hover:h-full" />
      <span className="absolute bottom-0 right-0 w-2 h-2 border-b-2 border-r-2 border-[#e07b2a] transition-all duration-300 group-hover:w-full group-hover:h-full" />
      
      <span className="relative z-10 group-hover:text-[#e07b2a] transition-colors duration-300">
        {children}
      </span>
    </Link>
  );
};

// Animated gradient text
const GradientText = ({ children }: { children: string }) => {
  return (
    <span className="relative inline-block">
      <motion.span
        className="bg-gradient-to-r from-[#e07b2a] via-[#f08a3a] to-[#e07b2a] bg-clip-text text-transparent"
        style={{
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: 'linear',
        }}
      >
        {children}
      </motion.span>
    </span>
  );
};

// Background boxes with enhanced hover
const Boxes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border border-[#e07b2a]/10"
            style={{
              width: `${(i + 1) * 200}px`,
              height: `${(i + 1) * 200}px`,
              rotateX: 60,
              rotateZ: -15,
            }}
            animate={{
              rotateZ: [-15, -15],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </div>
    </div>
  );
};

// Noise texture overlay
const Noise = () => {
  return (
    <div 
      className="absolute inset-0 opacity-[0.03] pointer-events-none z-[5]"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
      }}
    />
  );
};

// Floating orbs
const FloatingOrbs = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: 300 + i * 100,
            height: 300 + i * 100,
            background: `radial-gradient(circle, rgba(224, 123, 42, ${0.1 - i * 0.03}) 0%, transparent 70%)`,
            left: `${20 + i * 30}%`,
            top: `${30 + i * 20}%`,
          }}
          animate={{
            x: [0, 50, 0],
            y: [0, -30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15 + i * 5,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 2,
          }}
        />
      ))}
    </div>
  );
};

// Scroll progress indicator
const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-[#e07b2a] origin-left z-[200]"
      style={{ scaleX }}
    />
  );
};

// Magnetic button - enhanced
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

export default function HeroEnhanced() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <>
      <ScrollProgress />
      <MouseSpotlight />
      
      <section
        ref={containerRef}
        className="relative min-h-screen w-full bg-[#0a0908] overflow-hidden flex items-center justify-center"
      >
        {/* Background effects */}
        <div className="absolute inset-0 z-0">
          <Boxes />
          <FloatingOrbs />
          <Noise />
        </div>

        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0908] via-transparent to-[#0a0908] z-[1]" />
        
        {/* Lamp glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl pointer-events-none z-[1]">
          <motion.div
            initial={{ opacity: 0, width: '10rem' }}
            animate={{ opacity: 0.6, width: '40rem' }}
            transition={{ delay: 0.5, duration: 1.5, ease: 'easeOut' }}
            className="absolute top-0 left-1/2 -translate-x-1/2 h-[300px] bg-gradient-to-b from-[#e07b2a]/30 to-transparent blur-[120px]"
          />
        </div>

        {/* Main content */}
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
            <motion.div 
              className="h-[1px] bg-[#e07b2a]" 
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
            <span className="text-[#e07b2a] text-xs font-medium tracking-[0.3em] uppercase">
              White River Junction, Vermont
            </span>
            <motion.div 
              className="h-[1px] bg-[#e07b2a]" 
              initial={{ width: 0 }}
              animate={{ width: 48 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          </motion.div>

          {/* Main headline */}
          <TiltCard className="inline-block">
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
          </TiltCard>

          {/* Subtitle with gradient */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg text-[#8b8680] max-w-xl mx-auto mb-10"
          >
            <TextReveal delay={0.6}>
              Full-service auto repair in the Upper Valley.
            </TextReveal>
            <br />
            <GradientText>Honest work. Fair prices. No surprises.</GradientText>
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
            <GlowButton href="/services">
              Our Services
            </GlowButton>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="mt-12 flex items-center justify-center gap-2 text-[#8b8680]/60 text-sm"
          >
            <motion.div 
              className="w-2 h-2 rounded-full bg-green-500"
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span>160 Sykes Mountain Ave, White River Junction, VT</span>
          </motion.div>
        </motion.div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0908] to-transparent z-[2]" />
      </section>
    </>
  );
}
