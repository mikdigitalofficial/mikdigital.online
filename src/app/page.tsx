'use client';

import ExpertiseSection from "@/components/ExpertiseSection";
import ContactFormSection from "@/components/ContactFormSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

{/* HERO */}
<section className="relative overflow-hidden">
  <div className="absolute inset-0 bg-gradient-to-b from-violet-50 via-white to-white" />

  <div className="relative mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-32">
    <div className="max-w-5xl">

      <p className="text-sm font-semibold uppercase tracking-[0.35em] text-violet-700">
        Independent Performance Growth Partner
      </p>

      <h1 className="mt-6 text-4xl font-black leading-[1.05] tracking-tight text-zinc-950 sm:text-5xl md:text-7xl">
        Performance marketing systems built for measurable business growth.
      </h1>

      <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-600 md:text-xl md:leading-9">
        After working as a Performance Marketing Specialist across UAE and Australian markets, I now operate mikdigital as an independent performance growth partner helping businesses improve lead generation, customer acquisition, analytics visibility, and conversion-focused marketing performance through Meta Ads, Google Ads, SEO, CRM workflows, and automation systems.
      </p>

      <div className="mt-10 flex flex-col gap-4 sm:flex-row">

        <a
          href="https://calendly.com/mikdigitalofficial/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-2xl px-7 py-4 text-base font-semibold text-white shadow-xl transition hover:scale-[1.02] md:px-8 md:text-lg"
          style={{ background: 'linear-gradient(135deg, #5B21FF 0%, #7C3AED 100%)' }}
        >
          Book Strategy Call
        </a>

        <a
          href="https://wa.me/971506102836"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-2xl border border-zinc-300 bg-white px-7 py-4 text-base font-semibold transition hover:border-zinc-900 md:px-8 md:text-lg"
        >
          WhatsApp
        </a>

      </div>

      <div className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">

        <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm md:p-6">
          <p className="text-2xl font-black text-zinc-950 md:text-3xl">AED 462K+</p>
          <p className="mt-2 text-sm leading-6 text-zinc-600">Managed advertising spend</p>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm md:p-6">
          <p className="text-2xl font-black text-zinc-950 md:text-3xl">14K+</p>
          <p className="mt-2 text-sm leading-6 text-zinc-600">Qualified leads generated</p>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm md:p-6">
          <p className="text-2xl font-black text-zinc-950 md:text-3xl">141K+</p>
          <p className="mt-2 text-sm leading-6 text-zinc-600">Meta conversations generated</p>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-5 shadow-sm md:p-6">
          <p className="text-2xl font-black text-zinc-950 md:text-3xl">UAE + AUS</p>
          <p className="mt-2 text-sm leading-6 text-zinc-600">Multi-market experience</p>
        </div>

      </div>

    </div>
  </div>
</section>

{/* TRUST */}
<section className="mx-auto max-w-7xl px-6 py-20">
  <div className="grid gap-10 md:grid-cols-2">

    <div className="rounded-[32px] border border-zinc-200 bg-white p-10 shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-700">
        Built Through Real Execution
      </p>

      <h2 className="mt-5 text-4xl font-black leading-tight text-zinc-950">
        Operational experience from real campaigns, not generic templates.
      </h2>

      <p className="mt-6 text-lg leading-8 text-zinc-600">
        Experience handling customer acquisition, lead qualification,
        CRM workflows, automation, analytics implementation,
        SEO visibility, reporting infrastructure, and paid acquisition
        campaigns across UAE and Australian businesses.
      </p>
    </div>

    <div className="rounded-[32px] bg-zinc-950 p-10 text-white">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
        What Businesses Actually Need
      </p>

      <ul className="mt-8 space-y-5 text-lg leading-8 text-zinc-300">
        <li>• Better lead quality</li>
        <li>• Lower customer acquisition costs</li>
        <li>• Faster response systems</li>
        <li>• Clear reporting visibility</li>
        <li>• Accurate conversion tracking</li>
        <li>• Marketing connected to revenue outcomes</li>
      </ul>
    </div>

  </div>
</section>

