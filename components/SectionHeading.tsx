'use client';

import { motion } from 'framer-motion';

// Heading that slides up from behind a mask, with the amber rule drawing in underneath.
export default function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <div className="overflow-hidden pb-1">
        <motion.h2
          initial={{ y: '100%' }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl font-bold text-logistack-navy"
        >
          {children}
        </motion.h2>
      </div>
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.6, delay: 0.25 }}
        className="mt-3 h-1 w-16 origin-left bg-logistack-amber"
      />
    </div>
  );
}
