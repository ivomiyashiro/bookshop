export interface GetStorefrontBooksParams {
  limit?: number;
  offset?: number;
  orderBy?: BooksOrderBy;
  sortBy?: BooksSortBy;
  filters?: StorefrontBooksFilters;
}

export interface StorefrontBooksFilters {
  searchText?: string;
  languages?: string[];
  authors?: string[];
  price?: {
    max?: number;
    min?: number;
  }
}

export type BooksOrderBy = 'title' | 'createdAt' | 'price';

export type BooksSortBy = 'asc' | 'desc';

