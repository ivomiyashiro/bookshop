
interface Props {
  children: React.ReactNode;
}

const Chip = ({ children }: Props) => {
  return (
    <span className="bg-green-100 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
      { children }
    </span>
  );
};

export default Chip;
