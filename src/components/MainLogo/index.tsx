import { BookOpenIcon } from '@heroicons/react/24/outline';

interface Props {
  isLink?:boolean;
  size?: number;
}

const MainLogo = ({ size = 32, isLink = false }: Props) => {
  if (isLink) {
    return (
      <a href="/">
        <div className="flex items-center p-1.5 bg-transparent rounded-lg border-2 border-pink-600 dark:bg-pink-600">
          <div className="border-pink-600 rounded-lg">
            <BookOpenIcon className="text-pink-600 dark:text-white" height={ size } width={ size } />
          </div>
        </div>
      </a>
    );
  }
  return (
    <div className="flex items-center cursor-pointer p-4 bg-pink-600">
      <BookOpenIcon className="text-pink-600" height={ size } width={ size } />
    </div>
  );
};

export default MainLogo;
