'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

// Thin Harvest Amber reading bar fixed above the navbar.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed left-0 right-0 top-0 z-[60] h-[3px] origin-left bg-logistack-amber"
    />
  );
}
