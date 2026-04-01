'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const ringX = useRef(0);
  const ringY = useRef(0);

  useEffect(() => {
    // Don't show custom cursor on mobile/touch devices
    const isTouchDevice = () => {
      return (
        (typeof window !== 'undefined' &&
          'ontouchstart' in window) ||
        (typeof navigator !== 'undefined' &&
          navigator.maxTouchPoints > 0)
      );
    };

    if (isTouchDevice()) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      // Dot follows exactly
      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX.current}px`;
        dotRef.current.style.top = `${mouseY.current}px`;
      }
    };

    // Lerp animation loop for ring
    const animationLoop = () => {
      ringX.current += (mouseX.current - ringX.current) * 0.12;
      ringY.current += (mouseY.current - ringY.current) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX.current}px`;
        ringRef.current.style.top = `${ringY.current}px`;
      }

      requestAnimationFrame(animationLoop);
    };

    const handleMouseEnter = () => {
      if (dotRef.current) dotRef.current.style.opacity = '1';
      if (ringRef.current) ringRef.current.style.opacity = '1';
    };

    const handleMouseLeave = () => {
      if (dotRef.current) dotRef.current.style.opacity = '0';
      if (ringRef.current) ringRef.current.style.opacity = '0';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);

    const animationId = requestAnimationFrame(animationLoop);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <>
      {/* Dot layer */}
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 w-[6px] h-[6px] rounded-full bg-amber translate-x-[-3px] translate-y-[-3px] z-[1001] opacity-0 transition-opacity"
        style={{ mixBlendMode: 'normal' }}
      />

      {/* Ring layer */}
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 w-[36px] h-[36px] border border-amber rounded-full translate-x-[-18px] translate-y-[-18px] z-[1001] opacity-0 transition-opacity"
        style={{ mixBlendMode: 'normal' }}
      />

      {/* Hide default cursor */}
      <style>{`
        * {
          cursor: none !important;
        }
      `}</style>
    </>
  );
}
