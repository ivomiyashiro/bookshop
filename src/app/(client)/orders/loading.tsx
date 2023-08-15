import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components';
import { HeaderCols } from './(sections)';

export default function Loading() {
  return (
    <>
      <Table>
        <TableHeader>
          <TableRow>
            <HeaderCols />
          </TableRow>
        </TableHeader>
        <TableBody>
          { Array(12).fill(null).map((_value, i) => ( 
            <TableRow key={ i } className="animate-pulse bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <TableCell>
                <div className="animate-skeleton-loading rounded-lg h-6 dark:bg-gray-700 bg-gray-200"></div>
              </TableCell>
              <TableCell>
                <div className="animate-skeleton-loading rounded-lg h-6 dark:bg-gray-700 bg-gray-200"></div>
              </TableCell>
              <TableCell>
                <div className="animate-skeleton-loading rounded-lg h-6 dark:bg-gray-700 bg-gray-200"></div>
              </TableCell>
              <TableCell>
                <div className="animate-skeleton-loading rounded-lg h-6 dark:bg-gray-700 bg-gray-200"></div>
              </TableCell>
              <TableCell>
                <div className="animate-skeleton-loading rounded-lg h-6 dark:bg-gray-700 bg-gray-200"></div>
              </TableCell>
              <TableCell>
                <div className="animate-skeleton-loading rounded-lg h-6 dark:bg-gray-700 bg-gray-200"></div>
              </TableCell>
            </TableRow>
          )) }
        </TableBody>
      </Table>
      <div className="flex items-center text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 rounded-lg justify-between mt-4 px-4 py-2 h-[42px] animate-pulse"></div>
    </>
  );
}
