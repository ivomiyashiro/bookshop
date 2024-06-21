'use client';
import { useContext } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BookOpenIcon, BookmarkIcon, CodeBracketIcon, ChatBubbleLeftIcon, ArrowLeftOnRectangleIcon, BuildingStorefrontIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

import { AuthContext } from '@/contexts/auth';

import { MainLogo } from '@/components';

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
  const linkClassName = 'flex justify-center xl:justify-start items-center gap-3 px-4 py-3 xl:min-w-[235px]';

  return (
    <li className={ `${isCurrentPath ? 'bg-gray-100 dark:bg-gray-700' : 'hover:bg-gray-100 hover:dark:bg-gray-700'} rounded transition` }>
      { isLink ? (
        <Link href={ item.href } className={ linkClassName }>
          { item.icon }
          <p className="hidden xl:block">{ item.name }</p>
          { isCurrentPath && (
            <div className="ml-auto hidden xl:block">
              <ChevronRightIcon width={ 16 } />
            </div>
          ) }
        </Link>
      ) : (
        <a href={ item.href } target="_blank" className={ linkClassName }>
          { item.icon }
          <p className="hidden xl:block">{ item.name }</p>
        </a>
      ) }
    </li>
  );
};

const AsideMenu = () => {
  const { logout } = useContext(AuthContext);
  const pathName = usePathname();
  const currentPath = pathName.split('/')[2];
  const isCurrentPath = (itemName: string) => currentPath === itemName.toLowerCase();

  return (
    <aside className="hidden fixed lg:flex h-screen xl:w-[270px] flex-col border-r border-gray-200 dark:border-gray-600 p-4">
      <nav>
        <div className="px-4 py-2 hidden xl:block">
          <MainLogo isLink />
        </div>
        <div className="px-4 py-2 xl:hidden">
          <Link href="/" className="text-4xl font-bold">
            N<span className="text-pink-600">.</span> 
          </Link>
        </div>
        <ul className="mt-12 flex flex-col gap-4">
          { ADMIN_ASIDE_MENU_ITEMS.map((item, i) => (
            <MenuLink 
              key={ i } 
              item={ item } 
              isLink={ i < ADMIN_ASIDE_MENU_ITEMS.length - 2 } 
              isCurrentPath={ isCurrentPath(item.name) } 
            />
          )) }
        </ul>
      </nav>
      <div className={ 'mt-auto ' + 'hover:bg-gray-200 hover:dark:bg-gray-700 rounded transition' }>
        <button className={ 'cursor-pointer w-full ' + 'flex justify-center xl:justify-start items-center gap-3 px-4 py-3' } onClick={ logout }>
          <ArrowLeftOnRectangleIcon width={ 24 } />
          <p className="hidden xl:block">Log out</p> 
        </button>
      </div>
    </aside>
  );
};

export default AsideMenu;