{/* SERVICES */}
<section id="services" className="mx-auto max-w-7xl px-6 py-20">

  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-700">
    Services
  </p>

  <h2 className="mt-5 max-w-4xl text-5xl font-black leading-tight text-zinc-950">
    Customer acquisition and conversion systems built for modern businesses.
  </h2>

  <div className="mt-16 grid gap-8 md:grid-cols-2">

    <div className="rounded-[32px] border border-zinc-200 p-10">
      <h3 className="text-3xl font-black">Paid Acquisition</h3>
      <p className="mt-5 text-lg leading-8 text-zinc-600">
        Meta Ads and Google Ads campaigns focused on qualified leads,
        conversion tracking accuracy, and scalable customer acquisition.
      </p>
    </div>

    <div className="rounded-[32px] border border-zinc-200 p-10">
      <h3 className="text-3xl font-black">CRM & Automation</h3>
      <p className="mt-5 text-lg leading-8 text-zinc-600">
        Lead routing, WhatsApp automation, CRM workflows,
        follow-up systems, and reporting pipelines.
      </p>
    </div>

    <div className="rounded-[32px] border border-zinc-200 p-10">
      <h3 className="text-3xl font-black">SEO & Local Visibility</h3>
      <p className="mt-5 text-lg leading-8 text-zinc-600">
        SEO and Google Business Profile optimization improving
        local search visibility and inbound lead generation.
      </p>
    </div>

    <div className="rounded-[32px] border border-zinc-200 p-10">
      <h3 className="text-3xl font-black">Analytics & Reporting</h3>
      <p className="mt-5 text-lg leading-8 text-zinc-600">
        GA4, conversion tracking, attribution visibility,
        dashboard systems, and performance reporting.
      </p>
    </div>

  </div>

</section>

{/* TOOLS */}
<section className="mx-auto max-w-7xl px-6 py-20">

  <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-violet-700">
    Tools & Skills
  </p>

  <h2 className="mt-5 text-center text-5xl font-black leading-tight text-zinc-950 md:text-6xl">
    Marketing infrastructure I work with.
  </h2>

  <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
    {[
      "WordPress",
      "Shopify",
      "Zapier",
      "Brevo",
      "Looker Studio",
      "Webflow",
      "Google Analytics",
      "Google Ads",
      "Meta Ads",
      "Canva",
      "Microsoft Clarity",
      "SEMrush",
      "Mailchimp",
      "CapCut",
      "GA4",
      "CRM Automation",
    ].map((tool) => (
      <div
        key={tool}
        className="flex h-36 items-center justify-center rounded-[28px] border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl"
      >
        <p className="text-center text-xl font-semibold text-zinc-700">{tool}</p>
      </div>
    ))}
  </div>

</section>

{/* WHY MIKDIGITAL */}
<section className="mx-auto max-w-7xl px-6 py-20">
  <div className="overflow-hidden rounded-[32px] border border-zinc-200">

    <div className="grid border-b border-zinc-200 bg-zinc-50 md:grid-cols-2">
      <div className="border-r border-zinc-200 p-8">
        <h3 className="text-2xl font-black text-zinc-500">Typical Agency</h3>
      </div>

      <div className="p-8">
        <h3 className="text-2xl font-black text-violet-700">mikdigital</h3>
      </div>
    </div>

    {[
      ["Junior execution after sales handoff.", "Direct operator involvement across strategy and execution."],
      ["Generic campaigns reused across industries.", "Business-specific acquisition and conversion systems."],
      ["Slow reporting and communication layers.", "Fast direct communication and rapid optimization."],
      ["Focus on impressions and vanity metrics.", "Focus on lead quality, CPL, and revenue visibility."],
      ["High overhead and bloated retainers.", "Lean execution focused on performance."],
    ].map((item, index) => (
      <div key={index} className="grid border-b border-zinc-200 md:grid-cols-2">

        <div className="border-r border-zinc-200 bg-red-50/40 p-8">
          <p className="text-lg leading-8 text-zinc-700">{item[0]}</p>
        </div>

        <div className="bg-violet-50/40 p-8">
          <p className="text-lg leading-8 text-zinc-700">{item[1]}</p>
        </div>

      </div>
    ))}

  </div>
</section>

<ExpertiseSection />

