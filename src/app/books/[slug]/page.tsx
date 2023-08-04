import { HomeIcon } from '@heroicons/react/24/solid';
import { getBookBySlug } from '@/services';
import { Gallery, Information } from './(sections)';
import { Breadcrumbs } from '@/components';

export const revalidate = 86400; // 1d

export default async function Book({ params }: {
  params: { slug: string }
}) {
  const { slug } = params;
  const { book } = await getBookBySlug(slug);

  return (
    <div className="max-w-[1200px] mx-auto">
      <section className="flex justify-between">
        <div className="flex items-center ">
          <HomeIcon width={ 18 } height={ 18 } className="hidden md:flex text-gray-500" />
          <Breadcrumbs items={ [
            { label: 'Home', link: '/' },
            { label: 'Books', link: '/' },
            { label: `${ book.title }`, link: `/${ slug }` }
          ] } />
        </div>
      </section>
      <section className="flex flex-col md:flex-row w-full gap-10 mt-6">
        <Gallery image={ book.image } altText={ book.title } />
        <Information book={ book } />
      </section>
    </div>
  );
}
