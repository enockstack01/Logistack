'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Target, Users, TrendingUp, Shield, MapPin } from 'lucide-react';

const attributes = [
  {
    icon: Target,
    title: 'Precise',
    description: 'We use real numbers with units and sources, never vague claims.',
  },
  {
    icon: TrendingUp,
    title: 'Evidence-led',
    description: 'Every figure we publish cites where it came from, with dates.',
  },
  {
    icon: Users,
    title: 'Grounded',
    description: 'We speak to the farm, the district and the user, not to abstract technology.',
  },
  {
    icon: MapPin,
    title: 'Local and ambitious',
    description: 'We are proudly Kigali-based and built for national and continental scale.',
  },
];

const expertise = [
  'GIS and spatial data analysis using ArcGIS and Google Earth Engine',
  'Precision agriculture and environmental monitoring solutions',
  'Custom software development for mobile and web applications',
  'IT infrastructure management and support services',
  'Technology training and capacity building programmes',
];

export default function About() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 max-w-4xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-logistack-amber mb-3">About us</p>
          <h1 className="text-4xl md:text-5xl font-bold text-logistack-navy mb-4">About Logistack Ltd</h1>
          <div className="h-1 w-16 bg-logistack-amber mb-6" />
          <p className="text-lg text-logistack-ink">
            Logistack Ltd is a Kigali-based technology company working in data science, GIS, software
            development and technology capacity building, with deep roots in the food systems and environmental
            sectors of Rwanda.
          </p>
        </motion.div>

        <div className="rounded-xl bg-logistack-mist border-l-4 border-logistack-amber p-6 mb-16 max-w-4xl">
          <p className="text-xs font-bold uppercase tracking-widest text-logistack-amber mb-2">Positioning</p>
          <p className="text-logistack-ink">
            Logistack turns data, maps and software into decisions that work on the ground, for farmers,
            institutions and businesses in Rwanda and across Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-2xl font-bold text-logistack-navy mb-3">Our expertise</h2>
            <div className="h-1 w-12 bg-logistack-amber mb-6" />
            <ul className="space-y-3">
              {expertise.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-logistack-navy rounded-full mt-2 flex-shrink-0" />
                  <span className="text-logistack-ink">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl bg-logistack-navy p-8 text-white">
            <h2 className="text-2xl font-bold mb-3">What our logo means</h2>
            <div className="h-1 w-12 bg-logistack-amber mb-6" />
            <p className="text-logistack-periwinkle">
              The mark shows stacked layers carrying circuit traces. The layers stand for data stacks and GIS
              map layers, and the circuits stand for the software and intelligence connecting them.
            </p>
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-logistack-navy mb-3">How we work</h2>
          <div className="h-1 w-16 bg-logistack-amber mb-8" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {attributes.map((item) => (
              <div key={item.title} className="rounded-xl bg-logistack-mist p-6">
                <item.icon className="w-8 h-8 text-logistack-navy mb-4" />
                <h3 className="text-lg font-bold text-logistack-navy mb-2">{item.title}</h3>
                <p className="text-logistack-ink">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-logistack-navy p-10 text-white">
          <h2 className="text-3xl font-bold mb-3">Ready to work with us?</h2>
          <div className="h-1 w-16 bg-logistack-amber mb-6" />
          <p className="text-logistack-periwinkle mb-8 max-w-2xl">
            Tell us about your project and we will explain how we can help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="inline-block rounded-lg bg-logistack-amber px-8 py-3 text-center font-bold text-logistack-navy hover:bg-white transition-colors"
            >
              Contact us
            </Link>
            <Link
              href="/services"
              className="inline-block rounded-lg border-2 border-white px-8 py-3 text-center font-bold text-white hover:bg-white hover:text-logistack-navy transition-colors"
            >
              Our services
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
