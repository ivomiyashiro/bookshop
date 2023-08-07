import { cookies } from 'next/headers';
import { Inter } from 'next/font/google';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
        { children }
      </body>
    </html>
  );
}
