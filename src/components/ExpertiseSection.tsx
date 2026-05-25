"use client";

import { useState } from "react";

const expertise = {
  "Meta Ads": {
    title: "Meta Ads & Paid Acquisition",
    description: "Full-funnel Meta acquisition systems focused on qualified lead generation, audience segmentation, retargeting, creative testing, and scalable customer acquisition.",
    leftTitle: "Acquisition Systems",
    leftItems: ["Lead generation campaigns", "Retargeting systems", "Audience segmentation", "Creative testing workflows"],
    centerTitle: "Technical Execution",
    centerItems: ["Conversion API setup", "Pixel event tracking", "WhatsApp funnel integration", "Landing page optimization"],
    rightTitle: "Business Outcomes",
    rightItems: ["Lower CPL", "Higher lead quality", "Improved ROAS visibility", "Scalable acquisition systems"],
    tags: ["Meta Ads", "Facebook Ads", "Instagram Ads", "Retargeting", "Lead Generation", "WhatsApp Funnels"],
  },
  "Google Ads": {
    title: "Google Ads & Search Acquisition",
    description: "Search-focused customer acquisition systems built around conversion intent, tracking accuracy, keyword structure, and scalable lead generation.",
    leftTitle: "Campaign Infrastructure",
    leftItems: ["Search campaigns", "Performance Max", "Keyword intent mapping", "Landing page alignment"],
    centerTitle: "Optimization",
    centerItems: ["Conversion tracking", "Negative keyword systems", "CPL optimization", "Search term analysis"],
    rightTitle: "Business Outcomes",
    rightItems: ["Higher quality leads", "Lower wasted spend", "Conversion visibility", "Scalable search acquisition"],
    tags: ["Google Ads", "PMax", "GA4", "Search Campaigns", "Conversion Tracking", "Keyword Strategy"],
  },
  "CRM & Automation": {
    title: "CRM Workflows & Automation Systems",
    description: "Lead routing, follow-up workflows, WhatsApp automation, CRM systems, and customer communication infrastructure.",
    leftTitle: "Workflow Systems",
    leftItems: ["Lead routing", "Automation workflows", "Follow-up sequences", "Pipeline visibility"],
    centerTitle: "Platform Stack",
    centerItems: ["Brevo", "Zapier", "WhatsApp integration", "Email automation"],
    rightTitle: "Business Outcomes",
    rightItems: ["Faster response times", "Reduced lead leakage", "Improved sales visibility", "Higher conversion consistency"],
    tags: ["CRM", "Automation", "Brevo", "Zapier", "WhatsApp", "Lead Routing"],
  },
  "Tracking & Attribution": {
    title: "Analytics & Conversion Tracking",
    description: "Marketing analytics infrastructure focused on attribution visibility, conversion tracking accuracy, and performance reporting systems.",
    leftTitle: "Tracking Infrastructure",
    leftItems: ["GA4 implementation", "Conversion events", "Attribution visibility", "Reporting dashboards"],
    centerTitle: "Tools & Platforms",
    centerItems: ["Google Analytics", "Microsoft Clarity", "Looker Studio", "Meta Events Manager"],
    rightTitle: "Business Outcomes",
    rightItems: ["Accurate reporting", "Better optimization decisions", "Conversion clarity", "Reduced data blind spots"],
    tags: ["GA4", "Clarity", "Analytics", "Looker Studio", "Tracking", "Attribution"],
  },
  "SEO & Local": {
    title: "SEO & Local Search Visibility",
    description: "Search visibility systems focused on local SEO, Google Business Profile optimization, service-page structure, and inbound lead generation.",
    leftTitle: "SEO Infrastructure",
    leftItems: ["On-page SEO", "Local SEO", "Service page optimization", "Keyword structure"],
    centerTitle: "Local Visibility",
    centerItems: ["Google Business Profile", "Citation consistency", "Maps optimization", "Search Console monitoring"],
    rightTitle: "Business Outcomes",
    rightItems: ["Improved rankings", "Inbound lead growth", "Local search visibility", "Long-term traffic growth"],
    tags: ["SEO", "GBP", "Local SEO", "Google Maps", "Search Console", "On-Page SEO"],
  },
  "AI Search": {
    title: "AI Search & GEO Optimization",
    description: "AI-search visibility systems structured for ChatGPT, Google AI Overviews, Gemini, and modern AI-driven discovery platforms.",
    leftTitle: "Optimization Areas",
    leftItems: ["Schema implementation", "FAQ structuring", "Entity optimization", "AI-readable content"],
    centerTitle: "AI Platforms",
    centerItems: ["ChatGPT", "Google AI Overviews", "Gemini", "Perplexity"],
    rightTitle: "Business Outcomes",
    rightItems: ["AI search visibility", "Future-ready SEO", "Structured knowledge signals", "Brand discoverability"],
    tags: ["GEO", "AEO", "Schema", "AI Search", "ChatGPT", "Perplexity"],
  },
};

export default function ExpertiseSection() {
  const [activeTab, setActiveTab] = useState("Meta Ads");
  const current = expertise[activeTab as keyof typeof expertise];

  return (
    <section className="border-b border-white/[0.06] py-24">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">Technical expertise</p>
        <h2 className="mt-5 max-w-3xl text-4xl font-black leading-tight text-white md:text-5xl">
          Every system, built to connect.
        </h2>
        <p className="mt-5 max-w-2xl text-lg text-zinc-400">
          Paid acquisition, tracking, CRM, SEO, and AI search — infrastructure that works together, not in silos.
        </p>

        {/* TABS */}
        <div className="mt-12 flex flex-wrap gap-2">
          {Object.keys(expertise).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`rounded-lg px-4 py-2 text-sm font-semibold transition ${
                activeTab === tab
                  ? "bg-violet-600 text-white"
                  : "border border-white/[0.08] bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:text-white"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* CONTENT */}
        <div className="mt-8 rounded-2xl border border-white/[0.08] bg-white/[0.02] p-8 md:p-12">
          <h3 className="text-2xl font-black text-white md:text-3xl">{current.title}</h3>
          <p className="mt-4 max-w-4xl text-base leading-7 text-zinc-400">{current.description}</p>

          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {[
              { title: current.leftTitle, items: current.leftItems },
              { title: current.centerTitle, items: current.centerItems },
              { title: current.rightTitle, items: current.rightItems },
            ].map((col) => (
              <div key={col.title}>
                <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">{col.title}</p>
                <ul className="mt-5 space-y-3">
                  {col.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-zinc-400">
                      <span className="mt-1 text-violet-500">▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-wrap gap-2">
            {current.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-400"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
