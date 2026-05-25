'use client';

import { motion } from 'framer-motion';

const metrics = [
  { number: 'AED 462K+', label: 'Ad Spend Managed'      },
  { number: '14,000+',   label: 'Qualified Leads'        },
  { number: '20+',       label: 'GBP Profiles Ranked'    },
  { number: '141K+',     label: 'Customer Conversations' },
];

export default function Metrics() {
  return (
    <section className="border-b border-white/[0.05] py-20 md:py-24">
      <div className="container-xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {metrics.map(({ number, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-[2.4rem] md:text-[3rem] font-semibold tracking-tight text-white leading-none">
                {number}
              </div>
              <p className="mt-3 text-[13px] text-zinc-500">{label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
