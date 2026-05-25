'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function CookieBanner() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('cookie_consent')
    if (!consent) {
      // Small delay so it doesn't flash immediately
      const t = setTimeout(() => setVisible(true), 1500)
      return () => clearTimeout(t)
    }
  }, [])

  function accept() {
    localStorage.setItem('cookie_consent', 'accepted')
    setVisible(false)
  }

  function decline() {
    localStorage.setItem('cookie_consent', 'declined')
    setVisible(false)
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed bottom-4 left-4 right-4 z-[100] md:bottom-6 md:left-6 md:right-auto md:max-w-md"
        >
          <div className="rounded-2xl border border-white/[0.10] bg-[#111111]/95 p-5 shadow-2xl backdrop-blur-xl">
            <p className="text-sm leading-6 text-zinc-400">
              We use cookies for analytics and to improve your experience.{' '}
              <Link href="/privacy" className="font-semibold text-violet-400 underline underline-offset-2 transition hover:text-violet-300">
                Privacy Policy
              </Link>
            </p>
            <div className="mt-4 flex gap-3">
              <button
                onClick={decline}
                className="rounded-lg border border-white/[0.10] px-4 py-2 text-sm font-semibold text-zinc-400 transition hover:border-white/20 hover:text-white"
              >
                Decline
              </button>
              <button
                onClick={accept}
                className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
                style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
              >
                Accept All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
