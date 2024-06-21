import { useEffect, useId, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';

const useDashboardSearchbar = () => {
  const [searchText, setSearchText] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const id = useId();
  const router = useRouter();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchText === '') {
      return router.push('/dashboard/books');  
    }

    router.push(`/dashboard/books?searchText=${ searchText }`);
  };

  const handleResetInputValue = () => {
    setSearchText('');
    router.push('/dashboard/books');
    inputRef.current?.focus();
  };

  return {
    id,
    inputRef,
    inputValue: searchText,
    handleResetInputValue,
    handleInputChange,
    handleSubmit,
  };
};

export default useDashboardSearchbar;
