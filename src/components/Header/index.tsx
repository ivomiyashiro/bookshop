'use client';
import { useContext, useState } from 'react';
import { ShoppingBagIcon, UserIcon, SunIcon, MoonIcon } from '@heroicons/react/24/outline';

import { CartContext } from '@/contexts/cart';
import { AuthContext } from '@/contexts/auth';
import { ThemeContext } from '@/contexts/theme';

import { MainLogo, Button, Spinner, Chip } from '@/components';
import { MobileSearchbar, CartMenu, UserMenu } from './components';

const Header = () => {
  const { totalProducts } = useContext(CartContext);
  const { user, loading } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [searchbarOpen, setSearchbarOpen] = useState(false);
  const [cartMenuOpen, setCartMenuOpen] = useState(false);

  return (
    <header className="relative z-50 w-full flex flex-col items-center border-b border-gray-200 dark:border-gray-600">
      <div className="bg-gray-50 dark:bg-gray-600 w-full py-2 flex items-baseline justify-center gap-1 px-4">
        <Chip color="PINK" className="!text-xs py-1 hidden md:block">
          Info
        </Chip>
        <p className="text-sm">
          This project is only for academic purposes. You can checkout the docs in my <a           
            href="https://github.com/ivomiyashiro/bookshop" 
            target="_blank"
            className="text-pink-600 dark:text-pink-400 hover:underline"
          >Github. </a>
        </p>
      </div>
      <div className="px-4 lg:px-6 flex items-center justify-between w-full py-2 border-t border-gray-200 dark:border-gray-600">
        <div>
          <MainLogo isLink />
        </div>
        <div>
          <ul className="flex gap-3">
            <li>
              <Button 
                width="w-[36px]" 
                height="h-[36px]" 
                style="ALT" 
                onClick={ toggleTheme }
              >
                { theme === 'dark' 
                  ? <SunIcon width={ 22 } height={ 22 }  arial-aria-label="Change to light theme" />
                  : <MoonIcon width={ 22 } height={ 22 } arial-aria-label="Change to dark theme" /> }
              </Button>
            </li>
            <li className="flex items-center relative">
              <Button 
                width="w-[36px]" 
                height="h-[36px]" 
                style="ALT" 
                onClick={ () => setCartMenuOpen(true) }
              >
                <ShoppingBagIcon width={ 22 } height={ 22 } aria-label="Open cart menu" />
              </Button>
              { totalProducts > 0 && (
                <span className="absolute text-[0.6rem] w-4 h-4 -right-2 -top-2 bg-pink-500 text-white rounded-full flex items-center justify-center">
                  { totalProducts }
                </span>
              ) }
            </li>
            <li className="flex items-center">
              { loading
                ? (
                  <Button 
                    width="w-[36px]" 
                    height="h-[36px]" 
                    type="button"
                    style="ALT" 
                  >
                    <Spinner width="w-4"/>
                  </Button>
                )
                : ( user 
                  ? <UserMenu />
                  : <Button 
                    width="w-[36px]" 
                    height="h-[36px]" 
                    type="link"
                    href="/login" 
                    style="ALT" 
                  >
                    <UserIcon width={ 22 } height={ 22 } arial-aria-label="Link to auth page" />
                  </Button> ) }
            </li>
          </ul>
        </div>
      </div>
      <MobileSearchbar open={ searchbarOpen } handleOpen={ setSearchbarOpen } />
      <CartMenu open={ cartMenuOpen } handleOpen={ setCartMenuOpen } />
    </header>
  );
};

export default Header;
