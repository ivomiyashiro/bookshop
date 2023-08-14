import { Metadata } from 'next';
import { cookies } from 'next/headers';

import { 
  DEFAULT_ORDERS_ORDER_BY, 
  DEFAULT_ORDERS_SORT_BY, 
  DEFAULT_ORDERS_LIMIT, 
  DEFAULT_ORDERS_OFFSET, 
  DEFAULT_ORDERS_PAGE 
} from '@/constants';
import { getUserOrders } from '@/services';

import { HeaderCols, BodyRow, Pagination } from './(sections)';
import { Table, TableBody, TableHeader, TableRow } from '@/components';

export const metadata: Metadata = {
  title: 'My Orders | Bookshop',
  description: 'Here you will find your list of orders.',
};

export default async function Orders({ searchParams }: {
  searchParams: any;
}) {
  const { 
    limit = DEFAULT_ORDERS_LIMIT,
    offset = DEFAULT_ORDERS_OFFSET,
    page = DEFAULT_ORDERS_PAGE,
    sortBy = DEFAULT_ORDERS_SORT_BY, 
    orderBy = DEFAULT_ORDERS_ORDER_BY, 
    price: priceParams, 
    status, 
    searchText, 
  } = searchParams;
  const params = { price: priceParams, status, searchText, sortBy, orderBy, page, limit, offset };
  const at = cookies().get('ACCESS_TOKEN')?.value as string;

  const { orders, pagination } = await getUserOrders(params, at);

  return (
    <section>
      <h1 className="text-5xl font-bold mb-6">
        MY ORDERS
      </h1>
      <Table>
        <TableHeader>
          <TableRow>
            <HeaderCols />
          </TableRow>
        </TableHeader>
        <TableBody>
          { false
            ? ( new Array(12).fill(null).map((_row, i) => ( 
              'hola'
            )) )
            : ( orders.map(order => ( 
              <BodyRow key={ order.id } order={ order } /> 
            )) ) }
        </TableBody>
      </Table>
      <Pagination 
        name="Orders"
        count={ pagination.totalCount }
        currentPage={ pagination.page }
        totalPages={ pagination.totalPages }
        page={ pagination.page }
      />
    </section>
  );
}
