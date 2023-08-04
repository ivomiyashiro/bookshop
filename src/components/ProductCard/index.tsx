import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { Book } from '@/interfaces';
import { DefaultImage } from '@/components';

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
              : ( <DefaultImage /> )}
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
