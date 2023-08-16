import { Header, Footer } from '@/components';

export default function StorefrontLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Header />
      <main className="px-4 lg:px-6 my-10 min-h-[calc(100vh-162px)] max-w-[1340px] mx-auto">
        { children }
      </main>
      <Footer />
    </>
  );
}


