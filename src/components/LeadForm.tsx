'use client'

import React, { useState, useId } from 'react'

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[]
    fbq: (...args: unknown[]) => void
  }
}

const services = [
  { value: "meta-ads", label: "Meta Ads" },
  { value: "google-ads", label: "Google Ads" },
  { value: "tracking", label: "Tracking & Attribution" },
  { value: "crm", label: "CRM & Automation" },
  { value: "whatsapp", label: "WhatsApp Funnels" },
  { value: "full-funnel", label: "Full-Funnel System" },
  { value: "audit", label: "Performance Audit" },
  { value: "other", label: "Something else" },
]

function SpinnerIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"
      style={{ animation: 'mikSpin 0.8s linear infinite' }}>
      <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.5"
        strokeDasharray="28" strokeDashoffset="10" strokeLinecap="round"/>
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

export default function LeadForm() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [values, setValues] = useState({ name: '', email: '', phone: '', service: '', message: '' })
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
    if (field === 'phone' && !value.trim()) return 'Phone number is required'
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
          message: values.message,
        }),
      })

      const data = await response.json()
      const isSuccess = data?.data?.[0]?.code === 'SUCCESS' || data?.data?.[0]?.code === 'DUPLICATE'

      if (!isSuccess) {
        setError('Something went wrong. Please try again.')
        setLoading(false)
        return
      }

      window.dataLayer = window.dataLayer || []
      window.dataLayer.push({ event: 'generate_lead' })

      if (typeof window.fbq === 'function') {
        window.fbq('track', 'Lead', {}, { eventID: eventId })

      await new Promise(resolve =, 500))
      }

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
        @keyframes mikSpin { to { transform: rotate(360deg); } }
        @keyframes mikFadeUp {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes mikScaleIn {
          from { opacity: 0; transform: scale(0.96); }
          to { opacity: 1; transform: scale(1); }
        }
        .lf-field { display: flex; flex-direction: column; gap: 6px; }
        .lf-label {
          font-size: 11px; font-weight: 600;
          letter-spacing: 0.08em; text-transform: uppercase; color: #71717a;
        }
        .lf-input {
          width: 100%; background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08); border-radius: 12px;
          padding: 14px 18px; font-size: 14px; color: #fff; outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }
        .lf-input::placeholder { color: #52525b; }
        .lf-input:hover { border-color: rgba(255,255,255,0.14); background: rgba(255,255,255,0.05); }
        .lf-input:focus { border-color: rgba(139,92,246,0.6); background: rgba(139,92,246,0.05); box-shadow: 0 0 0 3px rgba(139,92,246,0.12); }
        .lf-input.err { border-color: rgba(239,68,68,0.5); background: rgba(239,68,68,0.04); }
        .lf-input.err:focus { box-shadow: 0 0 0 3px rgba(239,68,68,0.1); }
        .lf-input:-webkit-autofill,
        .lf-input:-webkit-autofill:hover,
        .lf-input:-webkit-autofill:focus {
          -webkit-box-shadow: 0 0 0 1000px rgba(20,10,30,0.95) inset;
          -webkit-text-fill-color: #fff;
          border-color: rgba(139,92,246,0.4);
        }
        .lf-select {
          width: 100%; background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08); border-radius: 12px;
          padding: 14px 40px 14px 18px; font-size: 14px; color: #71717a;
          outline: none; cursor: pointer; appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg width='10' height='6' viewBox='0 0 10 6' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1l4 4 4-4' stroke='%2352525b' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
          background-repeat: no-repeat; background-position: right 16px center;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          box-sizing: border-box;
        }
        .lf-select:hover { border-color: rgba(255,255,255,0.14); }
        .lf-select:focus { border-color: rgba(139,92,246,0.6); box-shadow: 0 0 0 3px rgba(139,92,246,0.12); color: #d4d4d8; }
        .lf-select option { background: #0d0d0d; color: #fff; }
        .lf-textarea {
          width: 100%; background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08); border-radius: 12px;
          padding: 14px 18px; font-size: 14px; color: #fff; outline: none;
          transition: border-color 0.2s, background 0.2s, box-shadow 0.2s;
          resize: vertical; min-height: 100px; font-family: inherit;
          box-sizing: border-box; line-height: 1.6;
        }
        .lf-textarea::placeholder { color: #52525b; }
        .lf-textarea:hover { border-color: rgba(255,255,255,0.14); }
        .lf-textarea:focus { border-color: rgba(139,92,246,0.6); background: rgba(139,92,246,0.05); box-shadow: 0 0 0 3px rgba(139,92,246,0.12); }
        .lf-err-msg {
          font-size: 12px; color: #f87171;
          display: flex; align-items: center; gap: 5px;
          animation: mikFadeUp 0.2s ease;
        }
        .lf-btn {
          width: 100%; display: flex; align-items: center; justify-content: center;
          gap: 8px; padding: 15px 24px; border-radius: 12px; border: none;
          background: linear-gradient(135deg, #7c3aed, #a855f7);
          color: #fff; font-size: 14px; font-weight: 700; cursor: pointer;
          transition: opacity 0.2s, transform 0.15s; position: relative; overflow: hidden;
        }
        .lf-btn::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1), transparent);
          opacity: 0; transition: opacity 0.2s;
        }
        .lf-btn:hover::after { opacity: 1; }
        .lf-btn:active { transform: scale(0.99); }
        .lf-btn:disabled { opacity: 0.5; cursor: not-allowed; transform: none; }
        .lf-success { animation: mikScaleIn 0.35s cubic-bezier(0.34,1.56,0.64,1); }
      `}</style>

      {success ? (
        <div className="lf-success rounded-2xl border border-green-500/20 bg-green-500/[0.07] p-8">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-green-500/20 bg-green-500/10">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" className="text-green-400" aria-hidden="true">
              <path d="M4 11l5 5L18 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <p className="text-xl font-black text-white">Message received.</p>
          <p className="mt-2 text-sm leading-7 text-zinc-400">
            We&apos;ll follow up within 24 hours at <span className="text-zinc-200">{values.email}</span>. Check your WhatsApp too.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="https://calendly.com/mikdigitalofficial/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
            >
              Also book a strategy call
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="https://wa.me/971506102836"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-white/[0.08]"
            >
              WhatsApp us
            </a>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-5" noValidate aria-label="Contact form">

          <div className="grid gap-5 sm:grid-cols-2">
            <div className="lf-field">
              <label htmlFor={`${id}-name`} className="lf-label">Full Name</label>
              <input
                id={`${id}-name`}
                name="name" type="text" placeholder="Mohamed Al Rashid"
                autoComplete="name" required
                value={values.name}
                onChange={e => setValues(v => ({ ...v, name: e.target.value }))}
                onBlur={() => setTouched(t => ({ ...t, name: true }))}
                className={`lf-input${getFieldError('name') ? ' err' : ''}`}
                aria-invalid={!!getFieldError('name')}
                aria-describedby={getFieldError('name') ? `${id}-name-err` : undefined}
              />
              {getFieldError('name') && (
                <span id={`${id}-name-err`} className="lf-err-msg" role="alert">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M6 4v2.5M6 8v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  {getFieldError('name')}
                </span>
              )}
            </div>

            <div className="lf-field">
              <label htmlFor={`${id}-phone`} className="lf-label">Phone / WhatsApp</label>
              <input
                id={`${id}-phone`}
                name="phone" type="tel" placeholder="+971 50 123 4567"
                autoComplete="tel" required
                value={values.phone}
                onChange={e => setValues(v => ({ ...v, phone: e.target.value }))}
                onBlur={() => setTouched(t => ({ ...t, phone: true }))}
                className={`lf-input${getFieldError('phone') ? ' err' : ''}`}
                aria-invalid={!!getFieldError('phone')}
                aria-describedby={getFieldError('phone') ? `${id}-phone-err` : undefined}
              />
              {getFieldError('phone') && (
                <span id={`${id}-phone-err`} className="lf-err-msg" role="alert">
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M6 4v2.5M6 8v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                  {getFieldError('phone')}
                </span>
              )}
            </div>
          </div>

          <div className="lf-field">
            <label htmlFor={`${id}-email`} className="lf-label">Email Address</label>
            <input
              id={`${id}-email`}
              name="email" type="email" placeholder="you@company.com"
              autoComplete="email" required
              value={values.email}
              onChange={e => setValues(v => ({ ...v, email: e.target.value }))}
              onBlur={() => setTouched(t => ({ ...t, email: true }))}
              className={`lf-input${getFieldError('email') ? ' err' : ''}`}
              aria-invalid={!!getFieldError('email')}
              aria-describedby={getFieldError('email') ? `${id}-email-err` : undefined}
            />
            {getFieldError('email') && (
              <span id={`${id}-email-err`} className="lf-err-msg" role="alert">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2"/><path d="M6 4v2.5M6 8v.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/></svg>
                {getFieldError('email')}
              </span>
            )}
          </div>

          <div className="lf-field">
            <label htmlFor={`${id}-service`} className="lf-label">
              What do you need? <span style={{ fontWeight: 400, letterSpacing: 0, textTransform: 'none', color: '#52525b' }}>(optional)</span>
            </label>
            <select
              id={`${id}-service`}
              name="service"
              value={values.service}
              onChange={e => setValues(v => ({ ...v, service: e.target.value }))}
              className="lf-select"
            >
              <option value="">Select a service</option>
              {services.map(s => <option key={s.value} value={s.value}>{s.label}</option>)}
            </select>
          </div>

          <div className="lf-field">
            <label htmlFor={`${id}-message`} className="lf-label">
              Tell us more <span style={{ fontWeight: 400, letterSpacing: 0, textTransform: 'none', color: '#52525b' }}>(optional)</span>
            </label>
            <textarea
              id={`${id}-message`}
              name="message"
              placeholder="Describe your current setup, goals, or challenges…"
              value={values.message}
              onChange={e => setValues(v => ({ ...v, message: e.target.value }))}
              className="lf-textarea"
              rows={3}
            />
          </div>

          <button type="submit" disabled={loading} className="lf-btn">
            {loading ? <><SpinnerIcon /> Submitting…</> : <>Get In Touch <ArrowIcon /></>}
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
      )}
    </>
  )
}
