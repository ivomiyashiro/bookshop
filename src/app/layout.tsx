import type { Metadata } from 'next';
import { cookies } from 'next/headers';
import { Inter } from 'next/font/google';

import { CartProvider } from '@/contexts/cart';

import { Header, Footer } from '@/components';

import './globals.css';

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
  let initialCart = [];

  const cookieStore = cookies();
  const cart = cookieStore.get('CART');

  if (cart) {
    initialCart = JSON.parse(cart.value);
  }

  return (
    <html lang="en">
      <body className={ inter.className }>
        <CartProvider initialCart={ initialCart }>
          <Header />
          <main className="px-4 lg:px-6 my-10 min-h-[calc(100vh-162px)]">
            { children }
          </main>
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
