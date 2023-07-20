import axios, { AxiosError } from 'axios';
import { GetStorefrontBooksParams, Book } from '@/interfaces';

interface GetStorefrontBookData {
  books:      Book[];
  count:      number;
  totalCount: number;
}

export const getStorefrontBooks = async({ 
  limit = 10, 
  offset = 0, 
  orderBy = 'createdAt', 
  sortBy = 'desc', 
  filters = undefined 
}: GetStorefrontBooksParams): Promise<GetStorefrontBookData> => {
  const BASE_API_URL = process.env.BASE_API_URL as string;

  try {
    const { data } = await axios.get(`${BASE_API_URL}/storefront/books`, {
      params: {
        limit,
        offset,
        orderBy,
        sortBy,
        filters
      }
    });

    const { books, count, totalCount } = data.data;

    return {
      books,
      count,
      totalCount
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.message);  
    }

    throw new Error('Failed to fetch storefront books');
  }
};
