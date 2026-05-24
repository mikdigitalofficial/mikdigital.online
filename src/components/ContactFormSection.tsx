'use client'

import React, { useState } from 'react'

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
    fbq: (...args: unknown[]) => void
  }
}

export default function ContactFormSection() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const getCookie = (name: string) => {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
    return match ? match[2] : undefined
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)
    setError('')

    const form = e.currentTarget
    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value,
    }

    const eventId = crypto.randomUUID()

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      const isSuccess =
        data?.data?.[0]?.code === 'SUCCESS' ||
        data?.data?.[0]?.code === 'DUPLICATE'

      if (!isSuccess) {
        setError('Something went wrong. Please try again.')
        setLoading(false)
        return
      }

      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'generate_lead' })

      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', {}, { eventID: eventId })
      }

      fetch('/api/meta-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_name: 'Lead',
          page_url: window.location.href,
          email: formData.email,
          phone: formData.phone,
          fbc: getCookie('_fbc'),
          fbp: getCookie('_fbp'),
          event_id: eventId,
        }),
      }).catch(err => console.error('META CAPI error:', err))

      setSuccess(true)
    } catch (err) {
      console.error('Lead submit error:', err)
      setError('Network error. Please try again.')
    }

    setLoading(false)
  }

  return (
    <section className="border-b border-white/[0.06] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">

          {/* LEFT */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">Get in touch</p>
            <h2 className="mt-5 text-4xl font-black leading-tight text-white md:text-5xl">
              Ready to fix your acquisition?
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-400">
              If you are spending on ads but cannot see where leads go, or your tracking is broken, or your CRM does not follow up — let us talk.
            </p>

            <div className="mt-10 space-y-4">
              {[
                "Meta Ads & Google Ads",
                "Server-side tracking & CAPI",
                "CRM automation & WhatsApp",
                "GA4, GTM & attribution",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <span className="text-violet-400">checkmark</span>
                  <span className="text-sm text-zinc-400">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-10 flex flex-col gap-3">
              <a
                href="https://calendly.com/mikdigitalofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-white"
              >
                Book a free strategy call
              </a>
              <a
                href="https://wa.me/971506102836"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 transition hover:text-white"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="rounded-2xl border border-white/[0.08] bg-white/[0.03] p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                name="name"
                placeholder="Full Name"
                required
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.05] px-5 py-3.5 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-violet-500/50"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.05] px-5 py-3.5 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-violet-500/50"
              />
              <input
                name="phone"
                placeholder="Phone (e.g. +971 50 123 4567)"
                required
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.05] px-5 py-3.5 text-sm text-white placeholder-zinc-500 outline-none transition focus:border-violet-500/50"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-xl py-3.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
              >
                {loading ? 'Submitting...' : 'Get In Touch'}
              </button>
            </form>

            {success && (
              <div className="mt-4 rounded-xl border border-green-500/20 bg-green-500/10 px-5 py-4 text-sm text-green-400">
                Submitted — we will be in touch shortly.
              </div>
            )}
            {error && (
              <div className="mt-4 rounded-xl border border-red-500/20 bg-red-500/10 px-5 py-4 text-sm text-red-400">
                {error}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
