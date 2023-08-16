import Link from 'next/link';

import { Order } from '@/interfaces';
import { transformDate } from '@/utils';

import { Button, TableCell, TableRow, Chip } from '@/components';

interface Props { order: Order; }

export const BodyRow = ({ order }: Props) => {
  return (
    <TableRow key={ order.id } className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <TableCell>
        <Link href={ `/orders/${ order.id }` } className="font-bold text-gray-300 hover:underline">
          # { order.id }
        </Link>
      </TableCell>
      <TableCell>
        <p className="whitespace-nowrap"> { transformDate(order.createdAt.toString()) } </p>
      </TableCell>
      <TableCell>
        { order.orderItems.length }
      </TableCell>
      <TableCell>
        <div>
          { order.totalPrice } $
        </div>
      </TableCell>
      <TableCell>
        <Chip color={ order.status === 'PAID' ? 'GREEN' : 'RED' }>
          <span className="capitalize">
            { order.status.toLocaleLowerCase() }
          </span>
        </Chip>
      </TableCell>
      <TableCell>
        <div className="inline-flex gap-4">
          <Button
            style="ALT"
            type="link"
            href={ `/orders/${ order.id }` }
            width="w-[110px]"
            height="h-[30px]"
            className="!rounded"
          >
            See Details
          </Button>
        </div>
      </TableCell>
    </TableRow>
  );
};
