export default function Loading() {
  return (
    <div className="flex flex-col md:flex-row w-full gap-10 max-w-[1340px] mx-auto animate-pulse">
      <div className="flex flex-wrap w-full">
        <div className="min-w-full mb-[0.19rem] px-[0.3129rem]">
          <div className="relative pt-[119.5%] md:h-auto w-full overflow-hidden rounded-xl dark:bg-gray-700 bg-gray-200">
          </div>
        </div>
      </div>
      <div className="md:w-full">
        <div className="w-full h-10 rounded-lg dark:bg-gray-700 bg-gray-200"></div>
        <div className="w-[65%] h-10 rounded-lg dark:bg-gray-700 bg-gray-200 mt-4"></div>
        <div className="w-[45%] h-6 rounded-lg dark:bg-gray-700 bg-gray-200 mt-4"></div>
        <div className="my-8 h-9">
          <div className="w-24 h-full rounded-lg bg-gray-200 dark:bg-gray-700 animate-pulse"></div>
        </div>
        <div className="flex gap-4 my-8 w-full h-[55px]">
          <div className="h-full w-full rounded-lg dark:bg-gray-700 bg-gray-200"></div>
          <div className="h-full w-full rounded-lg dark:bg-gray-700 bg-gray-200"></div>
        </div>
        <div>
          <div className="h-5 w-[200px] mt-2 rounded-lg dark:bg-gray-700 bg-gray-200"></div>
          <div>
            <div className="h-5 w-full mt-2 rounded-lg dark:bg-gray-700 bg-gray-200"></div>
            <div className="h-5 w-full mt-2 rounded-lg dark:bg-gray-700 bg-gray-200"></div>
            <div className="h-5 w-full mt-2 rounded-lg dark:bg-gray-700 bg-gray-200"></div>
            <div className="h-5 w-full mt-2 rounded-lg dark:bg-gray-700 bg-gray-200"></div>
            <div className="h-5 w-[75%] mt-2 rounded-lg dark:bg-gray-700 bg-gray-200"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
