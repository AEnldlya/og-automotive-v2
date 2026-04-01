'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

export default function PhotoViewer3D() {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const tiltX = ((y - centerY) / centerY) * 10;
    const tiltY = ((x - centerX) / centerX) * 10;

    setTilt({ x: -tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-sm aspect-[3/4] bg-charcoal overflow-hidden"
      style={{ perspective: '1200px' }}
      animate={{
        rotateX: tilt.x,
        rotateY: tilt.y,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
    >
      {/* Corner brackets */}
      <div className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-amber z-10" />
      <div className="absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-amber z-10" />

      {/* Image with 3D depth */}
      <motion.div
        className="relative w-full h-full"
        style={{
          transformStyle: 'preserve-3d',
        }}
        animate={{
          z: 20,
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
      >
        <Image
          src="/photo01.jpg"
          alt="OG Automotive shop"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 50vw"
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'linear-gradient(135deg, transparent 0%, transparent 60%, rgba(17, 18, 16, 0.6) 100%)',
          }}
        />
      </motion.div>

      {/* Location tag */}
      <div className="absolute bottom-4 left-4 z-20 bg-amber px-3 py-1 text-xs font-barlow-condensed font-600 tracking-widest uppercase text-black">
        White River Jct, VT 05001
      </div>
    </motion.div>
  );
}
