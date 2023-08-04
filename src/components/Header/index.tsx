'use client';
import { useContext, useState } from 'react';
import { ShoppingBagIcon, UserIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { CartContext } from '@/contexts/cart';

import { MainLogo, Button } from '@/components';
import { MobileSearchbar, CartMenu } from './components';

const Header = () => {
  const { totalProducts } = useContext(CartContext);
  const [searchbarOpen, setSearchbarOpen] = useState(false);
  const [cartMenuOpen, setCartMenuOpen] = useState(false);

  return (
    <header className="relative w-full h-[62px] flex items-center shadow-[inset_0_-1px_0_0_hsla(0,0%,100%,.1)]">
      <div className="px-4 lg:px-6 flex items-center justify-between w-full">
        <div>
          <MainLogo size={ 36 } isLink />
        </div>
        <div>
          <ul className="flex gap-3">
            <li className="flex items-center md:hidden">
              <Button 
                width="w-[36px]" 
                height="h-[36px]" 
                style="ALT" 
                onClick={ () => setSearchbarOpen(true) }
              >
                <MagnifyingGlassIcon width={ 22 } height={ 22 } aria-label="Open search menu" />
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
              <Button 
                width="w-[36px]" 
                height="h-[36px]" 
                type="link"
                href="/login" 
                style="ALT" 
              >
                <UserIcon width={ 22 } height={ 22 } arial-aria-label="Link to auth page" />
              </Button>
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
