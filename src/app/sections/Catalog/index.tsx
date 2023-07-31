'use client';
import { useContext } from 'react';

import { useInfiniteScroll } from '@/hooks';

import { CatalogContext } from '@/contexts/catalog';

import { ProductCard, Spinner } from '@/components/ui';
import { NoProductsFound } from '../NoProductsFound';

const Catalog = () => {
  const { books, view, pagination, loadMoreBooks } = useContext(CatalogContext);
  const { ref } = useInfiniteScroll({ loadMore: loadMoreBooks });
  const { page, totalPages } = pagination;

  return (
    <>
      { books.length !== 0
        ? (
          <div className={ `grid ${ view !== 'GRID' ? 'grid-cols-2' : 'grid-cols-1' } md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 gap-y-6 overflow-hidden max-w-[1340px] mx-auto` }>
            { books.map(book => (
              <ProductCard key={ book.id } book={ book } />
            )) }
          </div>
        )
        : <NoProductsFound /> }
        
      <div ref={ ref } className="flex justify-center py-10">
        { (page < totalPages) && (
          <Spinner width="w-12"  height="h-12"/>
        )}
      </div>
    </>
  );
};

export default Catalog;
