'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) setVisible(true)
  }, [])

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  if (!visible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[100] px-4 pb-4 md:px-6 md:pb-6">
      <div
        className="mx-auto max-w-4xl rounded-[24px] border border-violet-100 p-5 shadow-2xl md:flex md:items-center md:justify-between md:gap-8 md:p-6"
        style={{
          background: 'linear-gradient(135deg, rgba(91,33,255,0.05) 0%, rgba(255,255,255,0.98) 60%, rgba(255,213,79,0.06) 100%)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <p className="text-sm leading-6 text-zinc-600">
          We use cookies for analytics and to improve your experience.{' '}
          <Link href="/privacy" className="font-semibold text-violet-700 underline underline-offset-2">
            Privacy Policy
          </Link>
        </p>
        <div className="mt-4 flex shrink-0 gap-3 md:mt-0">
          <button
            onClick={decline}
            className="rounded-xl border border-zinc-300 px-5 py-2.5 text-sm font-semibold text-zinc-700 transition hover:border-zinc-500"
          >
            Decline
          </button>
          <button
            onClick={accept}
            className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #5B21FF 0%, #7C3AED 100%)' }}
          >
            Accept All
          </button>
        </div>
      </div>
    </div>
  )
}
