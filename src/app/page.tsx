'use client';

import ExpertiseSection from "@/components/ExpertiseSection";
import ContactFormSection from "@/components/ContactFormSection";
import Link from "next/link";

const stats = [
  { value: "AED 462K+", label: "Ad spend managed" },
  { value: "14K+", label: "Qualified leads generated" },
  { value: "141K+", label: "Meta conversations" },
  { value: "UAE + AUS", label: "Multi-market experience" },
];

const services = [
  {
    number: "01",
    title: "Paid Acquisition",
    desc: "Meta Ads and Google Ads built around lead quality, CPL visibility, and conversion tracking — not vanity metrics.",
    tags: ["Meta Ads", "Google Ads", "CAPI", "Retargeting"],
  },
  {
    number: "02",
    title: "CRM & Automation",
    desc: "Lead routing, WhatsApp automation, CRM workflows, and follow-up systems that stop leads from going cold.",
    tags: ["Brevo", "Zapier", "WhatsApp", "Pipelines"],
  },
  {
    number: "03",
    title: "Tracking & Attribution",
    desc: "GA4, server-side tracking, Meta CAPI, and offline conversion systems so you know what&apos;s actually working.",
    tags: ["GA4", "GTM", "Meta CAPI", "Looker Studio"],
  },
  {
    number: "04",
    title: "SEO & Local Visibility",
    desc: "Local search infrastructure and Google Business Profile optimization to drive inbound leads you don&apos;t pay per click for.",
    tags: ["Local SEO", "GBP", "On-Page", "Schema"],
  },
];

const comparison = [
  ["Generic campaigns across every industry.", "Systems built specifically for education and entertainment."],
  ["Junior execution after sales handoff.", "Direct operator involvement in strategy and delivery."],
  ["Vanity metrics in monthly PDF reports.", "CPL, lead quality, attribution, and revenue visibility."],
  ["Slow communication through account managers.", "Direct, fast, and honest — no middle layers."],
  ["High overhead, bloated retainer.", "Lean, focused, and accountable to outcomes."],
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">

        {/* Grid bg */}
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />

        {/* Glow */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full opacity-20"
          style={{
            background: 'radial-gradient(ellipse, #7c3aed 0%, transparent 70%)',
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-28 pt-24 md:pb-36 md:pt-32">

          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-400">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            Dubai — Performance Marketing Infrastructure
          </div>

          <h1 className="mt-8 max-w-5xl text-5xl font-black leading-[1.04] tracking-tight text-white md:text-7xl lg:text-8xl">
            Acquisition systems that connect ads to{" "}
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
              revenue.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 md:text-xl">
            Technical performance marketing for education and entertainment brands.
            Meta Ads, Google Ads, server-side tracking, CRM automation, and full-funnel attribution — built by one operator, not an agency team.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <a
              href="https://calendly.com/mikdigitalofficial/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
              style={{
                background: 'linear-gradient(135deg, #7c3aed, #a855f7)',
              }}
            >
              Book Strategy Call

              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
              >
                <path
                  d="M2 7h10M8 3l4 4-4 4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>

            <a
              href="https://wa.me/971506102836"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              WhatsApp
            </a>

          </div>

          {/* Stats */}
          <div className="mt-20 grid grid-cols-2 gap-px border border-white/[0.06] bg-white/[0.06] md:grid-cols-4">

            {stats.map((s) => (
              <div
                key={s.value}
                className="bg-[#0a0a0a] px-8 py-8"
              >
                <p className="text-3xl font-black text-white md:text-4xl">
                  {s.value}
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                  {s.label}
                </p>
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PROBLEM */}
      <section className="border-b border-white/[0.06] py-24">

        <div className="mx-auto max-w-7xl px-6">

          <div className="grid gap-16 md:grid-cols-2 md:items-center">

            <div>

              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">
                The problem
              </p>

              <h2 className="mt-5 text-4xl font-black leading-tight text-white md:text-5xl">
                Most businesses spend on ads without knowing what happens next.
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-400">
                Broken tracking, no attribution, CRM that doesn&apos;t follow up, and campaigns optimised for clicks instead of customers. The result: wasted budget and invisible revenue.
              </p>

            </div>

            <div className="space-y-3">

              {[
                "Poor lead quality from unqualified traffic",
                "Broken or missing conversion tracking",
                "No visibility between ad spend and revenue",
                "CRM with zero follow-up automation",
                "Agency reports with vanity metrics only",
                "Marketing and sales completely disconnected",
              ].map((p) => (
                <div
                  key={p}
                  className="flex items-start gap-3 rounded-xl border border-white/[0.06] bg-white/[0.03] px-5 py-4"
                >
                  <span className="mt-0.5 text-red-400">✕</span>

                  <span className="text-sm text-zinc-400">
                    {p}
                  </span>
                </div>
              ))}

            </div>

          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="border-b border-white/[0.06] py-24"
      >

        <div className="mx-auto max-w-7xl px-6">

          <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">
            Services
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
            Infrastructure, not campaigns.
          </h2>

          <p className="mt-5 max-w-2xl text-lg text-zinc-400">
            Everything is built to connect. Ads feed the CRM. Tracking feeds the decisions. Attribution feeds the strategy.
          </p>

          <div className="mt-16 grid gap-px bg-white/[0.06] md:grid-cols-2">

            {services.map((s) => (
              <div
                key={s.number}
                className="group bg-[#0a0a0a] p-10 transition hover:bg-white/[0.03]"
              >

                <span className="text-xs font-semibold text-zinc-600">
                  {s.number}
                </span>

                <h3 className="mt-4 text-2xl font-black text-white">
                  {s.title}
                </h3>

                <p className="mt-4 text-base leading-7 text-zinc-400">
                  {s.desc}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">

                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-zinc-400"
                    >
                      {t}
                    </span>
                  ))}

                </div>

              </div>
            ))}

          </div>

        </div>
      </section>

    </main>
  );
}
