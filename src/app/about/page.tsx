import Image from "next/image";
import ContactFormSection from "@/components/ContactFormSection";
import { createMetadata } from "@/lib/seo";
import { brand } from "@/content/site";

export const metadata = createMetadata({
  title: "About",
  description:
    "About mikdigital, a technical performance marketing operator for paid acquisition, local SEO, analytics, and conversion systems.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* HERO */}
      <section
        className="border-b border-zinc-200"
        style={{
          background:
            "linear-gradient(135deg, rgba(91,33,255,0.06) 0%, rgba(255,255,255,1) 60%, rgba(255,213,79,0.07) 100%)",
        }}
      >
        <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-700">
            About mikdigital
          </p>

          <h1 className="mt-6 max-w-5xl text-5xl font-black leading-tight text-zinc-950 md:text-7xl">
            A practical operator for technical growth systems.
          </h1>

          <p className="mt-8 max-w-3xl text-xl leading-9 text-zinc-600">
            {brand.positioning}
          </p>

        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-7xl px-6 py-24">

        <div className="grid gap-16 md:grid-cols-2">

          <div className="space-y-6 text-lg leading-9 text-zinc-600">

            <p>
              mikdigital started as a performance portfolio with proof from
              Google Ads, Meta Ads, SEO, and lead generation work across UAE
              and Australia. This rebuilt platform keeps that evidence, but
              reframes it around the work that actually compounds: tracking,
              operations, offer clarity, sales feedback, and disciplined weekly
              improvement.
            </p>

            <p>
              The positioning is intentionally sober. Acquisition work is full
              of noisy screenshots and oversized claims. The better path is to
              make the system measurable, reduce waste, improve lead quality,
              and give teams a clear operating rhythm.
            </p>

          </div>

          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-700">
              Core Capabilities
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4">

              {[
                "Google Ads",
                "Meta Ads",
                "Local SEO",
                "Analytics",
                "GA4",
                "WhatsApp Funnels",
                "CRM Automation",
                "Landing Pages",
                "Lead Quality Ops",
                "Conversion Tracking",
                "Looker Studio",
                "Microsoft Clarity",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-zinc-200 bg-white p-4 text-sm font-medium text-zinc-700 shadow-sm"
                >
                  {item}
                </div>
              ))}

            </div>

            <div className="mt-10">
              <Image
                src="/brand/website-logo.png"
                alt="mikdigital mark"
                width={420}
                height={220}
                className="rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm"
              />
            </div>

          </div>

        </div>

      </section>

      {/* CONTACT FORM */}
      <ContactFormSection />

    </main>
  );
}
