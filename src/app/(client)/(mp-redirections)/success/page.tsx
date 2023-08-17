import { Metadata } from 'next';
import { OrderSummary } from './(components)';
import { Button } from '@/components';

export const metadata: Metadata = {
  title: 'Thank you for your purchase | No-Bugs Book',
  description: 'Thank you for trusting us, here you will find all the details of your purchase.',
};

export default async function Success() {
  return (
    <div className="w-full h-screen flex flex-col lg:flex-row">
      <OrderSummary />
      <div className="w-full p-4 lg:px-10 lg:py-20 h-full">
        <h1 className="text-4xl lg:text-5xl font-bold uppercase lg:leading-tight">
          Thank you for your purchase!
        </h1>
        <div className="flex gap-4 mt-10">
          <Button 
            style="PRIMARY" 
            type="link" 
            href="/orders" 
            width="w-[125px]"
          >
            My Orders
          </Button>
          <Button 
            style="ALT" 
            type="link" 
            href="/books" 
            width="w-[125px]"
          >
            Buy More
          </Button>
        </div>
      </div>
    </div>
  );
}
