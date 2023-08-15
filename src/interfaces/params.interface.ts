export interface GetStorefrontBooksParams {
  limit?: number;
  page?: number;
  orderBy?: BooksOrderBy;
  sortBy?: BooksSortBy;
  searchText?: string;
  languages?: string[];
  authors?: string[];
  price?: string;
}

export interface GetStorefrontOrdersParams {
  limit?: number;
  page?: number;
  orderBy?: BooksOrderBy;
  sortBy?: BooksSortBy;
  searchText?: string;
  price?: string;
  status?: OrderStatus;
}

export type OrderStatus = 'PENDING' | 'PAID' | 'CANCELLED';

export type BooksOrderBy = 'title' | 'createdAt' | 'price';

export type BooksSortBy = 'asc' | 'desc';

