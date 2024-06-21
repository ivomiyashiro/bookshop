import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login | No-Bugs Book'
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
