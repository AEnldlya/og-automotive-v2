'use client';

import { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mouseX = useRef(0);
  const mouseY = useRef(0);
  const ringX = useRef(0);
  const ringY = useRef(0);
  const visible = useRef(false);

  useEffect(() => {
    // Don't show on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.current = e.clientX;
      mouseY.current = e.clientY;

      if (!visible.current) {
        visible.current = true;
        if (dotRef.current) dotRef.current.style.opacity = '1';
        if (ringRef.current) ringRef.current.style.opacity = '1';
      }

      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    const loop = () => {
      ringX.current += (mouseX.current - ringX.current) * 0.12;
      ringY.current += (mouseY.current - ringY.current) * 0.12;

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX.current}px`;
        ringRef.current.style.top = `${ringY.current}px`;
      }

      requestAnimationFrame(loop);
    };

    document.addEventListener('mousemove', handleMouseMove);
    const animId = requestAnimationFrame(loop);

    // Expand ring on interactive hover
    const addHoverListeners = () => {
      document.querySelectorAll('a, button, input, select, textarea, [role="button"]').forEach((el) => {
        el.addEventListener('mouseenter', () => {
          if (ringRef.current) {
            ringRef.current.style.width = '56px';
            ringRef.current.style.height = '56px';
            ringRef.current.style.transform = 'translate(-28px, -28px)';
            ringRef.current.style.borderColor = 'rgba(224, 123, 42, 0.9)';
          }
        });
        el.addEventListener('mouseleave', () => {
          if (ringRef.current) {
            ringRef.current.style.width = '36px';
            ringRef.current.style.height = '36px';
            ringRef.current.style.transform = 'translate(-18px, -18px)';
            ringRef.current.style.borderColor = 'rgba(224, 123, 42, 0.6)';
          }
        });
      });
    };

    // Run after DOM is ready + on mutations
    setTimeout(addHoverListeners, 500);
    const observer = new MutationObserver(() => setTimeout(addHoverListeners, 100));
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 6,
          height: 6,
          borderRadius: '50%',
          backgroundColor: '#e07b2a',
          transform: 'translate(-3px, -3px)',
          zIndex: 10001,
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity 0.3s ease',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: 36,
          height: 36,
          borderRadius: '50%',
          border: '1px solid rgba(224, 123, 42, 0.6)',
          transform: 'translate(-18px, -18px)',
          zIndex: 10001,
          pointerEvents: 'none',
          opacity: 0,
          transition: 'opacity 0.3s ease, width 0.2s ease, height 0.2s ease, transform 0.2s ease, border-color 0.2s ease',
        }}
      />
      <style>{`
        @media (pointer: fine) {
          *, *::before, *::after { cursor: none !important; }
          html, body { cursor: none !important; }
        }
      `}</style>
    </>
  );
}
