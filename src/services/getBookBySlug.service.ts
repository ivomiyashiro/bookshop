import { config } from '@/config';
import { Book } from '@/interfaces';

export const getBookBySlug = async (slug: string): Promise<{ book: Book }> => {
  const { BASE_API_URL } = config;

  try {
    const res = await fetch(`${BASE_API_URL}/storefront/books/slug/${slug}`, {
      method: 'GET',
      next: {
        revalidate: 86400
      }
    });

    const { data } = await res.json();

    return {
      book: data.book
    };
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message);
    }

    throw new Error(`Failed to fetch book ${ slug }`);
  }
};
