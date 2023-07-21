import { Book } from '@/interfaces';
import { ProductCard } from '@/components/ui';

interface Props {
  books: Book[];
  view: 'GRID' | 'LIST';
}

export const BooksList = ({ books, view }: Props) => {
  return (
    <div className={ `grid ${ view === 'GRID' ? 'grid-cols-2' : 'grid-cols-1' } md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 gap-y-6 my-4 overflow-hidden mt-10 max-w-[1340px] mx-auto` }>
      {books.map((book) => (
        <ProductCard key={ book.id } book={ book } />
      ))}
    </div>

  );
};
