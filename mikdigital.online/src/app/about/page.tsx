import Image from 'next/image';
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
    label: "In-House Performance Marketer",
    detail: "Embedded inside education and entertainment businesses in UAE — owning campaigns, tracking, CRM, and revenue targets end to end.",
  },
  {
    year: "2021–2023",
    label: "Expanded to Australia",
    detail: "Built and ran multi-market acquisition systems for training centres and entertainment businesses in Adelaide, achieving 2X–5X ROAS consistently.",
  },
  {
    year: "2023–Now",
    label: "mikdigital — Independent",
    detail: "Took the in-house experience independent. Same systems, same ownership, same results — now available directly to education and entertainment brands globally.",
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
];

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
            In-house depth.<br />Independent access.
          </h1>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-zinc-400">
            Years spent as an embedded in-house performance marketer — owning campaigns, tracking, CRM, and revenue numbers for real businesses. Now that same depth of ownership is available to you directly.
          </p>

          <div className="mt-12 flex flex-wrap gap-10">
            {[
              { value: "5+", label: "Years in-house experience" },
              { value: "UAE + AU", label: "Markets" },
              { value: "2X–20X", label: "ROAS delivered" },
            ].map(stat => (
              <div key={stat.label} className="flex items-baseline gap-3">
                <span className="text-4xl font-black text-white">{stat.value}</span>
                <span className="text-base text-zinc-500">{stat.label}</span>
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
              <p className="text-sm font-bold uppercase tracking-widest text-violet-400">The background</p>
              <h2 className="mt-6 text-4xl font-black leading-tight text-white md:text-5xl">
                Built from inside real businesses — not a course.
              </h2>
              <div className="mt-8 space-y-6 text-xl leading-9 text-zinc-400">
                <p>
                  mikdigital started from years of working as an in-house performance marketer — fully embedded inside education and entertainment businesses, responsible for every campaign, every lead, and every revenue target.
                </p>
                <p>
                  Not managing a client account from the outside. Actually inside the business, owning the tracking architecture, CRM workflows, attribution visibility, WhatsApp automation, and the conversion infrastructure that connects spend to revenue.
                </p>
                <p>
                  That experience — 2X to 20X ROAS across UAE and Australian markets — is now available independently. Same systems, same operator, no agency overhead.
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
                      <p className="text-xs font-bold text-violet-400">{item.year}</p>
                      <p className="mt-2 text-xl font-black text-white">{item.label}</p>
                      <p className="mt-2 text-base leading-7 text-zinc-400">{item.detail}</p>
                    </div>
                    {i === timeline.length - 1 && (
                      <div className="flex-shrink-0 rounded-full border border-green-500/20 bg-green-500/10 px-2.5 py-1 text-xs font-bold text-green-400">
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
              <Image
                src="/images/screenshots/mikdigital-founder.png"
                alt="Mohamed Ibrahim Khan — founder of mikdigital"
                width={600}
                height={700}
                className="h-full w-full object-cover"
              />
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-violet-400">The operator</p>
              <h2 className="mt-6 text-5xl font-black leading-tight text-white">
                Mohamed Ibrahim Khan
              </h2>
              <p className="mt-2 text-base text-zinc-500">Dubai, UAE</p>

              <p className="mt-8 text-xl leading-9 text-zinc-400">
                I spent years as an in-house performance marketer — not on the agency side, but embedded inside businesses, fully accountable for campaigns, tracking, CRM, and the revenue numbers that came out the other end.
              </p>
              <p className="mt-5 text-xl leading-9 text-zinc-400">
                Working independently now means you get that same level of ownership and accountability applied directly to your business. Every campaign, every tracking setup, every CRM workflow — built and run personally. 2X ROAS is the floor, not the goal.
              </p>

              <div className="mt-10 flex flex-wrap gap-2">
                {capabilities.map((c) => (
                  <span
                    key={c}
                    className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3.5 py-1.5 text-sm font-semibold text-violet-400"
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
                  className="inline-flex items-center gap-2 rounded-xl px-7 py-4 text-base font-bold text-white transition hover:opacity-90"
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
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-7 py-4 text-base font-bold text-white transition hover:bg-white/[0.08]"
                >
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
          <p className="text-sm font-bold uppercase tracking-widest text-violet-400">Capabilities</p>
          <h2 className="mt-6 text-4xl font-black text-white md:text-5xl">Technical stack.</h2>
          <p className="mt-5 max-w-xl text-xl text-zinc-400">Infrastructure that works together, not in silos. Every capability connected to revenue outcomes — built the same way it was built in-house.</p>

          <div className="mt-14 grid gap-px bg-white/[0.06] md:grid-cols-2 lg:grid-cols-4">
            {capabilityGroups.map((group) => (
              <div key={group.label} className="bg-[#0a0a0a] p-8 transition hover:bg-white/[0.02]">
                <p className="text-xs font-bold uppercase tracking-widest text-violet-400">{group.label}</p>
                <ul className="mt-5 space-y-3">
                  {group.items.map(item => (
                    <li key={item} className="flex items-center gap-2.5 text-base text-zinc-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-violet-500 flex-shrink-0" />
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