{/* FOUNDER */}
<section className="mx-auto max-w-7xl px-6 py-20">
  <div className="grid items-center gap-16 rounded-[40px] border border-zinc-200 bg-white p-10 shadow-sm md:grid-cols-2 md:p-16">

    <div>
      <div className="overflow-hidden rounded-[32px] border border-zinc-200 shadow-xl">
        <img
          src="/images/screenshots/mikdigital-founder.png"
          alt="Mohamed Ibrahim Khan"
          className="h-full w-full object-cover"
        />
      </div>
    </div>

    <div>

      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-700">
        Direct Growth Partnership
      </p>

      <h2 className="mt-5 text-5xl font-black leading-tight text-zinc-950">
        Built and operated by Mohamed Ibrahim Khan.
      </h2>

      <p className="mt-8 text-lg leading-9 text-zinc-600">
        After working as a Performance Marketing Specialist across UAE and Australian markets, I started mikdigital as an independent performance growth practice focused on lead generation, customer acquisition, analytics visibility, and scalable marketing systems.
      </p>

      <p className="mt-6 text-lg leading-9 text-zinc-600">
        My experience includes Meta Ads, Google Ads, SEO, CRM workflows, analytics implementation, WhatsApp funnels, automation systems, reporting infrastructure, and conversion-focused growth operations designed around measurable business outcomes.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2">

        <div className="rounded-2xl bg-zinc-50 p-5">
          <p className="text-3xl font-black text-zinc-950">UAE + AUS</p>
          <p className="mt-2 text-sm leading-7 text-zinc-600">Multi-market acquisition experience</p>
        </div>

        <div className="rounded-2xl bg-zinc-50 p-5">
          <p className="text-3xl font-black text-zinc-950">14K+</p>
          <p className="mt-2 text-sm leading-7 text-zinc-600">Qualified leads generated</p>
        </div>

        <div className="rounded-2xl bg-zinc-50 p-5">
          <p className="text-3xl font-black text-zinc-950">AED 462K+</p>
          <p className="mt-2 text-sm leading-7 text-zinc-600">Managed advertising spend</p>
        </div>

        <div className="rounded-2xl bg-zinc-50 p-5">
          <p className="text-3xl font-black text-zinc-950">Full Funnel</p>
          <p className="mt-2 text-sm leading-7 text-zinc-600">Ads, CRM, SEO, analytics & automation</p>
        </div>

      </div>

      <div className="mt-10 flex flex-wrap gap-3">
        {["Meta Ads", "Google Ads", "SEO", "CRM Systems", "Automation", "GA4", "WhatsApp Funnels", "AI Search"].map((item) => (
          <div
            key={item}
            className="rounded-full bg-violet-50 px-5 py-2 text-sm font-medium text-violet-700"
          >
            {item}
          </div>
        ))}
      </div>

    </div>
  </div>
</section>

{/* CASE STUDIES */}
<section id="case-studies" className="mx-auto max-w-7xl px-6 py-20">

  <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-700">
    Case Studies
  </p>

  <h2 className="mt-5 max-w-5xl text-5xl font-black leading-tight text-zinc-950">
    Campaign performance, acquisition systems, and operational execution.
  </h2>

  <div className="mt-16 grid gap-10 md:grid-cols-2">
    {[
      "/images/screenshots/googleadsoverall.png",
      "/images/screenshots/metaad-1.png",
      "/images/screenshots/seo-1.png",
      "/images/screenshots/googleads-2.png",
    ].map((image, index) => (
      <img
        key={index}
        src={image}
        alt="Case Study"
        className="rounded-[32px] border border-zinc-200 shadow-xl"
      />
    ))}
  </div>

</section>

{/* ABOUT */}
<section id="about" className="mx-auto max-w-7xl px-6 py-20">

  <div className="rounded-[40px] bg-zinc-950 p-12 text-white md:p-16">

    <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-400">
      About mikdigital
    </p>

    <h2 className="mt-5 max-w-5xl text-5xl font-black leading-tight">
      Built by an operator who has worked inside real UAE marketing environments.
    </h2>

    <p className="mt-8 max-w-4xl text-xl leading-9 text-zinc-300">
      Started in performance marketing handling real acquisition pressure,
      lead generation targets, and campaign execution for UAE businesses.
      Over time the work expanded beyond ads into CRM systems,
      automation workflows, reporting infrastructure,
      SEO visibility, and conversion-focused growth operations.
    </p>

  </div>

</section>

{/* CONTACT FORM */}
<ContactFormSection />

{/* MOBILE STICKY CTA */}
<div className="fixed bottom-5 left-0 right-0 z-50 flex justify-center px-6 md:hidden">

  <a
    href="https://wa.me/971506102836"
    target="_blank"
    rel="noopener noreferrer"
    className="w-full max-w-md rounded-2xl px-6 py-4 text-center text-lg font-semibold text-white shadow-2xl"
    style={{ background: 'linear-gradient(135deg, #5B21FF 0%, #7C3AED 100%)' }}
  >
    WhatsApp — Book Strategy Call
  </a>

</div>

    </main>
  );
}
