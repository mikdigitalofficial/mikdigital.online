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
    <section className="mx-auto max-w-6xl px-6 py-24">
      <div
        className="rounded-[40px] p-10 md:p-16"
        style={{ background: 'linear-gradient(135deg, rgba(91,33,255,0.06) 0%, rgba(255,255,255,1) 50%, rgba(255,213,79,0.08) 100%)', border: '1px solid rgba(91,33,255,0.12)' }}
      >
        <div className="grid gap-12 md:grid-cols-2 md:items-center">

          {/* LEFT */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-700">
              Get In Touch
            </p>
            <h2 className="mt-5 text-4xl font-black leading-tight text-zinc-950 md:text-5xl">
              Ready to scale your acquisition?
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Get a conversion-focused growth system with tracking,
              CRM automation, Meta Ads, Google Ads,
              and scalable lead infrastructure.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {['Meta Ads', 'Google Ads', 'CRM Automation', 'Conversion Tracking'].map((tag) => (
                <div
                  key={tag}
                  className="rounded-full border border-violet-200 bg-violet-50 px-4 py-2 text-sm font-medium text-violet-700"
                >
                  {tag}
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-3">
              
                href="https://calendly.com/mikdigitalofficial/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 transition hover:text-violet-700"
              >
                📅 Book a free strategy call
              </a>
              
                href="https://wa.me/971506102836"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 transition hover:text-violet-700"
              >
                💬 Chat on WhatsApp
              </a>
            </div>
          </div>

          {/* RIGHT — FORM */}
          <div className="rounded-[32px] border border-zinc-200 bg-white p-8 shadow-xl">
            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                name="name"
                placeholder="Full Name"
                required
                className="w-full rounded-2xl border border-zinc-300 px-5 py-4 text-base outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-100"
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                required
                className="w-full rounded-2xl border border-zinc-300 px-5 py-4 text-base outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-100"
              />
              <input
                name="phone"
                placeholder="Phone (e.g. +971 50 123 4567)"
                required
                className="w-full rounded-2xl border border-zinc-300 px-5 py-4 text-base outline-none focus:border-violet-600 focus:ring-2 focus:ring-violet-100"
              />
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-2xl py-4 text-base font-semibold text-white transition hover:opacity-90 disabled:opacity-50"
                style={{ background: 'linear-gradient(135deg, #5B21FF 0%, #7C3AED 100%)' }}
              >
                {loading ? 'Submitting...' : 'Get In Touch'}
              </button>
            </form>

            {success && (
              <div className="mt-5 rounded-2xl bg-green-50 px-5 py-4 text-green-700 border border-green-200">
                ✓ Submitted — we&apos;ll be in touch shortly.
              </div>
            )}
            {error && (
              <div className="mt-5 rounded-2xl bg-red-50 px-5 py-4 text-red-700 border border-red-200">
                {error}
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
