import { Suspense } from 'react';
import Loading from './loading';

export default function OrdersLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-[1340px] mx-auto">
      <section>
        <h1 className="text-5xl font-bold mb-6">
            MY ORDERS
        </h1>
      </section>
      <section>
        <Suspense fallback={ <Loading /> }>
          { children }
        </Suspense>
      </section>
    </div>
  );
}
