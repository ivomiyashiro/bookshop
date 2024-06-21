
interface Props {
  children: React.ReactNode;
  className?: string;
}

const TableHeader = ({ children, className }: Props) => {
  return (
    <th scope="col" className={ `px-6 py-3 ${ className }` }>
      { children }
    </th>
  );
};

export default TableHeader;
