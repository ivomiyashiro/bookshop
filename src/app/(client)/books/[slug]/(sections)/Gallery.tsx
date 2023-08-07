import Image from 'next/image';
import { DefaultImage } from '@/components';

interface Props {
  image: string;
  altText: string;
}

const Gallery = ({ image, altText }: Props) => {
  return (
    <div className="flex flex-wrap w-full">
      <div className="min-w-full mb-[0.19rem] px-[0.3129rem]">
        <div className="relative pt-[119.5%] md:h-auto w-full overflow-hidden rounded-xl dark:bg-gray-700 bg-gray-200">
          { image 
            ? (
              <Image
                src={ image }
                alt={ altText }
                sizes="(min-width: 768px) 750px, 19vw"
                fill
              />
            )
            : ( <DefaultImage /> )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
