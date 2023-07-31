import { Button } from '@/components';
import { CatalogContext } from '@/contexts/catalog';
import { useContext } from 'react';

export const NoProductsFound = () => {
  const { resetURLParams } = useContext(CatalogContext);

  return (
    <div className="my-14 mx-5 md:mx-10 md:my-20 min-h-[calc(100vh-280px)] md:min-h-[calc(100vh-337px)]">
      <h2 className="text-4xl md:text-5xl font-bold text-gray-200 max-w-[700px] !leading-[1.25em]">
        Oops! We cound&apos;t find any products!
      </h2>
      <Button 
        type="button" 
        style="PRIMARY" 
        height="h-12" 
        className="mt-6 text-md font-bold"
        onClick={ resetURLParams }
      >
        RESET FILTERS
      </Button>
    </div>
  );
};
