import type { Metadata } from 'next';
import { getBookBySlug } from '@/services';

export async function generateMetadata({ params }: {
  params: { slug: string }
}): Promise<Metadata> {
  const { slug } = params;
  const { book } = await getBookBySlug(slug);

  return {
    title: {
      default: 'Book title',
      absolute: book.title + ' | Bookshop'
    },
    description: book.description,
  };
}

export default function BookPageLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      { children }
    </>
  );
}
