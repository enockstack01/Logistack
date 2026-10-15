'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Database, Code, ShieldCheck, Users, FileText, MapPin, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Database,
    title: 'Data analysis and spatial intelligence',
    description: 'Advanced spatial data analysis and visualisation using ArcGIS and Google Earth Engine.',
    features: ['Geospatial analysis', 'Remote sensing', 'Data visualisation', 'Environmental monitoring'],
  },
  {
    icon: Code,
    title: 'Software engineering',
    description: 'Scalable mobile and web applications built with modern technologies.',
    features: ['Mobile apps', 'Web applications', 'API development', 'System integration'],
  },
  {
    icon: ShieldCheck,
    title: 'IT support',
    description: 'Subscription-based maintenance and support services that keep your systems running.',
    features: ['System monitoring', 'System maintenance', 'Security updates', 'Technical support'],
  },
  {
    icon: Users,
    title: 'Tech capacity building',
    description: 'Training programmes that build technical skills and digital literacy.',
    features: ['Workshops', 'Certifications', 'Skill development', 'Knowledge transfer'],
  },
  {
    icon: FileText,
    title: 'Business plan proposals',
    description: 'Professional documentation and strategic planning for business growth.',
    features: ['Market analysis', 'Financial planning', 'Strategy development', 'Implementation roadmap'],
  },
  {
    icon: MapPin,
    title: 'Precision agriculture',
    description: 'GIS solutions for agricultural optimisation, including irrigation planning and crop monitoring.',
    features: ['Crop monitoring', 'Irrigation optimisation', 'Yield prediction', 'Resource management'],
  },
];

export default function Services() {
  return (
    <main className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 max-w-4xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-logistack-amber mb-3">Services</p>
          <h1 className="text-4xl md:text-5xl font-bold text-logistack-navy mb-4">Our services</h1>
          <div className="h-1 w-16 bg-logistack-amber mb-6" />
          <p className="text-lg text-logistack-ink">
            We combine GIS, data science and software development to give clients the evidence they need to
            decide and the tools to act on it.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="rounded-xl bg-logistack-mist p-8"
            >
              <service.icon className="w-10 h-10 text-logistack-navy mb-5" />
              <h2 className="text-xl font-bold text-logistack-navy mb-3">{service.title}</h2>
              <p className="text-logistack-ink mb-5">{service.description}</p>
              <ul className="space-y-1">
                {service.features.map((feature) => (
                  <li key={feature} className="text-sm text-logistack-ink flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-logistack-navy flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="rounded-2xl bg-logistack-navy p-10 text-white">
          <h2 className="text-3xl font-bold mb-3">Ready to start?</h2>
          <div className="h-1 w-16 bg-logistack-amber mb-6" />
          <p className="text-logistack-periwinkle mb-8 max-w-2xl">
            Contact us to discuss your project and how our services can support it.
          </p>
          <Link
            href="/contact"
            className="inline-block rounded-lg bg-logistack-amber px-8 py-3 font-bold text-logistack-navy hover:bg-white transition-colors"
          >
            Contact us
          </Link>
        </div>
      </div>
    </main>
  );
}
