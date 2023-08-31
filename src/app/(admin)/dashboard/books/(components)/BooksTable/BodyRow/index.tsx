import Link from 'next/link';
import Image from 'next/image';

import { Book } from '@/interfaces';

import { Button, TableCell, TableRow, Chip, DefaultImage } from '@/components';

interface Props { book: Book; }

const BodyRow = ({ book }: Props) => {
  return (
    <TableRow className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <TableCell>
        <Link href={ `/dashboard/books/${ book.id }` } className="block relative h-[60px] w-[45px] overflow-hidden font-bold text-gray-900 dark:text-gray-300 hover:underline">
          { book.image 
            ? (
              <Image 
                src={ book.image }
                alt={ book.title }
                style={ {
                  borderRadius: '0.25em'
                } }
                fill
              />
            )
            : (
              <div className="bg-gray-700 w-full h-full rounded">
                <DefaultImage className="!w-[20px]" /> 
              </div>
            )
          }
        </Link>
      </TableCell>
      <TableCell>
        <p>{ book.title }</p>
      </TableCell>
      <TableCell>
        { book.stock }
      </TableCell>
      <TableCell>
        <div>
          { book.price } $
        </div>
      </TableCell>
      <TableCell>
        <Chip color={ book.status && book.status === 'VISIBLE' ? 'GREEN' : 'RED' }>
          <span className="capitalize">
            { book.status?.toLocaleLowerCase() }
          </span>
        </Chip>
      </TableCell>
      <TableCell>
        <div className="inline-flex gap-4">
          <Button
            style="ALT"
            type="link"
            href={ `/dashboard/books/${ book.slug }` }
            width="w-[110px]"
            height="h-[30px]"
            className="!rounded !text-gray-500 dark:!text-gray-400"
          >
            See Details
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};

export default BodyRow;
