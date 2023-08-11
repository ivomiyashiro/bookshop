'use client';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { AuthContext } from '@/contexts/auth';

import { Spinner } from '@/components';

const AuthContainer = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <Spinner width="w-20"/> 
      </div>
    );
  } 
  
  if (user) {
    router.push('/'); 
    return null;
  }

  return <> { children } </>;
};

export default AuthContainer;
