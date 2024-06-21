import axios, { AxiosError } from 'axios';
import { config } from '@/config';
import { CartItem } from '@/contexts/cart';

interface ApiResponse {
  data: {
    payment_url: string;
  }
}

export const createPayment = async (items: CartItem[], accessToken: string) => {
  const { BASE_API_URL } = config;

  try {
    const { data } = await axios.post<ApiResponse>(`${BASE_API_URL}/payments`, {      
      items: items.map(({ id, title, image, description, quantity, price }) => ({
        id: id,
        title: title,
        currency_id: 'ARS',
        picture_url: image,
        description: description,
        quantity: quantity,
        unit_price: price
      })),
    }, {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    
    return { url: data.data.payment_url };
  } catch (error) {
    if (error instanceof AxiosError) {
      console.log(error.request.status);
      throw new Error(error.response?.data.message);
    }

    throw new Error('Failed to create payment');
  }
};
