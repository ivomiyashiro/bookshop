import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { 
  DEFAULT_ORDERS_ORDER_BY, 
  DEFAULT_ORDERS_SORT_BY, 
  DEFAULT_ORDERS_LIMIT, 
  DEFAULT_ORDERS_OFFSET, 
  DEFAULT_ORDERS_PAGE 
} from '@/constants';
import { getUserOrders } from '@/services';

import { HeaderCols, BodyRow, Pagination } from './(components)';
import { Breadcrumbs, Table, TableBody, TableHeader, TableRow } from '@/components';


export const metadata: Metadata = {
  title: 'My Orders | No-Bugs Book',
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

  try {
    const { orders, pagination } = await getUserOrders(params, at);

    return (
      <>
        <Breadcrumbs items={ [
          { label: 'Home', link: '/' },
          { label: 'Orders', link: '/orders' },
        ] } />
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
          { orders.length === 0 && (
            <div className="my-20">
              <p className="text-2xl text-center italic text-gray-400">Oops! We could not find any orders yet!</p>
            </div> )}
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
  } catch (error) {
    return redirect('/login?backUrl=/orders');
  }
}
