'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ExpertiseSection from '@/components/ExpertiseSection';
import ContactFormSection from '@/components/ContactFormSection';

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' } }),
};

const floatAnim = (y: number, duration: number) => ({
  animate: { y: [0, y, 0], transition: { repeat: Infinity, duration, ease: 'easeInOut' } },
});

// ─── Data ─────────────────────────────────────────────────────────────────────
const stats = [
  { value: 'AED 462K+', label: 'Ad Spend Managed' },
  { value: '16K+', label: 'Leads Generated' },
  { value: '141K+', label: 'Meta Conversations' },
  { value: '5X', label: 'Average ROAS' },
];

const floatingCards = [
  { label: '+16K Leads Generated', sub: 'UAE + Australia', color: 'from-violet-500/20 to-violet-600/10', dot: 'bg-violet-400', position: 'top-4 -left-12 md:-left-16' },
  { label: 'AED 462K+ Ad Spend', sub: 'Managed directly', color: 'from-fuchsia-500/20 to-fuchsia-600/10', dot: 'bg-fuchsia-400', position: 'top-1/3 -right-8 md:-right-14' },
  { label: '5X ROAS', sub: 'Campaign average', color: 'from-blue-500/20 to-blue-600/10', dot: 'bg-blue-400', position: 'bottom-1/3 -left-10 md:-left-16' },
  { label: 'AI Optimization Active', sub: 'Server-side tracking', color: 'from-emerald-500/20 to-emerald-600/10', dot: 'bg-emerald-400', position: 'bottom-8 -right-6 md:-right-12' },
];

const services = [
  {
    icon: '⚡',
    title: 'Meta Ads',
    desc: 'Full-funnel acquisition campaigns built around lead quality, CPL visibility, and CAPI-powered conversion tracking.',
    tags: ['Lead Gen', 'Retargeting', 'CAPI', 'WhatsApp'],
  },
  {
    icon: '🔍',
    title: 'Google Ads',
    desc: 'Search and Performance Max campaigns structured for conversion intent — not impressions.',
    tags: ['Search', 'PMax', 'Conversion Tracking', 'CPL Optimization'],
  },
  {
    icon: '🤖',
    title: 'AI Campaign Optimization',
    desc: 'AI-assisted bid strategies, automated rules, and audience intelligence layered into every campaign.',
    tags: ['Smart Bidding', 'Audience AI', 'Auto Rules', 'Attribution'],
  },
  {
    icon: '📊',
    title: 'Conversion Tracking',
    desc: 'GA4, GTM, server-side tracking, Meta CAPI, and offline conversions — so every decision is data-backed.',
    tags: ['GA4', 'GTM', 'Meta CAPI', 'Offline Conversions'],
  },
  {
    icon: '⚙️',
    title: 'CRM Automation',
    desc: 'Lead routing, WhatsApp automation, follow-up sequences, and CRM pipelines that prevent lead leakage.',
    tags: ['Brevo', 'Zapier', 'WhatsApp', 'Pipelines'],
  },
  {
    icon: '📍',
    title: 'Local SEO & GBP',
    desc: 'Google Business Profile optimization, local citations, and service-page SEO to drive inbound leads.',
    tags: ['Local SEO', 'GBP', 'Schema', 'Search Console'],
  },
  {
    icon: '💬',
    title: 'WhatsApp Funnels',
    desc: 'Automated WhatsApp sequences triggered by lead form submissions for instant follow-up at scale.',
    tags: ['WABA', 'Automation', 'Sequences', 'Lead Response'],
  },
  {
    icon: '📈',
    title: 'Analytics Infrastructure',
    desc: 'Looker Studio dashboards, attribution models, and reporting systems that show what actually drives revenue.',
    tags: ['Looker Studio', 'Attribution', 'Dashboards', 'Reporting'],
  },
];

const aiSystems = [
  { title: 'Server-Side Tracking', desc: 'GTM server container + Meta CAPI for accurate attribution without browser limitations.' },
  { title: 'Offline Conversion Import', desc: 'CRM-to-Google Ads pipelines that feed qualified lead data back into campaign optimization.' },
  { title: 'AI-Assisted Bidding', desc: 'Smart bidding strategies trained on real conversion signals — not just clicks.' },
  { title: 'Automated Lead Routing', desc: 'Zapier workflows that instantly route, tag, and follow up on every inbound lead.' },
  { title: 'Attribution Modeling', desc: 'Multi-touch attribution in GA4 and Looker Studio to understand actual revenue drivers.' },
  { title: 'WhatsApp API Automation', desc: 'WABA-powered sequences that respond to leads within seconds, not hours.' },
];

