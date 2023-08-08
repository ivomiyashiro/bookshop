'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';

import { checkRefreshToken } from '@/services';
import { Spinner } from '@/components';

const AuthContainer = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const rt = Cookies.get('REFRESH_TOKEN') as string;

    const checkRefreshTokenInCookies = async () => {
      const { data } = await checkRefreshToken(rt);

      if (data) {
        Cookies.set('REFRESH_TOKEN', data.tokens.refresh_token);
        Cookies.set('ACCESS_TOKEN', data.tokens.access_token);

        return router.push('/');
      }
    };

    if (!rt) {
      return setLoading(false);
    }

    setLoading(true);
    checkRefreshTokenInCookies();
  }, [router]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner width="w-20"/> 
      </div>
    );
  }

  return <> { children } </>;
};

export default AuthContainer;
