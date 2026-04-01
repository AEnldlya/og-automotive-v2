'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function VideoSection() {
  const titleRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: titleRef.current,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }

    // Parallax effect on scroll
    if (videoRef.current) {
      gsap.to(videoRef.current, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: videoRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }
  }, []);

  return (
    <section className="relative w-full py-24 lg:py-32 overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-8 lg:px-16 w-full">
        <div ref={titleRef} className="text-center mb-16 lg:mb-24">
          <h2 className="font-bebas text-4xl lg:text-6xl text-white">
            BUILT DIFFERENT
          </h2>
          <div className="w-16 h-[2px] bg-amber mx-auto mt-6" />
        </div>

        <div className="relative w-full h-[400px] lg:h-[600px] rounded-lg overflow-hidden">
          {/* Dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent z-10 pointer-events-none" />

          {/* Video */}
          <video
            ref={videoRef}
            src="/hero-video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
