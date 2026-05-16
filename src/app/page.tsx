export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">

      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
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

      <section className="mx-auto max-w-7xl px-6 py-24">

        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
          Performance Marketing Specialist
        </p>

        <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          Revenue-focused marketing systems for modern businesses.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-600">
          Paid ads, SEO, CRM workflows, analytics systems,
          automation, and lead generation infrastructure
          built for measurable business growth.
        </p>

        <div className="mt-10">
          <a
            href="https://calendly.com/mikdigitalofficial/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl bg-indigo-600 px-8 py-4 text-lg font-semibold text-white"
          >
            Book Free Audit
          </a>
        </div>

      </section>
<section
  id="case-studies"
  className="mx-auto max-w-7xl px-6 py-24"
>

  <p className="text-sm uppercase tracking-[0.3em] text-indigo-600">
    mikdigital
  </p>

  <h2 className="mt-4 max-w-5xl text-5xl font-bold leading-tight text-black">
    Case Studies, Google Ads, Meta Ads, SEO, YouTube Ads & Certifications
  </h2>

  {/* CASE STUDIES */}
  <div className="mt-20">
    <h3 className="text-3xl font-bold text-black">
      Case Studies
    </h3>

    <div className="mt-8 grid gap-10 md:grid-cols-2">

      <img
        src="/images/screenshots/preschool01.png"
        alt="Case Study"
        className="rounded-3xl border border-zinc-200 shadow-xl"
      />

      <img
        src="/images/screenshots/preschool02.png"
        alt="Case Study"
        className="rounded-3xl border border-zinc-200 shadow-xl"
      />

      <img
        src="/images/screenshots/bdancea01.png"
        alt="Case Study"
        className="rounded-3xl border border-zinc-200 shadow-xl"
      />

      <img
        src="/images/screenshots/bdancea02.png"
        alt="Case Study"
        className="rounded-3xl border border-zinc-200 shadow-xl"
      />

      <img
        src="/images/screenshots/entertainment01.png"
        alt="Case Study"
        className="rounded-3xl border border-zinc-200 shadow-xl"
      />

    </div>
  </div>

  {/* GOOGLE ADS */}
  <div className="mt-24">
    <h3 className="text-3xl font-bold text-black">
      Google Ads
    </h3>

    <div className="mt-8 grid gap-10 md:grid-cols-2">

      <img
        src="/images/screenshots/googleadsoverall.png"
        alt="Google Ads"
        className="rounded-3xl border border-zinc-200 shadow-xl"
      />

      <img
        src="/images/screenshots/googleads-1.png"
        alt="Google Ads"
        className="rounded-3xl border border-zinc-200 shadow-xl"
      />

      <img
        src="/images/screenshots/googleads-2.png"
        alt="Google Ads"
        className="rounded-3xl border border-zinc-200 shadow-xl"
      />

      <img
        src="/images/screenshots/googleads-3.png"
        alt="Google Ads"
        className="rounded-3xl border border-zinc-200 shadow-xl"
      />

      <img
        src="/images/screenshots/googleads-4.png"
        alt="Google Ads"
        className="rounded-3xl border border-zinc-200 shadow-xl"
      />

    </div>
  </div>

  {/* META ADS */}
  <div className="mt-24">
    <h3 className="text-3xl font-bold text-black">
      Meta Ads / Facebook Ads
    </h3>

    <div className="mt-8 grid gap-10 md:grid-cols-2">

      <img
        src="/images/screenshots/metaad-0.png"
        alt="Meta Ads"
        className="rounded-3xl border border-zinc-200 shadow-xl"
      />

      <img
        src="/images/screenshots/metaad-1.png"
        alt="Meta Ads"
        className="rounded-3xl border border-zinc-200 shadow-xl"
      />

      <img
        src="/images/screenshots/metaadobjective.png"
        alt="Meta Ads"
        className="rounded-3xl border border-zinc-200 shadow-xl"
      />

      <img
        src="/images/screenshots/metaadsdetailtargeting.png"
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
      SEO
    </h3>

    <div className="mt-8 grid gap-10 md:grid-cols-2">

      <img
        src="/images/screenshots/seo-1.png"
        alt="SEO"
        className="rounded-3xl border border-zinc-200 shadow-xl"
      />

      <img
        src="/images/screenshots/seo-2.png"
        alt="SEO"
        className="rounded-3xl border border-zinc-200 shadow-xl"
      />

      <img
        src="/images/screenshots/seo-3.png"
        alt="SEO"
        className="rounded-3xl border border-zinc-200 shadow-xl"
      />

    </div>
  </div>

  {/* YOUTUBE ADS */}
  <div className="mt-24">
    <h3 className="text-3xl font-bold text-black">
      YouTube Ads
    </h3>

    <div className="mt-8">

      <img
        src="/images/screenshots/youtubeads-1.png"
        alt="YouTube Ads"
        className="rounded-3xl border border-zinc-200 shadow-xl"
      />

    </div>
  </div>

  {/* CERTIFICATIONS */}
  <div className="mt-24">
    <h3 className="text-3xl font-bold text-black">
      Certifications
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

      <img
        src="/images/screenshots/cert-4.png"
        alt="Certification"
        className="rounded-3xl border border-zinc-200 shadow-xl"
      />

      <img
        src="/images/screenshots/cert-5.png"
        alt="Certification"
        className="rounded-3xl border border-zinc-200 shadow-xl"
      />

    </div>
  </div>

</section>
 
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
              href="https://facebook.com/mikdigital.online"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-2xl border border-zinc-200 p-6"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Facebook
              </p>

              <p className="mt-3 text-xl font-semibold text-black">
                mikdigital.online
              </p>
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}
