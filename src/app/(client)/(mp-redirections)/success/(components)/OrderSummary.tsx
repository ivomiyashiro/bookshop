'use client';
import { useContext, useEffect, useState } from 'react';
import { CartContext, CartItem } from '@/contexts/cart';
import { MobileOrderSummary, OrderSummaryItem } from './';

const OrderSummary = () => {
  const { cart, resetCart } = useContext(CartContext);
  const [open, setOpen] = useState(true);
  const [cartClone, setCartClone] = useState<CartItem[]>(cart);
  
  useEffect(() => {
    if (cart.length === 0) return;
    
    setCartClone(cart);
    resetCart();
  }, [cart, resetCart]);

  return (
    <div className="lg:order-1 w-full lg:w-[85%] lg:h-full lg:border-l lg:border-b-0 border-b border-gray-600">
      <MobileOrderSummary 
        open={ open }
        handleOpen={ setOpen }
      />
      <div className={ `lg:max-w-[475px] mx-auto gap-6 flex flex-col lg:items-center lg:pt-[5em] px-4 lg:!h-full ${ open ? 'h-full py-6 overflow-auto scrollbar-hidden max-h-[650px]' : 'h-0 overflow-hidden'}` }>
        { cartClone.map(({ title, image, id, price, quantity, authors }: any) => (
          <OrderSummaryItem 
            key={ id }
            title={ title }
            imageUrl={ image } 
            price={ price }
            authors={ authors }
            quantity={ quantity }
          />
        )) }
      </div>
    </div>
  );
};

export default OrderSummary;
