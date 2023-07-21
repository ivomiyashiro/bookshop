import { ReactNode } from 'react';
import Link from 'next/link';

interface Props {
  children: ReactNode;
  width?: string;
  height?: string;
  isLink?: boolean;
  href?: string;
}

export const Button = ({ children, width = '100%', height = '100%', isLink = false, href = '' }: Props) => {
  const className = `block border border-gray-alpha-500 hover:border-gray-alpha-700 hover:bg-gray-alpha-300 rounded-full flex items-center justify-center transition ${width} ${height}`; 

  if (isLink) {
    return (
      <Link href={ href } className={ className }>
        { children }
      </Link>
    );
  }

  return (
    <button className={ className }>
      { children }
    </button>
  );
};
