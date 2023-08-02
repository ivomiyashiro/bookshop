import axios, { AxiosError } from 'axios';
import { config } from '@/config';
import { Book } from '@/interfaces';

export const getBookBySlug = async (slug: string): Promise<{ book: Book }> => {
  const { BASE_API_URL } = config;

  try {
    const { data } = await axios.get(`${BASE_API_URL}/storefront/books/slug/${slug}`);
    const { book } = data.data;
    
    return {
      book
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error(`Failed to fetch book ${ slug }`);
  }
};
