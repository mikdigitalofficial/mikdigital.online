import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy — mikdigital',
  description: 'Privacy policy for mikdigital.online — how we collect, use, and protect your data.',
}

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-white text-zinc-900">

      {/* HERO */}
      <section
        className="border-b border-violet-100/40"
        style={{ background: 'linear-gradient(135deg, rgba(91,33,255,0.06) 0%, rgba(255,255,255,1) 60%, rgba(255,213,79,0.07) 100%)' }}
      >
        <div className="mx-auto max-w-4xl px-6 py-20 md:py-28">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-violet-700">
            Legal
          </p>
          <h1 className="mt-5 text-5xl font-black leading-tight text-zinc-950">
            Privacy Policy
          </h1>
          <p className="mt-4 text-zinc-500">Effective date: May 2026</p>
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24">
        <div className="space-y-12 text-lg leading-8 text-zinc-600">

          <div>
            <h2 className="text-2xl font-black text-zinc-950">1. Who We Are</h2>
            <p className="mt-4">
              mikdigital (mikdigital.online) is an independent performance marketing practice operated by Mohamed Ibrahim Khan. We provide paid acquisition, SEO, CRM automation, analytics, and conversion-focused marketing services.
            </p>
            <p className="mt-3">Contact: <a href="mailto:alex@mikdigital.online" className="text-violet-700 underline">alex@mikdigital.online</a></p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-zinc-950">2. Data We Collect</h2>
            <p className="mt-4">When you submit our contact form we collect:</p>
            <ul className="mt-3 space-y-2 pl-5">
              <li>• Full name</li>
              <li>• Email address</li>
              <li>• Phone number</li>
            </ul>
            <p className="mt-4">We also collect analytics data automatically via Google Analytics 4 (GA4), Meta Pixel, Microsoft Clarity, and Google Tag Manager. This includes IP address, browser type, pages visited, and general location.</p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-zinc-950">3. How We Use Your Data</h2>
            <ul className="mt-4 space-y-2 pl-5">
              <li>• To respond to your inquiry and provide marketing services</li>
              <li>• To store your contact details in Zoho CRM</li>
              <li>• To send you a WhatsApp confirmation message</li>
              <li>• To measure and improve our website and ad performance via analytics</li>
              <li>• To report ad conversions to Meta and Google via server-side APIs</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-black text-zinc-950">4. Meta Conversions API</h2>
            <p className="mt-4">
              We use the Meta Conversions API (CAPI) to report form submission events to Meta for ad measurement. Before any data is sent, your email and phone number are hashed using SHA-256 — a one-way encryption that means Meta never receives your raw contact details.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-zinc-950">5. Cookies</h2>
            <p className="mt-4">We use the following cookies:</p>
            <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200">
              <table className="w-full text-sm">
                <thead className="bg-zinc-50">
                  <tr>
                    <th className="px-5 py-3 text-left font-semibold text-zinc-700">Cookie</th>
                    <th className="px-5 py-3 text-left font-semibold text-zinc-700">Purpose</th>
                    <th className="px-5 py-3 text-left font-semibold text-zinc-700">Provider</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-zinc-100">
                  <tr><td className="px-5 py-3">_ga, _gid</td><td className="px-5 py-3">Analytics</td><td className="px-5 py-3">Google</td></tr>
                  <tr><td className="px-5 py-3">_fbp, _fbc</td><td className="px-5 py-3">Ad attribution</td><td className="px-5 py-3">Meta</td></tr>
                  <tr><td className="px-5 py-3">_clck, _clsk</td><td className="px-5 py-3">Heatmaps</td><td className="px-5 py-3">Microsoft Clarity</td></tr>
                  <tr><td className="px-5 py-3">cookie_consent</td><td className="px-5 py-3">Your cookie preference</td><td className="px-5 py-3">mikdigital</td></tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4">You can decline cookies via the banner shown on your first visit. Note that declining analytics cookies does not affect your ability to use the site.</p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-zinc-950">6. Third-Party Services</h2>
            <ul className="mt-4 space-y-2 pl-5">
              <li>• <strong>Zoho CRM</strong> — contact storage (India data centre)</li>
              <li>• <strong>Meta / Facebook</strong> — ad measurement via Pixel + CAPI</li>
              <li>• <strong>Google</strong> — GA4 analytics + Google Ads conversion tracking</li>
              <li>• <strong>Microsoft Clarity</strong> — session recording and heatmaps</li>
              <li>• <strong>WhatsApp Business API</strong> — confirmation messages</li>
              <li>• <strong>Netlify</strong> — website hosting (US)</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-black text-zinc-950">7. Data Retention</h2>
            <p className="mt-4">
              Contact form submissions are retained in Zoho CRM for as long as the business relationship is active or as required by applicable law. Analytics data is retained per the default retention periods of each platform (GA4: 14 months, Meta: 180 days).
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-zinc-950">8. Your Rights</h2>
            <p className="mt-4">You have the right to request access to, correction of, or deletion of your personal data. To exercise these rights, email us at <a href="mailto:alex@mikdigital.online" className="text-violet-700 underline">alex@mikdigital.online</a> and we will respond within 30 days.</p>
          </div>

          <div>
            <h2 className="text-2xl font-black text-zinc-950">9. Changes to This Policy</h2>
            <p className="mt-4">
              We may update this policy from time to time. The effective date at the top of this page will always reflect the latest version.
            </p>
          </div>

          <div className="rounded-2xl border border-violet-100 bg-violet-50 p-6">
            <p className="font-semibold text-violet-900">Questions?</p>
            <p className="mt-2 text-violet-800">Email <a href="mailto:alex@mikdigital.online" className="underline">alex@mikdigital.online</a> or <Link href="/contact" className="underline">use the contact form</Link>.</p>
          </div>

        </div>
      </section>

    </main>
  )
}
