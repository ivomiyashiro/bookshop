import axios, { AxiosError } from 'axios';
import { GetStorefrontOrdersParams, Order } from '@/interfaces';
import { config } from '@/config';

interface GetStorefrontBookData {
  orders: Order[];
  pagination: {
    count: number;
    totalCount: number;
    page: number;
    totalPages: number;
  }
}

export const getUserOrders = async({ 
  limit,
  page,
  orderBy, 
  sortBy,
  searchText,
  status,
  price
}: GetStorefrontOrdersParams, 
accessToken: string
): Promise<GetStorefrontBookData> => {
  const { BASE_API_URL } = config;

  try {
    const { data } = await axios.get(`${BASE_API_URL}/storefront/orders`, {
      params: {
        limit,
        page,
        orderBy,
        sortBy,
        searchText,
        status,
        price,
      }, 
      headers: {
        Authorization: `Bearer ${ accessToken }`
      }
    });

    const { orders, pagination } = data.data;

    return {
      orders,
      pagination,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error('Failed to fetch books');
  }
};
