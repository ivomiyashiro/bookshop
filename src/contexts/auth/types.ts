import { User } from '@/interfaces';

export interface ContextProps {
  user: User | null;
  login: (email: string, password: string) => Promise<User | null>;
  signup: (name: string, email: string, password: string) => Promise<{
      user: User | null;
      error?: string;
  } | {
      user: null;
      error: string;
  }>
  signout: () => void;
}

export interface AuthState {
  user: User | null;
}

export type AuthActionType = 
| { type: '[AUTH] - Login', payload: User }
| { type: '[AUTH] - Signout' }
