import { FormEvent, useContext, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Cookies from 'js-cookie';

import { AuthContext } from '@/contexts/auth';
import { CartContext } from '@/contexts/cart';

import { createPayment } from '@/services';

export const useLoginForm = () => {
  const { login } = useContext(AuthContext);
  const { cart } = useContext(CartContext);

  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const router = useRouter();
  const params = useSearchParams();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let error = '* Email or password incorrect.';

    if (emailValue.length === 0) {
      return setError(error);
    }

    if (passwordValue.length === 0) {
      return setError(error);
    }

    setLoading(true);
    try {
      await login({ 
        email: emailValue, 
        password: passwordValue 
      });

      setError('');

      const at = Cookies.get('ACCESS_TOKEN') as string;

      if (!!!params.get('checkout')) {
        return router.push('/');
      }

      const { url } = await createPayment(cart, at);

      Cookies.remove('CART');
      return location.href = url;

    } catch (error) {
      setLoading(false);

      if (error instanceof Error) {
        setError('* ' + error.message);
      }
    }
  };

  return {
    emailValue,
    passwordValue,
    loading,
    error,
    handleEmailValue: setEmailValue,
    handlePasswordValue: setPasswordValue,
    handleSubmit
  };
};
