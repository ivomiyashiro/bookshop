import { Inter } from 'next/font/google';

import { AuthProvider } from '@/contexts/auth';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ inter.className }>
        <AuthProvider>
          { children }
        </AuthProvider>
      </body>
    </html>
  );
}
