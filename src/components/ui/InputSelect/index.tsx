'use client';
import { ChangeEvent, ReactElement, useId } from 'react';

interface Props {
  icon: ReactElement;
  values: string[];
  label?: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
}

export const InputSelect = ({ icon: Icon, values, label, onChange }: Props) => {
  const id = useId();

  return (
    <>
      { label && (
        <label htmlFor={ id } className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          { label }
        </label>
      ) }
      <div className="flex items-center gap-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        { Icon }
        <select id={ id } className="bg-transparent w-full outline-none" onChange={ onChange }>
          { values.map((value, i) => (
            <option key={ i } value={ value }>{ value }</option>
          ))}
        </select>
      </div>
    </>
  );
};
