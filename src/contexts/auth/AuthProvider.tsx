'use client';
import { useReducer, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Cookies from 'js-cookie';

import { User } from '@/interfaces';
import { checkRefreshToken, loginWithCredentials, logoutUser, signupWithCredentials } from '@/services';

import { AuthContext, authReducer } from './';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, { 
    user: null,
    loading: true,
    checkout: false
  });
  const router = useRouter();
  const params = useSearchParams();

  // Check if refresh_token is valid and login user
  useEffect(() => {
    const rt = Cookies.get('REFRESH_TOKEN') as string;

    const checkRefreshTokenInCookies = async () => {
      try {
        const { data } = await checkRefreshToken(rt);
        const { tokens, user } = data;
  
        if (data) {
          saveTokensAndLogin(user, tokens);
        }
      } catch (error) {
        removeTokensAndLogout();

      } finally {
        dispatch({
          type: '[AUTH] - Loading',
          payload: false
        });
      }
    };

    if (!rt) {
      return dispatch({
        type: '[AUTH] - Loading',
        payload: false
      });
    }

    dispatch({
      type: '[AUTH] - Loading',
      payload: true
    });
    checkRefreshTokenInCookies();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  
  // Check if after login needs to go to checkout page
  useEffect(() => {
    if (params.get('checkout')) {
      return dispatch({ 
        type: '[AUTH] - Checkout',
        payload: true
      });
    }

    dispatch({ 
      type: '[AUTH] - Checkout',
      payload: false
    });
  }, [params]);


  const login = async ({ email, password }: { email: string; password: string }) => {
    try {
      const { user, tokens } = await loginWithCredentials({ email, password });

      saveTokensAndLogin(user, tokens);

      return user;

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  };


  const signup = async ({ name, email, password }: { name: string; email: string; password: string }) => {
    try {
      const { user } = await signupWithCredentials({ name, email, password });

      return user;

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
    }
  };


  const logout = async () => {
    const at = Cookies.get('ACCESS_TOKEN');

    try {
      if (at) {
        await logoutUser(at);
      }

    } catch (error) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }

    } finally {
      removeTokensAndLogout();
      router.refresh();
    }
  };


  const saveTokensAndLogin = (
    user: User,
    tokens: { 
      refresh_token: string; 
      access_token: string; 
    }, 
  ) => {
    Cookies.set('REFRESH_TOKEN', tokens.refresh_token);
    Cookies.set('ACCESS_TOKEN', tokens.access_token);

    dispatch({
      type: '[AUTH] - Login',
      payload: user
    });
  };

  
  const removeTokensAndLogout = () => {
    Cookies.remove('REFRESH_TOKEN');
    Cookies.remove('ACCESS_TOKEN');

    dispatch({ type: '[AUTH] - Signout' });
  };


  return (
    <AuthContext.Provider value={ {
      ...state,

      // Methods
      login,
      signup,
      logout,
    } }>
      { children }
    </AuthContext.Provider>
  );
};

export default AuthProvider;
