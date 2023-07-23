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

  //Methods
  changeBooksSorting: (value: SortValues) => void;
  changeSearchText: (value: string) => void;
  searchBook: (value: string) => void;
}

export const CatalogContext = createContext({} as ContextProps);
