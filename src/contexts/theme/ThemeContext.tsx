'use client';
import { createContext } from 'react';

export interface ContextProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}


const ThemeContext = createContext({} as ContextProps);

export default ThemeContext;
