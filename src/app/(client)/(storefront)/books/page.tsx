import { Metadata } from 'next';

import { Catalog, CatalogHeader } from './(components)';
import { Breadcrumbs } from '@/components';

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
      </section>
      <CatalogHeader />
      <Catalog />
    </>
  );
}
