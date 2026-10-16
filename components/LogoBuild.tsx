'use client';

import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

// The official Logistack symbol, split from the master file into its own pieces
// (see public/logo-pieces). The pieces slide together to form the logo, and the
// final frame is the unaltered symbol. Shown in the reversed white version for use on navy.
const W = 856;
const H = 800;

type Piece = {
  i: number;
  x: number;
  y: number;
  w: number;
  h: number;
  from: { x: string; y: string };
  delay: number;
  node?: boolean;
};

const pieces: Piece[] = [
  // Bottom layer, drawn first
  { i: 9, x: 1, y: 477, w: 536, h: 322, from: { x: '-40%', y: '30%' }, delay: 0.1 },
  { i: 10, x: 566, y: 478, w: 288, h: 237, from: { x: '60%', y: '40%' }, delay: 0.25 },
  // Top layer sections
  { i: 3, x: 0, y: 127, w: 572, h: 532, from: { x: '-30%', y: '-25%' }, delay: 0.45 },
  { i: 4, x: 282, y: 182, w: 574, h: 373, from: { x: '30%', y: '-30%' }, delay: 0.6 },
  { i: 0, x: 261, y: 1, w: 429, h: 314, from: { x: '0%', y: '-60%' }, delay: 0.75 },
  { i: 6, x: 212, y: 270, w: 186, h: 119, from: { x: '-80%', y: '-60%' }, delay: 0.9 },
  // Circuit nodes pop in last
  { i: 5, x: 165, y: 227, w: 27, h: 22, from: { x: '0%', y: '0%' }, delay: 1.4, node: true },
  { i: 1, x: 400, y: 86, w: 26, h: 21, from: { x: '0%', y: '0%' }, delay: 1.5, node: true },
  { i: 2, x: 500, y: 104, w: 26, h: 21, from: { x: '0%', y: '0%' }, delay: 1.6, node: true },
  { i: 7, x: 667, y: 289, w: 27, h: 21, from: { x: '0%', y: '0%' }, delay: 1.7, node: true },
  { i: 8, x: 420, y: 386, w: 28, h: 21, from: { x: '0%', y: '0%' }, delay: 1.8, node: true },
];

export default function LogoBuild() {
  const reduce = useReducedMotion();
  const [run, setRun] = useState(0);

  return (
    <button
      type="button"
      onClick={() => setRun((n) => n + 1)}
      onMouseEnter={() => setRun((n) => n + 1)}
      aria-label="Logistack Ltd symbol. Activate to replay the animation."
      className="relative block w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
      style={{ aspectRatio: `${W} / ${H}` }}
    >
      {pieces.map((p) => (
        <motion.img
          key={`${run}-${p.i}`}
          src={`/logo-pieces/p${p.i}.png`}
          alt=""
          aria-hidden="true"
          draggable={false}
          initial={reduce ? false : { opacity: 0, x: p.from.x, y: p.from.y, scale: p.node ? 0 : 1 }}
          animate={{ opacity: 1, x: '0%', y: '0%', scale: 1 }}
          transition={
            p.node
              ? { type: 'spring', stiffness: 400, damping: 18, delay: p.delay }
              : { duration: 0.8, delay: p.delay, ease: [0.22, 1, 0.36, 1] }
          }
          className="absolute select-none"
          style={{
            left: `${(p.x / W) * 100}%`,
            top: `${(p.y / H) * 100}%`,
            width: `${(p.w / W) * 100}%`,
            height: `${(p.h / H) * 100}%`,
            filter: 'brightness(0) invert(1)',
          }}
        />
      ))}
    </button>
  );
}
