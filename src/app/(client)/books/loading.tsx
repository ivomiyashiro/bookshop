import { ProductCardSkeleton } from '@/components';

export default function Loading() {
  return (
    <>
      <div className="grid grid-cols-2 md:flex gap-2 md:gap-4 mb-10 w-full h-[54px] animate-pulse">
        <div className="flex gap-2 w-full h-full rounded-lg dark:bg-gray-700 bg-gray-200">
        </div>
        <div className="flex gap-2 md:gap-4 h-full w-full">
          <div className="h-full w-full rounded-lg dark:bg-gray-700 bg-gray-200">
          </div>
          <div className="h-full w-full rounded-lg dark:bg-gray-700 bg-gray-200">
          </div>
        </div>
      </div>
      <div className={ `grid ${ 'GRID' !== 'GRID' ? 'grid-cols-2' : 'grid-cols-1' } md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 md:gap-4 gap-y-6 overflow-hidden` }>
        { new Array(10).fill(null).map((_val, i) => <ProductCardSkeleton key={ i } /> )  }
      </div>
    </>
  );
}
