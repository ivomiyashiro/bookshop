import type { Metadata } from 'next';

import { AuthContainer, MainLogo } from '@/components';
import { NavButtons } from './(sections)/NavButtons';

export const metadata: Metadata = {
  description: 'Authenticate and unlock special functionalities.',
};

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthContainer>
      <main className="flex justify-center h-screen">
        <section 
          className="w-[85%] hidden lg:flex h-full bg-red-500 bg-cover bg-center items-center lg:p-[2em] xl:p-[4em]" 
          style={ {
            backgroundImage: 'url(\'https://images.unsplash.com/photo-1580537659466-0a9bfa916a54?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80\')'
          } }
        >
        </section>
        <section className="w-full pt-[5rem] px-4 lg:pt-[7rem] flex justify-center">
          <div className="w-[375px]">
            <div className="flex flex-col items-center justify-center gap-4">
              <MainLogo size={ 50 } isLink />
            </div>
            <NavButtons />
            { children }
          </div>
        </section>
      </main>
    </AuthContainer>
  );
}

