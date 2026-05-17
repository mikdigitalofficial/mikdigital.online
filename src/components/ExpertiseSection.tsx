"use client";

import { useState } from "react";

export default function ExpertiseSection() {
  const [activeTab, setActiveTab] = useState("Meta Ads");

  const expertise = {
    "Meta Ads": {
      title: "Meta Ads & Paid Acquisition",
      description:
        "Full-funnel Meta acquisition systems focused on qualified lead generation, audience segmentation, retargeting, creative testing, and scalable customer acquisition.",

      leftTitle: "Acquisition Systems",
      leftItems: [
        "Lead generation campaigns",
        "Retargeting systems",
        "Audience segmentation",
        "Creative testing workflows",
      ],

      centerTitle: "Technical Execution",
      centerItems: [
        "Conversion API setup",
        "Pixel event tracking",
        "WhatsApp funnel integration",
        "Landing page optimization",
      ],

      rightTitle: "Business Outcomes",
      rightItems: [
        "Lower CPL",
        "Higher lead quality",
        "Improved ROAS visibility",
        "Scalable acquisition systems",
      ],

      tags: [
        "Meta Ads",
        "Facebook Ads",
        "Instagram Ads",
        "Retargeting",
        "Lead Generation",
        "WhatsApp Funnels",
      ],
    },

    "Google Ads": {
      title: "Google Ads & Search Acquisition",
      description:
        "Search-focused customer acquisition systems built around conversion intent, tracking accuracy, keyword structure, and scalable lead generation.",

      leftTitle: "Campaign Infrastructure",
      leftItems: [
        "Search campaigns",
        "Performance Max",
        "Keyword intent mapping",
        "Landing page alignment",
      ],

      centerTitle: "Optimization",
      centerItems: [
        "Conversion tracking",
        "Negative keyword systems",
        "CPL optimization",
        "Search term analysis",
      ],

      rightTitle: "Business Outcomes",
      rightItems: [
        "Higher quality leads",
        "Lower wasted spend",
        "Conversion visibility",
        "Scalable search acquisition",
      ],

      tags: [
        "Google Ads",
        "PMax",
        "GA4",
        "Search Campaigns",
        "Conversion Tracking",
        "Keyword Strategy",
      ],
    },

    "CRM & Automation": {
      title: "CRM Workflows & Automation Systems",
      description:
        "Lead routing, follow-up workflows, WhatsApp automation, CRM systems, and customer communication infrastructure.",

      leftTitle: "Workflow Systems",
      leftItems: [
        "Lead routing",
        "Automation workflows",
        "Follow-up sequences",
        "Pipeline visibility",
      ],

      centerTitle: "Platform Stack",
      centerItems: [
        "Brevo",
        "Zapier",
        "WhatsApp integration",
        "Email automation",
      ],

      rightTitle: "Business Outcomes",
      rightItems: [
        "Faster response times",
        "Reduced lead leakage",
        "Improved sales visibility",
        "Higher conversion consistency",
      ],

      tags: [
        "CRM",
        "Automation",
        "Brevo",
        "Zapier",
        "WhatsApp",
        "Lead Routing",
      ],
    },

    "SEO & Local Visibility": {
      title: "SEO & Local Search Visibility",
      description:
        "Search visibility systems focused on local SEO, Google Business Profile optimization, service-page structure, and inbound lead generation.",

      leftTitle: "SEO Infrastructure",
      leftItems: [
        "On-page SEO",
        "Local SEO",
        "Service page optimization",
        "Keyword structure",
      ],

      centerTitle: "Local Visibility",
      centerItems: [
        "Google Business Profile",
        "Citation consistency",
        "Maps optimization",
        "Search Console monitoring",
      ],

      rightTitle: "Business Outcomes",
      rightItems: [
        "Improved rankings",
        "Inbound lead growth",
        "Local search visibility",
        "Long-term traffic growth",
      ],

      tags: [
        "SEO",
        "GBP",
        "Local SEO",
        "Google Maps",
        "Search Console",
        "On-Page SEO",
      ],
    },

    "Analytics & Tracking": {
      title: "Analytics & Conversion Tracking",
      description:
        "Marketing analytics infrastructure focused on attribution visibility, conversion tracking accuracy, and performance reporting systems.",

      leftTitle: "Tracking Infrastructure",
      leftItems: [
        "GA4 implementation",
        "Conversion events",
        "Attribution visibility",
        "Reporting dashboards",
      ],

      centerTitle: "Tools & Platforms",
      centerItems: [
        "Google Analytics",
        "Microsoft Clarity",
        "Looker Studio",
        "Meta Events Manager",
      ],

      rightTitle: "Business Outcomes",
      rightItems: [
        "Accurate reporting",
        "Better optimization decisions",
        "Conversion clarity",
        "Reduced data blind spots",
      ],

      tags: [
        "GA4",
        "Clarity",
        "Analytics",
        "Looker Studio",
        "Tracking",
        "Attribution",
      ],
    },

    "AI Search Optimization": {
      title: "AI Search & GEO Optimization",
      description:
        "AI-search visibility systems structured for ChatGPT, Google AI Overviews, Gemini, and modern AI-driven discovery platforms.",

      leftTitle: "Optimization Areas",
      leftItems: [
        "Schema implementation",
        "FAQ structuring",
        "Entity optimization",
        "AI-readable content",
      ],

      centerTitle: "AI Platforms",
      centerItems: [
        "ChatGPT",
        "Google AI Overviews",
        "Gemini",
        "Perplexity",
      ],

      rightTitle: "Business Outcomes",
      rightItems: [
        "AI search visibility",
        "Future-ready SEO",
        "Structured knowledge signals",
        "Brand discoverability",
      ],

      tags: [
        "GEO",
        "AEO",
        "Schema",
        "AI Search",
        "ChatGPT",
        "Perplexity",
      ],
    },

    "Web Infrastructure": {
      title: "Web Infrastructure & Conversion Systems",
      description:
        "Conversion-focused website systems built around performance, usability, SEO structure, and lead generation.",

      leftTitle: "Platforms",
      leftItems: [
        "WordPress",
        "Shopify",
        "Webflow",
        "Landing page systems",
      ],

      centerTitle: "Optimization",
      centerItems: [
        "Mobile responsiveness",
        "Page structure",
        "Conversion UX",
        "Technical SEO",
      ],

      rightTitle: "Business Outcomes",
      rightItems: [
        "Higher conversion rates",
        "Better user experience",
        "Improved lead capture",
        "Faster websites",
      ],

      tags: [
        "WordPress",
        "Shopify",
        "Webflow",
        "Landing Pages",
        "UX",
        "Technical SEO",
      ],
    },

    "Email Marketing": {
      title: "Email Marketing & Retention Systems",
      description:
        "Lifecycle communication systems designed for retention, re-engagement, nurturing, and customer communication automation.",

      leftTitle: "Email Systems",
      leftItems: [
        "Welcome sequences",
        "Lead nurturing",
        "Re-engagement flows",
        "Campaign management",
      ],

      centerTitle: "Platforms",
      centerItems: [
        "Brevo",
        "Mailchimp",
        "Automation sequences",
        "Audience segmentation",
      ],

      rightTitle: "Business Outcomes",
      rightItems: [
        "Customer retention",
        "Improved engagement",
        "Repeat business",
        "Lifecycle visibility",
      ],

      tags: [
        "Email Marketing",
        "Mailchimp",
        "Brevo",
        "Automation",
        "Retention",
        "Sequences",
      ],
    },
  };

  const current = expertise[activeTab as keyof typeof expertise];

  return (
    <section className="mx-auto max-w-7xl px-6 py-24">

      <p className="text-center text-sm font-semibold uppercase tracking-[0.3em] text-indigo-700">
        Growth Systems & Technical Expertise
      </p>

      <h2 className="mt-5 text-center text-5xl font-black leading-tight text-zinc-950 md:text-7xl">
        Technical marketing infrastructure built for scalable business growth.
      </h2>

      <p className="mx-auto mt-8 max-w-4xl text-center text-xl leading-9 text-zinc-600">
        Technical systems covering customer acquisition, analytics,
        CRM workflows, AI search visibility, conversion tracking,
        automation infrastructure, and performance marketing execution.
      </p>

      {/* TABS */}
      <div className="mt-16 flex flex-wrap justify-center gap-4">

        {Object.keys(expertise).map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`rounded-full px-6 py-3 text-sm font-semibold transition ${
              activeTab === tab
                ? "bg-indigo-700 text-white"
                : "border border-zinc-200 bg-white text-zinc-700 hover:border-zinc-900"
            }`}
          >
            {tab}
          </button>
        ))}

      </div>

      {/* CONTENT CARD */}
      <div className="mt-14 rounded-[40px] border border-zinc-200 bg-white p-10 shadow-sm md:p-14">

        <h3 className="text-4xl font-black text-zinc-950">
          {current.title}
        </h3>

        <p className="mt-6 max-w-5xl text-lg leading-8 text-zinc-600">
          {current.description}
        </p>

        <div className="mt-12 grid gap-10 md:grid-cols-3">

          {/* LEFT */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
              {current.leftTitle}
            </p>

            <ul className="mt-6 space-y-5">

              {current.leftItems.map((item) => (
                <li
                  key={item}
                  className="text-lg leading-8 text-zinc-700"
                >
                  • {item}
                </li>
              ))}

            </ul>

          </div>

          {/* CENTER */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
              {current.centerTitle}
            </p>

            <ul className="mt-6 space-y-5">

              {current.centerItems.map((item) => (
                <li
                  key={item}
                  className="text-lg leading-8 text-zinc-700"
                >
                  • {item}
                </li>
              ))}

            </ul>

          </div>

          {/* RIGHT */}
          <div>

            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-700">
              {current.rightTitle}
            </p>

            <ul className="mt-6 space-y-5">

              {current.rightItems.map((item) => (
                <li
                  key={item}
                  className="text-lg leading-8 text-zinc-700"
                >
                  • {item}
                </li>
              ))}

            </ul>

          </div>

        </div>

        {/* TAGS */}
        <div className="mt-12 flex flex-wrap gap-3">

          {current.tags.map((tag) => (
            <div
              key={tag}
              className="rounded-full bg-indigo-50 px-5 py-2 text-sm font-medium text-indigo-700"
            >
              {tag}
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
