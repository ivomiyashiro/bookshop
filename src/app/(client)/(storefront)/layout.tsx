import { Header, Footer } from '@/components';

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="px-4 lg:px-6 min-h-[calc(100vh-94px-20px)] py-8 md:py-12 h-full max-w-[1340px] mx-auto">
        { children }
      </main>
      <Footer />
    </>
  );
}


