'use client';

import { MotionConfig } from 'framer-motion';
import ScrollProgress from './ScrollProgress';

// Honours the visitor's reduced-motion setting across every animation on the site.
export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user">
      <ScrollProgress />
      {children}
    </MotionConfig>
  );
}
