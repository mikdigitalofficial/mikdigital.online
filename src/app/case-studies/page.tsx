import { CaseStudyPreview } from "@/components/home/case-study-preview";
import { createMetadata } from "@/lib/seo";

export const metadata = createMetadata({
  title: "Case Studies",
  description: "Operational case studies for UAE real estate lead generation, multi-brand acquisition, and Google Maps local SEO growth.",
  path: "/case-studies"
});

export default function CaseStudiesPage() {
  return (
    <>
      <section className="container py-20">
        <p className="text-sm uppercase tracking-[0.24em] text-primary">case studies</p>
        <h1 className="mt-5 max-w-4xl text-4xl font-semibold tracking-tight md:text-6xl">Technical acquisition work, documented without inflated certainty.</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-muted-foreground">
          These studies use realistic operating constraints and the existing proof assets from the legacy portfolio where relevant.
        </p>
      </section>
      <CaseStudyPreview />
    </>
  );
}
