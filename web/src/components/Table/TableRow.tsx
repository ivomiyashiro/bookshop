
interface Props {
  children: React.ReactNode;
  className?: string;
}

const TableRow = ({ children, className }: Props) => {
  return (
    <tr className={ className }>
      { children }
    </tr>
  );
};

export default TableRow;
