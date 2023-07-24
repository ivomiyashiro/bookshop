import { useId } from 'react';
import { TableCellsIcon, ListBulletIcon } from '@heroicons/react/24/outline';

interface Props {
  value?: string;
  checked: boolean;
  onChange: () => void;
}

const ToggleButton = ({ value = '', checked, onChange }: Props) => {
  const id = useId();

  return (
    <label className="relative inline-flex items-center cursor-pointer w-full md:hidden">
      <input
        id={ id }
        type="checkbox" 
        className="sr-only peer" 
        value={ value }
        checked={ checked }
        onChange={ onChange } 
      />
      <div className="relative w-full h-full border border-gray-300 text-gray-900 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-500 dark:focus:ring-pink-500 dark:focus:border-pink-500 rounded-lg peer flex items-center">    
        <div className="relative z-10 w-full flex justify-center">
          <ListBulletIcon width={ 28 } height={ 28 } className={ !checked ? 'text-white' : '' } />
        </div>
        <div className="relative z-10 w-full flex justify-center">
          <TableCellsIcon width={ 28 } height={ 28 } className={ checked ? 'text-white' : '' } />
        </div>  
      </div>
      <div className="flex items-center justify-center peer-checked:translate-x-[calc(100%+12px)] peer-checked:border-white absolute left-[6px] bg-gray-500 rounded-lg h-[35px] w-[calc(50%-12px)] transition-all">
      </div>
    </label>
  );
};

export default ToggleButton;
