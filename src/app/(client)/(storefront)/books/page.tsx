import { Metadata } from 'next';
import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

import { Catalog, CatalogHeader } from './(components)';
import { Breadcrumbs, Button } from '@/components';

export const metadata: Metadata = {
  title: 'Our Catalog | Bookshop',
  description: 'Here you will find our list of books available.',
};

export default function Books() {
  return (
    <>
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
    </>
  );
}
