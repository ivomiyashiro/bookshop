import { Inter } from 'next/font/google';

import { AuthProvider } from '@/contexts/auth';
import { ThemeProvider } from '@/contexts/theme';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <ThemeProvider>
        <body className={ 'text-gray-900 dark:bg-gray-900 dark:text-white' + ' ' + inter.className }>
          <AuthProvider>
            { children }
          </AuthProvider>
        </body>
      </ThemeProvider>
    </html>
  );
}
