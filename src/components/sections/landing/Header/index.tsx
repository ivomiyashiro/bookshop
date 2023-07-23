'use client';
import { ChangeEvent, useContext } from 'react';
import { ArrowsUpDownIcon } from '@heroicons/react/24/outline';

import { SortValues } from '@/interfaces';

import { CatalogContext } from '@/context/catalog';

import { Searchbar } from './Searchbar';
import { InputSelect } from '@/components/ui';

export const Header = () => {
  const SORTING_VALUES: SortValues[] = ['NEWER', 'OLDER', 'HIGHER PRICE', 'LOWER PRICE', 'A - Z', 'Z - A'];
  const { changeBooksSorting } = useContext(CatalogContext);

  return (
    <div className="flex gap-4 my-10">
      <Searchbar />
      <InputSelect
        icon={ <ArrowsUpDownIcon width={ 24 } height={ 24 } /> }
        values={ SORTING_VALUES }
        onChange={ (e: ChangeEvent<HTMLSelectElement>) => changeBooksSorting(e.target.value as SortValues) }
      />
    </div>
  );
};
