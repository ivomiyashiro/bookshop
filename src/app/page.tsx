import { BooksOrderBy, SortBy, StorefrontBooksFilters } from '@/interfaces';
import { getStorefrontBooks } from '@/services';
import { Hero, BooksList } from '@/components/sections';

interface SearchParams {
  limit?: string;
  offset?: string; 
  orderBy?: string; 
  sortBy?: string; 
  filters?: StorefrontBooksFilters;
}

export default async function Home({ searchParams }: {
  searchParams: SearchParams;
}) {
  const { limit, offset, orderBy, sortBy, filters } = searchParams;

  const { books } = await getStorefrontBooks({
    limit: parseInt(limit as string) || undefined,
    offset: parseInt(offset as string) || undefined,
    orderBy: orderBy as unknown as BooksOrderBy,
    sortBy: sortBy as unknown as SortBy,
    filters: filters as unknown as StorefrontBooksFilters
  });

  return (
    <main className="px-4 lg:px-6">
      <Hero searchText={ filters?.searchText } />
      <BooksList books={ books } view="GRID" />
    </main>
  );
}
