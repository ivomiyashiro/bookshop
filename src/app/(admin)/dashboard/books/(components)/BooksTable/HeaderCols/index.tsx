import { TableHead } from '@/components';

const HeaderCols = () => {
  return (
    <>
      <TableHead className="whitespace-nowrap">
        Image
      </TableHead>
      <TableHead className="whitespace-nowrap">
        Title
      </TableHead>
      <TableHead className="whitespace-nowrap">
        Stock
      </TableHead>
      <TableHead className="whitespace-nowrap">
        Price
      </TableHead>
      <TableHead className="whitespace-nowrap">
        Visibility
      </TableHead>
      <TableHead className="whitespace-nowrap">
        Actions
      </TableHead>
    </>
  );
};

export default HeaderCols;
