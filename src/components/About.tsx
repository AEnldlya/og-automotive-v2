'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import PhotoViewer3D from './PhotoViewer3D';
import PhotoGalleryGrid from './PhotoGalleryGrid';

gsap.registerPlugin(ScrollTrigger);

interface StatCount {
  value: number;
  label: string;
}

export default function About() {
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const statElements = gsap.utils.toArray<HTMLElement>('.stat-number');

    statElements.forEach((element) => {
      const target = parseInt(element.getAttribute('data-target') || '0', 10);
      const obj = { val: 0 };

      gsap.to(obj, {
        val: target,
        duration: 1.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 88%',
          once: true,
        },
        onUpdate: () => {
          element.textContent = Math.floor(obj.val).toLocaleString();
        },
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="about" className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column */}
          <div className="flex flex-col justify-start">
            {/* Label */}
            <div className="label label-amber mb-4">About the Shop</div>

            {/* Title */}
            <h2 className="font-bebas text-white mb-8">Built on Honest Work</h2>

            {/* Divider line */}
            <div className="w-16 h-[2px] bg-amber mb-8" />

            {/* Body copy */}
            <p className="text-cream mb-6 max-w-md">
              O. G. Auto has been the Upper Valley's shop for over 15 years. We started small because we wanted to stay small — to know every customer, to take our time, and to never cut corners.
            </p>

            <p className="text-cream mb-12 max-w-md">
              When you bring your car in, you get a real technician who actually knows what they're looking at. No upselling. No surprises. Just a straight quote and honest work.
            </p>

            {/* Stats Grid */}
            <div ref={statsRef} className="grid grid-cols-2 gap-8 lg:gap-12 mt-8">
              <div className="border-r border-b border-border pb-6 lg:pb-8 pr-6 lg:pr-8">
                <div className="stat-number text-4xl lg:text-5xl font-bebas text-amber mb-2" data-target="15">
                  0
                </div>
                <div className="text-xs lg:text-sm font-barlow-condensed tracking-widest uppercase text-muted">
                  Years in the Valley
                </div>
              </div>

              <div className="border-b border-border pb-6 lg:pb-8">
                <div className="stat-number text-4xl lg:text-5xl font-bebas text-amber mb-2" data-target="4800">
                  0
                </div>
                <div className="text-xs lg:text-sm font-barlow-condensed tracking-widest uppercase text-muted">
                  Cars Serviced
                </div>
              </div>

              <div className="border-r border-border pr-6 lg:pr-8 pt-6 lg:pt-8">
                <div className="stat-number text-4xl lg:text-5xl font-bebas text-amber mb-2" data-target="100">
                  0
                </div>
                <span className="text-2xl font-bebas text-amber">%</span>
                <div className="text-xs lg:text-sm font-barlow-condensed tracking-widest uppercase text-muted">
                  Honest Quotes
                </div>
              </div>

              <div className="pt-6 lg:pt-8">
                <div className="stat-number text-4xl lg:text-5xl font-bebas text-amber mb-2" data-target="1">
                  0
                </div>
                <div className="text-xs lg:text-sm font-barlow-condensed tracking-widest uppercase text-muted">
                  Location. 1 Standard.
                </div>
              </div>
            </div>
          </div>

          {/* Right column - 3D Photo Viewer */}
          <div className="flex items-center justify-center relative lg:h-full">
            <PhotoViewer3D />
          </div>
        </div>

        {/* Photo Gallery Grid */}
        <div className="mt-24 lg:mt-32">
          <h3 className="font-bebas text-white mb-8">Our Shop</h3>
          <PhotoGalleryGrid />
        </div>
      </div>
    </section>
  );
}
