'use client';
import { useContext, useEffect, useState } from 'react';

import { Book } from '@/interfaces';
import { getBookById } from '@/services';

import { CartContext } from '@/contexts/cart';

import { Button, InputSelect } from '@/components';

interface Props { book: Book; }

const Information = ({ book }: Props) => {
  const { cart, addToCart } = useContext(CartContext);
  const [price, setPrice] = useState<number>(0);
  const [stock, setStock] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const isInCart = cart.find(cartItem => cartItem.id === book.id) ? true : false;

  useEffect(() => {
    const loadBook = async () => {
      const { book: dbBook } = await getBookById(book.id, ['price', 'stock']);
      setPrice(dbBook.price);
      setStock(dbBook.stock);
    };

    setLoading(true);
    loadBook();
    setLoading(false);
  }, [book.id]);

  return (
    <div className="md:w-full">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold !leading-[1.35em]">{ book.title }</h1>
      <p className="text-sm mt-2 text-gray-400">
      By: 
        { book.authors.map(author => (
          <span key={ author.id } className="after:content-[','] after:last:content-['']"> { author.name } </span>
        ))}
      </p>
      <div className="my-8 h-9">
        { !loading 
          ? <h3 className="text-3xl lg:text-4xl font-bold"> $ { price } </h3>
          : <div className="w-24 h-full rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse"></div> } 
      </div>
      <div className="flex gap-4 my-8">
        <InputSelect
          selectedValue={ quantity }
          values={ Array.from(Array(stock), (_, index) => index + 1) }
          icon={ <p className="font-semibold">QTY</p> }
          onChange={ (e: React.ChangeEvent<HTMLSelectElement>) => setQuantity(parseInt(e.target.value)) }
        />
        <Button 
          style="PRIMARY" 
          className="w-full h-[55px]"
          disabled={ stock <= 0 ? true : (isInCart ? true : false) }
          onClick={ () => addToCart({ 
            id: book.id, 
            title: book.title,
            image: book.image,
            authors: book.authors, 
            price, 
            quantity 
          }) }
        >
          <span className="font-bold">
            { stock <=0 
              ? 'NO STOCK'
              : (isInCart 
                ? 'BOOK IN CART'
                : 'ADD TO CART') }
          </span>
        </Button>
      </div>
      <div>
        <p className="font-bold mb-2 ">About this book</p>
        <p className="text-gray-400">{ book.description }</p>
      </div>
    </div>
  );
};

export default Information;
