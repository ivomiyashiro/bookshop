import { BooksOrderBy, BooksSortBy, StorefrontBooksFilters } from '@/interfaces';

import { getStorefrontBooks } from '@/services';

import { CatalogProvider } from '@/contexts/catalog';

import { ClientLayout } from '@/components/layouts';
import { BooksCatalog, Header } from '@/components/sections/(main)';

interface SearchParams {
  orderBy?: string; 
  sortBy?: string; 
  filters?: StorefrontBooksFilters;
}

export default async function Home({ searchParams }: {
  searchParams: SearchParams;
}) {
  const { orderBy, sortBy, filters } = searchParams;

  const params = {
    orderBy: orderBy as unknown as BooksOrderBy,
    sortBy: sortBy as unknown as BooksSortBy,
    filters: filters 
      ? JSON.parse(decodeURIComponent(filters as string)) as any
      : undefined
  };

  const { books } = await getStorefrontBooks(params);

  return (
    <CatalogProvider data={ { books, params } }>
      <ClientLayout>
        <Header />
        <BooksCatalog />
      </ClientLayout>
    </CatalogProvider>
  );
}
