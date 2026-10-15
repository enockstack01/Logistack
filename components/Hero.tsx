'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ChevronRight, BarChart3, Smartphone, Headphones, BookOpen, PieChart } from 'lucide-react';

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

export default function Hero() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-logistack-navy pt-32 pb-20 px-6"
        aria-label="Introduction"
      >
        <div className="mx-auto max-w-5xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-logistack-amber mb-4">
            Data science, GIS and software
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Data, maps and software for decisions that work on the ground.
          </h1>
          <p className="max-w-3xl text-lg text-logistack-periwinkle mb-8">
            Logistack Ltd is a Kigali-based technology company. We help farmers, institutions and businesses
            in Rwanda and across Africa improve efficiency, reduce risk and scale their operations.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-logistack-amber px-8 py-3 font-bold text-logistack-navy hover:bg-white transition-colors"
            >
              Contact us
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-lg border-2 border-white px-8 py-3 font-bold text-white hover:bg-white hover:text-logistack-navy transition-colors"
            >
              Our services
            </Link>
          </div>
        </div>
      </motion.section>

      <section className="bg-white py-20 px-6" aria-label="What we do">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-3xl font-bold text-logistack-navy mb-3">What we do</h2>
          <div className="h-1 w-16 bg-logistack-amber mb-10" />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="rounded-xl bg-logistack-mist p-6">
                <service.icon className="h-8 w-8 text-logistack-navy mb-4" />
                <h3 className="text-lg font-bold text-logistack-navy mb-2">{service.title}</h3>
                <p className="text-logistack-ink">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
