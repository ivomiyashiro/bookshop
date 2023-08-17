import Link from 'next/link';
import { ChevronLeftIcon } from '@heroicons/react/24/solid';

import { getBookBySlug } from '@/services';

import { Breadcrumbs, Button } from '@/components';
import { Gallery, Information } from './(components)';

export default async function Book({ params }: {
  params: { slug: string }
}) {
  const { slug } = params;
  const { book } = await getBookBySlug(slug);

  return (
    <>
      <section className="flex justify-between mb-6">
        <Breadcrumbs items={ [
          { label: 'Home', link: '/' },
          { label: 'Books', link: '/books' },
          { label: `${ book.title }`, link: `/books/${ slug }` }
        ] } />
        <Link href="/books" className="flex md:hidden items-center gap-2">
          <Button style="ALT" type="button" className="p-1.5 text-gray-400">
            <ChevronLeftIcon 
              width={ 14 }
            />
          </Button>
          <span>Go back</span>
        </Link>
      </section>
      <section className="flex flex-col md:flex-row w-full gap-10 mt-6">
        <Gallery image={ book.image } altText={ book.title } />
        <Information book={ book } />
      </section>
    </>
  );
}
