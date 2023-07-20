import Image from 'next/image';
import Link from 'next/link';
import { Book } from '@/interfaces';

export const ProductCard = ({ book }: { book: Book }) => {
  return (
    <article className="flex flex-col min-w-0 relative group flex-shrink-0 xl:flex-[1_1]" style={ { width: '275px' } }>
      <div className="relative">
        <Link href={ `/products/${ book.title }` }>
          <div className="relative w-full h-full pt-[119%] overflow-hidden rounded-[1rem] bg-gray-100">
            <Image
              src={ book.image }
              alt={ book.title }
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 300px) 50vw"
            />
          </div>
        </Link> 
      </div>
      <div className="p-3">
        <h4 className="leading-[1.3em] text-[0.925rem]">{ book.title }</h4>
        <p className="text-gray-400 text-sm my-1">
          { book.authors.map(author => (
            <span key={ author.id }>{ author.name }</span>
          )) }
        </p>
        <p className="font-semibold">${ book.price }</p>
      </div>
    </article>
  );
};
