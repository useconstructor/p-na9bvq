import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'BLOOMBOX | Artisan Floristry',
  description: 'Curated floral arrangements crafted with purpose. Each bouquet tells a story through thoughtfully selected seasonal blooms. Same-day delivery available.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#FAF7F2] antialiased">
        {children}
      </body>
    </html>
  );
}
