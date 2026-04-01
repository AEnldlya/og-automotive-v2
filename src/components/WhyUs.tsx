'use client';

import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    title: 'Transparent Pricing',
    body: "You get a quote before we touch anything. No surprises when you pick up your keys.",
  },
  {
    title: 'Local & Independent',
    body: "We're not a chain with a quota. Your car gets a real technician who gives a damn.",
  },
  {
    title: 'Fast Turnaround',
    body: "Most jobs are done same day. We know your car isn't a luxury — it's how you get to work.",
  },
  {
    title: 'All Makes & Models',
    body: 'Domestic, import, old, new. If it drives, we work on it.',
  },
];

export default function WhyUs() {
  const stackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Scroll-triggered reveal for left column
    const leftCol = gsap.utils.toArray<HTMLElement>('.why-left-item');

    leftCol.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 36 },
        {
          opacity: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 88%',
            once: true,
          },
          delay: index * 0.08,
        }
      );
    });

    // Card stack hover animation
    if (stackRef.current) {
      const cards = stackRef.current.querySelectorAll('.stack-card');

      stackRef.current.addEventListener('mouseenter', () => {
        cards.forEach((card) => {
          gsap.to(card, { rotation: 0, duration: 0.4, ease: 'power2.out' });
        });
      });

      stackRef.current.addEventListener('mouseleave', () => {
        gsap.to(cards[0], { rotation: 2.5, duration: 0.4, ease: 'power2.out' });
        gsap.to(cards[1], { rotation: -1, duration: 0.4, ease: 'power2.out' });
        gsap.to(cards[2], { rotation: 0, duration: 0.4, ease: 'power2.out' });
      });

      // Initialize rotations
      gsap.set(cards[0], { rotation: 2.5 });
      gsap.set(cards[1], { rotation: -1 });
      gsap.set(cards[2], { rotation: 0 });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section id="why" className="relative w-full py-24 lg:py-32 px-8 lg:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left column */}
          <div className="flex flex-col justify-start">
            {/* Label */}
            <div className="label label-amber mb-4 why-left-item">Why OG</div>

            {/* Title */}
            <h2 className="font-bebas text-white mb-8 why-left-item">
              No Games. <br />
              No Guessing. <br />
              Just Fixed.
            </h2>

            {/* Pull quote */}
            <blockquote className="border-l-2 border-amber pl-6 mb-12 italic text-cream font-barlow font-300 text-base lg:text-lg leading-relaxed why-left-item">
              "Honest, fast, and local. The way a mechanic shop is supposed to be."
            </blockquote>

            {/* Feature list */}
            <div className="space-y-8">
              {features.map((feature, idx) => (
                <div key={idx} className="why-left-item flex gap-4">
                  {/* Checkmark icon */}
                  <div className="flex-shrink-0 w-8 h-8 bg-amber bg-opacity-20 flex items-center justify-center rounded-none">
                    <svg
                      className="w-5 h-5 text-amber"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="square"
                        strokeLinejoin="miter"
                        strokeWidth={1.5}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>

                  {/* Text */}
                  <div>
                    <h4 className="font-barlow-condensed font-600 text-white text-sm lg:text-base mb-2 uppercase tracking-wider">
                      {feature.title}
                    </h4>
                    <p className="text-xs lg:text-sm text-muted leading-relaxed">
                      {feature.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - Card stack */}
          <div
            ref={stackRef}
            className="relative h-80 lg:h-96 flex items-center justify-center cursor-pointer"
          >
            {/* Bottom card - charcoal */}
            <div
              className="stack-card absolute w-full max-w-sm h-56 bg-charcoal border border-border"
              style={{ bottom: '0px', zIndex: 1 }}
            />

            {/* Middle card - black */}
            <div
              className="stack-card absolute w-full max-w-sm h-56 bg-black border border-border"
              style={{ bottom: '20px', zIndex: 2 }}
            />

            {/* Top card - with review */}
            <div
              className="stack-card absolute w-full max-w-sm h-56 bg-steel border border-border p-6 lg:p-8 flex flex-col justify-between"
              style={{ bottom: '40px', zIndex: 3 }}
            >
              {/* Label */}
              <div className="text-xs font-barlow-condensed font-600 tracking-widest text-amber uppercase">
                Customer Review
              </div>

              {/* Quote */}
              <div>
                <p className="font-bebas text-2xl lg:text-3xl text-white leading-tight mb-4">
                  "Brought my truck in with a noise I'd been ignoring for two months."
                </p>
              </div>

              {/* Attribution */}
              <div>
                <p className="text-sm font-barlow-condensed font-600 text-white uppercase tracking-wider">
                  Dave K. <span className="text-amber">★★★★★</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
