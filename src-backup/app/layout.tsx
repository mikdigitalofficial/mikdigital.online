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
        <MouseGlow />
        <SmoothScroll>
          <Nav />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
