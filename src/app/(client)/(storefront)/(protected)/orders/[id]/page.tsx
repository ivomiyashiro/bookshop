import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import { HomeIcon } from '@heroicons/react/24/solid';

import { getOrderById } from '@/services';

import { OrderItems, OrderInformation } from './(components)';
import { Breadcrumbs } from '@/components';

export async function generateMetadata({ params }: {
  params: { id: string }
}): Promise<Metadata> {
  const { id  } = params;

  return {
    title: {
      default: '',
      absolute: `Order #${ id }` + ' | Bookshop'
    },
    description: `Here you will details of your order #${ id }.`,
  };
}

export default async function Order({ params }: { params: { id: string }}) {
  const at = cookies().get('ACCESS_TOKEN')?.value as string;

  try {
    const { order } = await getOrderById(Number(params?.id), at);

    if (!order) {
      throw new Error('Unauthorized User');
    }

    return (
      <>
        <section className="flex items-center">
          <HomeIcon width={ 18 } height={ 18 } className="hidden md:flex text-gray-500" />
          <Breadcrumbs items={ [
            { label: 'Home', link: '/' },
            { label: 'Orders', link: '/orders' },
            { label: `# ${ order.id }`, link: `/orders/${ order.id }` }
          ] } />
        </section>
        <section className="grid md:grid-cols-[1fr,_350px] gap-5 items-start mt-6">
          <OrderItems 
            orderItems={ order.orderItems }
            orderTotalPrice={ order.totalPrice }
          />
          <OrderInformation 
            id={ order.id }
            status={ order.status }
            createdAt={ order.createdAt }
          />
        </section>
      </>
    );
  } catch (error) {
    if (error instanceof Error && error.message === 'Unauthorized User') {
      redirect('/orders');
    } else {
      redirect('/login?backUrl=/orders');
    }
  }

}
