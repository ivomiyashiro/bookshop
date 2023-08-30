'use client';
import { useContext } from 'react';
import Link from 'next/link';
import { FaceSmileIcon } from '@heroicons/react/24/outline';

import { AuthContext } from '@/contexts/auth';

const UserMenu = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <div className="relative group flex items-center justify-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-pink-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer transition disabled:bg-pink-200 disabled:text-gray-400 disabled:hover:bg-gray-100 disabled:cursor-not-allowed w-[36px] h-[36px]">
      <FaceSmileIcon width={ 22 } height={ 22 } />
      <div className="mt-8 pt-8 absolute right-0 top-0">
        <menu id="dropdownAvatar" className="cursor-default group-hover:block text-left hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
          <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
            <div>{ user?.name }</div>
            <div className="font-medium truncate">{ user?.email }</div>
          </div>
          <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownUserAvatarButton">
            <li>
              { user?.role === 'CUSTOMER'
                ? (
                  <Link href="/orders" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Orders
                  </Link>
                )
                : (
                  <Link href="/dashboard/books" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
                    Dashboard
                  </Link>
                ) }
            </li>
            <li>
              <a 
                href="https://ivomiyashiro.vercel.app/" 
                target="_blank"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Projects
              </a>
            </li>
            <li>
              <a 
                href="https://ivomiyashiro.vercel.app/" 
                target="_blank"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="py-2">
            <button
              className="w-full text-left block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              onClick={ logout }
            >
              Sign out
            </button>
          </div>
        </menu>
      </div>
    </div>
  );
};

export default UserMenu;
