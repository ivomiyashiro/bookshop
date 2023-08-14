
interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Table = ({ children, className }: Props) => {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className={ `w-full text-sm text-left text-gray-500 dark:text-gray-400 ${ className }` }>
        { children }
      </table>
    </div>
  );
};

export default Table;
