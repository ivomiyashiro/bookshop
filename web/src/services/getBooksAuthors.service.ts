import axios, { AxiosError } from 'axios';
import { Author } from '@/interfaces';
import { config } from '@/config';

interface GetBookAuthorsData {
  authors:    Author[];
  count:      number;
  totalCount: number;
}

export const getBooksAuthors = async(): Promise<GetBookAuthorsData> => {
  const { BASE_API_URL } = config;
  
  try {
    const { data } = await axios.get(`${BASE_API_URL}/storefront/books/authors`);

    const { authors, count, totalCount } = data.data;

    return {
      authors,
      count,
      totalCount
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error('Failed to fetch books authors');
  }
};
