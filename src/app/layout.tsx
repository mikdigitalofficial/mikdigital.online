import Script from 'next/script'
import type { Metadata } from 'next';
import './globals.css';
import MouseGlow from '@/components/ui/mouse-glow';
import SmoothScroll from '@/components/smooth-scroll';
import Nav from '@/components/Nav';

export const metadata: Metadata = {
  title: 'mikdigital — Solo Growth Operator',
  description: 'Acquisition infrastructure, performance marketing, and CRM systems across UAE & Australia. AED 462K+ ad spend managed. 14K+ qualified leads generated.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-MZJ3FNLG"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>

        <MouseGlow />
        <SmoothScroll>
          <Nav />
          {children}
        </SmoothScroll>

        {/* Google Tag Manager - correct bootstrap snippet */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-MZJ3FNLG');
            `,
          }}
        />

        {/* fbclid capture */}
        <Script
          id="fbclid-capture"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                const params = new URLSearchParams(window.location.search);
                const fbclid = params.get('fbclid');
                if (fbclid) {
                  const fbc = 'fb.1.' + Date.now() + '.' + fbclid;
                  document.cookie = '_fbc=' + fbc + '; path=/; max-age=7776000';
                }
              })();
            `,
          }}
        />

      </body>
    </html>
  );
}