import { Table, TableBody, TableHeader, TableRow } from '@/components';

import { Book } from '@/interfaces';

import HeaderCols from './HeaderCols';
import BodyRow from './BodyRow';

interface Props {
  books: Book[];
}

const BooksTable = ({ books }: Props) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <HeaderCols />
        </TableRow>
      </TableHeader>
      <TableBody>
        { books.map(book => (
          <BodyRow key={ book.id } book={ book } />
        )) }
      </TableBody>
    </Table>
  );
};

export default BooksTable;
