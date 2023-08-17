import { Metadata } from 'next';
import { BookOpenIcon } from '@heroicons/react/24/solid';

import { Button, GithubLogo } from '@/components';

export const metadata: Metadata = {
  title: 'Home | No-Bugs Books',
  description: 'Here you will find our list of books.',
};

export default async function Home() {
  return (
    <div className="flex flex-col items-center md:items-start text-center md:text-left py-24 ld:py-32">
      <h1 className="text-6xl lg:text-7xl font-bold max-w-[750px]" >
        <span className="text-3xl text-gray-400">
        WELCOME TO 
        </span>
        <br /> 
        <span>NO-BUGS BOOKS! </span>
      </h1>
      <p className="lg:text-lg mt-6 max-w-[700px] text-gray-400">
        Experience a new era of online shopping with us.
        Immerse yourself in a world of curated reads, brought to life by the synergy of <span className="text-white font-semibold"> Next 13, NestJS, and TailwindCSS. </span> 
        Your literary journey begins here.
      </p>
      <div className="flex gap-3 mt-10">
        <Button 
          type="link" 
          href="/books" 
          style="PRIMARY"
          height="h-[45px]"
          width="w-[175px]"
          className="gap-2"
        >
          <BookOpenIcon width={ 22 } />
          <span className="font-semibold">SHOP BOOKS</span>
        </Button>
        <a
          href="https://github.com/ivomiyashiro/bookshop" 
          target="_blank"
          className="flex gap-2 items-center justify-center text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-pink-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 cursor-pointer transition disabled:bg-pink-200 disabled:text-gray-400 disabled:hover:bg-gray-100 disabled:cursor-not-allowed w-[175px]"
        >
          <GithubLogo width={ 18 } />
          <span className="font-semibold">SEE DOCS</span>
        </a>
      </div>
    </div>
  );
}
