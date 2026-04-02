'use client';

import Link from 'next/link';

interface LogoProps {
  className?: string;
  showText?: boolean;
}

export default function Logo({ className = '', showText = true }: LogoProps) {
  return (
    <Link href="/" className={`flex items-center gap-3 ${className}`}>
      {/* OG Logo Mark */}
      <div className="relative w-10 h-10 flex items-center justify-center">
        {/* Gear outer ring */}
        <svg viewBox="0 0 40 40" className="w-full h-full">
          <circle 
            cx="20" cy="20" r="18" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2"
            className="text-[#c41e3a]"
          />
          {/* Inner circle */}
          <circle 
            cx="20" cy="20" r="8" 
            fill="currentColor"
            className="text-[#c41e3a]"
          />
          {/* Spokes */}
          <path
            d="M20 2 L20 10 M20 30 L20 38 M2 20 L10 20 M30 20 L38 20"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            className="text-[#1e3a5f]"
          />
        </svg>
      </div>
      
      {showText && (
        <div className="flex flex-col">
          <span className="font-[family-name:var(--font-bebas)] text-xl tracking-wider text-white leading-none">
            OG <span className="text-[#c41e3a]">AUTO</span>
          </span>
          <span className="text-[10px] tracking-[0.3em] text-[#8b9db8] uppercase">
            White River Junction
          </span>
        </div>
      )}
    </Link>
  );
}
