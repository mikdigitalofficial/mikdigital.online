export default function HomePage() {
  const caseStudies = [
    {
      title: "Preschool Admissions Growth",
      result: "40–60 admissions monthly",
      description:
        "Meta Ads + WhatsApp funnel system generating consistent preschool enrollments.",
    },
    {
      title: "Dance Class Lead Generation",
      result: "1,962+ qualified leads",
      description:
        "Performance campaigns targeting entertainment and education audiences.",
    },
    {
      title: "Entertainment Industry Campaigns",
      result: "6,800+ leads generated",
      description:
        "Lead generation systems for music, dance, and training institutes.",
    },
  ];

  return (
    <main className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
          <div className="text-xl font-semibold tracking-tight">
            mikdigital
          </div>

          <div className="flex gap-6 text-sm text-zinc-400">
            <a href="#services" className="hover:text-white">
              Services
            </a>

            <a href="#case-studies" className="hover:text-white">
              Case Studies
            </a>

            <a href="#contact" className="hover:text-white">
              Contact
            </a>
          </div>
        </nav>
      </header>

      <section className="mx-auto max-w-6xl px-6 py-28">
        <p className="text-sm uppercase tracking-[0.3em] text-zinc-500">
          Performance Marketing Systems
        </p>

        <h1 className="mt-6 max-w-5xl text-5xl font-bold leading-tight md:text-7xl">
          Performance marketing systems for education and entertainment brands.
        </h1>

        <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
          Meta Ads, Google Ads, WhatsApp funnels, local SEO, CRM workflows,
          and lead generation systems built for measurable admissions and growth.
        </p>
      </section>

      <section
        id="services"
        className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3"
      >
        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h3 className="text-xl font-semibold">Paid Ads</h3>

          <p className="mt-4 text-zinc-400">
            Meta Ads and Google Ads campaign systems focused on lead quality,
            admissions growth, and conversion tracking.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h3 className="text-xl font-semibold">WhatsApp Funnels</h3>

          <p className="mt-4 text-zinc-400">
            Automated lead nurturing and WhatsApp conversion systems.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
          <h3 className="text-xl font-semibold">CRM & Analytics</h3>

          <p className="mt-4 text-zinc-400">
            Conversion tracking, automation workflows, and reporting systems.
          </p>
        </div>
      </section>

      <section
        id="case-studies"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <h2 className="text-4xl font-bold">Case Studies</h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {caseStudies.map((study) => (
            <div
              key={study.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
                Case Study
              </p>

              <h3 className="mt-4 text-2xl font-semibold">
                {study.title}
              </h3>

              <p className="mt-4 text-lg font-medium text-white">
                {study.result}
              </p>

              <p className="mt-4 text-zinc-400">
                {study.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-4xl px-6 py-24"
      >
        <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-10">
          <h2 className="text-4xl font-bold">
            Let’s build a growth system that scales.
          </h2>

          <p className="mt-6 text-zinc-400">
            Available for freelance consulting, paid acquisition systems,
            WhatsApp funnels, analytics, and technical marketing support.
          </p>

          <div className="mt-10 space-y-4 text-zinc-300">
            <p>Email: alex@mikdigital.online</p>

            <p>
              Phone:{" "}
              <a
                href="https://wa.me/971506102836"
                className="text-white hover:underline"
              >
                +971506102836
              </a>
            </p>

            <p>Location: Dubai</p>

            <p>
              Portfolio:{" "}
              <a
                href="https://www.mikdigital.online"
                target="_blank"
                className="text-white hover:underline"
              >
                mikdigital.online
              </a>
            </p>

            <div className="flex gap-6 pt-4">
              <a
                href="https://instagram.com/mikdigitalofficial"
                target="_blank"
                className="text-zinc-400 hover:text-white"
              >
                Instagram
              </a>

              <a
                href="https://facebook.com/mikdigitalofficial"
                target="_blank"
                className="text-zinc-400 hover:text-white"
              >
                Facebook
              </a>

              <a
                href="https://linkedin.com/in/mikdxb"
                target="_blank"
                className="text-zinc-400 hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
