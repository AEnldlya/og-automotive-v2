'use client';

import { useEffect, useRef, useState } from 'react';

interface TextScrambleProps {
  children: string;
  className?: string;
}

export default function TextScramble({ children, className }: TextScrambleProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayText, setDisplayText] = useState(children);
  const [isScrambling, setIsScrambling] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isScrambling) {
          setIsScrambling(true);

          const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';
          const originalText = children;
          const duration = 800;
          const startTime = Date.now();

          const animate = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);

            if (progress < 1) {
              let newText = '';
              for (let i = 0; i < originalText.length; i++) {
                if (Math.random() < progress) {
                  newText += originalText[i];
                } else {
                  newText += chars[Math.floor(Math.random() * chars.length)];
                }
              }
              setDisplayText(newText);
              requestAnimationFrame(animate);
            } else {
              setDisplayText(originalText);
              observer.unobserve(ref.current!);
            }
          };

          animate();
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [children, isScrambling]);

  return (
    <span ref={ref} className={className}>
      {displayText}
    </span>
  );
}
