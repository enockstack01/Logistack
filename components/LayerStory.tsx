'use client';

import { useRef, useState } from 'react';
import { AnimatePresence, motion, useMotionValueEvent, useReducedMotion, useScroll, useTransform } from 'framer-motion';
import { Database, Map, Code } from 'lucide-react';

// Scroll-driven story built from the official logo pieces (public/logo-pieces).
// The layers stand for data and GIS maps, the circuit nodes for the software connecting them.
const W = 856;
const H = 800;

const steps = [
  {
    icon: Database,
    label: 'Data',
    text: 'We collect, clean and analyse the numbers behind your decision, with units, dates and sources.',
  },
  {
    icon: Map,
    label: 'Maps',
    text: 'We turn location data into GIS layers that show where things happen and why.',
  },
  {
    icon: Code,
    label: 'Software',
    text: 'We connect data and maps in applications your team can use every day.',
  },
];

type P = { i: number; x: number; y: number; w: number; h: number };

const bottom: P[] = [
  { i: 9, x: 1, y: 477, w: 536, h: 322 },
  { i: 10, x: 566, y: 478, w: 288, h: 237 },
];
const top: P[] = [
  { i: 3, x: 0, y: 127, w: 572, h: 532 },
  { i: 4, x: 282, y: 182, w: 574, h: 373 },
  { i: 0, x: 261, y: 1, w: 429, h: 314 },
];
const circuits: P[] = [
  { i: 6, x: 212, y: 270, w: 186, h: 119 },
  { i: 5, x: 165, y: 227, w: 27, h: 22 },
  { i: 1, x: 400, y: 86, w: 26, h: 21 },
  { i: 2, x: 500, y: 104, w: 26, h: 21 },
  { i: 7, x: 667, y: 289, w: 27, h: 21 },
  { i: 8, x: 420, y: 386, w: 28, h: 21 },
];

function Pieces({ list, dim }: { list: P[]; dim: boolean }) {
  return (
    <>
      {list.map((p) => (
        <img
          key={p.i}
          src={`/logo-pieces/p${p.i}.png`}
          alt=""
          aria-hidden="true"
          draggable={false}
          className="absolute select-none transition-opacity duration-500"
          style={{
            left: `${(p.x / W) * 100}%`,
            top: `${(p.y / H) * 100}%`,
            width: `${(p.w / W) * 100}%`,
            height: `${(p.h / H) * 100}%`,
            opacity: dim ? 0.22 : 1,
          }}
        />
      ))}
    </>
  );
}

export default function LayerStory() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] });

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const next = v < 0.34 ? 0 : v < 0.67 ? 1 : 2;
    setActive((prev) => (prev === next ? prev : next));
  });

  const bottomY = useTransform(scrollYProgress, [0, 0.25], ['0%', '10%']);
  const topY = useTransform(scrollYProgress, [0, 0.25], ['0%', '-8%']);
  const circuitY = useTransform(scrollYProgress, [0, 0.25], ['0%', '-22%']);
  const barScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  if (reduce) {
    return (
      <section className="bg-logistack-cloud px-6 py-20" aria-label="How the layers fit together">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-3 text-3xl font-bold text-logistack-navy">Layers that work together</h2>
          <div className="mb-10 h-1 w-16 bg-logistack-amber" />
          <div className="grid gap-6 md:grid-cols-3">
            {steps.map((s) => (
              <div key={s.label} className="rounded-xl border border-logistack-lavender bg-white p-6">
                <s.icon className="mb-4 h-8 w-8 text-logistack-navy" />
                <h3 className="mb-2 text-lg font-bold text-logistack-navy">{s.label}</h3>
                <p className="text-logistack-ink">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const Icon = steps[active].icon;

  return (
    <section ref={ref} className="relative h-[280vh] bg-logistack-cloud" aria-label="How the layers fit together">
      <div className="sticky top-0 flex h-screen items-center px-6 pt-20">
        <div className="mx-auto grid w-full max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-logistack-amber">How it fits together</p>
            <h2 className="mb-3 text-3xl font-bold text-logistack-navy sm:text-4xl">Layers that work together</h2>
            <div className="mb-8 h-1 w-16 bg-logistack-amber" />

            <div className="mb-8 flex gap-3" aria-hidden="true">
              {steps.map((s, i) => (
                <div
                  key={s.label}
                  className={`flex h-10 w-10 items-center justify-center rounded-full font-bold transition-colors duration-300 ${
                    i === active ? 'bg-logistack-navy text-white' : 'bg-logistack-mist text-logistack-navy'
                  }`}
                >
                  {i + 1}
                </div>
              ))}
            </div>

            <div className="min-h-[9rem]" aria-live="polite">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="mb-3 h-8 w-8 text-logistack-navy" />
                  <h3 className="mb-2 text-2xl font-bold text-logistack-navy">{steps[active].label}</h3>
                  <p className="max-w-md text-lg text-logistack-ink">{steps[active].text}</p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 h-1 w-full max-w-md bg-logistack-lavender">
              <motion.div style={{ scaleX: barScale }} className="h-full origin-left bg-logistack-navy" />
            </div>
          </div>

          <div className="mx-auto w-full max-w-xs py-8 lg:max-w-sm" role="img" aria-label="The Logistack symbol separating into layers for data, maps and software">
            <div className="relative w-full" style={{ aspectRatio: `${W} / ${H}` }}>
              <motion.div style={{ y: bottomY }} className="absolute inset-0">
                <Pieces list={bottom} dim={active !== 0} />
              </motion.div>
              <motion.div style={{ y: topY }} className="absolute inset-0">
                <Pieces list={top} dim={active !== 1} />
              </motion.div>
              <motion.div style={{ y: circuitY }} className="absolute inset-0">
                <Pieces list={circuits} dim={active !== 2} />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
