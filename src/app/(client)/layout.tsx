import { cookies } from 'next/headers';
import { Header, Footer } from '@/components';
import { CartProvider } from '@/contexts/cart';

export default function ClientLayout({
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
      <main className="px-4 lg:px-6 my-10 min-h-[calc(100vh-162px)] max-w-[1340px] mx-auto">
        { children }
      </main>
      <Footer />
    </CartProvider>
  );
}
