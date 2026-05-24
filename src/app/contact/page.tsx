'use client';

import LeadForm from '@/components/LeadForm';

const services = [
  "Meta Ads & Google Ads setup and management",
  "Server-side tracking & Meta CAPI",
  "GA4, GTM & attribution infrastructure",
  "CRM automation & WhatsApp funnels",
  "Full-funnel conversion systems",
  "Performance audit & strategy",
]

export default function ContactPage() {
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
          className="pointer-events-none absolute right-0 top-0 h-[500px] w-[700px] opacity-[0.07]"
          style={{ background: 'radial-gradient(ellipse, #7c3aed 0%, transparent 70%)' }}
        />
        <div
          className="pointer-events-none absolute -bottom-20 left-0 h-[400px] w-[500px] opacity-[0.05]"
          style={{ background: 'radial-gradient(ellipse, #a855f7 0%, transparent 70%)' }}
        />

        <div className="relative mx-auto max-w-7xl px-6 pb-24 pt-20 md:pb-32 md:pt-28">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-violet-400">
            <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
            Contact
          </div>
          <h1 className="mt-8 max-w-3xl text-5xl font-black leading-[1.04] tracking-tight text-white md:text-6xl">
            Let's build your acquisition system.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            Work directly with Mohamed Ibrahim Khan on paid acquisition, tracking infrastructure, CRM automation, and full-funnel conversion systems.
          </p>

          {/* Quick proof */}
          <div className="mt-12 flex flex-wrap gap-6">
            {[
              { value: "13–20×", label: "ROAS achieved" },
              { value: "24h", label: "Response time" },
              { value: "UAE + AU", label: "Markets served" },
            ].map((stat) => (
              <div key={stat.label} className="flex items-baseline gap-3">
                <span className="text-2xl font-black text-white">{stat.value}</span>
                <span className="text-sm text-zinc-500">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FORM + INFO */}
      <section className="border-b border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-[1fr_480px] md:items-start">

            {/* LEFT */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">What you get</p>
              <h2 className="mt-5 text-3xl font-black leading-tight text-white md:text-4xl">
                Direct operator.<br />No layers.
              </h2>
              <p className="mt-6 text-base leading-8 text-zinc-400">
                Every project is handled directly by Mohamed Ibrahim Khan. No account managers, no junior handoffs. Strategy, technical setup, campaign execution, and optimisation — all in one place.
              </p>

              <div className="mt-10 space-y-2.5">
                {services.map((item) => (
                  <div key={item} className="flex items-start gap-3 rounded-xl border border-white/[0.05] bg-white/[0.02] px-5 py-4 transition hover:border-white/[0.08] hover:bg-white/[0.03]">
                    <span className="mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border border-violet-500/25 bg-violet-500/15 text-violet-400">
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" aria-hidden="true">
                        <path d="M2 5l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed text-zinc-300">{item}</span>
                  </div>
                ))}
              </div>

              {/* Operator card */}
              <div className="mt-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full border border-violet-500/20 bg-violet-500/10 flex items-center justify-center text-xs font-black text-violet-400">MK</div>
                  <div>
                    <p className="text-sm font-bold text-white">Mohamed Ibrahim Khan</p>
                    <p className="text-xs text-zinc-500">Dubai, UAE · 5+ years · UAE & Australia</p>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-zinc-400">
                  Performance marketer and technical growth operator with direct execution experience across Meta Ads, Google Ads, server-side tracking, CRM automation, and full-funnel attribution systems.
                </p>
              </div>

              {/* Contact options */}
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <a
                  href="https://calendly.com/mikdigitalofficial/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition hover:border-violet-500/30 hover:bg-violet-500/[0.06]"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">Strategy Call</p>
                  <p className="mt-3 text-lg font-black text-white">Free 30-min call</p>
                  <p className="mt-2 text-sm text-zinc-500">Walk through your acquisition challenges and what can be fixed.</p>
                  <p className="mt-4 text-sm font-semibold text-violet-400 transition group-hover:underline">Schedule now →</p>
                </a>

                <a
                  href="https://wa.me/971506102836"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-6 transition hover:border-green-500/20 hover:bg-green-500/[0.04]"
                >
                  <p className="text-xs font-semibold uppercase tracking-widest text-zinc-500">WhatsApp</p>
                  <p className="mt-3 text-lg font-black text-white">Message directly</p>
                  <p className="mt-2 text-sm text-zinc-500">Fast direct communication for project inquiries and quick questions.</p>
                  <p className="mt-4 text-sm font-semibold text-zinc-400 transition group-hover:text-green-400">Chat now →</p>
                </a>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-8">
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">Send a message</p>
              <h3 className="mt-4 text-2xl font-black text-white">Get in touch</h3>
              <p className="mt-2 text-sm text-zinc-500">Fill in your details and we'll follow up within 24 hours.</p>
              <div className="mt-8">
                <LeadForm />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP (mobile) */}
      <a
        href="https://wa.me/971506102836"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-3 rounded-full border border-green-500/20 bg-green-600 px-5 py-3 text-sm font-bold text-white shadow-2xl transition hover:bg-green-500 md:hidden"
        aria-label="Chat on WhatsApp"
      >
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
          <path d="M9 1C4.6 1 1 4.6 1 9c0 1.4.4 2.7 1 3.8L1 17l4.3-1.1C6.4 16.6 7.7 17 9 17c4.4 0 8-3.6 8-8s-3.6-8-8-8z" fill="currentColor" opacity="0.3" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
          <path d="M6.5 8.5c0-.3.2-.5.4-.5.5 0 1 .5 1.4.9.4.5.5 1.5 0 2-.4.4-.9.5-1.4.4-.4-.1-.9-.5-.9-1 0-.3.2-.5.5-.5" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" fill="none"/>
        </svg>
        WhatsApp
      </a>

    </main>
  );
}
