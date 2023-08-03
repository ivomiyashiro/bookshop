import React from 'react';

interface Props {
  items: {
    label: string;
    link: string;
  }[]
}

const Breadcrumbs = ({ items }: Props) => {
  return (
    <nav className="hidden md:flex" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        { items.map((item, index) => (
          <li key={ index }>
            <p className="flex items-center">
              { index > 0 && (
                <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                </svg>
              ) }
              { item.link ? (
                <a href={ item.link } className={ `transition ml-1 text-sm font-medium ${index === items.length - 1 ? 'text-gray-500' : 'text-gray-700'} hover:text-pink-600 md:ml-2 ${index === items.length - 1 ? 'dark:text-gray-400' : 'dark:hover:text-white'}` }>
                  {item.label}
                </a>
              ) : (
                <span className={ `transition ml-1 text-sm font-medium ${index === items.length - 1 ? 'text-gray-500' : 'text-gray-700'} md:ml-2 ${index === items.length - 1 ? 'dark:text-gray-400' : 'dark:hover:text-white'}` }>
                  {item.label}
                </span>
              ) }
            </p>
          </li>
        )) }
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
