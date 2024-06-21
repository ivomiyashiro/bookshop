import axios, { AxiosError } from 'axios';
import { config } from '@/config';
import { Book } from '@/interfaces';

interface ApiBookResponse {
  data: {
    book: Book;
  };
}

export const getBookById = async (id: number, fields: string[]): Promise<{ book: Book }> => {
  const { BASE_API_URL } = config;

  try {
    const { data } = await axios.get<ApiBookResponse>(`${BASE_API_URL}/storefront/books/${id}`, {
      params: {
        fields: fields.join()
      }
    });
    const { book } = data.data;
    
    return { book };
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error(`Failed to fetch book ${ id }`);
  }
};
