'use client';
import { useContext } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Cookies from 'js-cookie';

import { createPayment } from '@/services';

import { AuthContext } from '@/contexts/auth';
import { CartContext } from '@/contexts/cart';

import { Spinner } from '@/components';

export const AuthContainer = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  const router = useRouter();
  const searchParams = useSearchParams();

  const checkout = searchParams.get('checkout');
  const backUrl = searchParams.get('backUrl');

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Spinner width="w-20"/> 
      </div>
    );
  }

  if (user && backUrl) {
    router.push(backUrl);
    return null;
  }

  if (user && checkout) {
    const at = Cookies.get('ACCESS_TOKEN') as string;

    createPayment(cart, at)
      .then(res => {
        location.href = res.url;
        Cookies.remove('CART');
      })
      .catch(err => console.log(err));
    
    return null;
  }
  
  // if no checkout in params return to homepage
  if (user) {
    router.push('/'); 
    return null;
  }

  // if is not auth
  return <> { children } </>;
};
