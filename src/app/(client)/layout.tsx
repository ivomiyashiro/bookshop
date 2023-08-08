import { cookies } from 'next/headers';
import { CartProvider } from '@/contexts/cart';
import { Header, Footer } from '@/components';

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
    <CartProvider initialCart={ initialCart }>
      <Header />
      <main className="px-4 lg:px-6 my-10 min-h-[calc(100vh-162px)]">
        { children }
      </main>
      <Footer />
    </CartProvider>
  );
}
