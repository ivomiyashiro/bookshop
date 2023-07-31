import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Book } from '@/interfaces';

const ProductCard = ({ book }: { book: Book }) => {
  return (
    <article className="flex flex-col min-w-0 relative group flex-shrink-0 xl:flex-[1_1]" style={ { width: 'auto' } }>
      <div className="relative">
        <Link href={ `/books/${ book.slug }` }>
          <div className="relative w-full h-full pt-[119%] overflow-hidden rounded-[1rem] dark:bg-gray-700 bg-gray-200">
            { book.image 
              ? ( <Image
                src={ book.image }
                alt={ book.title }
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 300px) 50vw"
                fill
              /> )
              : ( <div className="absolute flex items-center justify-center inset-0">
                <svg className="w-20 h-20 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                </svg>
              </div> )}
          </div>
        </Link> 
      </div>
      <div className="p-3">
        <Link href={ `/books/${ book.slug }` }>
          <h4 className="leading-[1.3em] text-[0.925rem]">{ book.title }</h4>
        </Link>
        <p className="text-gray-400 text-sm my-1">
          { book.authors.map((author, i) => {
            return (
              <span key={ author.id } className="after:content-['·'] after:last:content-['']"> { author.name } </span>
            );
          }) }
            
        </p>
        <p className="font-semibold">${ book.price }</p>
      </div>
    </article>
  );
};


export default memo(ProductCard);
