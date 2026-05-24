import type { Metadata } from 'next'
import Script from 'next/script'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import CookieBanner from '@/components/CookieBanner'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'mikdigital — AI-Powered Performance Marketing Dubai',
    template: '%s — mikdigital',
  },
  description:
    'AI-powered performance marketing by Mohamed Ibrahim Khan. Meta Ads, Google Ads, server-side tracking, CRM automation, and full-funnel attribution for education and entertainment brands in UAE, India, and globally.',
  keywords: [
    'Performance Marketing Dubai',
    'Meta Ads UAE',
    'Google Ads Dubai',
    'AI Marketing UAE',
    'Lead Generation Dubai',
    'CRM Automation',
    'Conversion Tracking Setup',
    'Server-side Tracking',
    'Mohamed Ibrahim Khan',
    'mikdigital',
  ],
  authors: [{ name: 'Mohamed Ibrahim Khan', url: 'https://mikdigital.online' }],
  creator: 'Mohamed Ibrahim Khan',
  metadataBase: new URL('https://mikdigital.online'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://mikdigital.online',
    siteName: 'mikdigital',
    title: 'mikdigital — AI-Powered Performance Marketing Dubai',
    description:
      'AI-powered performance marketing for UAE, India, and global businesses. Meta Ads, Google Ads, server-side tracking, CRM automation, and full-funnel attribution.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'mikdigital — AI-Powered Performance Marketing Dubai',
    description: 'Meta Ads, Google Ads, server-side tracking, CRM automation by Mohamed Ibrahim Khan.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">

      <head>
        {/* Google Tag Manager — preserved exactly */}
        <Script id="gtm-script" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-MZJ3FNLG');
          `}
        </Script>

        {/* Meta Pixel — production only, preserved exactly */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            if (window.location.hostname === 'mikdigital.online') {
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;
              n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}
              (window,document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '1303661508025094');
              fbq('track', 'PageView');
            }
          `}
        </Script>
      </head>

      <body className="bg-[#0a0a0a] text-white antialiased">

        {/* GTM noscript — preserved exactly */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MZJ3FNLG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <Nav />
        <main>{children}</main>
        <Footer />
        <CookieBanner />

      </body>

    </html>
  )
}
