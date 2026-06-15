'use client';

import { motion } from 'framer-motion';
import { Leaf, Brain, ExternalLink, ArrowRight, Sparkles, Globe } from 'lucide-react';

const programs = [
  {
    id: 'agricoders',
    badge: 'Our Program',
    badgeColor: 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30',
    icon: Leaf,
    iconBg: 'from-emerald-500 to-teal-600',
    title: 'Agricoders',
    tagline: 'Where Agriculture Meets Code',
    description:
      'Agricoders is our flagship program empowering farmers, agripreneurs, and rural communities with technology-driven solutions including precision agriculture tools and agri-data platforms that improve crop yields, resource management, and market access.',
    highlights: [
      'Precision Agriculture & GIS',
      'Agri-data Platforms',
      'Farmer Digital Literacy',
      'Market Access Tools',
    ],
    cta: 'Visit Agricoders',
    href: 'https://www.agricoders.com',
    accent: 'from-emerald-500/20 via-teal-500/10 to-transparent',
    border: 'border-emerald-500/20 hover:border-emerald-400/50',
    glow: 'shadow-emerald-500/10',
    ctaStyle:
      'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-400 hover:to-teal-500 shadow-lg shadow-emerald-500/20',
  },
  {
    id: 'logistack-plan',
    badge: 'AI-Powered App',
    badgeColor: 'bg-violet-500/20 text-violet-300 border border-violet-500/30',
    icon: Brain,
    iconBg: 'from-violet-500 to-blue-600',
    title: 'Logistack Plan',
    tagline: 'Intelligent Business Planning Software',
    description:
      'Logistack Plan is our AI-powered business planning software that transforms your ideas into comprehensive, investor-ready business plans in minutes. Powered by advanced AI, it delivers market research, financial projections, and strategic roadmaps tailored to your industry.',
    highlights: [
      'AI-Generated Business Plans',
      'Financial Projections',
      'Market Research & Analysis',
      'Investor-Ready Documents',
    ],
    cta: 'Try Logistack Plan',
    href: 'https://www.agricoders.com/app',
    accent: 'from-violet-500/20 via-blue-500/10 to-transparent',
    border: 'border-violet-500/20 hover:border-violet-400/50',
    glow: 'shadow-violet-500/10',
    ctaStyle:
      'bg-gradient-to-r from-violet-500 to-blue-600 hover:from-violet-400 hover:to-blue-500 shadow-lg shadow-violet-500/20',
  },
];

export default function FeaturedPrograms() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 px-6">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: `linear-gradient(rgba(59,130,246,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.08) 1px, transparent 1px)`,
          backgroundSize: '52px 52px',
        }}
        aria-hidden="true"
      />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(59,130,246,0.07) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span className="text-sm uppercase tracking-[0.2em] text-cyan-300">Our Programs &amp; Apps</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Built by Logistack,{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Powered by Innovation
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-slate-400">
            Explore the products and programs we've built to drive real impact, from agri-tech communities
            to AI-powered planning tools.
          </p>
        </motion.div>

        {/* Program cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                className={`group relative rounded-3xl border ${program.border} bg-slate-900/60 backdrop-blur-sm p-8 shadow-2xl ${program.glow} transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl flex flex-col`}
              >
                {/* Card gradient accent */}
                <div
                  className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${program.accent} opacity-50 pointer-events-none`}
                  aria-hidden="true"
                />

                <div className="relative z-10 flex flex-col flex-1">
                  {/* Badge */}
                  <span className={`inline-flex w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider mb-6 ${program.badgeColor}`}>
                    {program.badge}
                  </span>

                  {/* Icon + Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${program.iconBg} flex items-center justify-center shadow-lg`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-extrabold text-white">{program.title}</h3>
                      <p className="text-sm text-slate-400 mt-0.5">{program.tagline}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 leading-relaxed mb-6">{program.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-2 mb-8 flex-1">
                    {program.highlights.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-slate-300">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href={program.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group/btn inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 ${program.ctaStyle}`}
                  >
                    {program.cta}
                    <ExternalLink className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* All apps link */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-12 text-center"
        >
          <a
            href="https://www.agricoders.com/app"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-slate-400 hover:text-white text-sm font-medium transition-colors duration-200"
          >
            <Globe className="w-4 h-4" />
            Browse all our apps at agricoders.com/app
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
