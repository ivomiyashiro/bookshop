import { ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  children: ReactNode;
  width?: string;
  height?: string;
  href?: string;
  className?: string;
  type?: 'link' | 'button' | 'submit'
  style: 'PRIMARY' | 'ALT';
  disabled?: boolean;
  onClick?: () => void;
}

const Button = ({ 
  children, 
  width = '100%', 
  height = '100%', 
  href = '', 
  className, 
  style, 
  type = 'button',
  disabled = false,
  onClick 
}: Props) => {
  let styles = '';

  if (style === 'PRIMARY') {
    styles = `flex items-center justify-center text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:ring-pink-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-pink-600 dark:hover:bg-pink-700 focus:outline-none dark:focus:ring-pink-800 cursor-pointer transition disabled:bg-gray-100 disabled:text-gray-500 disabled:cursor-not-allowed disabled:hover:bg-gray-100 ${width} ${height}`; 
  }

  if (style === 'ALT') {
    styles= `flex items-center justify-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-pink-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer transition disabled:bg-pink-200 disabled:text-gray-400 disabled:hover:bg-gray-100 disabled:cursor-not-allowed ${width} ${height}`;
  }

  if (type === 'link') {
    return (
      <Link href={ href } className={ className + ' ' + styles } onClick={ onClick } >
        { children }
      </Link>
    );
  }

  return (
    <button type={ type } className={ className + ' ' + styles } onClick={ onClick } disabled={ disabled } >
      { children }
    </button>
  );
};

export default Button;
