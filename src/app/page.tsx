export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black">

      <header className="sticky top-0 z-50 border-b border-zinc-200 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

          <div className="text-3xl font-bold tracking-tight">
            <span className="text-indigo-700">mik</span>digital
          </div>

          <div className="flex gap-6 text-sm font-medium text-zinc-600">
            <a href="#case-studies" className="hover:text-black">
              Case Studies
            </a>

            <a href="#campaigns" className="hover:text-black">
              Campaigns
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
          Revenue-focused marketing systems for education and entertainment brands.
        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-zinc-600">
          Meta Ads, Google Ads, WhatsApp funnels, SEO systems,
          CRM workflows, analytics, and lead generation infrastructure
          built for measurable growth.
        </p>

      </section>

      <section
        id="case-studies"
        className="mx-auto max-w-7xl px-6 py-20"
      >

        <div className="mb-12">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
            Case Studies
          </p>

          <h2 className="mt-4 text-4xl font-bold">
            Campaign Results
          </h2>

        </div>

        <div className="grid gap-10 md:grid-cols-2">

          <img
            src="/preschool-case-study.png"
            alt="Preschool Case Study"
            className="rounded-3xl border border-zinc-200 shadow-lg"
          />

          <img
            src="/dance-case-study.png"
            alt="Dance Case Study"
            className="rounded-3xl border border-zinc-200 shadow-lg"
          />

          <img
            src="/entertainment-case-study.png"
            alt="Entertainment Case Study"
            className="rounded-3xl border border-zinc-200 shadow-lg"
          />

        </div>

      </section>

      <section
        id="campaigns"
        className="bg-zinc-50 py-24"
      >

        <div className="mx-auto max-w-7xl px-6">

          <div className="mb-12">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-600">
              Campaign Screenshots
            </p>

            <h2 className="mt-4 text-4xl font-bold">
              Platform Proof
            </h2>

          </div>

          <div className="mb-16">

            <h3 className="mb-6 text-2xl font-semibold">
              Google Ads
            </h3>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              <img
                src="/googleads-1.png"
                alt="Google Ads"
                className="rounded-2xl border bg-white shadow-sm"
              />

              <img
                src="/googleads-2.png"
                alt="Google Ads"
                className="rounded-2xl border bg-white shadow-sm"
              />

              <img
                src="/googleads-3.png"
                alt="Google Ads"
                className="rounded-2xl border bg-white shadow-sm"
              />

              <img
                src="/googleads-4.png"
                alt="Google Ads"
                className="rounded-2xl border bg-white shadow-sm"
              />

            </div>

          </div>

          <div className="mb-16">

            <h3 className="mb-6 text-2xl font-semibold">
              Meta Ads
            </h3>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              <img
                src="/metaad-0.png"
                alt="Meta Ads"
                className="rounded-2xl border bg-white shadow-sm"
              />

              <img
                src="/metaad-1.png"
                alt="Meta Ads"
                className="rounded-2xl border bg-white shadow-sm"
              />

              <img
                src="/metacampaigns-1.png"
                alt="Meta Campaign"
                className="rounded-2xl border bg-white shadow-sm"
              />

              <img
                src="/metacampaigns-4.png"
                alt="Meta Campaign"
                className="rounded-2xl border bg-white shadow-sm"
              />

              <img
                src="/metacampaigns-5.png"
                alt="Meta Campaign"
                className="rounded-2xl border bg-white shadow-sm"
              />

            </div>

          </div>

          <div>

            <h3 className="mb-6 text-2xl font-semibold">
              SEO Results
            </h3>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

              <img
                src="/seo-1.png"
                alt="SEO Result"
                className="rounded-2xl border bg-white shadow-sm"
              />

              <img
                src="/seo-2.png"
                alt="SEO Result"
                className="rounded-2xl border bg-white shadow-sm"
              />

              <img
                src="/seo-3.png"
                alt="SEO Result"
                className="rounded-2xl border bg-white shadow-sm"
              />

            </div>

          </div>

        </div>

      </section>

      <section
        id="contact"
        className="mx-auto max-w-5xl px-6 py-24"
      >

        <div className="rounded-3xl bg-indigo-700 p-10 text-white">

          <h2 className="text-4xl font-bold">
            Let’s build your next growth system.
          </h2>

          <p className="mt-6 max-w-2xl text-lg text-indigo-100">
            Available for freelance consulting, paid ads management,
            analytics implementation, CRM systems, and lead generation projects.
          </p>

          <div className="mt-10 space-y-3 text-lg">

            <p>
              Email: alex@mikdigital.online
            </p>

            <p>
              Phone: +971506102836
            </p>

            <p>
              Website: mikdigital.online
            </p>

            <p>
              Instagram:
              {" "}
              <a
                href="https://instagram.com/mikdigital.online"
                className="underline"
              >
                @mikdigital.online
              </a>
            </p>

            <p>
              Facebook:
              {" "}
              <a
                href="https://facebook.com/mikdigital.online"
                className="underline"
              >
                mikdigital.online
              </a>
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}
