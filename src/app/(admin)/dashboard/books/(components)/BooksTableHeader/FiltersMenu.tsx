import { useContext } from 'react';
import { XMarkIcon } from '@heroicons/react/24/outline';

import { CatalogContext } from '@/contexts/catalog';

import { Button, Modal } from '@/components';
import Filter from './Filter';

interface Props {
  open: boolean;
  handleOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FiltersMenu = ({ open, handleOpen }: Props) => {
  const disabled = !(URLParams.has('price') || URLParams.has('authors') || URLParams.has('languages'));

  return (
    <Modal open={ open } handleOpen={ handleOpen }>
      <aside className={ `fixed top-0 right-0 h-screen bg-white dark:bg-gray-900 shadow-[0_35px_60px_-15px_rgba(0,0,0,.5)]  z-50 md:rounded-l-2xl transition-all overflow-hidden ${ open ? 'w-full md:w-[470px]' : 'w-[0px]' }` }>
        <div className="flex flex-col h-full relative">
          <div className="p-4 flex items-center justify-between">
            <h2 className="flex gap-2 items-center">
              <span className="font-bold text-2xl">FILTERS</span>
            </h2>
            <div className="flex h-full gap-2">
              { !disabled && (
                <Button 
                  style="ALT"
                  className="h-full px-4"
                  aria-label="Close filters menu"  
                  // onClick={ resetURLParams }
                >
                  Clear All
                </Button> )}
              <Button 
                width="w-[36px]" 
                height="h-[36px]" 
                style="ALT"
                aria-label="Close filters menu"  
                onClick={ () => handleOpen(false) }
              >
                <XMarkIcon width={ 22 } height={ 22 } />
              </Button>
            </div>
          </div>
          <div className="px-4 h-full flex flex-col overflow-y-scroll scrollbar-hidden">
            {/* { filters.map(filter => (
              <Filter 
                key={ filter.id }
                filterId={ filter.id }
                name={ filter.name }
                values={ filter.data }
              />
            )) } */}
          </div>
          <Button
            style="PRIMARY" 
            className="m-5 rounded-lg !text-lg !font-semibold py-4" 
            disabled={ disabled } 
            onClick={ () => handleOpen(false) }
          >
            {/* See Books { !disabled && `(${books.length})` } */}
          </Button>
        </div>
      </aside>
    </Modal>
  );
};

export default FiltersMenu;
