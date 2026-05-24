'use client';

import Link from "next/link";
import ContactFormSection from "@/components/ContactFormSection";

const caseStudies = [
  {
    slug: "circle-time-uae",
    title: "Circle Time UAE",
    category: "Preschool Admissions — Education",
    image: "/images/screenshots/preschool01.png",
    result: "13x–20x ROAS",
    resultLabel: "Return on Ad Spend",
    metrics: [
      { label: "Admissions", value: "40–60", period: "per month" },
      { label: "Cost Per Admission", value: "AED 50–75", period: "avg CPA" },
      { label: "Revenue Generated", value: "AED 40K–60K", period: "monthly" },
    ],
    description: "Meta Ads and WhatsApp funnel systems focused on increasing preschool admissions and improving parent inquiry conversion across UAE.",
    tags: ["Meta Ads", "WhatsApp Funnels", "Lead Generation", "Education"],
    market: "UAE",
  },
  {
    slug: "jazz-rockers-australia",
    title: "Jazz Rockers Australia",
    category: "Bollywood Dance — Entertainment",
    image: "/images/screenshots/bdancea01.png",
    result: "1,962 Leads",
    resultLabel: "Total qualified leads",
    metrics: [
      { label: "Cost Per Lead", value: "AED 23–34", period: "avg CPL" },
      { label: "Admissions", value: "100–200", period: "enrolled" },
      { label: "Revenue", value: "AUD 12K–48K", period: "generated" },
    ],
    description: "Community-focused acquisition campaigns targeting Indian audiences in Adelaide using Meta Ads, Google Ads, and WhatsApp funnels.",
    tags: ["Meta Ads", "Google Ads", "WhatsApp", "Entertainment", "Australia"],
    market: "Australia",
  },
];

const screenshots = [
  "/images/screenshots/googleadsoverall.png",
  "/images/screenshots/metaad-1.png",
  "/images/screenshots/metacampaigns-1.png",
  "/images/screenshots/googleads-2.png",
  "/images/screenshots/metaad-0.png",
  "/images/screenshots/googleads-3.png",
];

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-white/[0.06]">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
            backgroundSize: '60px 60px',
          }}
        />
        <div
          className="pointer-events-none absolute right-0 top-0 h-[400px] w-[600px] opacity-[0.07]"
          style={{ background: 'radial-gradient(ellipse, #7c3aed 0%, transparent 70%)' }}
        />
        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-400">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            Case Studies
          </div>
          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[1.04] tracking-tight text-white md:text-7xl">
            Real campaigns.<br />Measurable outcomes.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Acquisition campaigns across UAE and Australian businesses — Meta Ads, Google Ads, CRM workflows, WhatsApp funnels, and conversion-focused systems built for education and entertainment brands.
          </p>

          {/* Aggregate stats */}
          <div className="mt-12 grid grid-cols-3 gap-px bg-white/[0.06] overflow-hidden rounded-2xl max-w-xl">
            {[
              { value: "1,962+", label: "Total leads" },
              { value: "20×", label: "Peak ROAS" },
              { value: "2 markets", label: "UAE + Australia" },
            ].map(stat => (
              <div key={stat.label} className="bg-[#0a0a0a] px-5 py-5">
                <p className="text-xl font-black text-white">{stat.value}</p>
                <p className="mt-1 text-xs text-zinc-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASE STUDY CARDS */}
      <section className="border-b border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-6 lg:grid-cols-2">
            {caseStudies.map((study) => (
              <div
                key={study.slug}
                className="overflow-hidden rounded-2xl border border-white/[0.08] bg-white/[0.02] transition hover:border-white/[0.14] hover:bg-white/[0.03]"
              >
                {/* Image */}
                <div className="overflow-hidden border-b border-white/[0.06] relative">
                  <img
                    src={study.image}
                    alt={`${study.title} campaign results`}
                    className="w-full object-cover"
                  />
                  <div className="absolute top-4 right-4">
                    <span className="rounded-full border border-violet-500/30 bg-violet-500/20 px-3 py-1 text-xs font-semibold text-violet-300 backdrop-blur-sm">
                      {study.market}
                    </span>
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">
                    {study.category}
                  </p>
                  <h2 className="mt-4 text-3xl font-black text-white">{study.title}</h2>
                  <p className="mt-4 text-base leading-7 text-zinc-400">{study.description}</p>

                  {/* KEY RESULT */}
                  <div className="mt-8 rounded-xl border border-violet-500/20 bg-violet-500/[0.08] p-6">
                    <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">Key Result</p>
                    <p className="mt-2 text-4xl font-black text-white">{study.result}</p>
                    <p className="mt-1 text-xs text-violet-400/60">{study.resultLabel}</p>
                  </div>

                  {/* METRICS */}
                  <div className="mt-6 grid grid-cols-3 gap-px bg-white/[0.06] rounded-xl overflow-hidden">
                    {study.metrics.map((m) => (
                      <div key={m.label} className="bg-[#0a0a0a] px-4 py-5">
                        <p className="text-lg font-black text-white">{m.value}</p>
                        <p className="mt-1 text-xs text-zinc-500">{m.label}</p>
                        <p className="mt-0.5 text-[10px] text-zinc-600">{m.period}</p>
                      </div>
                    ))}
                  </div>

                  {/* TAGS */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {study.tags.map((t) => (
                      <span key={t} className="rounded-full border border-white/[0.08] px-3 py-1 text-xs font-medium text-zinc-400">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="mt-8">
                    <Link
                      href="/contact"
                      className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                      style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
                    >
                      Start a similar project
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CAMPAIGN SCREENSHOTS */}
      <section className="border-b border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">Campaign performance</p>
          <h2 className="mt-5 text-3xl font-black text-white md:text-4xl">Numbers from the dashboards.</h2>
          <p className="mt-4 text-zinc-400">Unedited screenshots from real client campaigns.</p>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {screenshots.map((src, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] transition hover:border-white/[0.10]"
              >
                <img
                  src={src}
                  alt={`Campaign result screenshot ${i + 1}`}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* CTA after screenshots */}
          <div className="mt-16 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-12">
            <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">Get similar results</p>
                <h3 className="mt-3 text-2xl font-black text-white md:text-3xl">Ready to build your system?</h3>
                <p className="mt-3 max-w-lg text-zinc-400">
                  These results came from building the right infrastructure — not just spending more. Talk directly with Mohamed to see what's possible for your business.
                </p>
              </div>
              <div className="flex flex-col gap-3 flex-shrink-0">
                <a
                  href="https://calendly.com/mikdigitalofficial/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-6 py-3.5 text-sm font-semibold text-white transition hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
                >
                  Book a free strategy call
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/971506102836"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                >
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactFormSection />

    </main>
  );
}
