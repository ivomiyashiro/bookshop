import { Button, InputSelect } from '@/components';
import { Author } from '@/interfaces';

interface Props {
  title: string;
  authors: Author[];
  description: string;
}

const Information = ({
  title,
  authors,
  description
}: Props) => {
  return (
    <div className="md:w-full">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold !leading-[1.35em]">{ title }</h1>
      <p className="text-sm mt-2 text-gray-400">
      By: 
        { authors.map(author => (
          <span key={ author.id } className="after:content-[','] after:last:content-['']"> { author.name } </span>
        ))}
      </p>
      <h3 className="text-3xl lg:text-4xl font-bold my-8">$ { 'hola' }</h3>
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
