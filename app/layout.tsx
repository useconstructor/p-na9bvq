import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import './globals.css';

export const metadata: Metadata = {
  title: 'BLOOMBOX | Artisan Floristry',
  description: 'Curated floral arrangements crafted with purpose. Each bouquet tells a story through thoughtfully selected seasonal blooms. Nationwide delivery available.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#FDF8F3] antialiased">
        {children}
      </body>
    </html>
  );
}
