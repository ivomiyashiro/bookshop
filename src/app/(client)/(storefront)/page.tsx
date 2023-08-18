import { Metadata } from 'next';
import { Button, GithubLogo } from '@/components';

export const metadata: Metadata = {
  title: 'Home | No-Bugs Books',
  description: 'Here you will find our list of books.',
};

export default async function Home() {
  return (
    <div className="flex flex-col py-24 md:justify-center md:text-center ld:py-32">
      <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold xl:px-36 tracking-tight !leading-tight" >
        Unlocking Code Mastery: Your Hub for Programming Books
      </h1>
      <p className="lg:text-lg mt-6 text-gray-500 dark:text-gray-400 xl:px-36">
        Experience a new era of online shopping with us.
        Immerse yourself in a world of curated reads, brought to life by the synergy of <span className="text-gray-900 dark:text-white font-semibold"> Next 13, NestJS, and TailwindCSS. </span> 
        Your literary journey begins here.
      </p>
      <div className="flex flex-col md:flex-row gap-4 mt-10 md:justify-center">
        <Button 
          type="link" 
          href="/books" 
          style="PRIMARY"
          className="gap-2 w-full md:w-auto px-8 py-3 lg:py-4"
        >
          <span className="md:text-[1.15em]">Shop Books</span>
        </Button>
        <a
          href="https://github.com/ivomiyashiro/bookshop" 
          target="_blank"
          className="flex gap-2 px-8 w-full py-3 lg:py-4 md:w-auto items-center justify-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-pink-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer transition disabled:bg-pink-200 disabled:text-gray-400 disabled:hover:bg-gray-100 disabled:cursor-not-allowed"
        >
          <GithubLogo width={ 18 } />
          <span className="md:text-[1.15em]">Explore the Docs</span>
        </a>
      </div>
    </div>
  );
}
