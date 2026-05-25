'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';

const stats = [
  { value: 'AED 462K+', label: 'Ad Spend Managed', sub: 'UAE & Australia' },
  { value: '14,000+',   label: 'Qualified Leads',   sub: 'Across all channels' },
  { value: 'AED 33',    label: 'Average CPL',        sub: 'Meta & Google' },
  { value: '141K+',     label: 'Conversations',      sub: 'WhatsApp & CRM' },
];

const stagger = {
  container: { animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } } },
  item: {
    initial: { opacity: 0, y: 24, filter: 'blur(4px)' },
    animate: { opacity: 1, y: 0, filter: 'blur(0px)', transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  },
};

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen overflow-hidden border-b border-white/[0.05]">

      {/* Grid background */}
      <div className="absolute inset-0 grid-bg" />

      {/* Subtle radial vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(124,58,237,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_100%,rgba(0,0,0,0.8),transparent)]" />

      {/* Horizontal rule lines — cinematic detail */}
      <div className="absolute left-0 right-0 top-[38%] h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto max-w-7xl px-6 md:px-8"
      >
        <motion.div
          variants={stagger.container}
          initial="initial"
          animate="animate"
          className="pt-28 pb-20 md:pt-36 md:pb-28"
        >

          {/* Eyebrow */}
          <motion.div variants={stagger.item} className="flex items-center gap-3 mb-10">
            <div className="h-px w-8 bg-violet-500/60" />
            <span className="label-violet">Solo Growth Operator · UAE & Australia</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={stagger.item}
            className="text-[clamp(2.6rem,7vw,6.5rem)] font-semibold leading-[1.0] tracking-tight max-w-6xl"
          >
            <span className="text-white">Acquisition</span>
            <br />
            <span className="text-zinc-500">Infrastructure</span>
            <br />
            <span className="text-white">For Modern</span>
            <br />
            <span className="gradient-text">Brands.</span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            variants={stagger.item}
            className="mt-8 max-w-xl text-[1.05rem] leading-[1.8] text-zinc-400"
          >
            Performance marketing, CRM systems, SEO infrastructure, and conversion
            architecture across UAE & Australia markets.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={stagger.item} className="mt-10 flex flex-wrap gap-3">
            <Link href="/case-studies" className="btn-primary">
              View Case Studies <ArrowUpRight size={15} />
            </Link>
            <a
              href="https://calendly.com/mikdigitalofficial/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Book Strategy Call
            </Link>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            variants={stagger.item}
            className="mt-20 md:mt-28 grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map(({ value, label, sub }) => (
              <motion.div
                key={label}
                whileHover={{ y: -4, transition: { duration: 0.3, ease: 'easeOut' } }}
                className="premium-card p-6 md:p-8 group"
              >
                <div className="text-[2.2rem] md:text-[2.8rem] font-semibold tracking-tight leading-none text-white">
                  {value}
                </div>
                <p className="mt-3 text-[13px] font-medium text-zinc-300">{label}</p>
                <p className="mt-1 text-[11px] text-zinc-600 tracking-wide">{sub}</p>
              </motion.div>
            ))}
          </motion.div>

        </motion.div>
      </motion.div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#050505] to-transparent" />
    </section>
  );
}
