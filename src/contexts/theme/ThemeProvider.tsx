'use client';
import { useEffect, useState } from 'react';
import { ThemeContext } from './';

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>(checkTheme);

  const themeToRemove = theme === 'dark' ? 'light' : 'dark';

  useEffect(() => {
    const root = window.document.documentElement;

    root.classList.remove(themeToRemove);
    root.classList.add(theme);
  
    localStorage.setItem('theme', theme);

  }, [theme, themeToRemove]);

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

const checkTheme =() => {
  const localStorageTheme = localStorage.getItem('theme');

  if (!localStorageTheme) {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  if (localStorageTheme === 'dark') {
    return 'dark';
  } 

  return 'light';
};

export default ThemeProvider;
