import { Metadata } from 'next';
import { AsideMenu, MobileMenu, AuthContainer } from './(components)';

export const metadata: Metadata = {
  title: 'Dashboard | No-Bugs Books',
  description: 'Find all the admin features such as creating, deleating and updating books information.',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AuthContainer>
      <div className="flex">
        <AsideMenu />
        <MobileMenu />
        <main className="max-w-[1240px] md:mx-12 lg:mx-20 2xl:mx-auto w-full pt-5 px-4">
          { children }
        </main>
      </div>
    </AuthContainer>
  );
}
