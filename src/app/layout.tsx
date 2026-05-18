import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "mikdigital",
  description:
    "Technical performance marketing for companies that care about revenue, not vanity metrics.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <body>
        {/* Meta Pixel */}

<Script id="meta-pixel" strategy="afterInteractive">
  {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;
    n.push=n;
    n.loaded=!0;
    n.version='2.0';
    n.queue=[];
    t=b.createElement(e);
    t.async=!0;
    t.src=v;
    s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}
    (window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');

    fbq('init', '1303661508025094');
    fbq('track', 'PageView');
  `}
</Script>
{/* Google Analytics */}

<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-274YF4P3S5"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];

    function gtag(){
      dataLayer.push(arguments);
    }

    gtag('js', new Date());

    gtag('config', 'G-274YF4P3S5', {
      page_path: window.location.pathname,
    });
  `}
</Script>

{children}

      </body>

    </html>
  );
}
