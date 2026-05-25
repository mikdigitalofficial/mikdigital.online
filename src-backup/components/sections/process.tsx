'use client';

import { motion } from 'framer-motion';

const steps = [
  { label: 'Audit',          desc: 'Map current acquisition gaps, tracking setup, and conversion leaks.' },
  { label: 'Infrastructure', desc: 'Build the system foundations — CRM, tracking, funnel architecture.' },
  { label: 'Acquisition',    desc: 'Launch paid channels with structured testing and spend allocation.' },
  { label: 'Automation',     desc: 'Connect lead flow, CRM routing, and WhatsApp sequences.' },
  { label: 'Optimization',   desc: 'Iterate on CPL, conversion rate, and channel efficiency.' },
];

const revealY = (delay = 0) => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Process() {
  return (
    <section className="section relative">
      <div className="container-xl">

        <motion.div {...revealY()} className="flex items-center gap-3 mb-6">
          <div className="h-px w-8 bg-violet-500/50" />
          <span className="label">How I Work</span>
        </motion.div>
        <motion.h2 {...revealY(0.07)} className="heading-xl mb-16 md:mb-20">
          Execution Process
        </motion.h2>

        <div className="space-y-0">
          {steps.map(({ label, desc }, i) => (
            <motion.div
              key={label}
              {...revealY(i * 0.07)}
              className="group flex flex-col md:flex-row md:items-center gap-4 md:gap-16 border-b border-white/[0.05] py-8 last:border-0 hover:border-white/[0.1] transition-colors duration-300 cursor-default"
            >
              <span className="shrink-0 text-[11px] font-semibold tracking-[0.2em] text-zinc-700 group-hover:text-violet-500/60 transition-colors duration-300">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="flex-1 text-[1.8rem] md:text-[2.6rem] font-semibold tracking-tight text-white leading-tight group-hover:translate-x-1 transition-transform duration-300">
                {label}
              </h3>
              <p className="text-[13px] text-zinc-600 md:max-w-[260px] leading-relaxed group-hover:text-zinc-400 transition-colors duration-300">
                {desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
