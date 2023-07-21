import { ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline';
import { MainLogo, Button } from '@/components/ui';

export const Header = () => {
  return (
    <header className="w-full h-[62px] flex items-center shadow-[inset_0_-1px_0_0_hsla(0,0%,100%,.1)]">
      <div className="px-4 lg:px-6 flex items-center justify-between w-full">
        <div>
          <MainLogo size={ 36 } />
        </div>
        <div>
          <ul className="flex gap-3">
            <li className="flex items-center">
              <Button width="w-[36px]" height="h-[36px]">
                <ShoppingBagIcon width={ 22 } height={ 22 } />
              </Button>
            </li>
            <li className="flex items-center">
              <Button width="w-[36px]" height="h-[36px]" href="/login" isLink>
                <UserIcon width={ 22 } height={ 22 } />
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};
