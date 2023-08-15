import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { HomeIcon } from '@heroicons/react/24/solid';

import { 
  DEFAULT_ORDERS_ORDER_BY, 
  DEFAULT_ORDERS_SORT_BY, 
  DEFAULT_ORDERS_LIMIT, 
  DEFAULT_ORDERS_OFFSET, 
  DEFAULT_ORDERS_PAGE 
} from '@/constants';
import { getUserOrders } from '@/services';

import { HeaderCols, BodyRow, Pagination } from './(sections)';
import { Breadcrumbs, Table, TableBody, TableHeader, TableRow } from '@/components';

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
    <>
      <section className="flex items-center">
        <HomeIcon width={ 18 } height={ 18 } className="hidden md:flex text-gray-500" />
        <Breadcrumbs items={ [
          { label: 'Home', link: '/' },
          { label: 'Orders', link: '/orders' },
        ] } />
      </section>
      <section className="mt-6">
        <Table>
          <TableHeader>
            <TableRow>
              <HeaderCols />
            </TableRow>
          </TableHeader>
          <TableBody>
            { orders.map(order => ( 
              <BodyRow key={ order.id } order={ order } /> 
            )) }
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
    </>
  );
}
