import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Signup | No-Bugs Book'
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

