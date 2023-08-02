'use client';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useSearchbar } from '@/hooks';
import { Button } from '@/components';

const Searchbar = () => {
  const { id, inputRef, inputValue, handleInputChange, handleSubmit, handleResetInputValue } = useSearchbar(null);

  return (  
    <form className="hidden md:block w-full" onSubmit={ handleSubmit }>
      <label htmlFor={ id } className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
      <div className="relative flex items-center">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <MagnifyingGlassIcon width={ 24 } height={ 24 } aria-label="Search books"/>
        </div>
        <input 
          type="search" 
          id={ id } 
          className="block w-full p-4 pl-11 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
          placeholder="Try a book, author or language..." 
          value={ inputValue }
          ref={ inputRef }
          onChange={ handleInputChange }
        />
        { inputValue.length > 0 && (
          <Button type="button" style="ALT" className="absolute right-[6.5rem] text-sm w-[80px] !py-2" onClick={ handleResetInputValue }>
            Clear
          </Button>
        ) }
        <Button style="PRIMARY" className="absolute right-3 text-sm w-[80px] !py-2">
          Search
        </Button>
      </div>
    </form>
  );
};

export default Searchbar;
