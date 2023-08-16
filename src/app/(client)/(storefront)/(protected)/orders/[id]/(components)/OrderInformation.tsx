import { OrderStatus } from '@/interfaces';
import { transformDate } from '@/utils';
import { Chip } from '@/components';

interface Props {
  id: number;
  status: OrderStatus;
  createdAt: Date;
}

export const OrderInformation = ({ id, status, createdAt }: Props) => {
  return (
    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6">
      <h1 className="font-bold text-lg tracking-wide">ORDER #<span>{ id }</span></h1>
      <div className="mt-4">
        <h2 className="text font-semibold mb-1 text-gray-400 text-sm">STATUS</h2>
        <Chip color={ status === 'PAID' ? 'GREEN' : 'RED' }>
          <span className="capitalize">
            { status.toLocaleLowerCase() }
          </span>
        </Chip>
      </div>
      <div className="mt-4">
        <h2 className="text font-semibold mb-1 text-gray-400 text-sm">CREATED AT</h2>
        <span className="capitalize text-sm">
          { transformDate(createdAt.toString()) }
        </span>
      </div>
    </div>
  );
};
