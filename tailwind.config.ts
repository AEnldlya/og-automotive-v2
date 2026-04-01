import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        bebas: 'var(--font-bebas)',
        'barlow-condensed': 'var(--font-barlow-condensed)',
        barlow: 'var(--font-barlow)',
      },
      colors: {
        black: 'var(--color-black)',
        charcoal: 'var(--color-charcoal)',
        steel: 'var(--color-steel)',
        amber: 'var(--color-amber)',
        'amber-light': 'var(--color-amber-light)',
        rust: 'var(--color-rust)',
        cream: 'var(--color-cream)',
        muted: 'var(--color-muted)',
        white: 'var(--color-white)',
        border: 'var(--color-border)',
        'border-amber': 'var(--color-border-amber)',
      },
      spacing: {
        xs: 'var(--space-xs)',
        sm: 'var(--space-sm)',
        md: 'var(--space-md)',
        lg: 'var(--space-lg)',
        xl: 'var(--space-xl)',
        '2xl': 'var(--space-2xl)',
        '3xl': 'var(--space-3xl)',
      },
      animation: {
        marquee: 'marquee 22s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
