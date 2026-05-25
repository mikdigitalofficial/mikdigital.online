'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import ExpertiseSection from '@/components/ExpertiseSection';
import ContactFormSection from '@/components/ContactFormSection';

// ─── Animation variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const floatAnim = (y: number, duration: number) => ({
  animate: {
    y: [0, y, 0],
    transition: { repeat: Infinity, duration, ease: 'easeInOut' },
  },
});

// ─── SVG Icon Components ──────────────────────────────────────────────────────

// Meta: two overlapping infinity-loop ovals — universally recognised Meta shape
const MetaIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
    <ellipse cx="10" cy="16" rx="5.5" ry="8.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <ellipse cx="22" cy="16" rx="5.5" ry="8.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <line x1="15.5" y1="7.5" x2="16.5" y2="7.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <line x1="15.5" y1="24.5" x2="16.5" y2="24.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// Google Ads: magnifying glass with a dollar/cursor inside — search + spend
const GoogleAdsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
    <circle cx="14" cy="14" r="8" stroke="currentColor" strokeWidth="2"/>
    <line x1="20" y1="20" x2="27" y2="27" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M11 14h6M14 11v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

// AI Optimization: sparkle / star burst — clear "AI magic" symbol
const AIIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
    <path d="M16 4v5M16 23v5M4 16h5M23 16h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M7.5 7.5l3.5 3.5M21 21l3.5 3.5M21 7.5l-3.5 3.5M11 21l-3.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="16" r="4" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

// Conversion Tracking: upward line chart, clear and simple
const TrackingIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
    <polyline points="4,24 10,16 15,19 21,10 28,13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="28" cy="13" r="2.5" fill="currentColor"/>
    <line x1="4" y1="28" x2="28" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".35"/>
    <line x1="4" y1="4" x2="4" y2="28" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity=".35"/>
  </svg>
);

// CRM: person with connected nodes — people + pipeline
const CRMIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
    <circle cx="16" cy="9" r="4" stroke="currentColor" strokeWidth="2"/>
    <path d="M7 27c0-4.418 4.03-8 9-8s9 3.582 9 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="6" cy="20" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
    <circle cx="26" cy="20" r="2.5" stroke="currentColor" strokeWidth="1.8"/>
    <line x1="8.5" y1="20" x2="12" y2="20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
    <line x1="20" y1="20" x2="23.5" y2="20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
  </svg>
);

// Local SEO: map pin — location, clear and universal
const SEOIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
    <path d="M16 3C11.582 3 8 6.582 8 11c0 6.627 8 18 8 18s8-11.373 8-18c0-4.418-3.582-8-8-8Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="16" cy="11" r="3" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

// WhatsApp: speech bubble with phone handset inside
const WhatsAppIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
    <path d="M16 4C9.373 4 4 9.373 4 16c0 2.18.585 4.226 1.608 5.985L4 28l6.198-1.585A11.94 11.94 0 0016 28c6.627 0 12-5.373 12-12S22.627 4 16 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <path d="M11.5 13.5c0-.8.7-1.5 1.5-1.5.2 0 .6.4 1 1.2.3.6.1 1.2-.4 1.5-.2.1-.3.3-.2.5.4 1 1.6 2.3 2.6 2.8.2.1.4 0 .6-.3.4-.7.9-.8 1.5-.5 1 .5 1.5 1.1 1.5 1.6 0 1-1.2 1.7-2.1 1.7-2.2 0-5.5-3.2-6-5.5-.1-.4 0-1 .5-1Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Analytics: three clean bar chart columns, unmistakable
const AnalyticsIcon = () => (
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
    <rect x="4" y="18" width="6" height="10" rx="1.5" stroke="currentColor" strokeWidth="2"/>
    <rect x="13" y="11" width="6" height="17" rx="1.5" stroke="currentColor" strokeWidth="2"/>
    <rect x="22" y="4" width="6" height="24" rx="1.5" stroke="currentColor" strokeWidth="2"/>
  </svg>
);

