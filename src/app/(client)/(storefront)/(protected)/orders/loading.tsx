import { HomeIcon } from '@heroicons/react/24/solid';

import { HeaderCols } from './(sections)';
import { Breadcrumbs, Table, TableBody, TableCell, TableHeader, TableRow } from '@/components';

export default function Loading() {
  return (
    <>
      <div className="flex items-center">
        <HomeIcon width={ 18 } height={ 18 } className="hidden md:flex text-gray-500" />
        <Breadcrumbs items={ [
          { label: 'Home', link: '/' },
          { label: 'Orders', link: '/orders' }
        ] } />
      </div>
      <Table className="mt-6">
        <TableHeader>
          <TableRow>
            <HeaderCols />
          </TableRow>
        </TableHeader>
        <TableBody>
          { Array(12).fill(null).map((_value, i) => ( 
            <TableRow key={ i } className="animate-pulse bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <TableCell>
                <div className="rounded-lg h-6 dark:bg-gray-700 bg-gray-200"></div>
              </TableCell>
              <TableCell>
                <div className="rounded-lg h-6 dark:bg-gray-700 bg-gray-200"></div>
              </TableCell>
              <TableCell>
                <div className="rounded-lg h-6 dark:bg-gray-700 bg-gray-200"></div>
              </TableCell>
              <TableCell>
                <div className="rounded-lg h-6 dark:bg-gray-700 bg-gray-200"></div>
              </TableCell>
              <TableCell>
                <div className="rounded-lg h-6 dark:bg-gray-700 bg-gray-200"></div>
              </TableCell>
              <TableCell>
                <div className="rounded-lg h-6 dark:bg-gray-700 bg-gray-200"></div>
              </TableCell>
            </TableRow>
          )) }
        </TableBody>
      </Table>
      <div className="flex items-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-lg justify-between mt-4 px-4 py-2 h-[42px] animate-pulse"></div>
    </>
  );
}
