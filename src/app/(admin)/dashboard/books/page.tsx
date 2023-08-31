import { cookies } from 'next/headers';
import { getDashboardBooks } from '@/services';
import { BooksTable, BooksTableHeader, Pagination } from './(components)';

export default async function DashboardBooksPage({ searchParams }: {
  searchParams: any
}) {
  const {
    page = 1,
    limit = 12,
    offset = 0,
    authors: authorsParams, 
    languages: languagesParams, 
    price: priceParams, 
    searchText, 
    sortBy,
    orderBy 
  } = searchParams;

  const params = {
    page,
    limit,
    offset,
    authors: authorsParams, 
    languages: languagesParams, 
    price: priceParams, 
    searchText, 
    sortBy, 
    orderBy 
  };

  const at = cookies().get('ACCESS_TOKEN')?.value as string;
  
  const { books, pagination } = await getDashboardBooks(params, at);

  return (
    <>
      <h1 className="text-5xl font-bold">
        BOOKS
      </h1>
      <div className="my-12">
        <BooksTableHeader />
        <BooksTable books={ books } />
        { books.length === 0 && (
          <div className="my-20">
            <p className="text-2xl text-center italic text-gray-400">Oops! We could not find any books!</p>
          </div> )}
        <Pagination
          count={ pagination.count }
          totalPages={ pagination.totalPages }
          page={ pagination.page }
          currentPage={ pagination.page }
          totalCount={ pagination.totalCount }
        />
      </div>
    </>
  );
};
