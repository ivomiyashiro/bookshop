import axios, { AxiosError } from 'axios';
import { config } from '@/config';
import { User } from '@/interfaces';

export const loginWithCredentials = async (email: string, password: string): Promise<User | null> => {
  const { BASE_API_URL } = config;

  try {
    const { data } = await axios.post(`${BASE_API_URL}/auth/local/login`, {
      email,
      password
    }, {
      withCredentials: true
    });
    console.log(data);
    return { data };

  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error('Failed to login with credentials');
  }
};
