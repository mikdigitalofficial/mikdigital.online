'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Linkedin, Instagram, Mail } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://www.linkedin.com/in/mohamedibrahimkhan/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/mikdigitalofficial/', icon: Instagram, label: 'Instagram' },
  { href: 'mailto:alex@mikdigital.online', icon: Mail, label: 'Email' },
]

export default function Nav() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => { setMenuOpen(false) }, [pathname])

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    if (href.startsWith('/#')) return false
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <>
      <header
        className={`sticky top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-white/[0.06] bg-[#0a0a0a]/95 backdrop-blur-lg'
            : 'border-b border-white/[0.02] bg-transparent'
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3.5 sm:px-6 md:py-4">

          {/* LOGO - Enhanced visibility */}
          <Link href="/" className="flex shrink-0 items-center">
            <img
              src="/website-logo.png"
              alt="mikdigital"
              className="h-8 w-auto invert sm:h-9 md:h-9"
            />
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-md px-3.5 py-2 text-sm font-medium transition ${
                  isActive(link.href)
                    ? 'bg-white/[0.06] text-white'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* DESKTOP RIGHT */}
          <div className="hidden items-center gap-3 md:flex">
            {/* Social icons */}
            <div className="flex items-center gap-1.5">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition hover:text-zinc-200"
                >
                  <Icon size={16} />
                </a>
              ))}
              <a
                href="https://wa.me/971506102836"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition hover:text-zinc-200"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>

            {/* CTA */}
            <a
              href="https://calendly.com/mikdigitalofficial/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition hover:opacity-85"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
            >
              Work With Me
            </a>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/[0.08] text-zinc-400 transition hover:text-white md:hidden"
          >
            {menuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>

        </nav>
      </header>

      {/* MOBILE DRAWER */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 md:hidden"
              onClick={() => setMenuOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 z-50 flex w-[85%] flex-col border-l border-white/[0.06] bg-[#0a0a0a] md:hidden"
            >
              {/* Drawer header */}
              <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-4">
                <img 
                  src="/website-logo.png" 
                  alt="mikdigital" 
                  className="h-8 w-auto invert"
                  decoding="async"
                />
                <button
                  onClick={() => setMenuOpen(false)}
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-400 transition hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex-1 overflow-y-auto px-4 py-5">
                <nav className="space-y-1.5">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block rounded-lg px-4 py-2.5 text-base font-medium transition ${
                        isActive(link.href)
                          ? 'bg-white/[0.08] text-white'
                          : 'text-zinc-400 hover:bg-white/[0.04] hover:text-white'
                      }`}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <div className="mt-8 space-y-3">
                  <a
                    href="https://calendly.com/mikdigitalofficial/30min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center rounded-lg py-3 text-base font-semibold text-white transition hover:opacity-85"
                    style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
                  >
                    Book Strategy Call
                  </a>
                  <a
                    href="https://wa.me/971506102836"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex w-full items-center justify-center rounded-lg border border-white/[0.08] py-3 text-base font-semibold text-white transition hover:bg-white/[0.04]"
                  >
                    WhatsApp
                  </a>
                </div>

                {/* Social icons */}
                <div className="mt-8 flex items-center gap-2 border-t border-white/[0.06] pt-5">
                  {socialLinks.map(({ href, icon: Icon, label }) => (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={label}
                      className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition hover:text-white"
                    >
                      <Icon size={16} />
                    </a>
                  ))}
                  <a
                    href="https://wa.me/971506102836"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-9 w-9 items-center justify-center rounded-lg text-zinc-500 transition hover:text-white"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Spacer so content doesn't hide under sticky nav */}
      <div className="h-[56px] sm:h-[56px]" />
    </>
  )
}
