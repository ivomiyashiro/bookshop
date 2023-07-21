import { Header } from '@/components/ui/Header';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'BookShop App',
  description: 'A bookshop crafted with Next.js and TailwindCSS',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ inter.className }>
        <Header />
        {children}
      </body>
    </html>
  );
}
