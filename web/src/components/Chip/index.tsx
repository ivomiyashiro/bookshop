
interface Props {
  children: React.ReactNode;
  color: 'GREEN' | 'RED' | 'PINK';
  className?: string;
}

const Chip = ({ children, color, className }: Props) => {
  const communStyles = `text-sm font-medium mr-2 px-2.5 py-0.5 rounded ${ className }`;

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

  if (color === 'PINK') {
    return (
      <span className={ `bg-pink-100 text-pink-600 dark:bg-pink-600 dark:text-pink-100 ${ communStyles }` }>
        { children }
      </span>
    );
  }

};

export default Chip;
