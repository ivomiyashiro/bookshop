'use client';
import { Dispatch, SetStateAction } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

import { useSearchbar } from '@/hooks';

import { Button, Modal } from '@/components/ui';

interface Props {
  open: boolean;
  handleOpen: Dispatch<SetStateAction<boolean>>;
}

const MobileSearchbar = ({ open, handleOpen }: Props) => {
  const { id, inputRef, inputValue, handleInputChange, handleSubmit } = useSearchbar(handleOpen);

  return (
    <Modal 
      open={ open } 
      handleOpen={ handleOpen }
      className="md:!hidden"
    >
      <div className="absolute left-0 top-0 w-full h-[70px] md:hidden shadow-lg">
        <form className="block md:hidden w-full h-full" onSubmit={ handleSubmit }>
          <label htmlFor={ id } className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative flex items-center h-full border-gray-300 bg-gray-50 focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-800 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500">
            <div className="absolute inset-y-0 left-0 flex items-center pl-7 pointer-events-none">
              <MagnifyingGlassIcon width={ 24 } height={ 24 } aria-label="Search books"/>
            </div>
            <input 
              type="search" 
              id={ id } 
              className="block w-full p-4 pl-11 text-sm text-gray-900 border mx-4 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="Try a book, author or language..." 
              value={ inputValue }
              ref={ inputRef }
              onChange={ handleInputChange }
            />
            <Button style="PRIMARY" className="absolute right-7 text-sm !px-4 !py-2">
              Search
            </Button>
          </div>
        </form>
      </div>
    </Modal>
  );
};

export default MobileSearchbar;
