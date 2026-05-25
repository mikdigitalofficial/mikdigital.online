import Link from 'next/link'
import { Linkedin, Instagram, Mail } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/about', label: 'About' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy Policy' },
]

const services = [
  'Meta Ads',
  'Google Ads',
  'AI Campaign Optimization',
  'Conversion Tracking',
  'CRM Automation',
  'WhatsApp Funnels',
  'Server-side Tracking',
  'Local SEO',
]

const socialLinks = [
  { href: 'https://www.linkedin.com/in/mohamedibrahimkhan/', icon: Linkedin, label: 'LinkedIn' },
  { href: 'https://www.instagram.com/mikdigitalofficial/', icon: Instagram, label: 'Instagram' },
  { href: 'mailto:alex@mikdigital.online', icon: Mail, label: 'Email' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#0a0a0a]">
      <div className="mx-auto max-w-7xl px-6 py-16 md:py-20">

        {/* TOP GRID */}
        <div className="grid gap-12 md:grid-cols-12">

          {/* BRAND */}
          <div className="md:col-span-5">
            <Link href="/">
              <img
                src="/website-logo.png"
                alt="mikdigital"
                className="h-8 w-auto invert"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-zinc-500">
              AI-powered performance marketing by Mohamed Ibrahim Khan — for UAE, India, and global businesses.
            </p>
            <p className="mt-3 text-xs text-zinc-600">
              Available for freelance engagements · Remote-first · UAE + India + Global
            </p>

            {/* Social icons */}
            <div className="mt-6 flex items-center gap-2">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-500 transition hover:border-white/20 hover:text-white"
                >
                  <Icon size={15} />
                </a>
              ))}
              <a
                href="https://wa.me/971506102836"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.03] text-zinc-500 transition hover:border-white/20 hover:text-white"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div className="md:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">Navigation</p>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-zinc-500 transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div className="md:col-span-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-zinc-600">Services</p>
            <ul className="mt-5 space-y-3">
              {services.map((s) => (
                <li key={s} className="text-sm text-zinc-500">{s}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-16 flex flex-col items-start justify-between gap-5 border-t border-white/[0.06] pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-xs text-zinc-600">
              © {new Date().getFullYear()} mikdigital · Mohamed Ibrahim Khan · All rights reserved.
            </p>
            <p className="mt-1 text-xs text-zinc-700">
              Performance Marketing Dubai · Meta Ads UAE · Google Ads Dubai · CRM Automation · AI Marketing
            </p>
          </div>
          <div className="flex items-center gap-4">
            <a
              href="https://calendly.com/mikdigitalofficial/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-4 py-2 text-xs font-semibold text-white transition hover:opacity-90"
              style={{ background: 'linear-gradient(135deg, #7c3aed, #a855f7)' }}
            >
              Work With Me
            </a>
          </div>
        </div>

      </div>
    </footer>
  )
}
