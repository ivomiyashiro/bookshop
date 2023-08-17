import { headers } from 'next/headers';

import { handleAsyncRequests } from '@/utils';
import { getBooksAuthors, getBooksLanguages, getStorefrontBooks } from '@/services';

import { CatalogProvider } from '@/contexts/catalog';

export default async function CatalogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = headers().get('x-invoke-query') as string;

  const { 
    authors: authorsParams, 
    languages: languagesParams, 
    price: priceParams, 
    searchText, 
    sortBy,
    orderBy 
  } = JSON.parse(decodeURIComponent(header));

  const params = { 
    authors: authorsParams, 
    languages: languagesParams, 
    price: priceParams, 
    searchText, 
    sortBy, 
    orderBy 
  };

  const { books, pagination, languages, authors } = await handleAsyncRequests([
    getStorefrontBooks(params),
    getBooksLanguages(),
    getBooksAuthors(),
  ]);

  return (
    <CatalogProvider data={ { 
      books, 
      params, 
      pagination, 
      languages, 
      authors 
    } }>
      { children } 
    </CatalogProvider>

  );
}


