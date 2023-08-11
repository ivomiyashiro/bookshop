import { useId } from 'react';

interface Props {
  value :string;
  placeholder: string;
  type: string;
  label: string;
  maxLength?: number;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
}

const Input = ({ 
  value, 
  placeholder, 
  type, 
  label, 
  maxLength, 
  name = '',
  onChange, 
  onKeyDown 
}: Props) => {
  const id = useId();

  return (
    <div className="mb-6">
      { label && (
        <label 
          htmlFor={ id }
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          { label }
        </label> )}
      <input 
        type={ type }
        name={ name }
        id={ id }
        value={ value }
        placeholder={ placeholder }
        maxLength={ maxLength }
        onChange={ onChange }
        onKeyDown={ onKeyDown }
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
      />
    </div>
  );
};

export default Input;
