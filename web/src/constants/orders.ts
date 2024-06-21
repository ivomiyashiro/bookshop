import { SortValues } from '@/interfaces';

export const ORDERS_SORTING_VALUES: SortValues[] = [
  'NEWER', 
  'OLDER', 
  'HIGHER PRICE', 
  'LOWER PRICE', 
  'A - Z', 
  'Z - A'
];

export const DEFAULT_ORDERS_SORT_BY = 'desc';

export const DEFAULT_ORDERS_ORDER_BY = 'createdAt';

export const DEFAULT_ORDERS_LIMIT = 12;

export const DEFAULT_ORDERS_OFFSET = 0;

export const DEFAULT_ORDERS_PAGE = 1;

