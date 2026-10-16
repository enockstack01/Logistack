'use client';

import { motion } from 'framer-motion';

// Flat brand-colour illustration of the logo idea: stacked data and map layers
// connected by circuit traces. Decorative only.
const layers = [
  { y: 150, stroke: '#9CA0D6', fill: 'rgba(156,160,214,0.10)', delay: 0.2 },
  { y: 85, stroke: '#BFC2E6', fill: 'rgba(191,194,230,0.14)', delay: 0.4 },
  { y: 20, stroke: '#E8A33D', fill: 'rgba(255,255,255,0.10)', delay: 0.6 },
];

const rhombus = '200,0 380,90 200,180 20,90';

const traces = [
  { d: 'M120 105 L170 105 L200 120', delay: 1.1 },
  { d: 'M290 85 L250 85 L215 65', delay: 1.3 },
  { d: 'M200 120 L230 135 L270 135', delay: 1.5 },
];

const nodes = [
  { cx: 120, cy: 105, delay: 1.0 },
  { cx: 290, cy: 85, delay: 1.2 },
  { cx: 270, cy: 135, delay: 1.4 },
];

export default function DataStack() {
  return (
    <svg viewBox="0 0 400 360" className="h-auto w-full" role="img" aria-label="Stacked data layers connected by circuit traces">
      {layers.map((layer, i) => (
        <motion.g
          key={layer.y}
          initial={{ opacity: 0, y: layer.y - 30 }}
          animate={{ opacity: 1, y: [layer.y, layer.y - 8, layer.y] }}
          transition={{
            opacity: { duration: 0.7, delay: layer.delay },
            y: { duration: 6 + i, delay: layer.delay + 0.7, repeat: Infinity, ease: 'easeInOut' },
          }}
        >
          <polygon points={rhombus} fill={layer.fill} stroke={layer.stroke} strokeWidth="2" strokeLinejoin="round" />
        </motion.g>
      ))}

      {/* Circuit traces on the top layer */}
      <g transform="translate(0 20)" fill="none" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {traces.map((t) => (
          <motion.path
            key={t.d}
            d={t.d}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: t.delay }}
          />
        ))}
        {nodes.map((n) => (
          <motion.circle
            key={`${n.cx}-${n.cy}`}
            cx={n.cx}
            cy={n.cy}
            r="5"
            fill="#0A108A"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: n.delay }}
            style={{ transformOrigin: `${n.cx}px ${n.cy}px` }}
          />
        ))}
      </g>
    </svg>
  );
}
