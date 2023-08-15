import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { TrashIcon } from '@heroicons/react/24/outline';

import { CART_MAX_QTY } from '@/constants';

import { CartItem as ICartItem, CartContext } from '@/contexts/cart';

import { Button, DefaultImage, InputSelect } from '@/components';

interface Props { book: ICartItem; handleCloseModal: () => void; }

export const CartItem = ({ book, handleCloseModal }: Props) => {
  const { removeFromCart, updateProductQuantity } = useContext(CartContext);

  return (
    <article className="flex relative w-full overflow-visible">
      <Link href={ `/books/${ book.slug }` } className="block" onClick={ handleCloseModal }>
        <div className="relative block w-[8rem] max-h-[10rem] min-h-[10rem] lg:w-[10rem] lg:max-h-[12.5rem] lg:min-h-[12.5rem] mr-4 rounded-lg overflow-hidden dark:bg-gray-700 bg-gray-200">
          { book.image 
            ? ( <Image 
              src={ book.image }
              alt={ book.title }
              sizes="(min-width: 768px) 12.4rem, 10rem"
              fill
            /> ) 
            : ( <div className="bg-gray-300">
              <DefaultImage className="w-[40px]"/>
            </div>
            ) }
        </div>
      </Link> 
      <div className="flex-[1_1] flex flex-col gap-1 w-full">
        <Link href={ `/books/${ book.slug }` } onClick={ handleCloseModal }>
          <p>{ book.title }</p>
        </Link>
        <p className="text-gray-400 text-sm my-1">
          { book.authors.map((author) => (
            <span key={ author.id } className="after:content-['·'] after:last:content-['']"> { author.name } </span>
          )) }
        </p>
        <p className="font-semibold">${ book.price }</p>
        <div className="mt-auto flex justify-between items-center gap-3">
          <Button
            style="ALT"
            height="h-full"
            width="w-[50px]"
            onClick={ () => removeFromCart(book.id) }
          >
            <TrashIcon width={ 20 } height={ 20 }/>
          </Button>
          <InputSelect
            values={ CART_MAX_QTY }
            selectedValue={ book.quantity }
            icon={ <p className="font-semibold">QTY</p> }
            className="!w-full"
            onChange={ (e: React.ChangeEvent<HTMLSelectElement>) => updateProductQuantity({ ...book, quantity: parseInt(e.target.value) }) }
          />
        </div>
      </div>
    </article>
  );
};