const comparison = [
  ['Generic campaigns for any industry', 'Systems built for education and entertainment only'],
  ['Junior execution after the sales call', 'Direct operator involvement from day one'],
  ['Vanity metrics in monthly PDF reports', 'CPL, lead quality, attribution, and revenue visibility'],
  ['Account manager as your only contact', 'Direct, fast, honest — no middle layers'],
  ['High overhead, bloated retainer', 'Lean, focused, accountable to outcomes'],
];

const caseStudies = [
  {
    client: 'Circle Time UAE',
    industry: 'Preschool Education',
    image: '/images/screenshots/preschool01.png',
    result: '13x–20x ROAS',
    metrics: [{ label: 'Admissions', v: '40–60' }, { label: 'CPA', v: 'AED 50–75' }, { label: 'Revenue', v: 'AED 40K–60K' }],
    tags: ['Meta Ads', 'WhatsApp', 'UAE'],
  },
  {
    client: 'Jazz Rockers Australia',
    industry: 'Bollywood Dance',
    image: '/images/screenshots/bdancea01.png',
    result: '1,962 Leads',
    metrics: [{ label: 'CPL', v: 'AED 23–34' }, { label: 'Admissions', v: '100–200' }, { label: 'Revenue', v: 'AUD 12K–48K' }],
    tags: ['Meta Ads', 'Google Ads', 'Australia'],
  },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#0a0a0a] text-white">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">

        {/* Grid bg */}
        <div className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        {/* Glow */}
        <div className="pointer-events-none absolute -top-40 left-1/4 h-[700px] w-[700px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 65%)' }}
        />
        <div className="pointer-events-none absolute -top-20 right-0 h-[500px] w-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 65%)' }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">

            {/* LEFT — copy */}
            <div>
              <motion.div
                variants={fadeUp} initial="hidden" animate="show" custom={0}
                className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-400"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                Dubai · UAE + India + Global
              </motion.div>

              <motion.h1
                variants={fadeUp} initial="hidden" animate="show" custom={1}
                className="mt-7 text-4xl font-black leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
              >
                AI-Powered Performance Marketing{' '}
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                  That Drives Revenue.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp} initial="hidden" animate="show" custom={2}
                className="mt-6 max-w-xl text-base leading-8 text-zinc-400 md:text-lg"
              >
                Independent growth partner Mohamed Ibrahim Khan helps businesses across UAE, India, and globally scale using Meta Ads, Google Ads, AI-enhanced optimization systems, analytics, and conversion infrastructure.
              </motion.p>

              <motion.div
                variants={fadeUp} initial="hidden" animate="show" custom={3}
                className="mt-8 flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
                >
                  Work With Me
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link
                  href="/case-studies"
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Case Studies
                </Link>
              </motion.div>

              {/* Credibility pills */}
              <motion.div
                variants={fadeUp} initial="hidden" animate="show" custom={4}
                className="mt-10 flex flex-wrap gap-2"
              >
                {['Meta Ads', 'Google Ads', 'Server-side Tracking', 'CRM Automation', 'GA4 + GTM', 'WhatsApp Funnels'].map((t) => (
                  <span key={t} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 text-xs font-medium text-zinc-400">
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>

            {/* RIGHT — founder image + floating cards */}
            <motion.div
              variants={fadeUp} initial="hidden" animate="show" custom={2}
              className="relative mx-auto w-full max-w-sm md:max-w-none"
            >
              {/* Glow behind image */}
              <div className="absolute inset-0 rounded-3xl opacity-30"
                style={{ background: 'radial-gradient(ellipse, #7c3aed 0%, transparent 70%)', filter: 'blur(40px)' }}
              />

              {/* Founder image */}
              <div className="relative mx-auto max-w-[320px] md:max-w-full">
                <div className="overflow-hidden rounded-3xl border border-violet-500/20"
                  style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.15), rgba(168,85,247,0.05))' }}
                >
                  <img
                    src="/images/screenshots/mikdigital-founder.png"
                    alt="Mohamed Ibrahim Khan — Performance Marketing Operator"
                    className="w-full object-cover"
                  />
                </div>

                {/* Floating cards */}
                {floatingCards.map((card, i) => (
                  <motion.div
                    key={card.label}
                    className={`absolute ${card.position} z-10 hidden sm:block`}
                    {...floatAnim(i % 2 === 0 ? -8 : 8, 3 + i * 0.5)}
                  >
                    <div className={`flex items-center gap-2.5 rounded-xl border border-white/10 bg-gradient-to-br ${card.color} px-3.5 py-2.5 backdrop-blur-xl`}
                      style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
                    >
                      <span className={`h-2 w-2 rounded-full ${card.dot} animate-pulse`} />
                      <div>
                        <p className="text-xs font-bold text-white">{card.label}</p>
                        <p className="text-[10px] text-zinc-400">{card.sub}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── STATS ─────────────────────────────────────────────────────────── */}
      <section className="border-b border-white/[0.06]">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-2 gap-px bg-white/[0.06] md:grid-cols-4">
            {stats.map((s, i) => (
              <motion.div
                key={s.value}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.5}
                className="bg-[#0a0a0a] px-8 py-10"
              >
                <p className="text-3xl font-black text-white md:text-4xl">{s.value}</p>
                <p className="mt-2 text-sm text-zinc-500">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROBLEM ───────────────────────────────────────────────────────── */}
      <section className="border-b border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">The problem</p>
              <h2 className="mt-5 text-4xl font-black leading-tight text-white md:text-5xl">
                Most businesses spend on ads without knowing what happens next.
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Broken tracking, no attribution, CRM that never follows up, and campaigns optimised for clicks instead of customers. The result: wasted budget and invisible revenue.
              </p>
            </motion.div>
            <div className="space-y-3">
              {[
                'Poor lead quality from unqualified traffic',
                'Broken or missing conversion tracking',
                'No visibility between ad spend and revenue',
                'CRM with zero follow-up automation',
                'Agency reports full of vanity metrics',
                'Marketing and sales completely disconnected',
              ].map((p, i) => (
                <motion.div
                  key={p}
                  variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.1}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.02] px-5 py-4"
                >
                  <span className="mt-0.5 text-red-400 text-sm">✕</span>
                  <span className="text-sm text-zinc-400">{p}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section id="services" className="border-b border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">Services</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
              Infrastructure, not just campaigns.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-zinc-400">
              Everything is built to connect. Ads feed the CRM. Tracking feeds the decisions. Attribution feeds the strategy.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-px bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.08}
                className="group bg-[#0a0a0a] p-8 transition hover:bg-white/[0.03]"
              >
                <span className="text-2xl">{s.icon}</span>
                <h3 className="mt-4 text-lg font-black text-white">{s.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/[0.08] px-2.5 py-1 text-[10px] font-medium text-zinc-500">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI SYSTEMS ────────────────────────────────────────────────────── */}
      <section className="border-b border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">Technical infrastructure</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
              AI-enhanced systems most agencies can't build.
            </h2>
            <p className="mt-5 max-w-2xl text-lg text-zinc-400">
              Server-side tracking, offline conversions, automated lead routing — the technical layer that makes every campaign sharper.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiSystems.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.1}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-7 transition hover:border-violet-500/30 hover:bg-violet-500/5"
              >
                <div className="h-1.5 w-8 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                <h3 className="mt-5 text-base font-black text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE TABS ────────────────────────────────────────────────── */}
      <ExpertiseSection />

      {/* ── VS COMPARISON ─────────────────────────────────────────────────── */}
      <section className="border-b border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">Why not an agency</p>
            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
              The honest difference.
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="mt-14 overflow-hidden border border-white/[0.06]"
          >
            <div className="grid grid-cols-2 border-b border-white/[0.06] bg-white/[0.03]">
              <div className="border-r border-white/[0.06] px-8 py-5">
                <p className="text-sm font-semibold text-zinc-500">Typical Agency</p>
              </div>
              <div className="px-8 py-5">
                <p className="text-sm font-semibold text-violet-400">mikdigital</p>
              </div>
            </div>
            {comparison.map(([bad, good], i) => (
              <div key={i} className="grid grid-cols-2 border-b border-white/[0.06] last:border-0">
                <div className="border-r border-white/[0.06] px-8 py-6">
                  <p className="text-sm leading-7 text-zinc-500">{bad}</p>
                </div>
                <div className="bg-violet-950/20 px-8 py-6">
                  <p className="text-sm leading-7 text-zinc-200">{good}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CASE STUDIES ──────────────────────────────────────────────────── */}
      <section className="border-b border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">Work</p>
              <h2 className="mt-5 text-4xl font-black leading-tight text-white md:text-5xl">
                Real campaigns. Real numbers.
              </h2>
            </motion.div>
            <Link href="/case-studies" className="hidden text-sm font-semibold text-zinc-400 transition hover:text-white md:block">
              View all →
            </Link>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {caseStudies.map((study, i) => (
              <motion.div
                key={study.client}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.1}
                className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition hover:border-white/20"
              >
                <div className="overflow-hidden border-b border-white/[0.06]">
                  <img src={study.image} alt={study.client} className="w-full object-cover" />
                </div>
                <div className="p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">{study.industry}</p>
                  <h3 className="mt-3 text-2xl font-black text-white">{study.client}</h3>

                  <div className="mt-6 rounded-xl border border-violet-500/20 bg-violet-500/10 p-5">
                    <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">Key Result</p>
                    <p className="mt-2 text-3xl font-black text-white">{study.result}</p>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-px bg-white/[0.06]">
                    {study.metrics.map((m) => (
                      <div key={m.label} className="bg-[#0a0a0a] px-4 py-4">
                        <p className="text-base font-black text-white">{m.v}</p>
                        <p className="mt-1 text-xs text-zinc-500">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {study.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/[0.08] px-3 py-1 text-xs font-medium text-zinc-400">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-6 md:hidden">
            <Link href="/case-studies" className="text-sm font-semibold text-zinc-400 transition hover:text-white">
              View all case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ───────────────────────────────────────────────────────── */}
      <section className="border-b border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <motion.div
              variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
              className="overflow-hidden rounded-2xl border border-white/[0.06]"
            >
              <img
                src="/images/screenshots/mikdigital-founder.png"
                alt="Mohamed Ibrahim Khan"
                className="w-full object-cover"
              />
            </motion.div>

            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">Built and operated by</p>
              <h2 className="mt-5 text-4xl font-black leading-tight text-white md:text-5xl">
                Mohamed Ibrahim Khan.
              </h2>
              <p className="mt-2 text-zinc-500">Dubai, UAE · Available globally</p>

              <p className="mt-8 text-base leading-8 text-zinc-400">
                AI-powered performance marketer and freelance growth partner with hands-on experience running acquisition systems for education and entertainment brands across UAE and Australia. No agency overhead. No junior handoffs. Direct execution.
              </p>
              <p className="mt-4 text-base leading-8 text-zinc-400">
                Every campaign, tracking setup, CRM workflow, and attribution system is built and operated personally — giving clients direct access to technical expertise without the cost and delay of agency layers.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div key={s.value} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-5">
                    <p className="text-2xl font-black text-white">{s.value}</p>
                    <p className="mt-1 text-xs text-zinc-500">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {['Meta Ads', 'Google Ads', 'GTM', 'GA4', 'Meta CAPI', 'CRM', 'WhatsApp', 'Attribution', 'AI Optimization'].map((t) => (
                  <span key={t} className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://calendly.com/mikdigitalofficial/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
                >
                  Book Strategy Call
                </a>
                <a
                  href="https://wa.me/971506102836"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.08] px-8 py-20 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(10,10,10,1) 50%, rgba(168,85,247,0.1) 100%)' }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.2) 0%, transparent 60%)' }}
            />
            <div className="relative">
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">Ready to scale smarter?</p>
              <h2 className="mt-5 text-4xl font-black text-white md:text-6xl">
                Let's build your acquisition system.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg text-zinc-400">
                Meta Ads, Google Ads, server-side tracking, CRM automation, and full-funnel attribution — built and operated directly, no agency layers.
              </p>
              <div className="mt-10 flex flex-wrap justify-center gap-4">
                <a
                  href="https://calendly.com/mikdigitalofficial/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl px-8 py-4 text-sm font-semibold text-white transition hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
                >
                  Book a Strategy Call
                </a>
                <Link
                  href="/contact"
                  className="rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Start a Project
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── CONTACT FORM ──────────────────────────────────────────────────── */}
      <ContactFormSection />

      {/* ── MOBILE STICKY CTA ─────────────────────────────────────────────── */}
      <div className="fixed bottom-5 left-0 right-0 z-50 flex justify-center px-6 md:hidden">
        <a
          href="https://wa.me/971506102836"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-md rounded-xl px-6 py-4 text-center text-sm font-semibold text-white shadow-2xl"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
        >
          💬 WhatsApp — Book Strategy Call
        </a>
      </div>

    </main>
  );
}
