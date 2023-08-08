'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const NavButtons = () => {
  const pathname = usePathname();

  return (
    <div className="w-full flex mt-6 mb-10">
      <Link 
        href="/login" 
        className={ `p-3 border-b w-full text-center font-semibold text-sm ${ pathname.includes('login') ? 'border-pink-500 border-b-2' : 'border-gray-700'}` }
      >
        LOG IN
      </Link>
      <Link 
        href="/signup" 
        className={ `p-3 border-b w-full text-center font-semibold text-sm ${ pathname.includes('signup') ? 'border-pink-500 border-b-2' : 'border-gray-700'}` }
      >
        SIGN UP
      </Link>
    </div>
  );
};
