'use client';
import { ChangeEvent, useContext, useState } from 'react';
import { ArrowsUpDownIcon, FunnelIcon } from '@heroicons/react/24/outline';

import { SortValues } from '@/interfaces';

import { CatalogContext } from '@/contexts/catalog';

import { Button, InputSelect, ToggleButton } from '@/components/ui';
import Searchbar from './Searchbar';
import FiltersMenu from './FiltersMenu';

const CatalogHeader = () => {
  const SORTING_VALUES: SortValues[] = ['NEWER', 'OLDER', 'HIGHER PRICE', 'LOWER PRICE', 'A - Z', 'Z - A'];
  const { view, toggleView, sortBooks } = useContext(CatalogContext);
  const [filtersMenuOpen, setFiltersMenuOpen] = useState(false);

  return (
    <div className="grid grid-cols-2 md:flex gap-2 md:gap-4 mb-10">
      <div className="flex gap-2 w-full">
        <Searchbar />
        <ToggleButton 
          onChange={ toggleView }
          checked={ view === 'LIST' }
        />
      </div>
      <div className="flex gap-2 md:gap-4">
        <InputSelect
          icon={ <ArrowsUpDownIcon width={ 24 } height={ 24 } /> }
          values={ SORTING_VALUES }
          onChange={ (e: ChangeEvent<HTMLSelectElement>) => sortBooks(e.target.value as SortValues) }
        />
        <Button style="PRIMARY" onClick={ () => setFiltersMenuOpen(true) }>
          <div className="flex items-center gap-2">
            <FunnelIcon width={ 20 } height={ 20 } />
            <span className="hidden md:block">Filters</span>
          </div>
        </Button>
      </div>
      <FiltersMenu open={ filtersMenuOpen } handleOpen={ setFiltersMenuOpen } />
    </div>
  );
};

export default CatalogHeader;
