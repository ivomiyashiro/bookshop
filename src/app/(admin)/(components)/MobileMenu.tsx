'use client';
import { useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpenIcon, BookmarkIcon, CodeBracketIcon, ChatBubbleLeftIcon, ArrowLeftOnRectangleIcon, BuildingStorefrontIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import { AuthContext } from '@/contexts/auth';

const ADMIN_ASIDE_MENU_ITEMS = [
  {
    name: 'Books',
    href: '/dashboard/books',
    icon: <BookOpenIcon width={ 24 } />,
  },
  {
    name: 'Orders',
    href: '/dashboard/orders',
    icon: <BookmarkIcon width={ 24 } />,
  },
  {
    name: 'Shop',
    href: '/books',
    icon: <BuildingStorefrontIcon width={ 24 } />,
  },
  {
    name: 'Projects',
    href: 'https://ivomiyashiro.vercel.app',
    icon: <CodeBracketIcon width={ 24 } />,
  },
  {
    name: 'Contact',
    href: 'https://ivomiyashiro.vercel.app/',
    icon: <ChatBubbleLeftIcon width={ 24 } />,
  },
];

interface Props {
  item: {
    name: string;
    href: string;
    icon: JSX.Element;
  };
  isLink: boolean;
  isCurrentPath: boolean;
}

const MenuLink = ({ item, isLink, isCurrentPath }: Props) => {
  const linkClassName = 'flex justify-center lg:justify-start items-center gap-2 lg:min-w-[235px]';

  return (
    <li className={ `${isCurrentPath ? 'bg-pink-500 text-white dark:bg-pink-500' : 'hover:bg-gray-200 hover:dark:bg-gray-700'} p-2 rounded transition` }>
      { isLink ? (
        <Link href={ item.href } className={ linkClassName }>
          { item.icon }
          <p className="hidden lg:block">{ item.name }</p>
        </Link>
      ) : (
        <a href={ item.href } target="_blank" className={ linkClassName }>
          { item.icon }
          <p className="hidden lg:block">{ item.name }</p>
        </a>
      ) }
    </li>
  );
};


const MobileMenu = () => {
  const { logout } = useContext(AuthContext);
  const pathName = usePathname();
  const currentPath = pathName.split('/')[2];
  const isCurrentPath = (itemName: string) => currentPath === itemName.toLowerCase();

  return (
    <div className="md:hidden fixed bottom-5 w-full">
      <nav className="mx-4 px-4 p-3 bg-gray-100 dark:bg-gray-700 rounded-lg shadow-md">
        <ul className="flex justify-around gap-4">
          { ADMIN_ASIDE_MENU_ITEMS.map((item, i) => (
            <MenuLink 
              key={ i } 
              item={ item } 
              isLink={ i < ADMIN_ASIDE_MENU_ITEMS.length - 2 } 
              isCurrentPath={ isCurrentPath(item.name) } 
            />
          )) }
          <li className="p-2 cursor-pointer" onClick={ logout }>
            <ArrowLeftOnRectangleIcon width={ 24 } />
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileMenu;
