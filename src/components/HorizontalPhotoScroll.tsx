'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const photos = [
  '/photo01.jpg',
  '/photo02.jpg',
  '/photo03.jpg',
  '/photo04.jpg',
  '/photo05.jpg',
  '/photo06.jpg',
  '/photo07.jpg',
  '/photo08.jpg',
  '/photo09.jpg',
  '/photo10.jpg',
];

export default function HorizontalPhotoScroll() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    // Calculate scroll distance
    const scrollWidth = scrollContainer.scrollWidth - scrollContainer.clientWidth;

    // Create scroll animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollContainer,
        start: 'top center',
        end: 'bottom center',
        scrub: 1,
        markers: false,
      },
    });

    tl.to(scrollContainer, {
      x: -scrollWidth,
      ease: 'none',
    });

    // Parallax effect on photos
    const photoElements = scrollContainer.querySelectorAll('.scroll-photo');
    photoElements.forEach((photo, idx) => {
      gsap.to(photo, {
        scrollTrigger: {
          trigger: scrollContainer,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        z: Math.sin(idx * 0.5) * 50,
        rotation: Math.sin(idx * 0.3) * 2,
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto mb-12">
        <div className="label label-amber mb-4">Visual Tour</div>
        <h2 className="font-bebas text-white">See Our Shop</h2>
      </div>

      <div className="w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-6 lg:gap-8 w-max"
          style={{ perspective: '1200px' }}
        >
          {photos.map((photo, idx) => (
            <div
              key={idx}
              className="scroll-photo flex-shrink-0 relative w-80 lg:w-96 h-56 lg:h-64 bg-charcoal overflow-hidden flex-1"
              style={{
                transformStyle: 'preserve-3d',
              }}
            >
              <Image
                src={photo}
                alt={`Shop photo ${idx + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />

              {/* Parallax depth effect */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: 'linear-gradient(135deg, transparent 0%, rgba(0,0,0,0.3) 100%)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
