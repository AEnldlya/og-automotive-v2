'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function CarDisassembly() {
  const containerRef = useRef<HTMLDivElement>(null);
  const hoodRef = useRef<SVGGElement>(null);
  const doorsRef = useRef<SVGGElement>(null);
  const wheelsRef = useRef<SVGGElement>(null);
  const engineRef = useRef<SVGGElement>(null);
  const exhaustRef = useRef<SVGGElement>(null);
  const suspensionRef = useRef<SVGGElement>(null);
  const labelRefsRef = useRef<Record<string, HTMLDivElement | null>>({});
  const isMobileRef = useRef(false);

  useEffect(() => {
    // Check if mobile - disable heavy animations on mobile
    isMobileRef.current = window.innerWidth < 1024;

    if (!containerRef.current || isMobileRef.current) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
          pin: true,
          markers: false,
        },
      });

      // Hood flies up and slightly back
      tl.to(
        hoodRef.current,
        {
          y: -120,
          x: 30,
          opacity: 0.8,
          duration: 0.5,
        },
        0
      );

      // Doors slide outward
      tl.to(
        doorsRef.current,
        {
          x: 100,
          opacity: 0.8,
          duration: 0.5,
        },
        0.2
      );

      // Wheels roll out and down
      tl.to(
        wheelsRef.current,
        {
          x: 80,
          y: 80,
          rotation: 360,
          opacity: 0.8,
          duration: 0.6,
        },
        0.3
      );

      // Engine block separates upward
      tl.to(
        engineRef.current,
        {
          y: -100,
          opacity: 0.9,
          duration: 0.5,
        },
        0.4
      );

      // Exhaust falls down
      tl.to(
        exhaustRef.current,
        {
          y: 80,
          opacity: 0.8,
          duration: 0.5,
        },
        0.5
      );

      // Suspension detail separates
      tl.to(
        suspensionRef.current,
        {
          y: 60,
          x: -50,
          opacity: 0.8,
          duration: 0.5,
        },
        0.6
      );

      // Fade in labels progressively
      tl.to(
        '.disassembly-label',
        {
          opacity: 1,
          y: 0,
          stagger: 0.1,
          duration: 0.4,
        },
        0.3
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen py-24 lg:py-32 px-8 lg:px-16 bg-black flex items-center justify-center overflow-hidden">
      <div className="w-full max-w-6xl mx-auto">
        {/* Desktop SVG Animation */}
        {!isMobileRef.current && (
          <svg
            viewBox="0 0 1200 600"
            className="w-full h-auto max-h-[500px]"
            style={{ perspective: '1000px' }}
          >
            {/* Main car body - stays centered */}
            <g id="car-body">
              {/* Chassis */}
              <rect x="300" y="280" width="600" height="80" fill="#1a1a2e" rx="4" />

              {/* Hood - separates up */}
              <g ref={hoodRef} style={{ transformOrigin: '600px 280px' }}>
                <rect x="300" y="220" width="600" height="60" fill="#2a2a3e" rx="4" />
                <text x="600" y="255" textAnchor="middle" className="disassembly-label" style={{ opacity: 0, transform: 'translateY(20px)', fill: '#d4a853', fontSize: '14px', fontWeight: 600 }}>
                  Hood
                </text>
              </g>

              {/* Doors - slide out */}
              <g ref={doorsRef} style={{ transformOrigin: '450px 330px' }}>
                {/* Left door */}
                <rect x="320" y="300" width="130" height="80" fill="#2a2a3e" rx="2" />
                {/* Right door */}
                <rect x="750" y="300" width="130" height="80" fill="#2a2a3e" rx="2" />
              </g>

              {/* Windows - with doors */}
              <g ref={doorsRef} style={{ transformOrigin: '450px 330px' }}>
                <rect x="335" y="315" width="100" height="50" fill="#1a3a4a" opacity="0.6" rx="2" />
                <rect x="765" y="315" width="100" height="50" fill="#1a3a4a" opacity="0.6" rx="2" />
              </g>

              {/* Cockpit area */}
              <g>
                <ellipse cx="600" cy="310" rx="80" ry="40" fill="#2a2a3e" />
              </g>

              {/* Wheels - roll out */}
              <g ref={wheelsRef} style={{ transformOrigin: '350px 380px' }}>
                {/* Left wheel */}
                <circle cx="350" cy="380" r="35" fill="none" stroke="#d4a853" strokeWidth="20" />
                <circle cx="350" cy="380" r="20" fill="#0a0a1a" />
              </g>

              <g ref={wheelsRef} style={{ transformOrigin: '850px 380px' }}>
                {/* Right wheel */}
                <circle cx="850" cy="380" r="35" fill="none" stroke="#d4a853" strokeWidth="20" />
                <circle cx="850" cy="380" r="20" fill="#0a0a1a" />
              </g>

              {/* Engine block - separates up */}
              <g ref={engineRef} style={{ transformOrigin: '600px 350px' }}>
                <rect x="540" y="260" width="120" height="90" fill="#d4a853" opacity="0.7" rx="4" />
                <text x="600" y="315" textAnchor="middle" className="disassembly-label" style={{ opacity: 0, transform: 'translateY(20px)', fill: '#1a1a2e', fontSize: '12px', fontWeight: 700 }}>
                  Engine
                </text>
              </g>

              {/* Exhaust system - falls down */}
              <g ref={exhaustRef} style={{ transformOrigin: '450px 370px' }}>
                <rect x="420" y="360" width="60" height="40" fill="#8b6f47" rx="3" />
                <text x="450" y="395" textAnchor="middle" className="disassembly-label" style={{ opacity: 0, transform: 'translateY(20px)', fill: '#d4a853', fontSize: '11px', fontWeight: 600 }}>
                  Exhaust
                </text>
              </g>

              {/* Suspension detail - separates */}
              <g ref={suspensionRef} style={{ transformOrigin: '300px 380px' }}>
                <rect x="260" y="360" width="80" height="60" fill="#d4a853" opacity="0.6" rx="3" />
                <text x="300" y="405" textAnchor="middle" className="disassembly-label" style={{ opacity: 0, transform: 'translateY(20px)', fill: '#1a1a2e', fontSize: '11px', fontWeight: 600 }}>
                  Suspension
                </text>
              </g>

              {/* Bumpers - stay with body */}
              <rect x="290" y="270" width="20" height="30" fill="#0a0a1a" />
              <rect x="900" y="270" width="20" height="30" fill="#0a0a1a" />
            </g>
          </svg>
        )}

        {/* Mobile fallback - static car */}
        {isMobileRef.current && (
          <div className="flex items-center justify-center">
            <svg
              viewBox="0 0 1200 600"
              className="w-full h-auto max-h-[300px]"
            >
              {/* Static car body */}
              <rect x="300" y="280" width="600" height="80" fill="#1a1a2e" rx="4" />
              <rect x="300" y="220" width="600" height="60" fill="#2a2a3e" rx="4" />
              <rect x="320" y="300" width="130" height="80" fill="#2a2a3e" rx="2" />
              <rect x="750" y="300" width="130" height="80" fill="#2a2a3e" rx="2" />
              <rect x="335" y="315" width="100" height="50" fill="#1a3a4a" opacity="0.6" rx="2" />
              <rect x="765" y="315" width="100" height="50" fill="#1a3a4a" opacity="0.6" rx="2" />
              <ellipse cx="600" cy="310" rx="80" ry="40" fill="#2a2a3e" />
              <circle cx="350" cy="380" r="35" fill="none" stroke="#d4a853" strokeWidth="20" />
              <circle cx="350" cy="380" r="20" fill="#0a0a1a" />
              <circle cx="850" cy="380" r="35" fill="none" stroke="#d4a853" strokeWidth="20" />
              <circle cx="850" cy="380" r="20" fill="#0a0a1a" />
              <rect x="540" y="260" width="120" height="90" fill="#d4a853" opacity="0.7" rx="4" />
              <rect x="420" y="360" width="60" height="40" fill="#8b6f47" rx="3" />
              <rect x="260" y="360" width="80" height="60" fill="#d4a853" opacity="0.6" rx="3" />
            </svg>
          </div>
        )}

        {/* Section label and title */}
        <div className="mt-12 text-center">
          <div className="label label-amber mb-4 justify-center">Precision Engineering</div>
          <h2 className="font-bebas text-white text-3xl lg:text-4xl">Built to Last</h2>
          <p className="text-cream mt-6 max-w-2xl mx-auto text-sm lg:text-base">
            Every component, every system, every detail engineered for reliability and performance.
          </p>
        </div>
      </div>
    </section>
  );
}
