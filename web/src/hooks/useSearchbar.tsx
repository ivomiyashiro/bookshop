import { ChangeEvent, Dispatch, FormEvent, SetStateAction, useContext, useEffect, useId, useRef } from 'react';
import { CatalogContext } from '@/contexts/catalog';

const useSearchbar = (handleOpen: Dispatch<SetStateAction<boolean>> | null) => {
  const { params, changeSearchText, searchBook } = useContext(CatalogContext);
  const inputRef = useRef<HTMLInputElement>(null);
  const id = useId();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    changeSearchText(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchBook(params?.searchText || '');
    if (handleOpen) handleOpen(false);
  };

  const handleResetInputValue = () => {
    changeSearchText('');
    inputRef.current?.focus();
  };

  return {
    id,
    inputRef,
    inputValue: params?.searchText || '',
    handleResetInputValue,
    handleInputChange,
    handleSubmit,
  };
};

export default useSearchbar;
