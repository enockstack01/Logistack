'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, CheckCircle2, Code, Database, Globe, BarChart3, Smartphone, Headphones, BookOpen, PieChart } from 'lucide-react';

const floatingElements = [
  {
    icon: Code,
    className: 'top-16 left-10 w-16 h-16 text-blue-400',
    animate: { x: [0, 90, 0], y: [0, -40, 0] },
    transition: { duration: 18, repeat: Infinity, ease: 'linear' },
  },
  {
    icon: Database,
    className: 'top-36 right-16 w-14 h-14 text-cyan-400',
    animate: { x: [0, -90, 0], y: [0, 50, 0] },
    transition: { duration: 22, repeat: Infinity, ease: 'linear' },
  },
  {
    icon: Globe,
    className: 'bottom-28 left-20 w-14 h-14 text-indigo-400',
    animate: { x: [0, 110, 0], y: [0, -35, 0] },
    transition: { duration: 26, repeat: Infinity, ease: 'linear' },
  },
];

const stats = [
  { value: '50+', label: 'Projects' },
  { value: '100%', label: 'Satisfaction' },
  { value: '5+', label: 'Years' },
];

const services = [
  {
    icon: BarChart3,
    title: 'Data Analysis',
    description: 'Data analysis & spatial intelligence solutions.'
  },
  {
    icon: Smartphone,
    title: 'Web & Mobile',
    description: 'Scalable mobile and web applications.'
  },
  {
    icon: Headphones,
    title: 'IT Support',
    description: 'Subscription-based IT support services.'
  },
  {
    icon: BookOpen,
    title: 'Tech Training',
    description: 'Tech capacity building.'
  },
  {
    icon: PieChart,
    title: 'Business Planning',
    description: 'Business plan proposal development.'
  },
];

export default function Hero() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen overflow-hidden bg-slate-950"
      aria-label="Hero section"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900" />

      <div className="absolute inset-0 opacity-20" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
            backgroundSize: '52px 52px',
          }}
        />
      </div>

      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        {floatingElements.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={index}
              animate={item.animate}
              transition={item.transition}
              className={`absolute ${item.className} opacity-30`}
            >
              <Icon className="w-full h-full" />
            </motion.div>
          );
        })}

        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full border border-blue-500/20" />
        <div className="absolute top-1/3 right-1/3 w-24 h-24 rounded-full border border-cyan-500/20" />
        <div className="absolute bottom-1/4 right-1/4 w-20 h-20 rounded-full border border-indigo-500/20" />

        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000" aria-hidden="true">
          <path d="M100,220 L320,220 L320,420" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" fill="none" />
          <path d="M720,300 L920,300 L920,520" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" fill="none" />
          <path d="M220,620 L420,620 L420,820" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" fill="none" />
        </svg>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20 text-center">
        <motion.div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
            className="inline-flex flex-col items-center gap-4 rounded-full border border-white/10 bg-white/5 px-5 py-4 text-center shadow-sm shadow-cyan-500/10"
          >
            <div className="inline-flex items-center gap-3 rounded-full bg-slate-950/80 px-4 py-3">
              <img src="/whitelogo.png" alt="Logistack logo" className="h-12 w-12 object-contain" />
              <div className="text-left">
                <p className="text-sm uppercase tracking-[0.28em] text-cyan-300">Logistack Ltd</p>
                <p className="text-base font-semibold text-white">Transforming Data to impact.</p>
              </div>
            </div>
            <p className="max-w-xl text-sm uppercase tracking-[0.24em] text-cyan-300">
              Reach out now to make your operations faster, smarter, and more scalable.
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl"
          >
            Transform your business operations with Data Science that works for you.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mx-auto max-w-3xl text-lg leading-8 text-slate-300 sm:text-xl"
          >
            Contact us to improve efficiency, reduce risk, and scale your operations with solutions built around data,
            automation, and strategic IT support.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.8 }}
            className="mx-auto max-w-4xl"
          >
            <div className="rounded-3xl border border-white/10 bg-blue-950/20 p-8 shadow-xl shadow-slate-950/40 backdrop-blur-xl">
              <div className="inline-flex animate-pulse rounded-full bg-blue-600 px-5 py-3 shadow-lg shadow-blue-500/20">
                <p className="text-sm uppercase tracking-[0.18em] text-white font-bold">This is what we do.</p>
              </div>
              <ul className="mt-6 space-y-5 text-left">
                <li className="rounded-3xl border border-cyan-500/20 bg-blue-950/80 px-5 py-4 text-white shadow-sm shadow-cyan-500/10 transition hover:border-cyan-400 hover:bg-blue-900">
                  <p className="text-base font-semibold sm:text-lg">Data analysis & spatial intelligence solutions.</p>
                </li>
                <li className="rounded-3xl border border-cyan-500/20 bg-blue-950/80 px-5 py-4 text-white shadow-sm shadow-cyan-500/10 transition hover:border-cyan-400 hover:bg-blue-900">
                  <p className="text-base font-semibold sm:text-lg">Scalable mobile and web applications.</p>
                </li>
                <li className="rounded-3xl border border-cyan-500/20 bg-blue-950/80 px-5 py-4 text-white shadow-sm shadow-cyan-500/10 transition hover:border-cyan-400 hover:bg-blue-900">
                  <p className="text-base font-semibold sm:text-lg">Subscription-based IT support services.</p>
                </li>
                <li className="rounded-3xl border border-cyan-500/20 bg-blue-950/80 px-5 py-4 text-white shadow-sm shadow-cyan-500/10 transition hover:border-cyan-400 hover:bg-blue-900">
                  <p className="text-base font-semibold sm:text-lg">Tech capacity building.</p>
                </li>
                <li className="rounded-3xl border border-cyan-500/20 bg-blue-950/80 px-5 py-4 text-white shadow-sm shadow-cyan-500/10 transition hover:border-cyan-400 hover:bg-blue-900">
                  <p className="text-base font-semibold sm:text-lg">Business plan proposal development.</p>
                </li>
              </ul>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
                <Link href="/contact" className="group inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 px-8 py-4 text-base font-semibold text-white shadow-2xl shadow-cyan-500/20 transition transform duration-300 hover:-translate-y-0.5 hover:shadow-cyan-500/30">
                  Contact Us
                  <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>

                <Link href="/services" className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white transition duration-300 hover:bg-white hover:text-slate-900">
                  Our Services
                </Link>
              </div>
            </div>
          </motion.div> 
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-3"
        >
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="block h-2.5 w-2.5 rounded-full bg-white/80"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
