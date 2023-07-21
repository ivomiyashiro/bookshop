import Link from 'next/link';
import { BookOpenIcon } from '@heroicons/react/24/solid';

interface Props {
  isLink?:boolean;
  size?: number;
}

export const MainLogo = ({ size = 32, isLink = false }: Props) => {
  if (isLink) {
    return (
      <Link href="/">
        <div className="flex items-center">
          <BookOpenIcon height={ size } width={ size } />
        </div>
      </Link>
    );
  }
  return (
    <div className="flex items-center cursor-pointer">
      <BookOpenIcon height={ size } width={ size } />
    </div>
  );
};
