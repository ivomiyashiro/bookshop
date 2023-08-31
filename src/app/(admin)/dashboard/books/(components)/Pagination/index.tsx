'use client';
import { useRouter } from 'next/navigation';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/solid';

interface Props {
  count: number;
  totalPages: number;
  currentPage: number;
  page: number;
  totalCount: number;
}

const Pagination = ({
  totalPages,
  currentPage,
  page,
  count,
  totalCount,
}: Props) => {
  const router = useRouter();
  const onNext = () => router.push(`/dashboard/books?page=${currentPage + 1}`);
  const onPrevious = () => router.push(`/dashboard/books?page=${currentPage - 1}`);
  const onPageChange = (page: number) => router.push(`/dashboard/books?page=${ page }`);

  return (
    <div className="flex items-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-lg justify-between mt-6 px-4 py-2 h-[42px] shadow-md">
      <p className="font-semibold text-sm">
        { count } of { totalCount } Books
      </p>
      { (totalPages !== 1 && totalPages > 0)
        &&
        <ul className="flex items-center gap-3">
          <li onClick={ onPrevious } className={ `cursor-pointer ${ currentPage !== 1 ? '' : 'invisible' }` }>
            <ChevronLeftIcon width={ 20 } height={ 20 } />
          </li>
          { Array(totalPages).fill(null).map((_pageNumber, i: number) => {
            return (
              <li 
                key={ i } 
                className={ `cursor-pointer w-7 h-7 flex items-center justify-center rounded ${page === (i + 1) ? 'bg-pink-600 text-white' : 'bg-gray-800'}` }
                onClick={ () => onPageChange(Number(i + 1)) }
              >
                <span className="text-sm">{ i + 1 }</span>
              </li>
            );
          }) }
          <li onClick={ onNext } className={ `cursor-pointer ${ currentPage !== totalPages ? '' : 'invisible' }` }>
            <ChevronRightIcon width={ 20 } height={ 20 } />
          </li>
        </ul> }
    </div>
  );
};

export default Pagination;
