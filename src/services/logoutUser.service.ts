import axios, { AxiosError } from 'axios';
import { config } from '@/config';

export const logoutUser = async (accessToken: string) => {
  const { BASE_API_URL } = config;

  try {
    const { data } = await axios.post(`${BASE_API_URL}/auth/logout`, null, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    
    return { data };

  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error('Failed to login with credentials');
  }
};
