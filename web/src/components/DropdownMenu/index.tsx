import { ChevronDownIcon } from '@heroicons/react/24/outline';

interface Props {
  children: React.ReactNode;
  open: boolean;
  title: string;
  handleOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const DropdownMenu = ({ children, open, title, handleOpen }: Props) => {
  return (
    <div className="w-full border-b dark:border-gray-700">
      <button className="flex w-full justify-between items-center py-5 outline-none" onClick={ () => handleOpen(prev => !prev) }>
        <div className="flex gap-3">
          <h3 className="uppercase font-semibold">{ title }</h3>
        </div>
        <div className={ `${ open ? 'rotate-0' : '-rotate-90'}` }>
          <ChevronDownIcon width={ 22 } height={ 22 } />
        </div>
      </button>
      { children }
    </div>
  );
};

export default DropdownMenu;
