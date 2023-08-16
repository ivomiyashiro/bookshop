import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/solid';

interface Props {
  items: {
    label: string;
    link: string;
  }[]
}

const Breadcrumbs = ({ items }: Props) => {
  return (
    <div className="hidden md:flex">
      <HomeIcon width={ 18 } height={ 18 } className="text-gray-500 shrink-0" />
      <nav aria-label="Breadcrumb">
        <ol className="flex items-center space-x-1 md:space-x-2">
          { items.map((item, index) => (
            <li key={ index } className="flex items-center overflow-hidden">
              <p className="flex items-center truncate">
                { index > 0 && (
                  <svg className="w-3 h-3 text-gray-400 mx-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
                  </svg>
                ) }
                { item.link ? (
                  <Link href={ item.link } className={ `transition ml-1 text-sm font-medium ${index === items.length - 1 ? 'text-gray-500' : 'text-gray-700'} hover:text-pink-600 md:ml-2 ${index === items.length - 1 ? 'dark:text-gray-400' : 'dark:hover:text-white'}` }>
                    <span className="truncate"> {item.label} </span>
                  </Link>
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
    </div>
  );
};

export default Breadcrumbs;
