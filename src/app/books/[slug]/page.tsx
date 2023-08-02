import { getBookBySlug } from '@/services';
import { Gallery, Information } from './(sections)';

export default async function Book({ params }: {
  params: { slug: string }
}) {
  const { slug } = params;
  const { book } = await getBookBySlug(slug);

  return (
    <section className="flex flex-col md:flex-row w-full gap-10 max-w-[1200px] mx-auto">
      <Gallery 
        image={ book.image } 
        altText={ book.title } 
      />
      <Information 
        title={ book.title } 
        authors={ book.authors } 
        description={ book.description } 
      />
    </section>
  );
}
