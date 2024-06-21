import Image from 'next/image';
import { Author } from '@/interfaces';

interface Props {
  title: string;
  quantity: number;
  price: number;
  imageUrl: string;
  authors: Author[];
}

const OrderSummaryItem = ({ title, imageUrl, authors, price, quantity }: Props) => {
  return (
    <article className="flex relative w-full overflow-visible">
      <div className="relative block w-[8rem] max-h-[10rem] min-h-[10rem] lg:w-[7rem] lg:max-h-[8.5rem] lg:min-h-[8.5rem] mr-4 rounded">
        <span className="absolute -top-2 -left-2 w-5 h-5 text-xs bg-pink-500 flex items-center justify-center rounded-full text-white z-50">
          { quantity }
        </span>
        <Image
          src={ imageUrl }
          alt={ title }
          style={ {
            'borderRadius': '0.25rem'
          } }
          sizes="(min-width: 768px) 12.4rem, 10rem"
          fill
        />
      </div>
      <div className="flex-[1_1] flex flex-col gap-1 w-full">
        <p>{ title }</p>
        <p className="text-gray-400 text-sm my-1">
          { authors.map((author) => (
            <span key={ author.id } className="after:content-['·'] after:last:content-['']"> { author.name } </span>
          )) }
        </p>
        <p className="font-semibold">${ price }</p>
      </div>
    </article>
  );
};

export default OrderSummaryItem;
