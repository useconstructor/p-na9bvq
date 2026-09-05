import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'Project 1788567458482',
  description: 'BLOOMBOX is a luxury florist ecommerce experience presenting curated floral arrangements as collectible art objects. The site combines editorial storytelling, premium product discovery, same-day delivery messaging, tiered arrangements, and conversion-focused reservation flows.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body style={{ backgroundColor: '#FAF7F2', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
