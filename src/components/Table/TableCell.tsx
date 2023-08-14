
interface Props {
  children: React.ReactNode;
  className?: string;
}

const TableCell = ({ children, className }: Props) => {
  return (
    <td className={ `px-6 py-4 ${ className }` }>
      { children }
    </td>
  );
};

export default TableCell;
