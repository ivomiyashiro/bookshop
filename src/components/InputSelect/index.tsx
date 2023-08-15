'use client';
import { useId } from 'react';

interface Props {
  icon?: React.ReactElement;
  values: string[] | number[];
  label?: string;
  selectedValue?: number | string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const InputSelect = ({ 
  icon: Icon, 
  selectedValue, 
  values, 
  label, 
  className,
  onChange
}: Props) => {
  const id = useId();

  return (
    <>
      { label && (
        <label htmlFor={ id } className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          { label }
        </label>
      ) }
      <div className={ `flex items-center gap-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg w-full md:w-[200px] focus:ring-pink-500 focus:border-pink-500 px-5 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500 ${className}` }>
        { Icon && Icon }
        <select 
          id={ id } 
          className="bg-transparent w-full outline-none" 
          value={ selectedValue }
          onChange={ onChange }
        >
          { values.map((value, i) => (
            <option 
              key={ i } 
              value={ value }
            >
              { value }
            </option>
          ))}
        </select>
      </div>
    </>
  );
};

export default InputSelect;
