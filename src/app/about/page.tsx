import Image from "next/image";
import { createMetadata } from "@/lib/seo";
import { brand } from "@/content/site";

export const metadata = createMetadata({
  title: "About",
  description: "About mikdigital, a technical performance marketing operator for paid acquisition, local SEO, analytics, and conversion systems.",
  path: "/about"
});

export default function AboutPage() {
  return (
    <section className="container grid gap-12 py-20 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-sm uppercase tracking-[0.24em] text-primary">about mikdigital</p>
        <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl">A practical operator for technical growth systems.</h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">{brand.positioning}</p>
      </div>
      <div className="space-y-6 text-muted-foreground">
        <p>
          mikdigital started as a performance portfolio with proof from Google Ads, Meta Ads, SEO, and lead generation work across UAE and Australia. This rebuilt platform keeps that evidence, but reframes it around the work that actually compounds: tracking, operations, offer clarity, sales feedback, and disciplined weekly improvement.
        </p>
        <p>
          The positioning is intentionally sober. Acquisition work is full of noisy screenshots and oversized claims. The better path is to make the system measurable, reduce waste, improve lead quality, and give teams a clear operating rhythm.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {["Google Ads", "Meta Ads", "Local SEO", "Analytics", "Landing pages", "Lead quality ops"].map((item) => (
            <div key={item} className="rounded-lg border border-border bg-card/60 p-4 text-sm text-foreground">{item}</div>
          ))}
        </div>
        <Image src="/brand/website-logo.png" alt="mikdigital mark" width={420} height={220} className="rounded-lg border border-border bg-white p-6" />
      </div>
    </section>
  );
}
