'use client';

import LeadForm from '@/components/LeadForm';

export default function ContactPage() {

  return (

    <main className="min-h-screen bg-white text-zinc-900">

      {/* HERO */}
      <section className="border-b border-zinc-200 bg-gradient-to-b from-indigo-50 to-white">

        <div className="mx-auto max-w-5xl px-6 py-28 text-center">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-700">
            Contact
          </p>

          <h1 className="mt-6 text-5xl font-black leading-tight text-zinc-950 md:text-7xl">
            Let’s build a scalable growth system for your business.
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-zinc-600">
            Available for customer acquisition systems, Meta Ads,
            Google Ads, CRM workflows, WhatsApp funnels,
            SEO visibility, and conversion-focused marketing execution.
          </p>

        </div>

      </section>

      {/* FORM SECTION */}
      <section className="relative overflow-hidden py-24">

        <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 via-white to-purple-100" />

        <div className="absolute -top-32 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-indigo-300/30 blur-3xl" />

        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl" />

        <div className="relative z-10">

          <div className="mx-auto max-w-5xl rounded-[40px] border border-white/40 bg-white/70 p-6 shadow-2xl backdrop-blur-xl md:p-12">

            <div className="grid gap-12 md:grid-cols-2 md:items-center">

              <div>

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-700">
                  Lead Generation System
                </p>

                <h2 className="mt-6 text-5xl font-black leading-tight text-zinc-950">
                  Ready to scale your acquisition?
                </h2>

                <p className="mt-6 text-lg leading-8 text-zinc-600">
                  Get a conversion-focused growth system with tracking,
                  CRM automation, Meta Ads, Google Ads,
                  and scalable lead infrastructure.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">

                  <div className="rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-700 shadow-sm">
                    Meta Ads
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-700 shadow-sm">
                    Google Ads
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-700 shadow-sm">
                    CRM Automation
                  </div>

                  <div className="rounded-2xl border border-zinc-200 bg-white px-5 py-3 text-sm font-semibold text-zinc-700 shadow-sm">
                    Conversion Tracking
                  </div>

                </div>

              </div>

              <div>

                <LeadForm />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* CONTACT CARDS */}
      <section className="mx-auto max-w-6xl px-6 py-24">

        <div className="grid gap-8 md:grid-cols-2">

          <a
            href="https://calendly.com/mikdigitalofficial/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[40px] border border-zinc-200 bg-white p-12 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
          >

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-700">
              Strategy Call
            </p>

            <h2 className="mt-5 text-4xl font-black text-zinc-950">
              Book a consultation call.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Discuss your lead generation challenges,
              acquisition systems, campaign performance,
              and growth opportunities.
            </p>

            <div className="mt-10 inline-flex rounded-2xl bg-indigo-700 px-6 py-4 text-lg font-semibold text-white">
              Book Strategy Call
            </div>

          </a>

          <a
            href="https://wa.me/971506102836"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-[40px] border border-zinc-200 bg-white p-12 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
          >

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-700">
              WhatsApp
            </p>

            <h2 className="mt-5 text-4xl font-black text-zinc-950">
              Direct operator communication.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Fast direct communication for campaign discussions,
              project inquiries, audits, and consulting support.
            </p>

            <div className="mt-10 inline-flex rounded-2xl border border-zinc-300 px-6 py-4 text-lg font-semibold text-zinc-950">
              Chat on WhatsApp
            </div>

          </a>

        </div>

      </section>

    </main>

  );

}