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
