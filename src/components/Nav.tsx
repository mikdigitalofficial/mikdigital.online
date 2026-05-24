'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  const links = [
    { href: '/#services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/about', label: 'About' },
    { href: '/insights', label: 'Insights' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy', label: 'Privacy', hidden: true },
  ]

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <header
      className="sticky top-0 z-50 border-b border-violet-100/40"
      style={{
        background: 'linear-gradient(135deg, rgba(91,33,255,0.07) 0%, rgba(255,255,255,0.96) 50%, rgba(255,213,79,0.09) 100%)',
        backdropFilter: 'blur(20px)',
      }}
    >
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-4 py-3 md:px-6 md:py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/website-logo.png"
            alt="mikdigital"
            className="h-10 w-auto object-contain md:h-12"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-6 text-sm font-semibold text-zinc-700 md:flex">
          <Link href="/#services" className="transition hover:text-violet-700">Services</Link>
          <Link
            href="/case-studies"
            className={`transition hover:text-violet-700 ${isActive('/case-studies') ? 'text-violet-700' : ''}`}
          >
            Case Studies
          </Link>
          <Link
            href="/about"
            className={`transition hover:text-violet-700 ${isActive('/about') ? 'text-violet-700' : ''}`}
          >
            About
          </Link>
          <Link
            href="/privacy"
            className={`transition hover:text-violet-700 ${isActive('/privacy') ? 'text-violet-700' : ''}`}
          >
            Privacy
          </Link>
          <Link
            href="/contact"
            className="rounded-xl px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
            style={{ background: 'linear-gradient(135deg, #5B21FF 0%, #7C3AED 100%)' }}
          >
            Contact
          </Link>
        </div>

        {/* MOBILE NAV */}
        <div className="flex items-center gap-2 md:hidden">
          <Link
            href="/case-studies"
            className={`text-xs font-semibold whitespace-nowrap ${isActive('/case-studies') ? 'text-violet-700' : 'text-zinc-600'}`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`text-xs font-semibold whitespace-nowrap ${isActive('/about') ? 'text-violet-700' : 'text-zinc-600'}`}
          >
            About
          </Link>
          <Link
            href="/privacy"
            className={`text-xs font-semibold whitespace-nowrap ${isActive('/privacy') ? 'text-violet-700' : 'text-zinc-600'}`}
          >
            Privacy
          </Link>
          <Link
            href="/contact"
            className="rounded-lg px-3 py-2 text-xs font-semibold text-white whitespace-nowrap"
            style={{ background: 'linear-gradient(135deg, #5B21FF 0%, #7C3AED 100%)' }}
          >
            Contact
          </Link>
        </div>

      </nav>
    </header>
  )
}
