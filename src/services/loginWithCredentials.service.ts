import axios, { AxiosError } from 'axios';
import { config } from '@/config';
import { User } from '@/interfaces';

interface Props {
  email: string;
  password: string;
}

interface ServiceReturn {
  user: User;
  tokens: {
    refresh_token: string;
    access_token: string;
  }
}

interface ApiLoginResponse {
  data: ServiceReturn;
}

export const loginWithCredentials = async ({ email, password }: Props): Promise<ServiceReturn> => {
  const { BASE_API_URL } = config;

  try {
    const { data } = await axios.post<ApiLoginResponse>(`${BASE_API_URL}/auth/local/login`, {
      email,
      password
    });

    return { 
      user: data.data.user, 
      tokens: data.data.tokens 
    };

  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error('Failed to login with credentials');
  }
};
