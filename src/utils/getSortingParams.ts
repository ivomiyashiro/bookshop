import { GetStorefrontBooksParams, SortValues } from '@/interfaces';

export const getSortingParams = (value: SortValues) => {
  let params: GetStorefrontBooksParams = {};

  switch(value) {
  case 'HIGHER PRICE': 
    return params = {     
      orderBy: 'price',
      sortBy: 'desc' 
    };

  case 'LOWER PRICE':
    return params = { 
      orderBy: 'price',
      sortBy: 'asc'
    };

  case 'A - Z':
    return params = {
      orderBy: 'title',
      sortBy: 'asc'
    };

  case 'Z - A':
    return params = {
      orderBy: 'title',
      sortBy: 'desc'
    };

  case 'NEWER':
    return params = {
      orderBy: 'createdAt',
      sortBy: 'desc'
    };

  case 'OLDER':
    return params = {
      orderBy: 'createdAt',
      sortBy: 'asc'
    };
  }
};
