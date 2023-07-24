'use client';
import { createContext } from 'react';
import { Book, GetStorefrontBooksParams, SortValues } from '@/interfaces';

export type SortKeys = 'TITLE' | 'PRICE' | 'BEST_SELLING'

interface ContextProps {
   books: {
    data: Book[];
    loading: boolean;
   };
   params: GetStorefrontBooksParams;
   view: 'GRID' | 'LIST'

  //Methods
  changeSearchText: (value: string) => void;
  sortBooks: (value: SortValues) => void;
  searchBook: (value: string) => void;
  toggleView: () => void;
}

const CatalogContext = createContext({} as ContextProps);

export default CatalogContext;
