import axios, { AxiosError } from 'axios';
import { config } from '@/config';



export const getBooksMinMaxPrice = async () => {
  const { BASE_API_URL } = config;

  try {
    const { data } = await axios.get(`${BASE_API_URL}/storefront/books/price`);

    const { price } = data.data;

    return { price };
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error('Failed to fetch books');
  }
};
