import { ShoppingBagIcon, ChevronUpIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { MainLogo } from '@/components';

interface Props {
  open: boolean;
  handleOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileOrderSummary = ({ open, handleOpen }: Props) => {
  return (
    <>
      <div className="py-3 flex justify-center border-b border-gray-500 lg:hidden">
        <MainLogo size={ 40 } isLink />
      </div>
      <button className={ `w-full lg:hidden flex justify-between p-4 py-3  ${open ? 'border-b border-gray-500' : ''}` } onClick={ () => handleOpen(prev => !prev) }>
        <div className="flex items-center gap-3"> 
          <ShoppingBagIcon width={ 24 } />
          <p className="flex items-center mt-1 text-pink-500 gap-1 text-sm">
            { open
              ? ( <>
                <span>{ 'Hide order summary' }</span>
                <ChevronUpIcon width={ 16 } height={ 16 } />
              </> )
              : ( <>
                <span>{ 'Show order summary' }</span>
                <ChevronDownIcon width={ 16 } height={ 16 } />
              </> ) }
          </p>
        </div>
      </button>
    </>
  );
};

export default MobileOrderSummary;
