import { Metadata } from 'next';
import { Button } from '@/components';

export const metadata: Metadata = {
  title: 'Home | Bookshop',
  description: 'Here you will find our list of books.',
};

export default async function Home() {
  return (
    <div>
      <Button 
        type="link" 
        href="/books" 
        style="PRIMARY"
      >
        PRODUCTS
      </Button>
    </div>
  );
}
