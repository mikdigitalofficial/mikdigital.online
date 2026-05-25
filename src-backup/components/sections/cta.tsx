'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="section relative overflow-hidden">
      {/* Radial accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_50%,rgba(124,58,237,0.07),transparent)]" />
      <div className="absolute inset-0 grid-bg opacity-[0.4]" />

      <div className="container-xl relative z-10">
        <div className="mx-auto max-w-4xl text-center">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-violet-500/50" />
            <span className="label">Ready to scale</span>
            <div className="h-px w-8 bg-violet-500/50" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28, filter: 'blur(4px)' }}
            whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.4rem,6vw,5rem)] font-semibold tracking-tight leading-[1.05] text-white mb-6"
          >
            Built for execution.<br />
            <span className="text-zinc-500">Not meetings.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="body-lg mx-auto max-w-lg mb-10"
          >
            Independent operator focused on acquisition systems, automation,
            and conversion infrastructure.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="https://calendly.com/mikdigitalofficial/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Strategy Call <ArrowUpRight size={15} />
            </a>
            <a
              href="https://wa.me/971506102836"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp Me
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
