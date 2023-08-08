'use client';
import { useReducer, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

import { loginWithCredentials, signupWithCredentials } from '@/services';

import { AuthContext, authReducer } from './';

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(authReducer, { user: null });
  const router = useRouter();

  // Check if token is valid and login user again
  // useEffect(() => {
  //   if (!Cookies.get('token')) return;

  //   const token = Cookies.get('token') || '';

  //   checkToken(token)
  //     .then((user) => {

  //       dispatch({
  //         type: '[AUTH] - Login',
  //         payload: user
  //       });
  //     })
  //     .catch(error => {
  //       console.log(error);

  //       Cookies.remove('token');
  //       dispatch({ type: '[AUTH] - Signout' });
  //     });
  // }, []);

  const login = async (email: string, password: string) => {
    try {
      const user = await loginWithCredentials(email, password);

      if (!user) return null;

      dispatch({
        type: '[AUTH] - Login',
        payload: user
      });

      return user;

    } catch (error) {
      console.log(error);

      return null;
    }
  };

  const signup = async (name: string, email: string, password: string) => {
    try {
      const { user } = await signupWithCredentials(name, email, password);

      dispatch({
        type: '[AUTH] - Login',
        payload: user!
      });
        
      return { user };
    } catch (error) {
      return {
        user: null
      };
    }
  };

  const signout = () => {
    Cookies.remove('token');
    dispatch({ type: '[AUTH] - Signout' });
    router.refresh();
  };


  return (
    <AuthContext.Provider value={ {
      ...state,

      // Methods
      login,
      signup,
      signout,
    } }>
      { children }
    </AuthContext.Provider>
  );
};

export default AuthProvider;
