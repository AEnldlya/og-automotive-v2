'use client';

import { ReactNode, useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

interface PageTransitionProps {
  children: ReactNode;
}

export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    setIsVisible(true);
  }, [pathname]);

  const variants = {
    hidden: { clipPath: 'inset(0 0 0 100%)' },
    visible: { clipPath: 'inset(0 0 0 0%)' },
    exit: { clipPath: 'inset(0 100% 0 0%)' },
  };

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial="hidden"
        animate="visible"
        exit="exit"
        variants={variants}
        transition={{
          duration: 0.6,
          ease: [0.87, 0, 0.13, 1],
        }}
        className="w-full"
      >
        <motion.div
          className="fixed inset-0 bg-gradient-to-r from-amber via-rust to-black pointer-events-none z-50"
          initial={{ clipPath: 'inset(0 100% 0 0%)' }}
          animate={{ clipPath: 'inset(0 0 0 100%)' }}
          exit={{ clipPath: 'inset(0 0 0 0%)' }}
          transition={{
            duration: 0.6,
            ease: [0.87, 0, 0.13, 1],
          }}
        />
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
