'use client';
import { useContext } from 'react';
import { CatalogContext } from '@/contexts/catalog';
import { ProductCard } from '@/components/ui';

const BooksCatalog = () => {
  const { books, view } = useContext(CatalogContext);
  
  return (
    <div className={ `grid ${ view !== 'GRID' ? 'grid-cols-2' : 'grid-cols-1' } md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 gap-y-6 overflow-hidden max-w-[1340px] mx-auto` }>
      { books.map(book => (
        <ProductCard key={ book.id } book={ book } />
      )) }
    </div>
  );
};

export default BooksCatalog;
