export interface Book {
  id:          number;
  title:       string;
  description: string;
  price:       number;
  slug:        string;
  image:       string;
  stock:       number;
  createdAt:   Date;
  updatedAt:   Date;
  authors:     Author[];
  languages:   Languages[];
}

export interface Author {
  id: number;
  name: string;
}

export interface Languages {
  id: number;
  name: string;
}

export type SortValues = 'HIGHER PRICE' | 'LOWER PRICE' | 'A - Z' | 'Z - A' | 'NEWER' | 'OLDER';