// Social icons
const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" aria-hidden>
    <path d="M16.667 2H3.333A1.333 1.333 0 002 3.333v13.334A1.333 1.333 0 003.333 18h13.334A1.333 1.333 0 0018 16.667V3.333A1.333 1.333 0 0016.667 2zM7 15H5V8h2v7zm-1-8.25A1.25 1.25 0 115 5.5 1.25 1.25 0 016 6.75zM15 15h-2v-3.5c0-.83-.67-1.5-1.5-1.5S10 10.67 10 11.5V15H8V8h2v1.11A3.24 3.24 0 0112.5 8 3.5 3.5 0 0116 11.5V15z"/>
  </svg>
);

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <rect x="2" y="2" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="1.6"/>
    <circle cx="10" cy="10" r="3.5" stroke="currentColor" strokeWidth="1.6"/>
    <circle cx="14.5" cy="5.5" r="1" fill="currentColor"/>
  </svg>
);

const XIcon = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden>
    <path d="M13.5 2h2.25L10.44 7.68 16.5 16H11.6l-3.76-4.92L3.5 16H1.25l5.65-6.01L1.5 2H6.5l3.4 4.5L13.5 2Zm-.8 12.6h1.25L5.35 3.26H4l8.7 11.34Z"/>
  </svg>
);

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
    Icon: MetaIcon,
    title: 'Meta Ads',
    desc: 'Full-funnel acquisition campaigns built around lead quality, CPL visibility, and CAPI-powered conversion tracking. Developed running AED 462K+ in real spend across UAE markets.',
    tags: ['Lead Gen', 'Retargeting', 'CAPI', 'WhatsApp'],
  },
  {
    Icon: GoogleAdsIcon,
    title: 'Google Ads',
    desc: 'Search and Performance Max campaigns structured for conversion intent — not impressions. Every setup shaped by in-house experience across education and entertainment verticals.',
    tags: ['Search', 'PMax', 'Conversion Tracking', 'CPL Optimization'],
  },
  {
    Icon: AIIcon,
    title: 'AI Campaign Optimization',
    desc: 'AI-assisted bid strategies, automated rules, and audience intelligence layered into every campaign — built from hands-on testing, not theory.',
    tags: ['Smart Bidding', 'Audience AI', 'Auto Rules', 'Attribution'],
  },
  {
    Icon: TrackingIcon,
    title: 'Conversion Tracking',
    desc: 'GA4, GTM, server-side tracking, Meta CAPI, and offline conversions — the same infrastructure I built and owned in-house, now set up for your business.',
    tags: ['GA4', 'GTM', 'Meta CAPI', 'Offline Conversions'],
  },
  {
    Icon: CRMIcon,
    title: 'CRM Automation',
    desc: 'Lead routing, WhatsApp automation, follow-up sequences, and CRM pipelines built to prevent lead leakage — a gap I saw and solved repeatedly while working in-house.',
    tags: ['Brevo', 'Zapier', 'WhatsApp', 'Pipelines'],
  },
  {
    Icon: SEOIcon,
    title: 'Local SEO & GBP',
    desc: 'Google Business Profile optimization, local citations, and service-page SEO to drive inbound leads — the organic layer that makes paid campaigns more efficient.',
    tags: ['Local SEO', 'GBP', 'Schema', 'Search Console'],
  },
  {
    Icon: WhatsAppIcon,
    title: 'WhatsApp Funnels',
    desc: 'Automated WhatsApp sequences triggered by lead form submissions for instant follow-up at scale — used across 141K+ Meta conversations.',
    tags: ['WABA', 'Automation', 'Sequences', 'Lead Response'],
  },
  {
    Icon: AnalyticsIcon,
    title: 'Analytics Infrastructure',
    desc: 'Looker Studio dashboards, attribution models, and reporting systems that show what actually drives revenue — built the same way I reported in-house: focused on outcomes, not activity.',
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
  ['Generic campaigns across every industry', 'Deep specialisation in education and entertainment — built from years of in-house ownership'],
  ['Someone managing your account remotely', 'Direct operator involvement from day one, no handoffs, no layers'],
  ['Vanity metrics in monthly PDF reports', 'CPL, lead quality, attribution, and revenue — the numbers that matter'],
  ['Account manager as your only contact', 'You talk directly to the person building and running your campaigns'],
  ['High overhead passed on as bloated retainers', 'Lean, independent, accountable to outcomes — not headcount'],
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

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/mikdigital', Icon: LinkedInIcon, sub: 'Strategy & case studies' },
  { label: 'Instagram', href: 'https://instagram.com/mikdigital', Icon: InstagramIcon, sub: 'Behind-the-scenes' },
  { label: 'X / Twitter', href: 'https://x.com/mikdigital', Icon: XIcon, sub: 'Growth thoughts' },
];

