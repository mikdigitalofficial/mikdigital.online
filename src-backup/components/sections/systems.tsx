'use client';

import { motion } from 'framer-motion';

const systems = [
  { name: 'Meta Ads Infrastructure', desc: 'Campaign architecture, audience segmentation, creative systems' },
  { name: 'CRM Automation',          desc: 'Zoho workflows, lead routing, pipeline automation' },
  { name: 'Landing Page Systems',    desc: 'Conversion-focused pages wired to your funnel' },
  { name: 'WhatsApp Lead Flows',     desc: 'Automated qualification and conversation sequences' },
  { name: 'Conversion Tracking',     desc: 'Server-side, GA4, Meta CAPI — no blind spots' },
  { name: 'Lead Routing Systems',    desc: 'Instant assignment, follow-up automation, CRM sync' },
];

const revealY = (delay = 0) => ({
  initial: { opacity: 0, y: 24, filter: 'blur(4px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1], delay },
});

export default function Systems() {
  return (
    <section id="services" className="section relative">
      <div className="container-xl">

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <div>
            <motion.div {...revealY()} className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-violet-500/50" />
              <span className="label">Infrastructure</span>
            </motion.div>
            <motion.h2 {...revealY(0.08)} className="heading-xl">
              Systems I Build
            </motion.h2>
          </div>
          <motion.p {...revealY(0.1)} className="body-sm md:max-w-xs md:text-right md:mb-1">
            End-to-end acquisition stacks built for execution, not slide decks.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {systems.map(({ name, desc }, i) => (
            <motion.div
              key={name}
              {...revealY(i * 0.06)}
              whileHover={{ y: -4, transition: { duration: 0.3 } }}
              className="group card relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="text-[11px] font-semibold tracking-[0.18em] text-zinc-700 uppercase mb-4">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="text-[1.2rem] font-semibold text-white leading-snug mb-3">{name}</h3>
              <p className="text-[13px] text-zinc-600 leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
