export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">

      {/* HEADER */}
      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white/90 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div className="text-3xl font-bold tracking-tight">
            <span className="text-indigo-700">mik</span>digital
          </div>

          <div className="flex gap-8 text-sm font-medium text-zinc-600">
            <a href="#case-studies" className="hover:text-black">
              Case Studies
            </a>

            <a href="#contact" className="hover:text-black">
              Contact
            </a>
          </div>

        </nav>
      </header>

      {/* HERO */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
          Performance Marketing Specialist
        </p>

        <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          Revenue-focused marketing systems for modern businesses.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-600">
          Built acquisition systems across UAE and Australian brands handling
          Meta Ads, Google Ads, SEO, CRM workflows, analytics infrastructure,
          and conversion-focused lead generation systems.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <a
            href="https://calendly.com/mikdigitalofficial/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg"
          >
            Book Free Audit
          </a>

          <a
            href="https://wa.me/971506102836"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-zinc-300 px-8 py-4 text-lg font-semibold"
          >
            WhatsApp
          </a>

        </div>

        <p className="mt-6 text-sm text-zinc-500">
          Currently available for freelance consulting, growth systems,
          paid acquisition, and performance marketing support.
        </p>

      </section>

      {/* METRICS */}
      <section className="mx-auto max-w-7xl px-6 py-10">

        <div className="grid gap-6 md:grid-cols-4">

          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <p className="text-4xl font-bold text-black">AED 462K+</p>
            <p className="mt-2 text-zinc-600">
              Managed ad spend
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <p className="text-4xl font-bold text-black">14,000+</p>
            <p className="mt-2 text-zinc-600">
              Qualified leads generated
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <p className="text-4xl font-bold text-black">141K+</p>
            <p className="mt-2 text-zinc-600">
              Meta conversations generated
            </p>
          </div>

          <div className="rounded-3xl border border-zinc-200 bg-white p-8 shadow-sm">
            <p className="text-4xl font-bold text-black">20+</p>
            <p className="mt-2 text-zinc-600">
              SEO rankings & GBP profiles managed
            </p>
          </div>

        </div>

      </section>

      {/* OPERATIONAL EXPERIENCE */}
      <section className="mx-auto max-w-7xl px-6 py-12">

        <div className="rounded-[32px] border border-zinc-200 bg-zinc-50 p-10">

          <p className="text-sm uppercase tracking-[0.3em] text-indigo-600">
            Operational Experience
          </p>

          <div className="mt-8 grid gap-8 md:grid-cols-3">

            <div>
              <h3 className="text-2xl font-bold text-black">
                Multi-Market Campaigns
              </h3>

              <p className="mt-4 leading-8 text-zinc-600">
                Managed acquisition campaigns across UAE and Australian markets
                covering education, entertainment, service, and local business sectors.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black">
                Full Funnel Systems
              </h3>

              <p className="mt-4 leading-8 text-zinc-600">
                Experience across Meta Ads, Google Ads, SEO, landing pages,
                analytics infrastructure, CRM workflows, automation, and reporting.
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-black">
                Revenue-Focused Execution
              </h3>

              <p className="mt-4 leading-8 text-zinc-600">
                Focused on lead quality, CPL optimization, customer acquisition,
                conversion tracking accuracy, and scalable marketing operations.
              </p>
            </div>

          </div>

        </div>

      </section>

      {/* CASE STUDIES */}
      <section
        id="case-studies"
        className="mx-auto max-w-7xl px-6 py-24"
      >

        <p className="text-sm uppercase tracking-[0.3em] text-indigo-600">
          mikdigital
        </p>

        <h2 className="mt-4 max-w-5xl text-5xl font-bold leading-tight text-black">
          Campaign Systems & Performance Proof
        </h2>

        {/* EDUCATION & ENTERTAINMENT */}
        <div className="mt-20">

          <h3 className="text-3xl font-bold text-black">
            Education & Entertainment Campaigns
          </h3>

          <p className="mt-3 max-w-3xl text-lg leading-8 text-zinc-600">
            Multi-channel lead generation campaigns focused on customer acquisition,
            enrollments, conversion optimization, and scalable growth systems.
          </p>

          <div className="mt-8 grid gap-10 md:grid-cols-2">

            <img
              src="/images/screenshots/preschool01.png"
              alt="Campaign"
              className="rounded-3xl border border-zinc-200 shadow-xl"
            />

            <img
              src="/images/screenshots/bdancea01.png"
              alt="Campaign"
              className="rounded-3xl border border-zinc-200 shadow-xl"
            />

            <img
              src="/images/screenshots/entertainment01.png"
              alt="Campaign"
              className="rounded-3xl border border-zinc-200 shadow-xl"
            />

          </div>

        </div>

        {/* GOOGLE ADS */}
        <div className="mt-24">

          <h3 className="text-3xl font-bold text-black">
            Google Ads Performance Systems
          </h3>

          <p className="mt-3 max-w-3xl text-lg leading-8 text-zinc-600">
            Search, display, and conversion-focused campaigns optimized for scalable lead acquisition,
            CPL reduction, and measurable business growth.
          </p>

          <div className="mt-8 grid gap-10 md:grid-cols-2">

            <img
              src="/images/screenshots/googleadsoverall.png"
              alt="Google Ads"
              className="rounded-3xl border border-zinc-200 shadow-xl"
            />

            <img
              src="/images/screenshots/googleads-2.png"
              alt="Google Ads"
              className="rounded-3xl border border-zinc-200 shadow-xl"
            />

          </div>

        </div>

        {/* META ADS */}
        <div className="mt-24">

          <h3 className="text-3xl font-bold text-black">
            Meta & Facebook Acquisition Campaigns
          </h3>

          <p className="mt-3 max-w-3xl text-lg leading-8 text-zinc-600">
            Meta acquisition systems focused on audience targeting, creative testing,
            conversion optimization, and high-volume lead generation.
          </p>

          <div className="mt-8 grid gap-10 md:grid-cols-2">

            <img
              src="/images/screenshots/metaad-1.png"
              alt="Meta Ads"
              className="rounded-3xl border border-zinc-200 shadow-xl"
            />

            <img
              src="/images/screenshots/metacampaigns-1.png"
              alt="Meta Ads"
              className="rounded-3xl border border-zinc-200 shadow-xl"
            />

          </div>

        </div>

        {/* SEO */}
        <div className="mt-24">

          <h3 className="text-3xl font-bold text-black">
            SEO & Google Business Optimization
          </h3>

          <p className="mt-3 max-w-3xl text-lg leading-8 text-zinc-600">
            SEO and Google Business Profile optimization improving local visibility,
            search rankings, inbound discovery, and customer acquisition.
          </p>

          <div className="mt-8">

            <img
              src="/images/screenshots/seo-1.png"
              alt="SEO"
              className="rounded-3xl border border-zinc-200 shadow-xl"
            />

          </div>

        </div>

        {/* CERTIFICATIONS */}
        <div className="mt-24">

          <h3 className="text-3xl font-bold text-black">
            Professional Certifications
          </h3>

          <div className="mt-8 grid gap-10 md:grid-cols-2">

            <img
              src="/images/screenshots/cert-1.png"
              alt="Certification"
              className="rounded-3xl border border-zinc-200 shadow-xl"
            />

            <img
              src="/images/screenshots/cert-2.png"
              alt="Certification"
              className="rounded-3xl border border-zinc-200 shadow-xl"
            />

          </div>

        </div>

      </section>

      {/* CONTACT */}
      <section
        id="contact"
        className="mx-auto max-w-6xl px-6 py-24"
      >

        <div className="rounded-[32px] border border-zinc-200 bg-white p-10 shadow-2xl">

          <p className="text-sm uppercase tracking-[0.3em] text-indigo-600">
            Contact
          </p>

          <h2 className="mt-4 text-5xl font-bold text-black">
            Let’s build scalable marketing systems.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-zinc-600">
            Available for freelance consulting, paid acquisition systems,
            analytics implementation, CRM workflows, and performance marketing support.
          </p>

          <div className="mt-10">
            <a
              href="https://calendly.com/mikdigitalofficial/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-2xl bg-indigo-600 px-8 py-4 text-lg font-semibold text-white"
            >
              Book Free Audit
            </a>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">

            <a
              href="mailto:alex@mikdigital.online"
              className="rounded-2xl border border-zinc-200 p-6"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Email
              </p>

              <p className="mt-3 text-xl font-semibold text-black">
                alex@mikdigital.online
              </p>
            </a>

            <a
              href="https://wa.me/971506102836"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-zinc-200 p-6"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                WhatsApp
              </p>

              <p className="mt-3 text-xl font-semibold text-black">
                +971 50 610 2836
              </p>
            </a>

            <a
              href="https://instagram.com/mikdigital.online"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-zinc-200 p-6"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Instagram
              </p>

              <p className="mt-3 text-xl font-semibold text-black">
                @mikdigital.online
              </p>
            </a>

            <a
              href="https://linkedin.com/in/mikdxb"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-zinc-200 p-6"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                LinkedIn
              </p>

              <p className="mt-3 text-xl font-semibold text-black">
                linkedin.com/in/mikdxb
              </p>
            </a>

          </div>

        </div>

      </section>

      {/* MOBILE CTA */}
      <div className="fixed bottom-5 left-0 right-0 z-50 flex justify-center px-6 md:hidden">

        <a
          href="https://wa.me/971506102836"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full max-w-md rounded-2xl bg-indigo-600 px-6 py-4 text-center text-lg font-semibold text-white shadow-2xl"
        >
          WhatsApp — Book Free Audit
        </a>

      </div>

    </main>
  );
}
