import { useContext, useState } from 'react';
import { CatalogContext } from '@/contexts/catalog';
import { DropdownMenu } from '@/components';

interface Props {
  filterId: number;
  name: string;
  values: { id: number; name: string; checked: boolean }[];
}

const Filter = ({ filterId, name, values }: Props) => {
  const { toggleFilterCheckbox } = useContext(CatalogContext);
  const [open, setOpen] = useState(true);

  return (
    <DropdownMenu title={ name } open={ open } handleOpen={ setOpen }>
      <ul className={ `flex gap-3 w-full flex-wrap overflow-hidden transition ${open ? 'h-auto mb-4' : 'h-0 my-0'} ` }>
        { values?.map(({ id, name, checked }: any) => (
          <li key={ id } className={ `${ values.length < 5 ? 'basis-[calc(50%-0.6rem)]' : 'basis-[calc(25%-0.6rem)]'}` } >
            <input type="checkbox" id={ id } checked={ checked } hidden onChange={ () => null } />
            <label 
              htmlFor={ id } 
              className={ `w-full h-12 flex items-center justify-center text-xs text-center px-1 transition cursor-pointer rounded-lg ${ checked ? 'bg-gray-100 dark:bg-gray-700' : 'text-gray-900 focus:outline-none bg-white  border border-gray-200 hover:text-pink-600 hover:bg-gray-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700'}` }
              onClick={ () => toggleFilterCheckbox(filterId, id) }
            >
              { name }
            </label>
          </li>
        ))}
      </ul>
    </DropdownMenu>
  );
};

export default Filter;
