import axios, { AxiosError } from 'axios';
import { config } from '@/config';
import { User } from '@/interfaces';

interface Response {
  data: {
    user: User;
    tokens: {
      refresh_token: string;
      access_token: string;
    };
  }
}

export const checkRefreshToken = async (refreshToken: string) => {
  const { BASE_API_URL } = config;

  try {
    const { data } = await axios.post<Response>(`${BASE_API_URL}/auth/refresh`, null, {
      headers: {
        Authorization: `Bearer ${refreshToken}`
      },
      withCredentials: true
    });

    return { 
      data: { 
        user: data.data.user, 
        tokens: data.data.tokens 
      } 
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error('Failed to refresh access token');
  }
};
