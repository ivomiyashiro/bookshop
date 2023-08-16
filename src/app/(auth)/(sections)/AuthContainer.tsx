'use client';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { AuthContext } from '@/contexts/auth';

import { Spinner } from '@/components';

export const AuthContainer = ({ children }: { children: React.ReactNode }) => {
  const { user, loading, checkout } = useContext(AuthContext);
  const router = useRouter();

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Spinner width="w-20"/> 
      </div>
    );
  }
  
  // if no checkout in params return to homepage
  if (user && !checkout) {
    router.push('/'); 
    return null;
  }

  return <> { children } </>;
};