// ─── Component ────────────────────────────────────────────────────────────────
export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#080808] text-white">

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">

        {/* Grid bg */}
        <div className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
        {/* Glow */}
        <div className="pointer-events-none absolute -top-40 left-1/4 h-[800px] w-[800px] rounded-full opacity-15"
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, transparent 65%)' }}
        />
        <div className="pointer-events-none absolute -top-20 right-0 h-[500px] w-[500px] rounded-full opacity-10"
          style={{ background: 'radial-gradient(circle, #a855f7 0%, transparent 65%)' }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-20 md:pb-36 md:pt-32">
          <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">

            {/* LEFT — copy */}
            <div>
              <motion.div
                variants={fadeUp} initial="hidden" animate="show" custom={0}
                className="inline-flex items-center gap-2.5 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-violet-400"
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" />
                Dubai · UAE + India + Global
              </motion.div>

              <motion.h1
                variants={fadeUp} initial="hidden" animate="show" custom={1}
                className="mt-8 text-5xl font-black leading-[1.04] tracking-tight text-white sm:text-6xl md:text-6xl lg:text-[5rem]"
              >
                In-House Expertise.{' '}
                <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
                  Now Working For You.
                </span>
              </motion.h1>

              <motion.p
                variants={fadeUp} initial="hidden" animate="show" custom={2}
                className="mt-7 max-w-xl text-xl leading-9 text-zinc-400 md:text-2xl md:leading-10"
              >
                I spent years as an in-house performance marketer — owning every campaign, every tracking setup, every result. Now I bring that same depth of ownership to your business, independently.
              </motion.p>

              <motion.p
                variants={fadeUp} initial="hidden" animate="show" custom={2.5}
                className="mt-4 max-w-xl text-lg leading-8 text-zinc-500"
              >
                Mohamed Ibrahim Khan — independent growth partner. Meta Ads, Google Ads, AI-enhanced optimization, analytics, and conversion infrastructure built and operated personally.
              </motion.p>

              <motion.div
                variants={fadeUp} initial="hidden" animate="show" custom={3}
                className="mt-10 flex flex-wrap gap-4"
              >
                <Link
                  href="/contact"
                  className="flex items-center gap-2.5 rounded-xl px-7 py-4 text-base font-bold text-white transition hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
                >
                  Work With Me
                  <svg width="16" height="16" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                </Link>
                <Link
                  href="/case-studies"
                  className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-base font-bold text-white transition hover:bg-white/10"
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
                  <span key={t} className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 text-sm font-medium text-zinc-400">
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
              <div className="absolute inset-0 rounded-3xl opacity-30"
                style={{ background: 'radial-gradient(ellipse, #7c3aed 0%, transparent 70%)', filter: 'blur(40px)' }}
              />

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

                {floatingCards.map((card, i) => (
                  <motion.div
                    key={card.label}
                    className={`absolute ${card.position} z-10 hidden sm:block`}
                    {...floatAnim(i % 2 === 0 ? -8 : 8, 3 + i * 0.5)}
                  >
                    <div className={`flex items-center gap-2.5 rounded-xl border border-white/10 bg-gradient-to-br ${card.color} px-4 py-3 backdrop-blur-xl`}
                      style={{ boxShadow: '0 8px 32px rgba(0,0,0,0.4)' }}
                    >
                      <span className={`h-2 w-2 rounded-full ${card.dot} animate-pulse`} />
                      <div>
                        <p className="text-sm font-bold text-white">{card.label}</p>
                        <p className="text-xs text-zinc-400">{card.sub}</p>
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
                className="bg-[#080808] px-10 py-12"
              >
                <p className="text-4xl font-black text-white md:text-5xl">{s.value}</p>
                <p className="mt-3 text-base text-zinc-500">{s.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY / BACKGROUND ────────────────────────────────────────────── */}
      <section className="border-b border-white/[0.06] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <p className="text-sm font-bold uppercase tracking-widest text-violet-400">The background</p>
              <h2 className="mt-6 text-5xl font-black leading-tight text-white md:text-6xl">
                Built as an in-house marketer. Now working independently.
              </h2>
            </motion.div>
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <p className="text-xl leading-9 text-zinc-400">
                As an in-house performance marketer I didn't just run ads — I owned the full picture. The tracking, the CRM, the attribution, the reporting, and the revenue targets. AED 462K+ in managed spend, 16K+ leads, 141K+ Meta conversations.
              </p>
              <p className="mt-5 text-xl leading-9 text-zinc-400">
                Going independent means you get that same obsessive ownership applied directly to your business — without the internal politics, the budget approvals, or the one-company scope.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {['Education', 'Entertainment', 'UAE Market', 'Australia Market', 'Performance Marketing', 'Growth Systems'].map((t) => (
                  <span key={t} className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-1.5 text-sm font-semibold text-violet-400">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ───────────────────────────────────────────────────────── */}
      <section className="border-b border-white/[0.06] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-center">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <p className="text-sm font-bold uppercase tracking-widest text-violet-400">The problem</p>
              <h2 className="mt-6 text-5xl font-black leading-tight text-white md:text-6xl">
                Most businesses spend on ads without knowing what happens next.
              </h2>
              <p className="mt-6 text-xl leading-9 text-zinc-400">
                Broken tracking, no attribution, CRM that never follows up, campaigns optimised for clicks instead of customers. The result: wasted budget and invisible revenue.
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
                  className="flex items-start gap-3.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-6 py-5"
                >
                  <span className="mt-0.5 text-red-400">✕</span>
                  <span className="text-base text-zinc-400">{p}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section id="services" className="border-b border-white/[0.06] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="text-sm font-bold uppercase tracking-widest text-violet-400">Services</p>
            <h2 className="mt-6 max-w-3xl text-5xl font-black leading-tight text-white md:text-6xl">
              Infrastructure, not just campaigns.
            </h2>
            <p className="mt-6 max-w-2xl text-xl text-zinc-400">
              Everything is built to connect. Ads feed the CRM. Tracking feeds the decisions. Attribution feeds the strategy.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-px bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.08}
                className="group bg-[#080808] p-9 transition hover:bg-white/[0.03]"
              >
                <span className="text-violet-400 opacity-80 group-hover:opacity-100 transition">
                  <s.Icon />
                </span>
                <h3 className="mt-5 text-xl font-black text-white">{s.title}</h3>
                <p className="mt-3 text-base leading-7 text-zinc-400">{s.desc}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <span key={t} className="rounded-full border border-white/[0.08] px-3 py-1 text-xs font-medium text-zinc-500">
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
      <section className="border-b border-white/[0.06] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="text-sm font-bold uppercase tracking-widest text-violet-400">Technical infrastructure</p>
            <h2 className="mt-6 max-w-3xl text-5xl font-black leading-tight text-white md:text-6xl">
              AI-enhanced systems most agencies can&apos;t build.
            </h2>
            <p className="mt-6 max-w-2xl text-xl text-zinc-400">
              Server-side tracking, offline conversions, automated lead routing — the technical layer that makes every campaign sharper.
            </p>
          </motion.div>

          <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {aiSystems.map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.1}
                className="rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 transition hover:border-violet-500/30 hover:bg-violet-500/5"
              >
                <div className="h-1.5 w-10 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                <h3 className="mt-6 text-xl font-black text-white">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-zinc-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── EXPERTISE TABS ────────────────────────────────────────────────── */}
      <ExpertiseSection />

      {/* ── VS COMPARISON ─────────────────────────────────────────────────── */}
      <section className="border-b border-white/[0.06] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
            <p className="text-sm font-bold uppercase tracking-widest text-violet-400">Why not an agency</p>
            <h2 className="mt-6 max-w-3xl text-5xl font-black leading-tight text-white md:text-6xl">
              The honest difference.
            </h2>
          </motion.div>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="mt-14 overflow-hidden border border-white/[0.06]"
          >
            <div className="grid grid-cols-2 border-b border-white/[0.06] bg-white/[0.03]">
              <div className="border-r border-white/[0.06] px-10 py-6">
                <p className="text-base font-bold text-zinc-500">Typical Agency</p>
              </div>
              <div className="px-10 py-6">
                <p className="text-base font-bold text-violet-400">mikdigital</p>
              </div>
            </div>
            {comparison.map(([bad, good], i) => (
              <div key={i} className="grid grid-cols-2 border-b border-white/[0.06] last:border-0">
                <div className="border-r border-white/[0.06] px-10 py-7">
                  <p className="text-base leading-8 text-zinc-500">{bad}</p>
                </div>
                <div className="bg-violet-950/20 px-10 py-7">
                  <p className="text-base leading-8 text-zinc-200">{good}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CASE STUDIES ──────────────────────────────────────────────────── */}
      <section className="border-b border-white/[0.06] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between">
            <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}>
              <p className="text-sm font-bold uppercase tracking-widest text-violet-400">Work</p>
              <h2 className="mt-6 text-5xl font-black leading-tight text-white md:text-6xl">
                Real campaigns. Real numbers.
              </h2>
            </motion.div>
            <Link href="/case-studies" className="hidden text-base font-bold text-zinc-400 transition hover:text-white md:block">
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
                <div className="p-9">
                  <p className="text-sm font-bold uppercase tracking-widest text-violet-400">{study.industry}</p>
                  <h3 className="mt-3 text-3xl font-black text-white">{study.client}</h3>

                  <div className="mt-6 rounded-xl border border-violet-500/20 bg-violet-500/10 p-6">
                    <p className="text-sm font-bold uppercase tracking-widest text-violet-400">Key Result</p>
                    <p className="mt-2 text-4xl font-black text-white">{study.result}</p>
                  </div>

                  <div className="mt-5 grid grid-cols-3 gap-px bg-white/[0.06]">
                    {study.metrics.map((m) => (
                      <div key={m.label} className="bg-[#080808] px-5 py-5">
                        <p className="text-xl font-black text-white">{m.v}</p>
                        <p className="mt-1 text-sm text-zinc-500">{m.label}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {study.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/[0.08] px-3.5 py-1.5 text-sm font-medium text-zinc-400">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 md:hidden">
            <Link href="/case-studies" className="text-base font-bold text-zinc-400 transition hover:text-white">
              View all case studies →
            </Link>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ───────────────────────────────────────────────────────── */}
      <section className="border-b border-white/[0.06] py-28">
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
              <p className="text-sm font-bold uppercase tracking-widest text-violet-400">Built and operated by</p>
              <h2 className="mt-6 text-5xl font-black leading-tight text-white md:text-6xl">
                Mohamed Ibrahim Khan.
              </h2>
              <p className="mt-2 text-base text-zinc-500">Dubai, UAE · Available globally</p>

              <p className="mt-8 text-xl leading-9 text-zinc-400">
                I spent years as an in-house performance marketer — fully embedded inside a company, responsible for every result. Not managing a client account from a distance, but owning the campaigns, the tracking infrastructure, the CRM workflows, and the revenue numbers end to end.
              </p>
              <p className="mt-5 text-xl leading-9 text-zinc-400">
                Now I work independently — which means you get that same level of ownership and accountability applied to your business, directly. No layers, no handoffs, no one between you and the person actually running your growth.
              </p>

              <div className="mt-10 grid grid-cols-2 gap-3">
                {stats.map((s) => (
                  <div key={s.value} className="rounded-xl border border-white/[0.06] bg-white/[0.03] p-6">
                    <p className="text-3xl font-black text-white">{s.value}</p>
                    <p className="mt-1.5 text-sm text-zinc-500">{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {['Meta Ads', 'Google Ads', 'GTM', 'GA4', 'Meta CAPI', 'CRM', 'WhatsApp', 'Attribution', 'AI Optimization'].map((t) => (
                  <span key={t} className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3.5 py-1.5 text-sm font-semibold text-violet-400">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://calendly.com/mikdigitalofficial/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl px-7 py-4 text-base font-bold text-white transition hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
                >
                  Book Strategy Call
                </a>
                <a
                  href="https://wa.me/971506102836"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl border border-white/10 bg-white/5 px-7 py-4 text-base font-bold text-white transition hover:bg-white/10"
                >
                  WhatsApp
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── SOCIALS ───────────────────────────────────────────────────────── */}
      <section className="border-b border-white/[0.06] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} className="text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-violet-400">Follow the work</p>
            <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">
              Strategy. Insights. Behind the scenes.
            </h2>
            <p className="mx-auto mt-5 max-w-lg text-xl text-zinc-400">
              Follow along for real performance marketing content — no fluff, just what&apos;s working.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-4 sm:grid-cols-3">
            {socials.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} custom={i * 0.15}
                className="group flex items-center gap-5 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 transition hover:border-violet-500/30 hover:bg-violet-500/5"
              >
                <span className="text-zinc-400 transition group-hover:text-violet-400">
                  <s.Icon />
                </span>
                <div>
                  <p className="text-lg font-black text-white">{s.label}</p>
                  <p className="mt-1 text-sm text-zinc-500">{s.sub}</p>
                </div>
                <svg className="ml-auto text-zinc-600 transition group-hover:text-violet-400" width="16" height="16" viewBox="0 0 14 14" fill="none"><path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="border-b border-white/[0.06] py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl border border-white/[0.08] px-8 py-24 text-center"
            style={{ background: 'linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(8,8,8,1) 50%, rgba(168,85,247,0.1) 100%)' }}
          >
            <div className="pointer-events-none absolute inset-0 rounded-3xl"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(124,58,237,0.2) 0%, transparent 60%)' }}
            />
            <div className="relative">
              <p className="text-sm font-bold uppercase tracking-widest text-violet-400">Ready to scale smarter?</p>
              <h2 className="mt-6 text-5xl font-black text-white md:text-7xl">
                Let&apos;s build your acquisition system.
              </h2>
              <p className="mx-auto mt-7 max-w-xl text-xl text-zinc-400">
                Meta Ads, Google Ads, server-side tracking, CRM automation, and full-funnel attribution — built and operated directly, no agency layers.
              </p>
              <div className="mt-12 flex flex-wrap justify-center gap-4">
                <a
                  href="https://calendly.com/mikdigitalofficial/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-xl px-10 py-5 text-base font-bold text-white transition hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
                >
                  Book a Strategy Call
                </a>
                <Link
                  href="/contact"
                  className="rounded-xl border border-white/10 bg-white/5 px-10 py-5 text-base font-bold text-white transition hover:bg-white/10"
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
          className="w-full max-w-md rounded-xl px-6 py-4 text-center text-base font-bold text-white shadow-2xl"
          style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
        >
          💬 WhatsApp — Book Strategy Call
        </a>
      </div>

    </main>
  );
}
