import Image from "next/image";
import { notFound } from "next/navigation";
import { caseStudies } from "@/content/site";
import { createMetadata } from "@/lib/seo";
import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl } from "@/lib/utils";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) return {};
  return createMetadata({ title: study.title, description: study.summary, path: `/case-studies/${study.slug}`, image: study.image });
}

export default async function CaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();

  return (
    <article className="container py-20">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: study.title,
          description: study.summary,
          image: absoluteUrl(study.image),
          author: { "@type": "Organization", name: "mikdigital" }
        }}
      />
      <p className="text-sm uppercase tracking-[0.24em] text-primary">{study.eyebrow}</p>
      <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">{study.title}</h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">{study.summary}</p>
      <div className="relative mt-10 aspect-[16/8] overflow-hidden rounded-lg border border-border bg-card">
        <Image src={study.image} alt="" fill className="object-contain p-8" priority />
      </div>
      <div className="mt-10 grid gap-4 md:grid-cols-3">
        {study.metrics.map((metric) => (
          <div key={metric} className="rounded-lg border border-border bg-card/60 p-5 text-sm">{metric}</div>
        ))}
      </div>
      <div className="mt-12 grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <h2 className="text-2xl font-semibold">Operating challenge</h2>
          <p className="mt-4 leading-7 text-muted-foreground">{study.challenge}</p>
          <h2 className="mt-10 text-2xl font-semibold">Business outcome</h2>
          <p className="mt-4 leading-7 text-muted-foreground">{study.result}</p>
        </div>
        <div className="grid gap-8">
          <section>
            <h2 className="text-2xl font-semibold">Approach</h2>
            <ul className="mt-4 grid gap-3 text-muted-foreground">
              {study.approach.map((item) => <li key={item} className="rounded-lg border border-border bg-card/50 p-4">{item}</li>)}
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-semibold">What improved</h2>
            <ul className="mt-4 grid gap-3 text-muted-foreground">
              {study.outcome.map((item) => <li key={item} className="rounded-lg border border-border bg-card/50 p-4">{item}</li>)}
            </ul>
          </section>
        </div>
      </div>
    </article>
  );
}
