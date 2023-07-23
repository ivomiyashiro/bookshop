import { ReactNode } from 'react';
import { Book, GetStorefrontBooksParams } from '@/interfaces';

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
}

export type CatalogActionType =
  | { type: '[CATALOG] - LOAD BOOKS', payload: Book[] }
  | { type: '[CATALOG] - TOGGLE LOADING' }
  | { type: '[CATALOG] - CHANGE SEARCH TEXT', payload: string }
;

