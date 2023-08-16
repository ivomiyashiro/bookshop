import { cookies } from 'next/headers';
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
      { children }
    </CartProvider>
  );
}
