import { User } from '@/interfaces';

export interface ContextProps {
  user: User | null;
  loading: boolean;

  // Methods
  login: ({ email , password }: { 
    email: string; 
    password: string 
  }) => Promise<User | undefined>;
  signup: ({ name, email, password }: {
    name: string;
    email: string;
    password: string;
  }) => Promise<User | undefined>;
  logout: () => Promise<void>;
}

export interface AuthState {
  user: User | null;
  loading: boolean;
}

export type AuthActionType = 
| { type: '[AUTH] - Login', payload: User }
| { type: '[AUTH] - Signout' }
| { type: '[AUTH] - Loading', payload: boolean }
