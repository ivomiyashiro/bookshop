export interface GetStorefrontBooksParams {
  limit?: number;
  offset?: number;
  orderBy?: BooksOrderBy;
  sortBy?: BooksSortBy;
  searchText?: string;
  languages?: string[];
  authors?: string[];
  price?: string;
}

export type BooksOrderBy = 'title' | 'createdAt' | 'price';

export type BooksSortBy = 'asc' | 'desc';

