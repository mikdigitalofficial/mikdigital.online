'use client'

import React, { useState } from 'react'

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
  }
}

export default function LeadForm() {

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget

    const formData = {
      name: (form.elements.namedItem('name') as HTMLInputElement).value,
      email: (form.elements.namedItem('email') as HTMLInputElement).value,
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value
    }

    const response = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })

    const data = await response.json()

    if (data?.data?.[0]?.code === 'SUCCESS') {

      // GTM dataLayer
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'generate_lead' })

      // ✅ Meta Conversions API (server-side)
      await fetch('/api/meta-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_name: 'Lead',
          url: window.location.href,
          email: formData.email,
          phone: formData.phone,
        })
      })

      setSuccess(true)
    }

    setLoading(false)
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <div className="rounded-[32px] border border-zinc-200 bg-white p-10 shadow-xl">
        <h2 className="text-4xl font-black text-zinc-950">Get In Touch</h2>
        <p className="mt-4 text-zinc-600">Submit your details and we'll contact you shortly.</p>

        <form onSubmit={handleSubmit} className="mt-10 space-y-6">
          <input name="name" placeholder="Full Name" required
            className="w-full rounded-2xl border border-zinc-300 px-5 py-4 text-lg outline-none focus:border-indigo-600" />

          <input name="email" type="email" placeholder="Email Address" required
            className="w-full rounded-2xl border border-zinc-300 px-5 py-4 text-lg outline-none focus:border-indigo-600" />

          <input name="phone" placeholder="Phone Number" required
            className="w-full rounded-2xl border border-zinc-300 px-5 py-4 text-lg outline-none focus:border-indigo-600" />

          <button type="submit"
            className="w-full rounded-2xl bg-indigo-700 px-6 py-4 text-lg font-semibold text-white transition hover:bg-indigo-800">
            {loading ? 'Submitting...' : 'Submit'}
          </button>
        </form>

        {success && (
          <div className="mt-6 rounded-2xl bg-green-100 px-5 py-4 text-green-700">
            Lead submitted successfully.
          </div>
        )}
      </div>
    </section>
  )
}
