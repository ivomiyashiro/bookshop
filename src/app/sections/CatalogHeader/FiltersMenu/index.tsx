import { Dispatch, SetStateAction, useContext } from 'react';
import { Button, Modal } from '@/components';
import { XMarkIcon, FunnelIcon } from '@heroicons/react/24/outline';
import { CatalogContext } from '@/contexts/catalog';
import Filter from './Filter';

interface Props {
  open: boolean;
  handleOpen: Dispatch<SetStateAction<boolean>>;
}

const FiltersMenu = ({ open, handleOpen }: Props) => {
  const { filters, URLParams, resetURLParams } = useContext(CatalogContext);

  return (
    <Modal open={ open } handleOpen={ handleOpen }>
      <aside className={ `fixed top-0 right-0 h-screen bg-gray-900 shadow-[0_35px_60px_-15px_rgba(0,0,0,.5)]  z-50 md:rounded-l-2xl transition-all overflow-hidden ${ open ? 'w-full lg:w-[470px]' : 'w-[0px]' }` }>
        <div className="flex flex-col h-full relative">
          <div className="p-5 flex items-center justify-between">
            <h2 className="flex gap-2 items-center">
              <FunnelIcon width={ 26 } height={ 26 } />
              <span className="font-bold text-2xl">FILTERS</span>
            </h2>
            <Button 
              width="w-[36px]" 
              height="h-[36px]" 
              style="ALT"
              aria-label="Close filters menu" 
              className="!rounded-full" 
              onClick={ () => handleOpen(false) }
            >
              <XMarkIcon width={ 22 } height={ 22 } />
            </Button>
          </div>
          <div className="p-4 pt-2 h-full flex flex-col overflow-y-scroll scrollbar-hidden">
            { filters.map(filter => (
              <Filter 
                key={ filter.id }
                filterId={ filter.id }
                name={ filter.name }
                values={ filter.data }
              />
            ))}
          </div>
          <Button
            style="PRIMARY" 
            className="m-5 rounded-lg !text-lg !font-bold py-4 disabled:opacity-0 disabled:cursor-default transition" 
            disabled={ !(URLParams.has('price') || URLParams.has('authors') || URLParams.has('languages')) } 
            onClick={ resetURLParams }
          >
            RESET FILTERS
          </Button>
        </div>
      </aside>
    </Modal>
  );
};

export default FiltersMenu;
