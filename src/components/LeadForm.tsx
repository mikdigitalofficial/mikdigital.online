'use client'

import React, { useState } from 'react'

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
    fbq: (...args: unknown[]) => void
  }
}

export default function LeadForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const getCookie = (name: string) => {
    const match = document.cookie.match(
      new RegExp('(^| )' + name + '=([^;]+)')
    )
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
      phone: (form.elements.namedItem('phone') as HTMLInputElement).value
    }

    // Single event_id shared between pixel and CAPI for deduplication
    const eventId = crypto.randomUUID()

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
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

      // GTM / GA4 — fires AFTER confirmed Zoho success
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'generate_lead' })

      // Meta Pixel browser event with shared eventID for deduplication
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', {}, { eventID: eventId })
      }

      // Meta CAPI server event — shares same event_id so Meta deduplicates
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
          event_id: eventId
        })
      }).catch(err => console.error('META CAPI error:', err))

      setSuccess(true)

    } catch (err) {
      console.error('Lead submit error:', err)
      setError('Network error. Please try again.')
    }

    setLoading(false)
  }

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      <div className="rounded-[32px] border border-zinc-200 bg-white p-10 shadow-xl">

        <h2 className="text-4xl font-black text-zinc-950">
          Get In Touch
        </
