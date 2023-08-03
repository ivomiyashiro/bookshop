'use client';
import { useEffect, useState } from 'react';
import { Author } from '@/interfaces';
import { getBookById } from '@/services';
import { Breadcrumbs, Button, InputSelect } from '@/components';
import { HomeIcon } from '@heroicons/react/24/outline';

interface Props {
  bookId: number;
  title: string;
  authors: Author[];
  description: string;
}

const Information = ({
  bookId,
  title,
  authors,
  description
}: Props) => {
  const [price, setPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBook = async () => {
      const { book } = await getBookById(bookId, ['price']);
      setPrice(book.price);
    };

    setLoading(true);
    loadBook();
    setLoading(false);
  }, [bookId]);

  return (
    <div className="md:w-full">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold !leading-[1.35em]">{ title }</h1>
      <p className="text-sm mt-2 text-gray-400">
      By: 
        { authors.map(author => (
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
          values={ [1, 2, 3, 4, 5] }
          icon={ <p className="font-semibold">QTY</p> }
        // onChange={ () => null }
        />
        <Button style="PRIMARY" className="w-full h-[55px]">
          <span className="font-bold">ADD TO CART</span>
        </Button>
      </div>
      <div>
        <p className="font-bold mb-2 ">About this book</p>
        <p className="text-gray-400">{ description }</p>
      </div>
    </div>
  );
};

export default Information;
