'use client';
import { FC, useEffect, useReducer } from 'react';
import { useRouter } from 'next/navigation';

import { BooksOrderBy, BooksSortBy, SortValues } from '@/interfaces';
import { CatalogProviderProps } from './types';

import { getSortingParams } from '@/utils';

import { CatalogContext, catalogReducer } from '.';

const CatalogProvider: FC<CatalogProviderProps> = ({ children, data }) => {
  const [state, dispatch] = useReducer(catalogReducer, {
    books: {
      data: data.books,
      loading: false,
    },
    params: {
      orderBy: 'createdAt',
      sortBy: 'desc',
      filters: {},
      ...data.params
    },
    view: 'GRID'
  });
  const router = useRouter();

  useEffect(() => {
    dispatch({
      type: '[CATALOG] - LOAD BOOKS',
      payload: data.books
    });
  }, [data.books]);

  const changeSortingBooks = ({ orderBy, sortBy }: { 
    orderBy: BooksOrderBy, 
    sortBy: BooksSortBy 
  }) => dispatch({
    type: '[CATALOG] - CHANGE SORTING',
    payload: {
      orderBy,
      sortBy
    }
  });
  
  const changeSearchText = (value: string) => dispatch({
    type: '[CATALOG] - CHANGE SEARCH TEXT',
    payload: value
  });

  const sortBooks = async (value: SortValues) => {
    const sortParams = getSortingParams(value);

    const encodedFilters = encodeURIComponent(JSON.stringify({
      ...state.params.filters,
    }));

    const URLParams = new URLSearchParams({ 
      ...sortParams, 
      filters: encodedFilters
    } as any).toString();

    changeSortingBooks(sortParams);

    const adaptedURLParams = URLParams.replaceAll('%25', '%');
    router.push(`${window.location.pathname}?${adaptedURLParams}`);
  };

  const searchBook = async (value: string) => {
    const encodedFilters = encodeURIComponent(JSON.stringify({
      ...state.params.filters,
      searchText: value
    }));

    const URLParams = new URLSearchParams({
      ...state.params,
      filters: encodedFilters
    } as any).toString();

    changeSearchText(value);

    const adaptedURLParams = URLParams.replaceAll('%25', '%');
    router.push(`${window.location.pathname}?${adaptedURLParams}`);
  };

  const toggleView = () => dispatch({ type: '[CATALOG] - TOGGLE VIEW' });

  return (
    <CatalogContext.Provider value={ {
      ...state,

      //Methods
      changeSearchText,
      sortBooks,
      searchBook,
      toggleView
    } }>
      { children }
    </CatalogContext.Provider>
  );
};

export default CatalogProvider;
