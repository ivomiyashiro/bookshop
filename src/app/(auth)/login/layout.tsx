import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | Bookshop'
};

export default function LoginLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      { children }
    </>
  );
}
