import type { Metadata } from 'next';
import Image from 'next/image';

import { NavButtons, AuthContainer } from './(components)';
import { MainLogo } from '@/components';

export const metadata: Metadata = {
  description: 'Authenticate and unlock special functionalities.',
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main className="flex justify-center h-screen">
      <section className="relative w-[85%] hidden lg:flex h-full bg-gray-200 dark:bg-gray-700 bg-cover bg-center items-center lg:p-[2em] xl:p-[4em]" >
        <Image 
          src="/library.webp"
          alt="Library"
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 300px) 50vw"
          style={ {
            objectFit: 'cover'
          } }
          fill
        />
      </section>
      <section className="w-full pt-[5rem] px-4 lg:pt-[7rem] flex justify-center">
        <AuthContainer>
          <div className="w-[375px]">
            <div className="flex flex-col items-center justify-center gap-4">
              <MainLogo isLink />
            </div>
            <NavButtons />
            { children }
          </div>
        </AuthContainer>
      </section>
    </main>
  );
}
