'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    id: '01',
    category: 'Real Estate Lead System',
    title: '38% Lower CPL',
    description: 'Rebuilt acquisition flow, CRM routing, and WhatsApp conversion infrastructure. Reduced cost-per-lead by 38% within 60 days.',
    metrics: [
      { label: 'CPL Reduction', value: '−38%' },
      { label: 'Channel', value: 'Meta Ads' },
      { label: 'Market', value: 'UAE' },
    ],
    tags: ['Meta Ads', 'CRM', 'WhatsApp Flows'],
    accent: 'from-violet-500/[0.06]',
  },
  {
    id: '02',
    category: 'Local SEO Infrastructure',
    title: '20+ Profiles Ranked',
    description: 'Built scalable Google Business optimization and lead capture architecture. Ranked 20+ profiles in competitive local markets.',
    metrics: [
      { label: 'Profiles Ranked', value: '20+' },
      { label: 'Channel', value: 'Local SEO' },
      { label: 'Market', value: 'UAE + AUS' },
    ],
    tags: ['GBP Optimization', 'Local SEO', 'Lead Capture'],
    accent: 'from-blue-500/[0.06]',
  },
  {
    id: '03',
    category: 'CRM + Automation System',
    title: '141K+ Conversations',
    description: 'Deployed end-to-end Zoho CRM workflows with WhatsApp automation. Powered 600–700 monthly customer acquisitions at scale.',
    metrics: [
      { label: 'Conversations', value: '141K+' },
      { label: 'Monthly Customers', value: '600–700' },
      { label: 'Tool', value: 'Zoho CRM' },
    ],
    tags: ['CRM Automation', 'WhatsApp', 'Lead Routing'],
    accent: 'from-emerald-500/[0.05]',
  },
  {
    id: '04',
    category: 'Full-Funnel Performance',
    title: 'AED 462K Managed',
    description: 'End-to-end acquisition systems across Meta and Google. AED 33 CPL with 14,000+ qualified leads generated at peak performance.',
    metrics: [
      { label: 'Ad Spend', value: 'AED 462K+' },
      { label: 'Leads', value: '14,000+' },
      { label: 'CPL', value: 'AED 33' },
    ],
    tags: ['Google Ads', 'Meta Ads', 'Full Funnel'],
    accent: 'from-amber-500/[0.05]',
  },
];

const revealY = (delay = 0) => ({
  initial: { opacity: 0, y: 28, filter: 'blur(4px)' },
  whileInView: { opacity: 1, y: 0, filter: 'blur(0px)' },
  viewport: { once: true, margin: '-50px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
});

export default function CaseStudies() {
  return (
    <section id="cases" className="section relative">
      <div className="container-xl">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
          <div>
            <motion.div {...revealY()} className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-violet-500/50" />
              <span className="label">Selected Builds</span>
            </motion.div>
            <motion.h2 {...revealY(0.08)} className="heading-xl">
              Case Studies
            </motion.h2>
          </div>
          <motion.a
            {...revealY(0.12)}
            href="/case-studies"
            className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-white transition-colors duration-300 group shrink-0"
          >
            View all work
            <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
          </motion.a>
        </div>

        {/* Case study grid */}
        <div className="grid md:grid-cols-2 gap-5">
          {cases.map(({ id, category, title, description, metrics, tags, accent }, i) => (
            <motion.div
              key={id}
              {...revealY(i * 0.07)}
              whileHover={{ y: -5, transition: { duration: 0.35, ease: 'easeOut' } }}
              className="group relative overflow-hidden rounded-[20px] border border-white/[0.07] bg-white/[0.02] p-8 md:p-10 hover:border-white/[0.14] transition-colors duration-400 cursor-default"
            >
              {/* Accent background on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${accent} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[20px]`} />

              <div className="relative z-10">
                {/* Top row */}
                <div className="flex items-start justify-between mb-8">
                  <span className="text-[11px] font-semibold tracking-[0.18em] text-zinc-600 uppercase">
                    {category}
                  </span>
                  <span className="text-[11px] font-medium text-zinc-700 tabular-nums">
                    {id}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-[2rem] md:text-[2.6rem] font-semibold tracking-tight text-white leading-[1.1] mb-5">
                  {title}
                </h3>

                {/* Description */}
                <p className="text-[14px] leading-[1.75] text-zinc-500 mb-8 max-w-sm">
                  {description}
                </p>

                {/* Metrics row */}
                <div className="grid grid-cols-3 gap-4 border-t border-white/[0.05] pt-6 mb-6">
                  {metrics.map(({ label, value }) => (
                    <div key={label}>
                      <div className="text-[1.1rem] font-semibold text-white tracking-tight">{value}</div>
                      <div className="text-[10px] text-zinc-600 tracking-wide mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
