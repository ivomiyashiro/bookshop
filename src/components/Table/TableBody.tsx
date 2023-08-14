import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const TableBody = ({ children, className }: Props) => {
  return (
    <tbody className={ className }>
      { children }
    </tbody>
  );
};

export default TableBody;
