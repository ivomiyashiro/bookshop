import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

import { handleAsyncRequests } from '@/utils';
import { getBooksAuthors, getBooksLanguages, getStorefrontBooks } from '@/services';

import { CatalogProvider } from '@/contexts/catalog';

import { Catalog, CatalogHeader } from './(components)';
import { Breadcrumbs, Button } from '@/components';

export const metadata: Metadata = {
  title: 'Our Catalog | Bookshop',
  description: 'Here you will find our list of books available.',
};

export default async function Books({ searchParams }: {
  searchParams: any
}) {
  const { 
    authors: authorsParams, 
    languages: languagesParams, 
    price: priceParams, 
    searchText, 
    sortBy,
    orderBy 
  } = searchParams;

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
      <section className="flex justify-between mb-6">
        <Breadcrumbs items={ [
          { label: 'Home', link: '/' },
          { label: 'Books', link: '/books' },
        ] } />
        <Link href="/" className="flex md:hidden items-center gap-2">
          <Button style="ALT" type="button" className="p-1.5 text-gray-400">
            <ChevronLeftIcon 
              width={ 14 }
            />
          </Button>
          <span>Go back</span>
        </Link>
      </section>
      <CatalogHeader />
      <Catalog />
    </CatalogProvider>
  );
}
