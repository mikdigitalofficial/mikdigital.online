'use client';

import { motion } from 'framer-motion';
import LeadForm from '@/components/LeadForm';
import Footer from '@/components/Footer';
import { ArrowUpRight, Linkedin, Instagram, Mail } from 'lucide-react';

const services = [
  'Meta Ads & Google Ads setup and management',
  'Server-side tracking & Meta CAPI',
  'GA4, GTM & attribution infrastructure',
  'CRM automation & WhatsApp funnels',
  'Full-funnel conversion systems',
  'Performance audit & strategy',
];

const revealY = (delay = 0) => ({
  initial: { opacity: 0, y: 24, filter: 'blur(4px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-40px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white overflow-hidden">

      {/* ── HERO ───────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/[0.05] py-24 md:py-36">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_70%_30%,rgba(124,58,237,0.07),transparent)]" />

        <div className="relative mx-auto max-w-7xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-8"
          >
            <div className="h-px w-8 bg-violet-500/50" />
            <span className="label-violet">Work With Me</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32, filter: 'blur(4px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-[clamp(2.4rem,6vw,5.5rem)] font-semibold tracking-tight leading-[1.04] max-w-4xl"
          >
            Let&apos;s build your<br />
            <span className="text-zinc-500">acquisition system.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-8 max-w-xl text-[1.1rem] leading-[1.8] text-zinc-400"
          >
            Work directly with <strong className="text-white font-semibold">Mohamed Ibrahim Khan</strong> —
            Solo Growth Operator. No account managers. No layers.
            The operator who built and ran these systems personally.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <a
              href="https://calendly.com/mikdigitalofficial/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Book Free Strategy Call <ArrowUpRight size={15} />
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
      </section>

      {/* ── OPERATOR IDENTITY + FORM ────────────────── */}
      <section className="py-24 md:py-32 border-b border-white/[0.05]">
        <div className="mx-auto max-w-7xl px-6 md:px-8">
          <div className="grid gap-16 md:grid-cols-2 md:items-start">

            {/* LEFT — Who I am */}
            <div>

              {/* Identity card */}
              <motion.div
                {...revealY()}
                className="flex items-center gap-5 mb-10 p-6 rounded-2xl border border-white/[0.07] bg-white/[0.02]"
              >
                <div className="h-14 w-14 rounded-full border border-violet-500/25 bg-violet-500/[0.12] flex items-center justify-center text-base font-bold text-violet-300 shrink-0">
                  MIK
                </div>
                <div>
                  <p className="text-[15px] font-semibold text-white">Mohamed Ibrahim Khan</p>
                  <p className="text-[13px] text-zinc-500 mt-0.5">Solo Growth Operator · Dubai, UAE</p>
                  <p className="text-[12px] text-zinc-700 mt-0.5">UAE & Australia · 5+ years in-house</p>
                </div>
              </motion.div>

              <motion.h2 {...revealY(0.07)} className="heading-lg mb-6">
                In-house ownership.<br />
                <span className="text-zinc-500">No layers.</span>
              </motion.h2>

              <motion.p {...revealY(0.1)} className="body-lg mb-10">
                Every project is handled directly by me — the same operator who built and ran
                acquisition systems for JAZZROCKERS INC across UAE & Australia. AED 462K+ managed.
                14,000+ leads generated. Not a theory. Execution.
              </motion.p>

              {/* Services */}
              <motion.div {...revealY(0.12)} className="space-y-2.5 mb-10">
                {services.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-5 py-4 transition-colors hover:border-white/[0.09]"
                  >
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-violet-500/25 bg-violet-500/15 text-violet-400">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4l1.75 1.75L6.5 2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-[14px] leading-relaxed text-zinc-300">{item}</span>
                  </div>
                ))}
              </motion.div>

              {/* Contact options */}
              <motion.div {...revealY(0.15)} className="grid grid-cols-2 gap-3">
                <a
                  href="https://calendly.com/mikdigitalofficial/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all hover:border-violet-500/25 hover:bg-violet-500/[0.05]"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-violet-400 mb-3">Strategy Call</p>
                  <p className="text-[15px] font-semibold text-white">Free 30-min</p>
                  <p className="text-[12px] text-zinc-600 mt-1">Walk through your acquisition gaps</p>
                  <p className="text-[12px] font-semibold text-violet-400 mt-4 group-hover:underline">Schedule →</p>
                </a>
                <a
                  href="https://wa.me/971506102836"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/[0.07] bg-white/[0.02] p-6 transition-all hover:border-green-500/20 hover:bg-green-500/[0.04]"
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-600 mb-3">WhatsApp</p>
                  <p className="text-[15px] font-semibold text-white">Message directly</p>
                  <p className="text-[12px] text-zinc-600 mt-1">Fast direct response</p>
                  <p className="text-[12px] font-semibold text-zinc-500 mt-4 group-hover:text-green-400 transition-colors">Chat now →</p>
                </a>
              </motion.div>

              {/* Social links */}
              <motion.div {...revealY(0.18)} className="flex items-center gap-2 mt-6">
                <a href="https://www.linkedin.com/in/mohamedibrahimkhan/" target="_blank" rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] text-zinc-500 transition hover:border-white/20 hover:text-white">
                  <Linkedin size={15} />
                </a>
                <a href="https://www.instagram.com/mikdigitalofficial/" target="_blank" rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] text-zinc-500 transition hover:border-white/20 hover:text-white">
                  <Instagram size={15} />
                </a>
                <a href="mailto:alex@mikdigital.online"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.07] text-zinc-500 transition hover:border-white/20 hover:text-white">
                  <Mail size={15} />
                </a>
              </motion.div>

            </div>

            {/* RIGHT — Form */}
            <motion.div
              {...revealY(0.1)}
              className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-8 md:sticky md:top-8"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="h-px w-6 bg-violet-500/50" />
                <span className="label-violet">Send a message</span>
              </div>
              <h3 className="text-2xl font-semibold text-white mt-3 mb-1">Get in touch</h3>
              <p className="text-[13px] text-zinc-600 mb-8">
                Mohamed replies within 24 hours — usually faster.
              </p>
              <LeadForm />
            </motion.div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
