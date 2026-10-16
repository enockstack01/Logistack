'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, BarChart3, Smartphone, Headphones, BookOpen, PieChart } from 'lucide-react';
import LogoBuild from './LogoBuild';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';
import LayerStory from './LayerStory';

const services = [
  {
    icon: BarChart3,
    title: 'Data analysis and GIS',
    description: 'Data analysis and spatial intelligence solutions.',
  },
  {
    icon: Smartphone,
    title: 'Software development',
    description: 'Scalable mobile and web applications.',
  },
  {
    icon: Headphones,
    title: 'IT support',
    description: 'Subscription-based IT support services.',
  },
  {
    icon: BookOpen,
    title: 'Tech training',
    description: 'Technology capacity building.',
  },
  {
    icon: PieChart,
    title: 'Business planning',
    description: 'Business plan proposal development.',
  },
];

const headline = 'Data, maps and software for decisions that work on the ground.'.split(' ');

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-logistack-navy px-6 pb-20 pt-32 lg:pb-28 lg:pt-40" aria-label="Introduction">
        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-logistack-amber"
            >
              Data science, GIS and software
            </motion.p>

            <h1 className="mb-6 text-4xl font-bold text-white sm:text-5xl">
              {headline.map((word, i) => (
                <motion.span
                  key={`${word}-${i}`}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
                  className="mr-[0.25em] inline-block"
                >
                  {word}
                </motion.span>
              ))}
            </h1>

            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mb-6 h-1 w-16 origin-left bg-logistack-amber"
            />

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="mb-8 max-w-xl text-lg text-logistack-periwinkle"
            >
              Logistack Ltd is a Kigali-based technology company. We help farmers, institutions and businesses
              in Rwanda and across Africa improve efficiency, reduce risk and scale their operations.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.15 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center rounded-lg bg-logistack-amber px-8 py-3 font-bold text-logistack-navy transition-colors hover:bg-white"
              >
                Contact us
                <ChevronRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 font-bold text-white transition-colors hover:bg-white hover:text-logistack-navy"
              >
                Our services
              </Link>
            </motion.div>
          </div>

          <div className="mx-auto w-full max-w-md lg:max-w-none">
            <LogoBuild />
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20" aria-label="What we do">
        <div className="mx-auto max-w-7xl">
          <SectionHeading>What we do</SectionHeading>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.title} delay={i * 0.08}>
                <Link
                  href="/services"
                  className="group block h-full rounded-xl bg-logistack-mist p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-logistack-navy"
                >
                  <service.icon className="mb-4 h-8 w-8 text-logistack-navy transition-colors duration-300 group-hover:text-logistack-amber" />
                  <h3 className="mb-2 text-lg font-bold text-logistack-navy transition-colors duration-300 group-hover:text-white">
                    {service.title}
                  </h3>
                  <p className="text-logistack-ink transition-colors duration-300 group-hover:text-logistack-periwinkle">
                    {service.description}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <LayerStory />

      <section className="bg-white px-6 py-20" aria-label="How we work">
        <div className="mx-auto max-w-7xl">
          <SectionHeading>How we work</SectionHeading>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ['1', 'Understand', 'We start on the ground with your farm, district or business and the decision you need to make.'],
              ['2', 'Analyse and build', 'We turn your data, maps and requirements into analysis and software that answer it.'],
              ['3', 'Support and train', 'We keep systems running and train your team to use them with confidence.'],
            ].map(([n, title, text], i) => (
              <Reveal key={n} delay={i * 0.12}>
                <div className="h-full rounded-xl border border-logistack-lavender bg-white p-6">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-logistack-navy font-bold text-white">
                    {n}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-logistack-navy">{title}</h3>
                  <p className="text-logistack-ink">{text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-6 py-20" aria-label="Contact call to action">
        <Reveal className="mx-auto max-w-7xl">
          <div className="rounded-2xl bg-logistack-navy p-10 text-white sm:p-14">
            <h2 className="mb-3 text-3xl font-bold">Ready to start?</h2>
            <div className="mb-6 h-1 w-16 bg-logistack-amber" />
            <p className="mb-8 max-w-2xl text-logistack-periwinkle">
              Tell us about your project and we will explain how we can help.
            </p>
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-logistack-amber px-8 py-3 font-bold text-logistack-navy transition-colors hover:bg-white"
            >
              Contact us
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
