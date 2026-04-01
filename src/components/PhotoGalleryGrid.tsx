'use client';

import Image from 'next/image';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

const photos = [
  '/workshop01.jpg',
  '/workshop02.jpg',
  '/workshop03.jpg',
  '/workshop04.jpg',
  '/workshop05.jpg',
  '/workshop06.jpg',
];

export default function PhotoGalleryGrid() {
  const [tilt, setTilt] = useState<{ [key: number]: { x: number; y: number } }>({});
  const refs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>, idx: number) => {
    const ref = refs.current[idx];
    if (!ref) return;

    const rect = ref.getBoundingClientRect();
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const tiltX = ((y - centerY) / centerY) * 8;
    const tiltY = ((x - centerX) / centerX) * 8;

    setTilt((prev) => ({
      ...prev,
      [idx]: { x: -tiltX, y: tiltY },
    }));
  };

  const handleMouseLeave = (idx: number) => {
    setTilt((prev) => ({
      ...prev,
      [idx]: { x: 0, y: 0 },
    }));
  };

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mt-12">
      {photos.map((photo, idx) => (
        <motion.div
          key={idx}
          ref={(el) => {
            if (el) refs.current[idx] = el;
          }}
          onMouseMove={(e) => handleMouseMove(e, idx)}
          onMouseLeave={() => handleMouseLeave(idx)}
          className="relative aspect-square bg-charcoal overflow-hidden cursor-pointer"
          style={{
            perspective: '1000px',
            transformStyle: 'preserve-3d',
          }}
          animate={{
            rotateX: tilt[idx]?.x || 0,
            rotateY: tilt[idx]?.y || 0,
            z: tilt[idx]?.x ? 20 : 0,
          }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          <Image
            src={photo}
            alt={`Gallery photo ${idx + 1}`}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 50vw, 33vw"
          />

          {/* Overlay gradient on hover */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            animate={{
              opacity: tilt[idx]?.x ? 0.3 : 0,
            }}
            style={{
              background: 'linear-gradient(135deg, rgba(198, 40, 40, 0.3) 0%, transparent 100%)',
            }}
          />
        </motion.div>
      ))}
    </div>
  );
}
