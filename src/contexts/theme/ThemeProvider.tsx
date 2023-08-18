'use client';
import { useEffect, useState } from 'react';
import { ThemeContext } from './';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>(
    () => {
      if (typeof window !== 'undefined') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }

      return 'dark';
    }
  );

  const colorTheme = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = window.document.documentElement;

      root.classList.remove(colorTheme);
      root.classList.add(theme);
  
      localStorage.setItem('theme', theme);
    }
  }, [theme, colorTheme]);

  const toggleTheme = () => setTheme(prev => {
    if (prev === 'dark') return 'light';

    return 'dark';
  });

  return (
    <ThemeContext.Provider value={ {
      theme,
      toggleTheme
      
    } }>
      { children }
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
