import { getBookBySlug } from '@/services';
import { Breadcrumbs } from '@/components';
import { Gallery, Information } from './(components)';

export default async function Book({ params }: {
  params: { slug: string }
}) {
  const { slug } = params;
  const { book } = await getBookBySlug(slug);

  return (
    <div>
      <section className=" justify-between">
        <Breadcrumbs items={ [
          { label: 'Home', link: '/' },
          { label: 'Books', link: '/books' },
          { label: `${ book.title }`, link: `/books/${ slug }` }
        ] } />
      </section>
      <section className="flex flex-col md:flex-row w-full gap-10 mt-6">
        <Gallery image={ book.image } altText={ book.title } />
        <Information book={ book } />
      </section>
    </div>
  );
}
