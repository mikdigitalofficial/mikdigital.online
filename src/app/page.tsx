export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <header className="border-b bg-white">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          <div className="text-lg font-bold">
            mikdigital
          </div>

          <nav className="flex gap-6 text-sm">
            <a href="#proof" className="hover:text-blue-600">
              Proof
            </a>

            <a
              href="#contact"
              className="rounded-xl border border-blue-600 px-4 py-2 text-blue-600"
            >
              Hire Me
            </a>
          </nav>
        </div>
      </header>

      <section className="bg-gradient-to-r from-blue-50 to-orange-50 py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Performance Marketing with{" "}
              <span className="text-blue-600">
                Real Proof
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-700">
              Google Ads · Meta Ads · WhatsApp Funnels · Lead Generation ·
              Analytics Systems
            </p>

            <p className="mt-4 text-gray-600">
              16,000+ qualified leads · 93M+ impressions · Multi-brand campaign
              experience across education and entertainment industries.
            </p>
          </div>

          <div>
            <img
              src="/screenshots/googleadsoverall.png"
              alt="Campaign Results"
              className="rounded-3xl border bg-white p-4 shadow-xl"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <h2 className="text-3xl font-bold">
            Performance Highlights
          </h2>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl border p-6">
              <div className="text-sm text-gray-500">
                Campaign Experience
              </div>

              <div className="text-2xl font-bold">
                Multi-Brand
              </div>
            </div>

            <div className="rounded-2xl border p-6">
              <div className="text-sm text-gray-500">
                Impressions
              </div>

              <div className="text-2xl font-bold">
                93M+
              </div>
            </div>

            <div className="rounded-2xl border p-6">
              <div className="text-sm text-gray-500">
                Leads Generated
              </div>

              <div className="text-2xl font-bold">
                16,000+
              </div>
            </div>

            <div className="rounded-2xl border p-6">
              <div className="text-sm text-gray-500">
                Industries
              </div>

              <div className="text-2xl font-bold">
                Education & Entertainment
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="proof" className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="mb-10 text-3xl font-bold">
            Campaign Proof
          </h2>

          <h3 className="mb-4 text-xl font-semibold">
            Google Ads
          </h3>

          <div className="mb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <img
              src="/screenshots/googleads-1.png"
              className="rounded-2xl border bg-white"
            />

            <img
              src="/screenshots/googleads-2.png"
              className="rounded-2xl border bg-white"
            />

            <img
              src="/screenshots/googleads-3.png"
              className="rounded-2xl border bg-white"
            />
          </div>

          <h3 className="mb-4 text-xl font-semibold">
            Meta Ads
          </h3>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <img
              src="/screenshots/metaad-0.png"
              className="rounded-2xl border bg-white"
            />

            <img
              src="/screenshots/metaad-1.png"
              className="rounded-2xl border bg-white"
            />

            <img
              src="/screenshots/metacampaigns-1.png"
              className="rounded-2xl border bg-white"
            />
          </div>
        </div>
      </section>

      <section id="contact" className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-6">
          <div className="rounded-3xl border bg-white p-10 shadow-sm">
            <h2 className="text-4xl font-bold">
              Let’s build growth systems that convert.
            </h2>

            <p className="mt-6 text-gray-600">
              Available for freelance consulting, paid acquisition systems,
              WhatsApp funnels, analytics implementation, and performance
              marketing support.
            </p>

            <div className="mt-10 space-y-4">
              <p>
                Email: alex@mikdigital.online
              </p>

              <p>
                WhatsApp: +971506102836
              </p>

              <p>
                Location: Dubai
              </p>

              <div className="flex gap-6 pt-4">
                <a
                  href="https://instagram.com/mikdigitalofficial"
                  target="_blank"
                  className="text-blue-600"
                >
                  Instagram
                </a>

                <a
                  href="https://facebook.com/mikdigitalofficial"
                  target="_blank"
                  className="text-blue-600"
                >
                  Facebook
                </a>

                <a
                  href="https://linkedin.com/in/mikdxb"
                  target="_blank"
                  className="text-blue-600"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
