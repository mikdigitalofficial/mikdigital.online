'use client';

import Link from "next/link";

export default function CaseStudiesPage() {
  const caseStudies = [
    {
      slug: "circle-time-uae",
      title: "Circle Time UAE",
      category: "Preschool Admissions Growth",
      image: "/images/screenshots/preschool01.png",
      result: "13x–20x ROAS",
      metrics: [
        "40–60 Admissions",
        "AED 50–75 CPA",
        "AED 40K–60K Revenue",
      ],
      description:
        "Meta Ads and WhatsApp funnel systems focused on increasing preschool admissions and improving parent inquiry conversion.",
    },

    {
      slug: "jazz-rockers-australia",
      title: "Jazz Rockers Australia",
      category: "Bollywood Dance Lead Generation",
      image: "/images/screenshots/bdancea01.png",
      result: "1,962 Leads",
      metrics: [
        "AED 23–34 CPL",
        "100–200 Admissions",
        "AUD 12K–48K Revenue",
      ],
      description:
        "Community-focused acquisition campaigns targeting Indian audiences in Adelaide using Meta Ads, Google Ads, and WhatsApp funnels.",
    },
  ];

  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* HERO */}
      <section className="border-b border-zinc-200 bg-gradient-to-b from-indigo-50 to-white">

        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-700">
            Case Studies
          </p>

          <h1 className="mt-6 max-w-6xl text-5xl font-black leading-tight text-zinc-950 md:text-7xl">
            Campaign execution focused on measurable business growth.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-600">
            Real acquisition campaigns across UAE and Australian businesses
            covering Meta Ads, Google Ads, CRM workflows,
            WhatsApp funnels, local audience targeting,
            and conversion-focused growth systems.
          </p>

        </div>

      </section>

      {/* CASE STUDIES GRID */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-12 lg:grid-cols-2">

          {caseStudies.map((study) => (
            <div
              key={study.slug}
              className="overflow-hidden rounded-[40px] border border-zinc-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
            >

              {/* IMAGE */}
              <div className="overflow-hidden border-b border-zinc-200">

                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full object-cover"
                />

              </div>

              {/* CONTENT */}
              <div className="p-10">

                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-indigo-700">
                  {study.category}
                </p>

                <h2 className="mt-4 text-4xl font-black leading-tight text-zinc-950">
                  {study.title}
                </h2>

                <p className="mt-6 text-lg leading-8 text-zinc-600">
                  {study.description}
                </p>

                {/* RESULT */}
                <div className="mt-8 rounded-3xl bg-indigo-50 p-6">

                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
                    Key Result
                  </p>

                  <p className="mt-3 text-5xl font-black text-indigo-700">
                    {study.result}
                  </p>

                </div>

                {/* METRICS */}
                <div className="mt-8 flex flex-wrap gap-3">

                  {study.metrics.map((metric) => (
                    <div
                      key={metric}
                      className="rounded-full border border-zinc-200 bg-white px-5 py-2 text-sm font-medium text-zinc-700"
                    >
                      {metric}
                    </div>
                  ))}

                </div>

                {/* CTA */}
                <div className="mt-10">

                  <Link
                    href="/contact"
                    className="inline-flex items-center rounded-2xl bg-zinc-950 px-6 py-4 text-lg font-semibold text-white transition hover:bg-indigo-700"
                  >
                    Discuss Similar Growth
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

      </section>

     <div className="mt-10 flex flex-wrap gap-4">

  <a
    href="https://calendly.com/mikdigitalofficial/30min"
    target="_blank"
    rel="noopener noreferrer"
    className="rounded-2xl bg-indigo-700 px-8 py-4 text-lg font-semibold text-white"
  >
    Book Strategy Call
  </a>

  <Link
    href="/contact"
    className="rounded-2xl border border-zinc-700 px-8 py-4 text-lg font-semibold text-white"
  >
    Contact
  </Link>

</div> 

</div>

      </section>

    </main>
  );
}
