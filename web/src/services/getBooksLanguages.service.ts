import axios, { AxiosError } from 'axios';
import { Languages } from '@/interfaces';
import { config } from '@/config';

interface GetBookLanguagesData {
  languages:  Languages[];
  count:      number;
  totalCount: number;
}

export const getBooksLanguages = async(): Promise<GetBookLanguagesData> => {
  const { BASE_API_URL } = config;
  
  try {
    const { data } = await axios.get(`${BASE_API_URL}/storefront/books/languages`);

    const { languages, count, totalCount } = data.data;

    return {
      languages,
      count,
      totalCount
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error('Failed to fetch books languages');
  }
};
