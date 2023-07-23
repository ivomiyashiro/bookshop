import { ChangeEvent, FormEvent, useContext, useEffect, useId, useRef } from 'react';
import { CatalogContext } from '@/context/catalog';

export const useSearchbar = () => {
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
    searchBook(params.filters?.searchText || '');
  };

  return {
    id,
    inputRef,
    inputValue: params.filters?.searchText || '',
    handleInputChange,
    handleSubmit,
  };
};
