import axios, { AxiosError } from 'axios';
import { config } from '@/config';
import { CartItem } from '@/contexts/cart';

export const createPayment = async (items: CartItem[]) => {
  const { BASE_API_URL } = config;
  axios.defaults.withCredentials = true;

  try {
    const { data } = await axios.post(`${BASE_API_URL}/payments`, {      
      data: {
        items: items.map(({ id, title, image, description, quantity, price }) => ({
          id: id,
          title: title,
          currency_id: 'ARS',
          picture_url: image,
          description: description,
          quantity: quantity,
          unit_price: price
        })),
      },
    });
    
    return { data };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.request.status);
      throw new Error(error.response?.data.message);
    }

    throw new Error('Failed to create payment');
  }
};
