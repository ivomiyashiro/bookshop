import axios, { AxiosError } from 'axios';
import { config } from '@/config';
import { User } from '@/interfaces';

interface Props {
  name: string;
  email: string;
  password: string;
}

interface ServiceReturn {
  user: User;
}

interface ApiLoginResponse {
  data: ServiceReturn;
}

export const signupWithCredentials = async ({
  name,
  email,
  password,
}: Props): Promise<ServiceReturn> => {
  const { BASE_API_URL } = config;

  try {
    const { data } = await axios.post<ApiLoginResponse>(`${BASE_API_URL}/auth/local/signup`, {
      name,
      email,
      password
    });

    return { 
      user: data.data.user,
    };
  } catch (error) {
    if (error instanceof AxiosError) {
      throw new Error(error.response?.data.message);
    }

    throw new Error('Failed to signup with credentials');
  }
};

