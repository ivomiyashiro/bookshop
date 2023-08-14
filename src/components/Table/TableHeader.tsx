
interface Props {
  children: React.ReactNode;
  className?: string;
}

const TableHead = ({ children, className }: Props) => {
  return (
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
      { children }
    </thead>
  );
};

export default TableHead;
