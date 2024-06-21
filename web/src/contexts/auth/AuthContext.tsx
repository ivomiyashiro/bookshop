'use client';
import { createContext } from 'react';
import { ContextProps } from './types';

const AuthContext = createContext({} as ContextProps);

export default AuthContext;
