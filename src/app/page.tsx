export default function HomePage() {
return ( <main className="min-h-screen bg-black text-white"> <header className="border-b border-zinc-800"> <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5"> <div className="text-xl font-semibold tracking-tight">
mikdigital </div>

```
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
      Technical growth infrastructure for brands that care about revenue.
    </h1>

    <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400">
      Meta Ads, Google Ads, local SEO, CRM workflows, analytics, landing
      pages, and acquisition systems designed for scalable growth.
    </p>

    <div className="mt-10 flex gap-4">
      <a
        href="#contact"
        className="rounded-lg bg-white px-6 py-3 text-sm font-medium text-black"
      >
        Work With Me
      </a>

      <a
        href="#case-studies"
        className="rounded-lg border border-zinc-700 px-6 py-3 text-sm"
      >
        View Case Studies
      </a>
    </div>
  </section>

  <section
    id="services"
    className="mx-auto grid max-w-6xl gap-6 px-6 py-16 md:grid-cols-3"
  >
    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
      <h3 className="text-xl font-semibold">Paid Ads</h3>

      <p className="mt-4 text-zinc-400">
        Meta Ads and Google Ads campaign systems focused on lead quality,
        CPL reduction, and conversion tracking.
      </p>
    </div>

    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
      <h3 className="text-xl font-semibold">Local SEO</h3>

      <p className="mt-4 text-zinc-400">
        Google Maps and GBP optimization for stronger local visibility and
        inbound acquisition.
      </p>
    </div>

    <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
      <h3 className="text-xl font-semibold">CRM & Analytics</h3>

      <p className="mt-4 text-zinc-400">
        Conversion tracking, lead routing, automation workflows, and
        reporting systems.
      </p>
    </div>
  </section>

  <section
    id="case-studies"
    className="mx-auto max-w-6xl px-6 py-24"
  >
    <h2 className="text-4xl font-bold">Case Studies</h2>

    <div className="mt-12 grid gap-8 md:grid-cols-3">
      <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          UAE Real Estate
        </p>

        <h3 className="mt-4 text-2xl font-semibold">
          400+ qualified leads
        </h3>

        <p className="mt-4 text-zinc-400">
          Restructured Meta and Google Ads campaigns to improve lead quality
          and reduce CPL.
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Multi Brand Scaling
        </p>

        <h3 className="mt-4 text-2xl font-semibold">
          Cross-channel growth systems
        </h3>

        <p className="mt-4 text-zinc-400">
          Unified reporting, CRM workflows, and campaign operations across
          multiple brands.
        </p>
      </div>

      <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6">
        <p className="text-sm uppercase tracking-[0.2em] text-zinc-500">
          Local SEO
        </p>

        <h3 className="mt-4 text-2xl font-semibold">
          Google Maps visibility growth
        </h3>

        <p className="mt-4 text-zinc-400">
          GBP optimization and local SEO improvements that increased inbound
          discovery.
        </p>
      </div>
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
        analytics implementation, and technical marketing support.
      </p>

      <div className="mt-10 space-y-3 text-zinc-300">
        <p>Email: kimofficialmik@gmail.com</p>
        <p>Location: Dubai</p>
        <p>Portfolio: mikdigital.online</p>
      </div>
    </div>
  </section>
</main>
```

);
}
