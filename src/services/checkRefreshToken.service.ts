import axios, { AxiosError } from 'axios';
import { config } from '@/config';

interface Response {
  data: {
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
      }
    });

    return { data: { tokens: data.data.tokens }  };
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error('Failed to refresh access token');
  }
};
