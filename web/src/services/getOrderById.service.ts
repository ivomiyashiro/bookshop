import axios, { AxiosError } from 'axios';
import { config } from '@/config';
import { Order } from '@/interfaces';

interface ApiBookResponse {
  data: {
    order: Order;
  };
}

export const getOrderById = async (id: number, accessToken: string): Promise<{ order: Order }> => {
  const { BASE_API_URL } = config;

  try {
    const { data } = await axios.get<ApiBookResponse>(`${BASE_API_URL}/storefront/orders/${id}`, {
      headers: {
        Authorization: `Bearer ${ accessToken }`
      }
    });
    const { order } = data.data;
    
    return { order };
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error(`Failed to fetch order # ${ id }`);
  }
};
