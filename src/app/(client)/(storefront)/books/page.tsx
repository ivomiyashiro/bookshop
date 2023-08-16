import { Metadata } from 'next';

import { GetStorefrontBooksParams } from '@/interfaces';

import { getBooksAuthors, getBooksLanguages, getStorefrontBooks } from '@/services';
import { handleAsyncRequests } from '@/utils';

import { CatalogProvider } from '@/contexts/catalog';

import { Catalog, CatalogHeader } from './(components)';
import { Breadcrumbs } from '@/components';

export const metadata: Metadata = {
  title: 'Our Catalog | Bookshop',
  description: 'Here you will find our list of books available.',
};

export default async function Books({ searchParams }: {
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
    <CatalogProvider data={ { books, params, pagination, languages, authors } }>
      <section className="flex justify-between mb-6">
        <Breadcrumbs items={ [
          { label: 'Home', link: '/' },
          { label: 'Books', link: '/books' },
        ] } />
      </section>
      <CatalogHeader />
      <Catalog />
    </CatalogProvider>
  );
}
