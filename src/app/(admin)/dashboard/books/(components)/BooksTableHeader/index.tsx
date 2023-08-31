'use client';
import { useRouter } from 'next/navigation';
import { ArrowsUpDownIcon, PlusCircleIcon } from '@heroicons/react/24/outline';

import { BOOKS_SORTING_VALUES } from '@/constants';
import { SortValues } from '@/interfaces';
import { getSortingParams } from '@/utils';

import { Button, InputSelect } from '@/components';
import Searchbar from './Searchbar';

const BooksTableHeader = () => {
  const router = useRouter();

  const sortBooks = async (value: SortValues) => {
    const { orderBy, sortBy } = getSortingParams(value);

    router.push(`${window.location.pathname}?orderBy=${orderBy}&sortBy=${sortBy}`);
  };

  return (
    <div className="flex gap-2 md:gap-4 mb-10">
      <div className="flex gap-2 w-full">
        <Searchbar />
      </div>
      <div className="flex gap-2 md:gap-4">
        <InputSelect
          icon={ <ArrowsUpDownIcon width={ 24 } height={ 24 } /> }
          values={ BOOKS_SORTING_VALUES }
          onChange={ (e: React.ChangeEvent<HTMLSelectElement>) => sortBooks(e.target.value as SortValues) }
        />
        <Button style="PRIMARY" type="link" href="/dashboard/books/new">
          <div className="flex items-center gap-2">
            <PlusCircleIcon width={ 20 } height={ 20 } />
            <span className="hidden md:block whitespace-nowrap">Add new book</span>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default BooksTableHeader;
