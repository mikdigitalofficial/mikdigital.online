import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "mikdigital",
  description:
    "Technical performance marketing for companies that care about revenue, not vanity metrics.",

  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">

      <head>

        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-274YF4P3S5"
        />

        <Script id="google-analytics">
          {`
            window.dataLayer = window.dataLayer || [];

            function gtag(){
              dataLayer.push(arguments);
            }

            gtag('js', new Date());

            gtag('config', 'G-274YF4P3S5');
          `}
        </Script>

      </head>

      <body>{children}</body>

    </html>
  );
}
