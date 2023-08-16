import { Breadcrumbs, DefaultImage } from '@/components';

export default function Loading() {
  return (
    <>
      <Breadcrumbs items={ [
        { label: 'Home', link: '/' },
        { label: 'Orders', link: '/orders' },
        { label: '# 0', link: '/orders' }
      ] } />
      <section className="grid md:grid-cols-[1fr,_350px] gap-5 items-start mt-6">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h2 className="text font-semibold">ITEMS</h2>
          <ul className="flex flex-col gap-6 my-5">
            { Array(2).fill(null).map((_value, i) => (
              <li key={ i } className="flex animate-pulse">
                <div className="relative">
                  <div className="relative block w-[8rem] max-h-[10rem] min-h-[10rem] lg:w-[10rem] lg:max-h-[12.5rem] lg:min-h-[12.5rem] mr-4 rounded-lg overflow-hidden dark:bg-gray-700 bg-gray-200">
                    <DefaultImage className="w-10 h-10"/>
                  </div>
                  <span className="absolute -top-1.5 -left-1.5 rounded-full w-5 h-5 text-xs bg-gray-600 flex items-center justify-center">{ }</span>
                </div>
                <div className="w-full">
                  <h3 className="lg:text-lg rounded-lg h-6 w-full dark:bg-gray-700 bg-gray-200"></h3>
                  <p className="text-gray-400 text-sm my-3 w-[100px] rounded-lg h-3 dark:bg-gray-700 bg-gray-200">
                  </p>
                  <p className="font-semibold rounded-lg h-3 w-[50px] dark:bg-gray-700 bg-gray-200"></p>
                </div>
              </li>
            )) }
          </ul>
          <div className="flex flex-col gap-2 pt-4 border-t border-gray-600">
            <div className="flex items-center justify-between font-bold">
              <p>Total Price: </p>
              <p className="animate-pulse rounded-lg h-6 w-[50px] dark:bg-gray-700 bg-gray-200">{ }</p>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
          <h1 className="font-bold text-lg tracking-wide animate-pulse rounded-lg h-6 w-[100px] dark:bg-gray-700 bg-gray-200"></h1>
          <div className="mt-4">
            <h2 className="text font-semibold mb-1 text-gray-400 text-sm">STATUS</h2>
            <p className="capitalize animate-pulse rounded-lg h-5 w-[50px] dark:bg-gray-700 bg-gray-200">
            </p>
          </div>
          <div className="mt-4">
            <h2 className="text font-semibold mb-1 text-gray-400 text-sm">CREATED AT</h2>
            <p className="capitalize text-sm animate-pulse rounded-lg h-5 w-[150px] dark:bg-gray-700 bg-gray-200">
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
