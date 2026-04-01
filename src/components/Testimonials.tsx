'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    author: 'Dave K.',
    initials: 'DK',
    rating: 5,
    review:
      '"Brought my truck in with a noise I\'d been ignoring for two months. They found it in twenty minutes, gave me a straight number, and had it done by 3pm. Never going anywhere else."',
  },
  {
    author: 'Sarah R.',
    initials: 'SR',
    rating: 5,
    review:
      '"Fair prices. Good work. They didn\'t try to sell me anything I didn\'t need — which, after years of dealing with other shops, felt like a miracle."',
  },
  {
    author: 'Jason M.',
    initials: 'JM',
    rating: 5,
    review:
      '"My check engine light came on right before a road trip. OG squeezed me in last minute, diagnosed it fast, and got me back on the road same afternoon."',
  },
  {
    author: 'Linda B.',
    initials: 'LB',
    rating: 5,
    review:
      '"Honest, fast, and local. The way a mechanic shop is supposed to be. I\'ve sent my whole family here."',
  },
];

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  useEffect(() => {
    // Auto-advance every 5 seconds
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // Animate slider position
    if (trackRef.current) {
      const slideWidth = trackRef.current.offsetWidth / 2; // 50vw per slide on desktop
      gsap.to(trackRef.current, {
        x: -currentIndex * slideWidth,
        duration: 0.75,
        ease: 'power3.inOut',
      });
    }
  }, [currentIndex]);

  return (
    <section id="testimonials" className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-16 lg:mb-20">
          <div>
            <div className="label label-amber mb-4">Customer Testimonials</div>
            <h2 className="font-bebas text-white">What People Are Saying</h2>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={handlePrev}
              className="w-12 h-12 border border-border flex items-center justify-center transition-all duration-300 hover:border-amber hover:bg-amber hover:bg-opacity-5"
              aria-label="Previous testimonial"
            >
              <svg className="w-5 h-5 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={handleNext}
              className="w-12 h-12 border border-border flex items-center justify-center transition-all duration-300 hover:border-amber hover:bg-amber hover:bg-opacity-5"
              aria-label="Next testimonial"
            >
              <svg className="w-5 h-5 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Slider */}
        <div className="overflow-hidden">
          <div ref={trackRef} className="flex gap-6 lg:gap-12 will-change-transform">
            {testimonials.map((testimonial, idx) => (
              <div
                key={idx}
                className="flex-shrink-0 w-full lg:w-[calc(50%-12px)] bg-charcoal border border-border p-8 lg:p-12"
              >
                {/* Opening quote mark */}
                <div className="text-8xl font-bebas text-amber opacity-20 leading-none mb-4">
                  "
                </div>

                {/* Review text */}
                <p className="font-barlow font-300 italic text-base lg:text-lg text-cream leading-relaxed mb-8">
                  {testimonial.review}
                </p>

                {/* Divider */}
                <div className="h-px bg-border mb-6" />

                {/* Author row */}
                <div className="flex items-center gap-4">
                  {/* Avatar with initials */}
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-barlow-condensed font-600 text-xs text-white"
                    style={{
                      background: `linear-gradient(135deg, #c62828 0%, #1565c0 100%)`,
                    }}
                  >
                    {testimonial.initials}
                  </div>

                  {/* Name and rating */}
                  <div>
                    <div className="font-barlow-condensed font-600 text-white uppercase text-sm tracking-wider">
                      {testimonial.author}
                    </div>
                    <div className="text-amber text-sm">
                      {'★'.repeat(testimonial.rating)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
