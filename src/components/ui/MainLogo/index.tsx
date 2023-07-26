import { BookOpenIcon } from '@heroicons/react/24/solid';

interface Props {
  isLink?:boolean;
  size?: number;
}

const MainLogo = ({ size = 32, isLink = false }: Props) => {
  if (isLink) {
    return (
      <a href="/">
        <div className="flex items-center">
          <BookOpenIcon height={ size } width={ size } />
        </div>
      </a>
    );
  }
  return (
    <div className="flex items-center cursor-pointer">
      <BookOpenIcon height={ size } width={ size } />
    </div>
  );
};

export default MainLogo;
