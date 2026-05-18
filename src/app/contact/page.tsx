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

      {/* CONTACT CARDS */}
      <section className="mx-auto max-w-6xl px-6 py-24">

        <div className="grid gap-8 md:grid-cols-2">

          <a
  href="https://calendly.com/mikdigitalofficial/30min"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-[40px] border border-zinc-200 bg-white p-12 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
  onClick={() => {

    gtag('event', 'strategy_call_click');

    fbq('track', 'Schedule');

  }}
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
  onClick={() => {

    gtag('event', 'whatsapp_click');

    fbq('track', 'Contact');

  }}
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

      {/* INFO */}
      <section className="mx-auto max-w-6xl px-6 pb-24">

        <div className="rounded-[40px] bg-zinc-950 p-12 text-white md:p-16">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-400">
            Contact Information
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-2">

            <div>

              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Email
              </p>

            <a
  href="mailto:alex@mikdigital.online"
  className="mt-3 block text-2xl font-semibold hover:text-indigo-400"
  onClick={() => {

    gtag('event', 'email_click');

    fbq('track', 'Contact');

  }}
>
  alex@mikdigital.online
</a>

            </div>

            <div>

              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                LinkedIn
              </p>

              <a
  href="https://linkedin.com/in/mikdxb"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-3 block text-2xl font-semibold hover:text-indigo-400"
  onClick={() => {

    gtag('event', 'linkedin_click');

    fbq('track', 'ViewContent');

  }}
>
  linkedin.com/in/mikdxb
</a>

            </div>

            <div>

              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Location
              </p>

              <p className="mt-3 text-2xl font-semibold">
                Dubai / UAE
              </p>

            </div>

            <div>

              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Services
              </p>

              <p className="mt-3 text-2xl font-semibold">
                Meta Ads • Google Ads • SEO • CRM
              </p>

            </div>

          </div>

        </div>

      </section>

    </main>
  );
}
