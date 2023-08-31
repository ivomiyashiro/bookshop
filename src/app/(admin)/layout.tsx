import { Metadata } from 'next';
import { AsideMenu, MobileMenu, AdminContainer } from './(components)';

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
    <AdminContainer>
      <div className="grid grid-cols-1 lg:grid-cols-[100px,1fr] xl:grid-cols-[270px,1fr]">
        <div>
          <AsideMenu />
          <MobileMenu />
        </div>
        <main className="max-w-[1440px] px-4 lg:px-12 xl:px-20 2xl:mx-auto w-full pt-5 ">
          { children }
        </main>
      </div>
    </AdminContainer>
  );
}
