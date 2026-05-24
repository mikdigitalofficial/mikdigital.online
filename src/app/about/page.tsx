import ContactFormSection from "@/components/ContactFormSection";

export const metadata = {
  title: "About — mikdigital",
  description: "About mikdigital, a technical performance marketing operator for paid acquisition, tracking, CRM automation, and conversion systems.",
};

const capabilities = [
  "Meta Ads", "Google Ads", "GA4", "GTM",
  "Meta CAPI", "Server-side Tracking", "CRM Automation",
  "WhatsApp Funnels", "Lead Attribution", "Looker Studio",
  "Local SEO", "Conversion Infrastructure",
];

const timeline = [
  {
    year: "2019–2021",
    label: "Performance Marketing Specialist",
    detail: "Hands-on campaign execution across education and entertainment brands in UAE.",
  },
  {
    year: "2021–2023",
    label: "Expanded to Australia",
    detail: "Multi-market acquisition systems for training centers and entertainment businesses in Adelaide.",
  },
  {
    year: "2023–Now",
    label: "mikdigital",
    detail: "Independent technical growth operator. Meta Ads, Google Ads, server-side tracking, CRM, and full-funnel attribution.",
  },
];

const capabilityGroups = [
  {
    label: "Paid Acquisition",
    items: ["Meta Ads", "Google Ads", "Retargeting", "WhatsApp Funnels"],
  },
  {
    label: "Tracking & Data",
    items: ["GA4", "GTM", "Meta CAPI", "Server-side Tracking"],
  },
  {
    label: "Automation & CRM",
    items: ["CRM Automation", "Lead Attribution", "Looker Studio", "Conversion Infrastructure"],
  },
  {
    label: "Search",
    items: ["Local SEO", "GBP Optimization", "AI Search (GEO)", "Schema & Entity"],
  },
]

export default function AboutPage() {
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
          className="pointer-events-none absolute left-0 top-0 h-[500px] w-[700px] opacity-[0.08]"
          style={{ background: 'radial-gradient(ellipse, #7c3aed 0%, transparent 70%)' }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-400">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            About mikdigital
          </div>

          <h1 className="mt-8 max-w-4xl text-5xl font-black leading-[1.04] tracking-tight text-white md:text-7xl">
            One operator.<br />No agency layers.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
            Technical performance marketing infrastructure for education and entertainment brands. Built and operated directly by Mohamed Ibrahim Khan — UAE and Australia market experience.
          </p>

          <div className="mt-12 flex flex-wrap gap-8">
            {[
              { value: "5+", label: "Years execution" },
              { value: "UAE + AU", label: "Markets" },
              { value: "13–20×", label: "ROAS delivered" },
            ].map(stat => (
              <div key={stat.label} className="flex items-baseline gap-3">
                <span className="text-3xl font-black text-white">{stat.value}</span>
                <span className="text-sm text-zinc-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="border-b border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-start">

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">The background</p>
              <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-4xl">
                Built from real acquisition pressure — not a course.
              </h2>
              <div className="mt-8 space-y-6 text-base leading-8 text-zinc-400">
                <p>
                  mikdigital started from hands-on performance marketing work inside real businesses. Google Ads, Meta Ads, SEO, and lead generation across UAE and Australian markets — not theory, not templates.
                </p>
                <p>
                  Over time the scope expanded beyond ads into what actually compounds: tracking architecture, CRM workflows, attribution visibility, WhatsApp automation, and conversion infrastructure that connects marketing spend to revenue outcomes.
                </p>
                <p>
                  The positioning is intentionally narrow. Education and entertainment brands in UAE and Australia. That&apos;s where the experience is deep and the systems are proven.
                </p>
              </div>
            </div>

            {/* TIMELINE */}
            <div className="space-y-px">
              {timeline.map((item, i) => (
                <div
                  key={i}
                  className={`border border-white/[0.06] bg-white/[0.02] p-8 transition hover:bg-white/[0.03] ${
                    i === 0 ? 'rounded-t-2xl' : i === timeline.length - 1 ? 'rounded-b-2xl' : ''
                  }`}
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-semibold text-violet-400">{item.year}</p>
                      <p className="mt-2 text-lg font-black text-white">{item.label}</p>
                      <p className="mt-2 text-sm leading-7 text-zinc-400">{item.detail}</p>
                    </div>
                    {i === timeline.length - 1 && (
                      <div className="flex-shrink-0 rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-xs font-semibold text-green-400">
                        Active
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* FOUNDER */}
      <section className="border-b border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 md:grid-cols-2">

            <div className="overflow-hidden rounded-2xl border border-white/[0.06]">
              <img
                src="/images/screenshots/mikdigital-founder.png"
                alt="Mohamed Ibrahim Khan — founder of mikdigital"
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">The operator</p>
              <h2 className="mt-5 text-4xl font-black leading-tight text-white">
                Mohamed Ibrahim Khan
              </h2>
              <p className="mt-2 text-zinc-500">Dubai, UAE</p>

              <p className="mt-8 text-base leading-8 text-zinc-400">
                Performance marketer and technical growth operator with direct execution experience across Meta Ads, Google Ads, server-side tracking, CRM automation, and full-funnel attribution systems.
              </p>
              <p className="mt-4 text-base leading-8 text-zinc-400">
                Every client engagement is handled directly — no account managers, no junior handoffs, no black-box reporting. Strategy, setup, execution, and optimisation all in one place.
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {capabilities.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="https://calendly.com/mikdigitalofficial/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
                  style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
                >
                  Book Strategy Call
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                    <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
                <a
                  href="https://wa.me/971506102836"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-green-400" aria-hidden="true">
                    <path d="M8 1C4.1 1 1 4.1 1 8c0 1.3.3 2.5.9 3.5L1 15l3.6-1C5.6 14.6 6.8 15 8 15c3.9 0 7-3.1 7-7s-3.1-7-7-7z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CAPABILITIES GRID */}
      <section className="border-b border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">Capabilities</p>
          <h2 className="mt-5 text-3xl font-black text-white md:text-4xl">Technical stack.</h2>
          <p className="mt-4 max-w-xl text-zinc-400">Infrastructure that works together, not in silos. Every capability connected to revenue outcomes.</p>

          <div className="mt-12 grid gap-px bg-white/[0.06] md:grid-cols-2 lg:grid-cols-4">
            {capabilityGroups.map((group) => (
              <div key={group.label} className="bg-[#0a0a0a] p-6 transition hover:bg-white/[0.02]">
                <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">{group.label}</p>
                <ul className="mt-4 space-y-2.5">
                  {group.items.map(item => (
                    <li key={item} className="flex items-center gap-2 text-sm text-zinc-400">
                      <span className="h-1 w-1 rounded-full bg-violet-500" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ContactFormSection />

    </main>
  );
}
