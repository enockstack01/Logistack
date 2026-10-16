'use client';

import { Database, Map, Code } from 'lucide-react';
import Reveal from './Reveal';
import SectionHeading from './SectionHeading';

// The layers in the Logistack symbol stand for data and GIS maps, and the circuits
// for the software that connects them.
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

export default function LayerStory() {
  return (
    <section className="bg-logistack-cloud px-6 py-20" aria-label="How the layers fit together">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.25em] text-logistack-amber">
            How it fits together
          </p>
        </Reveal>
        <SectionHeading>Layers that work together</SectionHeading>

        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <Reveal key={step.label} delay={i * 0.12}>
              <div className="group h-full rounded-xl border border-logistack-lavender bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-logistack-navy">
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-logistack-mist transition-colors duration-300 group-hover:bg-logistack-navy">
                  <step.icon className="h-6 w-6 text-logistack-navy transition-colors duration-300 group-hover:text-white" />
                </div>
                <h3 className="mb-2 text-xl font-bold text-logistack-navy">{step.label}</h3>
                <p className="text-logistack-ink">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
