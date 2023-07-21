import { Searchbar } from './Searchbar';

interface Props {
  searchText?: string;
}

export const Hero = ({ searchText }: Props) => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-28 max-w-[800px] mx-auto">
      <h1 className="font-extrabold text-7xl lg:text-8xl tracking-tighter leading-[1em]">THIS IS BOOKSHOP</h1>
      <p className="text-lg lg:text-xl my-6 text-gray-400">A books e-commerce project crafted with Next.js and TailwindCSS in the front, and Nest.js and Prisma in the back.</p>
      <div className="mt-6 w-full">
        <Searchbar searchText={ searchText } />
      </div>
    </section>
  );
};
