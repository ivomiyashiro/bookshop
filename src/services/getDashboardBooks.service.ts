import axios, { AxiosError } from 'axios';
import { GetStorefrontBooksParams, Book } from '@/interfaces';
import { config } from '@/config';

interface GetStorefrontBookData {
  books: Book[];
  pagination: {
    count: number;
    totalCount: number;
    page: number;
    totalPages: number;
  }
}

export const getDashboardBooks = async({ 
  limit = 12, 
  page = 1, 
  orderBy = 'createdAt', 
  sortBy = 'desc', 
  languages,
  authors,
  price,
  searchText,
}: GetStorefrontBooksParams,
at: string
): Promise<GetStorefrontBookData> => {
  const { BASE_API_URL } = config;

  try {
    const { data } = await axios.get(`${BASE_API_URL}/admin/books`, {
      params: {
        limit,
        page,
        orderBy,
        sortBy,
        languages,
        authors,
        price,
        searchText,
      },
      headers: {
        Authorization: `Bearer ${ at }`
      }
    });

    const { books, pagination } = data.data;

    return {
      books,
      pagination,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error('Failed to fetch books');
  }
};
