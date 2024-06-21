'use client';
import { useContext } from 'react';
import { useRouter } from 'next/navigation';

import { AuthContext } from '@/contexts/auth';

import { Spinner } from '@/components';

const AdminContainer = ({ children }: { children: React.ReactNode }) => {
  const { user, loading } = useContext(AuthContext);
  const router = useRouter();

  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen">
        <Spinner width="w-20"/> 
      </div>
    );
  }
  
  if (!user || user?.role === 'CUSTOMER') {
    router.push('/'); 
    return null;
  }

  // if is not auth
  return <> { children } </>;
};

export default AdminContainer;
