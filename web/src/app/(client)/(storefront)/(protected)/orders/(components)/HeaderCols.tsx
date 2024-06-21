import { TableHead } from '@/components';

export const HeaderCols = () => {
  return (
    <>
      <TableHead className="whitespace-nowrap">
        Order
      </TableHead>
      <TableHead className="whitespace-nowrap">
        Date
      </TableHead>
      <TableHead className="whitespace-nowrap">
        Items
      </TableHead>
      <TableHead className="whitespace-nowrap">
        Total Price
      </TableHead>
      <TableHead className="whitespace-nowrap">
        Status
      </TableHead>
      <TableHead className="whitespace-nowrap">
        Actions
      </TableHead>
    </>
  );
};
