'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Nav() {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href.startsWith('/#')) return false
    return pathname === href || pathname.startsWith(href + '/')
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.06] bg-[#0a0a0a]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* LOGO */}
        <Link href="/" className="flex items-center shrink-0">
          <img
            src="/website-logo.png"
            alt="mikdigital"
            className="h-8 w-auto object-contain brightness-0 invert md:h-9"
          />
        </Link>

        {/* DESKTOP NAV */}
        <div className="hidden items-center gap-8 text-sm font-medium text-zinc-400 md:flex">
          <Link href="/#services" className="transition hover:text-white">Services</Link>
          <Link
            href="/case-studies"
            className={`transition hover:text-white ${isActive('/case-studies') ? 'text-white' : ''}`}
          >
            Case Studies
          </Link>
          <Link
            href="/about"
            className={`transition hover:text-white ${isActive('/about') ? 'text-white' : ''}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-violet-500/40 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-300 transition hover:border-violet-400/60 hover:bg-violet-500/20"
          >
            Get in touch
          </Link>
        </div>

        {/* MOBILE NAV */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            href="/case-studies"
            className={`text-xs font-semibold ${isActive('/case-studies') ? 'text-white' : 'text-zinc-500'}`}
          >
            Work
          </Link>
          <Link
            href="/about"
            className={`text-xs font-semibold ${isActive('/about') ? 'text-white' : 'text-zinc-500'}`}
          >
            About
          </Link>
          <Link
            href="/contact"
            className="rounded-lg border border-violet-500/40 bg-violet-500/10 px-3 py-1.5 text-xs font-semibold text-violet-300"
          >
            Contact
          </Link>
        </div>

      </nav>
    </header>
  )
}
