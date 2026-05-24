'use client';
import Link from "next/link";
import ExpertiseSection from "@/components/ExpertiseSection";
export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

{/* HEADER */}
<header className="sticky top-0 z-50 border-b border-violet-100/40" style={{background: 'linear-gradient(135deg, rgba(91,33,255,0.07) 0%, rgba(255,255,255,0.96) 50%, rgba(255,213,79,0.09) 100%)', backdropFilter: 'blur(20px)'}}>
  <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">

    {/* LOGO */}
    <Link href="/" className="flex items-center shrink-0">
      <img
        src="/website-logo.png"
        alt="mikdigital"
        className="h-10 w-auto object-contain md:h-12"
      />
    </Link>

    {/* DESKTOP NAV */}
    <div className="hidden items-center gap-8 text-sm font-semibold text-zinc-700 md:flex">
      <a href="#services" className="transition hover:text-violet-700">Services</a>
      <Link href="/case-studies" className="transition hover:text-violet-700">Case Studies</Link>
      <a href="#about" className="transition hover:text-violet-700">About</a>
      <Link
        href="/contact"
        className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        style={{background: 'linear-gradient(135deg, #5B21FF 0%, #7C3AED 100%)'}}
      >
        Contact
      </Link>
    </div>

    {/* MOBILE NAV — inline with logo */}
    <div className="flex items-center gap-3 md:hidden">
      <a href="#services" className="text-xs font-semibold text-zinc-600 whitespace-nowrap">Services</a>
      <Link href="/case-studies" className="text-xs font-semibold text-zinc-600 whitespace-nowrap">Work</Link>
      <a href="#about" className="text-xs font-semibold text-zinc-600 whitespace-nowrap">About</a>
      <Link
        href="/contact"
        className="rounded-lg px-3 py-2 text-xs font-semibold text-white whitespace-nowrap"
        style={{background: 'linear-gradient(135deg, #5B21FF 0%, #7C3AED 100%)'}}
      >
        Contact
      </Link>
    </div>

  </nav>
</header>

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

      {/* CTA */}
      <div className="mt-10 flex flex-col gap-4 sm:flex-row">
        
          href="https://calendly.com/mikdigitalofficial/30min"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-2xl px-7 py-4 text-base font-semibold text-white shadow-xl transition hover:scale-[1.02] md:px-8 md:text-lg"
          style={{background: 'linear-gradient(135deg, #5B21FF 0%, #7C3AED 100%)'}}
        >
          Book Strategy Call
        </a>
        
          href="https://wa.me/971506102836"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-2xl border border-zinc-300 bg-white px-7 py-4 text-base font-semibold transition hover:border-zinc-900 md:px-8 md:text-lg"
        >
          WhatsApp
        </a>
      </div>

      {/* METRICS */}
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

{/* TOOLS & SKILLS */}
<section className="mx-auto max-w-7xl px-6 py-20">

  <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-violet-700">
    Tools & Skills
  </p>

  <h2 className="mt-5 text-center text-5xl font-black leading-tight text-zinc-950 md:text-6xl">
    Marketing infrastructure I work with.
  </h2>

  <div className="mt-16 grid grid-cols-2 gap-6 md:grid-cols-4">
    {[
      "WordPress", "Shopify", "Zapier", "Brevo",
      "Looker Studio", "Webflow", "Google Analytics", "Google Ads",
      "Meta Ads", "Canva", "Microsoft Clarity", "SEMrush",
      "Mailchimp", "CapCut", "GA4", "CRM Automation",
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

{/
