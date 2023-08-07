import { GetStorefrontBooksParams } from '@/interfaces';

import { getBooksAuthors, getBooksLanguages, getStorefrontBooks } from '@/services';

import { handleAsyncRequests } from '@/utils';
import { CatalogProvider } from '@/contexts/catalog';

export default async function Login({ searchParams }: {
  searchParams: GetStorefrontBooksParams;
}) {
  const { authors: authorsParams, languages: languagesParams, price: priceParams, searchText, sortBy, orderBy } = searchParams;
  const params = { authors: authorsParams, languages: languagesParams, price: priceParams, searchText, sortBy, orderBy };

  const { books, pagination, languages, authors } = await handleAsyncRequests([
    getStorefrontBooks(params),
    getBooksLanguages(),
    getBooksAuthors(),
  ]);

  return (
    <div>
      login
    </div>
  );
}
