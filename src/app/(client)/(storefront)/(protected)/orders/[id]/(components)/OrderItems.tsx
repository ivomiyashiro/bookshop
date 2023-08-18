import Image from 'next/image';
import Link from 'next/link';

import { DefaultImage } from '@/components';
import { OrderItem } from '@/interfaces';

interface Props {
  orderItems: OrderItem[];
  orderTotalPrice: number;
}

export const OrderItems = ({ orderItems, orderTotalPrice }: Props) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
      <h2 className="text font-semibold">ITEMS ({ orderItems.length })</h2>
      <ul className="flex flex-col gap-6 my-5">
        { orderItems.map(item => (
          <li key={ item.id } className="flex">
            <div className="relative">
              <Link href={ `/books/${ item.book.slug }` }>
                <div className="relative block w-[8rem] max-h-[10rem] min-h-[10rem] lg:w-[10rem] lg:max-h-[12.5rem] lg:min-h-[12.5rem] mr-4 rounded-lg overflow-hidden dark:bg-gray-700 bg-gray-200">
                  { item.book.image 
                    ? ( <Image
                      src={ item.book.image }
                      alt={ item.book.title }
                      sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 300px) 50vw"
                      fill
                    /> )
                    : ( <DefaultImage /> )}
                </div>
              </Link> 
              <span className="absolute -top-1.5 -left-1.5 rounded-full w-5 h-5 text-xs bg-pink-500 text-white flex items-center justify-center">{ item.quantity }</span>
            </div>
            <div>
              <Link href={ `/books/${ item.book.slug }` }>
                <h3 className="lg:text-lg font-semibold">{ item.book.title }</h3>
              </Link>
              <p className="text-gray-500 dark:text-gray-400 text-sm mb-3 mt-1">
                { item.book.authors?.map((author, _i) => {
                  return (
                    <span key={ author.id } className="after:content-['·'] after:last:content-['']"> { author.name } </span>
                  );
                }) }
              </p>
              <p className="font-semibold">$ { item.price }</p>
            </div>
          </li>
        )) }
      </ul>
      <div className="flex flex-col gap-2 pt-4 border-t border-gray-200 dark:border-gray-600">
        <div className="flex items-center justify-between font-semibold">
          <p>Total Price: </p>
          <p>$ { orderTotalPrice }</p>
        </div>
      </div>
    </div>
  );
};
