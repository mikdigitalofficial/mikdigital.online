'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { value: 'AED 462K+', label: 'Ad Spend Managed',       note: 'JAZZROCKERS INC — UAE & AUS' },
  { value: '14,000+',   label: 'Qualified Leads',         note: 'Multi-channel acquisition'    },
  { value: '141K+',     label: 'Customer Conversations',  note: 'WhatsApp + CRM automation'    },
  { value: 'AED 33',    label: 'Average CPL',             note: 'Meta & Google performance'    },
  { value: '600–700',   label: 'Customers / Month',       note: 'Peak acquisition output'      },
  { value: '20+',       label: 'GBP Profiles Ranked',     note: 'Local SEO infrastructure'     },
];

const timeline = [
  {
    year: '2022',
    title: 'Ecommerce + SEO Systems',
    detail: 'Built foundational acquisition infrastructure and organic ranking systems.',
  },
  {
    year: '2023',
    title: 'Regional Acquisition Scaling',
    detail: 'Scaled paid performance across UAE & Australia with multi-channel funnels.',
  },
  {
    year: '2024',
    title: 'CRM + Funnel Infrastructure',
    detail: 'Deployed Zoho CRM workflows, WhatsApp lead flows, and conversion tracking.',
  },
  {
    year: '2025',
    title: 'One-Person Growth Operations',
    detail: 'Running end-to-end acquisition systems independently across UAE & Australia.',
  },
];

const revealY = (delay = 0) => ({
  initial: { opacity: 0, y: 32, filter: 'blur(4px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

export default function OperatorStory() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: timelineRef, offset: ['start end', 'end start'] });
  const lineHeight = useTransform(scrollYProgress, [0, 0.8], ['0%', '100%']);

  return (
    <section id="story" className="section relative overflow-hidden">

      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_80%_50%,rgba(124,58,237,0.04),transparent)]" />

      <div className="container-xl relative z-10">

        {/* Header */}
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-end mb-20 md:mb-28">
          <div>
            <motion.div {...revealY()} className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-violet-500/50" />
              <span className="label">Built Through Execution</span>
            </motion.div>
            <motion.h2 {...revealY(0.08)} className="heading-xl">
              Performance systems<br />
              <span className="text-zinc-500">across two markets.</span>
            </motion.h2>
          </div>
          <motion.p {...revealY(0.14)} className="body-lg md:mb-2">
            JAZZROCKERS INC — UAE & Australia. Real acquisition infrastructure,
            real spend, real outcomes. Not theory.
          </motion.p>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-24 md:mb-32">
          {stats.map(({ value, label, note }, i) => (
            <motion.div
              key={label}
              {...revealY(i * 0.06)}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="metric-card group relative overflow-hidden"
            >
              {/* Subtle shimmer on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-violet-500/[0.04] to-transparent rounded-2xl" />
              <div className="relative">
                <div className="text-[2rem] md:text-[2.5rem] font-semibold tracking-tight text-white leading-none">
                  {value}
                </div>
                <p className="mt-3 text-[13px] font-medium text-zinc-300">{label}</p>
                <p className="mt-1.5 text-[11px] text-zinc-600 tracking-wide">{note}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Timeline */}
        <div ref={timelineRef}>
          <motion.div {...revealY()} className="flex items-center gap-3 mb-12">
            <div className="h-px w-8 bg-violet-500/50" />
            <span className="label">Timeline</span>
          </motion.div>

          <div className="relative">
            {/* Animated vertical line */}
            <div className="absolute left-[72px] top-0 bottom-0 w-px bg-white/[0.05] hidden md:block" />
            <motion.div
              className="absolute left-[72px] top-0 w-px bg-gradient-to-b from-violet-500/40 to-violet-500/0 hidden md:block"
              style={{ height: lineHeight }}
            />

            <div className="space-y-0">
              {timeline.map(({ year, title, detail }, i) => (
                <motion.div
                  key={year}
                  {...revealY(i * 0.1)}
                  className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-12 border-b border-white/[0.05] py-8 last:border-0 hover:border-white/[0.09] transition-colors duration-300"
                >
                  {/* Year */}
                  <div className="shrink-0 md:w-16 text-[11px] font-semibold tracking-widest text-zinc-600 group-hover:text-violet-500/70 transition-colors duration-300">
                    {year}
                  </div>

                  {/* Dot */}
                  <div className="hidden md:flex shrink-0 items-center justify-center w-2 h-2 rounded-full bg-zinc-700 group-hover:bg-violet-500 transition-colors duration-400 ml-1" />

                  {/* Content */}
                  <div className="flex-1 flex flex-col md:flex-row md:items-center md:justify-between gap-2 md:gap-8">
                    <h3 className="text-[1.6rem] md:text-[2.2rem] font-semibold tracking-tight text-white leading-tight group-hover:text-white transition-colors">
                      {title}
                    </h3>
                    <p className="text-sm text-zinc-600 md:text-right md:max-w-xs leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                      {detail}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
