'use client';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';

export const NavButtons = () => {
  const pathname = usePathname();
  const params = useSearchParams();

  return (
    <div className="w-full flex mt-6 mb-10">
      <Link 
        href={ `/login${params.get('checkout') ? '?checkout=true' : ''}` } 
        className={ `p-3 border-b w-full text-center font-semibold text-sm ${ pathname.includes('login') ? 'border-pink-500 border-b-2' : 'border-gray-700'}` }
      >
        LOG IN
      </Link>
      <Link 
        href={ `/signup${params.get('checkout') ? '?checkout=true' : ''}` } 
        className={ `p-3 border-b w-full text-center font-semibold text-sm ${ pathname.includes('signup') ? 'border-pink-500 border-b-2' : 'border-gray-700'}` }
      >
        SIGN UP
      </Link>
    </div>
  );
};
