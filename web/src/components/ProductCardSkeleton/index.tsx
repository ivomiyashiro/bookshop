const ProductCardSkeleton = ({ width = 'auto' }: { width?: string }) => {
  return (
    <div className="flex flex-col min-w-0 relative group flex-shrink-0 xl:flex-[1_1] animate-pulse" style={ { width } }>
      <div className="relative animate-pulse">
        <div className="relative w-full h-full pt-[119%] overflow-hidden rounded-[1rem] dark:bg-gray-700 bg-gray-200">
        </div>
      </div>
      <div className="p-3 flex flex-col gap-2">
        <div className="dark:bg-gray-700 bg-gray-200 w-[75%] h-4 rounded"></div>
        <div className="dark:bg-gray-700 bg-gray-200 w-[35%] h-4 rounded"></div>
        <div className="dark:bg-gray-700 bg-gray-200 w-[10%] h-4 rounded"></div>
      </div>
    </div>
  );
};

export default ProductCardSkeleton;
