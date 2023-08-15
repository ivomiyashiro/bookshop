
interface Props {
  children: React.ReactNode;
  color: 'GREEN' | 'RED';
}

const Chip = ({ children, color }: Props) => {
  const communStyles = 'text-sm font-medium mr-2 px-2.5 py-0.5 rounded';

  if (color === 'GREEN') {
    return (
      <span className={ `bg-green-100 text-green-800  dark:bg-green-900 dark:text-green-300 ${ communStyles }` }>
        { children }
      </span>
    );
  }

  if (color === 'RED') {
    return (
      <span className={ `bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300 ${ communStyles }` }>
        { children }
      </span>
    );
  }

};

export default Chip;
