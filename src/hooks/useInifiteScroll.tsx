import { useEffect, useRef } from 'react';
import { useIntersectionObserver } from '@/hooks';

interface Props {
  loadMore: () => void;
}

const useInfiniteScroll = ({ loadMore }: Props) => {
  const ref = useRef<HTMLDivElement>(null);
  const entry = useIntersectionObserver(ref, {});

  useEffect(() => {
    if (entry?.isIntersecting) {
      loadMore(); 
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry?.isIntersecting]);

  return {
    ref
  };
};

export default useInfiniteScroll;
