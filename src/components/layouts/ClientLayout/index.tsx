import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';

interface Props {
  children: ReactNode;
}

const ClientLayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="px-4 lg:px-6 my-10">
        { children }
      </main>
      <Footer />
    </>
  );
};

export default ClientLayout;
