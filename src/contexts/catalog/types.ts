import { ReactNode } from 'react';
import { type URLSearchParams } from 'url';
import { Book, BooksOrderBy, GetStorefrontBooksParams, BooksSortBy, Languages, Author, SortValues, Pagination } from '@/interfaces';

export interface CatalogInitState {
  books: Book[];
  params: GetStorefrontBooksParams;
  view: 'GRID' | 'LIST';
  filters: {
    id: number;
    name: string;
    data: { id: number; name: string; checked: boolean }[];
   }[];
  URLParams: URLSearchParams;
  pagination: Pagination
}


export interface ContextProps extends CatalogInitState {
  //Methods
  changeSearchText: (value: string) => void;
  sortBooks: (value: SortValues) => void;
  searchBook: (value: string) => void;
  toggleView: () => void;
  toggleFilterCheckbox: (filterId: number, id: number) => void;
  resetURLParams: () => void;
  loadMoreBooks: () => void;
}


export interface CatalogProviderProps { 
  children: ReactNode;
  data: Data;
}


export interface Data {
  books: Book[]; 
  params: GetStorefrontBooksParams;
  languages: Languages[];
  authors: Author[];
  pagination: Pagination;
} 

export type CatalogActionType =
  | { type: '[CATALOG] - LOAD BOOKS', payload: Book[] }
  | { type: '[CATALOG] - CHANGE SEARCH TEXT', payload: string }
  | { type: '[CATALOG] - TOGGLE VIEW' }
  | { type: '[CATALOG] - CHANGE SORTING', payload: { orderBy: BooksOrderBy, sortBy: BooksSortBy }}
  | { type: '[CATALOG] - TOGGLE FILTER CHECKBOX', payload: { updatedFilters: { id: number; name: string; data: any; }[] }}
  | { type: '[CATALOG] - UPDATE PAGINATION', payload: { pagination: Pagination }}
;
