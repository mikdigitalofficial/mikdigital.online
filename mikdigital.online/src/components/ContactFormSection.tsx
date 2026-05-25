'use client'

import React, { useState, useId } from 'react'

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
    fbq: (...args: unknown[]) => void
  }
}

function CheckIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="M3 8l3.5 3.5L13 4.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function ArrowIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  )
}

function SpinnerIcon() {
  return (
    <svg
      width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
      style={{ animation: 'spin 0.8s linear infinite' }}
    >
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5" strokeDasharray="28" strokeDashoffset="10" strokeLinecap="round"/>
    </svg>
  )
}

const services = [
  { value: "meta-ads", label: "Meta Ads" },
  { value: "google-ads", label: "Google Ads" },
  { value: "tracking", label: "Tracking & Attribution" },
  { value: "crm", label: "CRM & Automation" },
  { value: "whatsapp", label: "WhatsApp Funnels" },
  { value: "full-funnel", label: "Full-Funnel System" },
  { value: "audit", label: "Performance Audit" },
]

const benefits = [
  "Meta Ads & Google Ads",
  "Server-side tracking & CAPI",
  "CRM automation & WhatsApp",
  "GA4, GTM & attribution",
]

export default function ContactFormSection() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [values, setValues] = useState({ name: '', email: '', phone: '', service: '' })
  const id = useId()

  const getCookie = (name: string) => {
    if (typeof document === 'undefined') return undefined
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'))
    return match ? match[2] : undefined
  }

  const validate = (field: string, value: string) => {
    if (field === 'name' && !value.trim()) return 'Name is required'
    if (field === 'email') {
      if (!value) return 'Email is required'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Enter a valid email'
    }
    if (field === 'phone' && !value.trim()) return 'Phone is required'
    return ''
  }

  const getFieldError = (field: string) =>
    touched[field] ? validate(field, values[field as keyof typeof values]) : ''

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setTouched({ name: true, email: true, phone: true })

    const nameErr = validate('name', values.name)
    const emailErr = validate('email', values.email)
    const phoneErr = validate('phone', values.phone)
    if (nameErr || emailErr || phoneErr) return

    setLoading(true)
    setError('')

    const eventId = crypto.randomUUID()

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone,
          service: values.service,
        }),
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

      // GTM
      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'generate_lead' })

      // Meta Pixel
      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', {}, { eventID: eventId })
      }

      // Meta CAPI (server-side, non-blocking)
      fetch('/api/meta-event', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          event_name: 'Lead',
          page_url: window.location.href,
          email: values.email,
          phone: values.phone,
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
    <>
      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(12px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .mik-field {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .mik-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #71717a;
        }
        .mik-input {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 14px 18px;
          font-size: 14px;
          color: #fff;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          -webkit-autofill: none;
          box-sizing: border-box;
        }
        .mik-input::placeholder { color: #52525b; }
        .mik-input:hover { border-color: rgba(255,255,255,0.14); background: rgba(255,255,255,0.05); }
        .mik-input:focus { border-color: rgba(139,92,246,0.6); background: rgba(139,92,246,0.06); box-shadow: 0 0 0 3px rgba(139,92,246,0.12); }
        .mik-input.error { border-color: rgba(239,68,68,0.5); background: rgba(239,68,68,0.05); }
        .mik-input.error:focus { box-shadow: 0 0 0 3px rgba(239,68,68,0.1); }
        .mik-input:-webkit-autofill,
        .mik-input:-webkit-autofill:hover,
        .mik-input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 1000px #111 inset;
          -webkit-text-fill-color: #fff;
          border-color: rgba(139,92,246,0.4);
          caret-color: #fff;
        }
        .mik-select {
          width: 100%;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 12px;
          padding: 14px 18px;
          font-size: 14px;
          color: #71717a;
          outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%2352525b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 18px center;
          box-sizing: border-box;
        }
        .mik-select:hover { border-color: rgba(255,255,255,0.14); background-color: rgba(255,255,255,0.05); }
        .mik-select:focus { border-color: rgba(139,92,246,0.6); box-shadow: 0 0 0 3px rgba(139,92,246,0.12); color: #fff; }
        .mik-select option { background: #111; color: #fff; }
        .mik-error-msg {
          font-size: 12px;
          color: #f87171;
          display: flex;
          align-items: center;
          gap: 5px;
          animation: fadeUp 0.2s ease;
        }
        .mik-btn-primary {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 15px 24px;
          border-radius: 12px;
          border: none;
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.01em;
          cursor: pointer;
          transition: opacity 0.2s, transform 0.15s;
          position: relative;
          overflow: hidden;
        }
        .mik-btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent);
          opacity: 0;
          transition: opacity 0.2s;
        }
        .mik-btn-primary:hover::after { opacity: 1; }
        .mik-btn-primary:active { transform: scale(0.99); }
        .mik-btn-primary:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
        .mik-success {
          padding: 20px;
          border-radius: 14px;
          border: 1px solid rgba(34,197,94,0.2);
          background: rgba(34,197,94,0.08);
          animation: scaleIn 0.35s cubic-bezier(0.34,1.56,0.64,1);
        }
        .mik-trust-item {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 13px;
          color: #a1a1aa;
        }
        .mik-trust-check {
          flex-shrink: 0;
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background: rgba(139,92,246,0.15);
          border: 1px solid rgba(139,92,246,0.25);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #a78bfa;
          font-size: 11px;
        }
      `}</style>

      <section className="border-b border-white/[0.06] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 md:grid-cols-2 md:items-start">

            {/* LEFT — Trust + Info */}
            <div className="md:pt-2">
              <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">Work with mikdigital</p>
              <h2 className="mt-5 text-4xl font-black leading-[1.1] text-white md:text-5xl">
                Ready to fix your acquisition?
              </h2>
              <p className="mt-6 text-base leading-8 text-zinc-400">
                Work directly with Mohamed Ibrahim Khan on performance marketing, AI-enhanced growth systems, and conversion infrastructure. No account managers. No black-box reporting.
              </p>

              <div className="mt-10 space-y-3">
                {benefits.map((item) => (
                  <div key={item} className="mik-trust-item">
                    <div className="mik-trust-check"><CheckIcon /></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Response expectation */}
              <div className="mt-10 rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
                <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">Response time</p>
                <p className="mt-2 text-lg font-black text-white">Within 24 hours</p>
                <p className="mt-1 text-sm text-zinc-500">Usually much faster. Strategy calls available same week.</p>
              </div>

              {/* Quick actions */}
              <div className="mt-6 grid grid-cols-2 gap-3">
                <a
                  href="https://calendly.com/mikdigitalofficial/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition hover:border-violet-500/30 hover:bg-violet-500/[0.06]"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-violet-400 mb-3" aria-hidden="true">
                    <rect x="2" y="4" width="16" height="14" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M6 2v4M14 2v4M2 8h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <p className="text-sm font-bold text-white">Book a call</p>
                  <p className="mt-1 text-xs text-zinc-500">Free 30-min strategy session</p>
                  <p className="mt-3 text-xs font-semibold text-violet-400 group-hover:underline">Schedule →</p>
                </a>

                <a
                  href="https://wa.me/971506102836"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group rounded-2xl border border-white/[0.08] bg-white/[0.02] p-5 transition hover:border-white/20 hover:bg-white/[0.04]"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="text-green-400 mb-3" aria-hidden="true">
                    <path d="M10 2C5.6 2 2 5.6 2 10c0 1.5.4 2.9 1.1 4.1L2 18l4-1.1C7.2 17.6 8.6 18 10 18c4.4 0 8-3.6 8-8s-3.6-8-8-8z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                    <path d="M7.5 9c0-.3.2-.5.5-.5.5 0 1 .5 1.5 1s.5 1.5 0 2c-.5.5-1 .5-1.5.5-.5 0-1-.5-1-1 0-.3.2-.5.5-.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  </svg>
                  <p className="text-sm font-bold text-white">WhatsApp</p>
                  <p className="mt-1 text-xs text-zinc-500">Message directly, fast reply</p>
                  <p className="mt-3 text-xs font-semibold text-zinc-400 group-hover:text-white">Chat now →</p>
                </a>
              </div>
            </div>

            {/* RIGHT — Form */}
            <div className="rounded-2xl border border-white/[0.08] bg-white/[0.025] p-8">
              {success ? (
                <div className="mik-success">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10 text-green-400">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <p className="text-lg font-black text-white">Message sent.</p>
                  <p className="mt-2 text-sm leading-7 text-zinc-400">
                    We&apos;ll follow up within 24 hours. Check your WhatsApp and email for a confirmation.
                  </p>
                  <div className="mt-6 flex gap-3">
                    <a
                      href="https://calendly.com/mikdigitalofficial/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold text-white transition hover:opacity-90"
                      style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
                    >
                      Also book a strategy call <ArrowIcon />
                    </a>
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-xs font-semibold uppercase tracking-widest text-violet-400">Start a project</p>
                  <h3 className="mt-3 text-2xl font-black text-white">Get in touch</h3>
                  <p className="mt-2 text-sm text-zinc-500">Fill in your details — reply within 24 hours, usually faster.</p>

                  <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
                    <div className="mik-field">
                      <label htmlFor={`${id}-name`} className="mik-label">Full Name</label>
                      <input
                        id={`${id}-name`}
                        name="name"
                        type="text"
                        placeholder="Mohamed Al Rashid"
                        autoComplete="name"
                        required
                        value={values.name}
                        onChange={e => setValues(v => ({ ...v, name: e.target.value }))}
                        onBlur={() => setTouched(t => ({ ...t, name: true }))}
                        className={`mik-input${getFieldError('name') ? ' error' : ''}`}
                        aria-describedby={getFieldError('name') ? `${id}-name-err` : undefined}
                        aria-invalid={!!getFieldError('name')}
                      />
                      {getFieldError('name') && (
                        <span id={`${id}-name-err`} className="mik-error-msg" role="alert">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M6 4v2.5M6 8v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                          {getFieldError('name')}
                        </span>
                      )}
                    </div>

                    <div className="mik-field">
                      <label htmlFor={`${id}-email`} className="mik-label">Email Address</label>
                      <input
                        id={`${id}-email`}
                        name="email"
                        type="email"
                        placeholder="you@company.com"
                        autoComplete="email"
                        required
                        value={values.email}
                        onChange={e => setValues(v => ({ ...v, email: e.target.value }))}
                        onBlur={() => setTouched(t => ({ ...t, email: true }))}
                        className={`mik-input${getFieldError('email') ? ' error' : ''}`}
                        aria-describedby={getFieldError('email') ? `${id}-email-err` : undefined}
                        aria-invalid={!!getFieldError('email')}
                      />
                      {getFieldError('email') && (
                        <span id={`${id}-email-err`} className="mik-error-msg" role="alert">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M6 4v2.5M6 8v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                          {getFieldError('email')}
                        </span>
                      )}
                    </div>

                    <div className="mik-field">
                      <label htmlFor={`${id}-phone`} className="mik-label">Phone / WhatsApp</label>
                      <input
                        id={`${id}-phone`}
                        name="phone"
                        type="tel"
                        placeholder="+971 50 123 4567"
                        autoComplete="tel"
                        required
                        value={values.phone}
                        onChange={e => setValues(v => ({ ...v, phone: e.target.value }))}
                        onBlur={() => setTouched(t => ({ ...t, phone: true }))}
                        className={`mik-input${getFieldError('phone') ? ' error' : ''}`}
                        aria-describedby={getFieldError('phone') ? `${id}-phone-err` : undefined}
                        aria-invalid={!!getFieldError('phone')}
                      />
                      {getFieldError('phone') && (
                        <span id={`${id}-phone-err`} className="mik-error-msg" role="alert">
                          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M6 4v2.5M6 8v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                          {getFieldError('phone')}
                        </span>
                      )}
                    </div>

                    <div className="mik-field">
                      <label htmlFor={`${id}-service`} className="mik-label">What do you need? <span className="text-zinc-600 normal-case tracking-normal">(optional)</span></label>
                      <select
                        id={`${id}-service`}
                        name="service"
                        value={values.service}
                        onChange={e => setValues(v => ({ ...v, service: e.target.value }))}
                        className="mik-select"
                      >
                        <option value="">Select a service</option>
                        {services.map(s => (
                          <option key={s.value} value={s.value}>{s.label}</option>
                        ))}
                      </select>
                    </div>

                    <button type="submit" disabled={loading} className="mik-btn-primary" style={{ marginTop: '8px' }}>
                      {loading ? (
                        <><SpinnerIcon /> Submitting…</>
                      ) : (
                        <>Get In Touch <ArrowIcon /></>
                      )}
                    </button>

                    {error && (
                      <div className="rounded-xl border border-red-500/20 bg-red-500/[0.08] px-5 py-4 text-sm text-red-400" role="alert">
                        {error}
                      </div>
                    )}

                    <p className="text-center text-xs text-zinc-600">
                      No spam. No cold calls. Direct operator reply only.
                    </p>
                  </form>
                </>
              )}
            </div>

          </div>
        </div>
      </section>
    </>
  )
}
