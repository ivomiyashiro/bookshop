import { ReactNode } from 'react';
import { Book, BooksOrderBy, GetStorefrontBooksParams, BooksSortBy } from '@/interfaces';

export interface CatalogProviderProps { 
  children: ReactNode;
  data: { books: Book[]; params: GetStorefrontBooksParams } 
}

export interface CatalogInitState {
  books: {
    data: Book[];
    loading: boolean;
  }
  params: GetStorefrontBooksParams;
  view: 'GRID' | 'LIST';
}

export type CatalogActionType =
  | { type: '[CATALOG] - LOAD BOOKS', payload: Book[] }
  | { type: '[CATALOG] - TOGGLE LOADING' }
  | { type: '[CATALOG] - CHANGE SEARCH TEXT', payload: string }
  | { type: '[CATALOG] - TOGGLE VIEW' }
  | { type: '[CATALOG] - CHANGE SORTING', payload: { orderBy: BooksOrderBy, sortBy: BooksSortBy }}
;

