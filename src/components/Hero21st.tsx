'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import Image from 'next/image';

// Text Scramble Hook
function useTextScramble(text: string, trigger: boolean, duration: number = 1500) {
  const [displayText, setDisplayText] = useState('');
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  
  useEffect(() => {
    if (!trigger) {
      setDisplayText('');
      return;
    }
    
    let iteration = 0;
    const totalIterations = text.length * 3;
    const interval = duration / totalIterations;
    
    const timer = setInterval(() => {
      setDisplayText(
        text
          .split('')
          .map((char, index) => {
            if (char === ' ') return ' ';
            if (index < iteration / 3) return text[index];
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('')
      );
      
      iteration++;
      if (iteration >= totalIterations) {
        setDisplayText(text);
        clearInterval(timer);
      }
    }, interval);
    
    return () => clearInterval(timer);
  }, [trigger, text, duration]);
  
  return displayText;
}

// Magnetic Button Component
function MagneticButton({ 
  children, 
  href, 
  variant = 'primary',
  className = ''
}: { 
  children: React.ReactNode; 
  href: string; 
  variant?: 'primary' | 'secondary' | 'ghost';
  className?: string;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  };
  
  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };
  
  const baseStyles = "relative inline-flex items-center justify-center gap-3 px-8 py-4 font-medium transition-all duration-300 overflow-hidden";
  const variantStyles = {
    primary: "bg-red-600 text-white rounded-none hover:bg-red-700",
    secondary: "bg-transparent border border-white/30 text-white rounded-none hover:border-white/60 hover:bg-white/5",
    ghost: "bg-transparent text-white/80 hover:text-white"
  };
  
  return (
    <motion.div
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Link
        ref={ref}
        href={href}
        className={`${baseStyles} ${variantStyles[variant]} ${className} group`}
      >
        {/* Spotlight effect */}
        <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        </span>
        <span className="relative z-10">{children}</span>
      </Link>
    </motion.div>
  );
}

// Spotlight Card Component
function SpotlightCard({ 
  children, 
  className = '' 
}: { 
  children: React.ReactNode; 
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  
  const handleMouseMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };
  
  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Spotlight gradient */}
      <div
        className="absolute inset-0 opacity-0 transition-opacity duration-300 pointer-events-none"
        style={{
          opacity: isHovered ? 0.15 : 0,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(239, 68, 68, 0.4), transparent 40%)`
        }}
      />
      {children}
    </div>
  );
}

export default function Hero21st() {
  const [isLoaded, setIsLoaded] = useState(false);
  const headlineText = useTextScramble('TRUSTED AUTO REPAIR', isLoaded, 2000);
  const subText = useTextScramble('SINCE 2008', isLoaded, 1200);
  
  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="relative min-h-screen w-full bg-[#0a0a0a] overflow-hidden">
      {/* Animated background grain */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      
      {/* Cinematic vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,rgba(0,0,0,0.6)_100%)]" />
      
      {/* Diagonal accent line */}
      <motion.div 
        className="absolute top-0 right-1/3 w-[1px] h-full bg-gradient-to-b from-transparent via-red-600/30 to-transparent"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
        style={{ transformOrigin: 'top' }}
      />
      
      <div className="relative z-10 max-w-[1600px] mx-auto px-6 lg:px-16 pt-20 lg:pt-28 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center min-h-[calc(100vh-160px)]">
          
          {/* Left Content - Asymmetric */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            {/* Label with animated line */}
            <div className="flex items-center gap-4 mb-8">
              <motion.div 
                className="h-[1px] bg-red-600"
                initial={{ width: 0 }}
                animate={{ width: 48 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              />
              <motion.span 
                className="text-red-500 text-xs font-medium tracking-[0.3em] uppercase"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                ASE Certified Technicians
              </motion.span>
            </div>
            
            {/* Scrambled Headline */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-[0.95] tracking-tight mb-4">
              <span className="block font-mono text-red-500 text-sm mb-2 tracking-wider">[ HEADLINE ]</span>
              {headlineText || '\u00A0'}
            </h1>
            
            <motion.div 
              className="text-3xl sm:text-4xl lg:text-5xl font-light text-white/60 mb-8 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
            >
              {subText || '\u00A0'}
            </motion.div>
            
            {/* Description */}
            <motion.p 
              className="text-lg text-white/50 mb-10 max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2 }}
            >
              Full service auto repair for all makes and models. No upselling, 
              no surprises—just honest work from certified technicians.
            </motion.p>
            
            {/* CTA Row with Magnetic Buttons */}
            <motion.div 
              className="flex flex-wrap items-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 2.2 }}
            >
              <MagneticButton href="tel:+18024782224" variant="primary">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>(802) 478-2224</span>
              </MagneticButton>
              
              <MagneticButton href="/services" variant="secondary">
                <span>View Services</span>
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </MagneticButton>
            </motion.div>
            
            {/* Location pill */}
            <motion.div 
              className="flex items-center gap-3 text-white/40 text-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 2.4 }}
            >
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span>160 Sykes Mountain Ave, White River Junction, VT</span>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Floating Cards */}
          <div className="lg:col-span-5 relative h-[500px] lg:h-[600px]">
            {/* Main image placeholder with spotlight */}
            <motion.div
              className="absolute top-0 right-0 w-[90%] h-[70%]"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.4, 0.25, 1] }}
            >
              <SpotlightCard className="w-full h-full bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 border border-white/10">
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <svg className="w-20 h-20 mx-auto mb-4 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                    </svg>
                    <p className="text-white/30 text-sm uppercase tracking-wider">Hero Image</p>
                  </div>
                </div>
              </SpotlightCard>
            </motion.div>
            
            {/* Floating stat card 1 */}
            <motion.div
              className="absolute bottom-20 left-0"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <SpotlightCard className="bg-zinc-900/90 backdrop-blur-xl border border-white/10 p-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-white">15+</div>
                  <div className="text-white/50 text-sm leading-tight">Years of<br/>Experience</div>
                </div>
              </SpotlightCard>
            </motion.div>
            
            {/* Floating stat card 2 */}
            <motion.div
              className="absolute bottom-0 right-10"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <SpotlightCard className="bg-red-600/90 backdrop-blur-xl border border-red-500/30 p-6">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-bold text-white">4.9</div>
                  <div className="text-white/80 text-sm leading-tight">Google<br/>Rating</div>
                </div>
              </SpotlightCard>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Bottom scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-8 flex items-center gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
      >
        <div className="w-12 h-[1px] bg-white/20" />
        <span className="text-white/30 text-xs uppercase tracking-[0.2em]">Scroll</span>
      </motion.div>
    </section>
  );
}
