import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signup | Bookshop'
};

export default function SignupLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <> { children } </>
  );
}

