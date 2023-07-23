import { BooksOrderBy, SortBy, StorefrontBooksFilters } from '@/interfaces';
import { getStorefrontBooks } from '@/services';
import { CatalogProvider } from '@/context/catalog';
import { BooksCatalog, Header } from '@/components/sections/landing';

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
    sortBy: sortBy as unknown as SortBy,
    filters: filters 
      ? JSON.parse(decodeURIComponent(filters as string)) as any
      : undefined
  };

  const { books } = await getStorefrontBooks(params);

  return (
    <main className="px-4 lg:px-6">
      <CatalogProvider data={ { books, params } }>
        <Header />
        <BooksCatalog />
      </CatalogProvider>
    </main>
  );
}
