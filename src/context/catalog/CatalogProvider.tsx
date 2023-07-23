'use client';
import { FC, useEffect, useReducer } from 'react';
import { useRouter } from 'next/navigation';

import { SortValues } from '@/interfaces';
import { CatalogProviderProps } from './types';

import { getSortingParams } from '@/utils';

import { CatalogContext } from './CatalogContext';
import { catalogReducer } from './catalogReducer';

export const CatalogProvider: FC<CatalogProviderProps> = ({ children, data }) => {
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
    }
  });
  const router = useRouter();

  useEffect(() => {
    dispatch({
      type: '[CATALOG] - LOAD BOOKS',
      payload: data.books
    });
  }, [data.books]);

  useEffect(() => {
    changeSearchText(data.params.filters?.searchText || '');
  }, [data.params.filters?.searchText]);

  const changeSearchText = (value: string) => dispatch({
    type: '[CATALOG] - CHANGE SEARCH TEXT',
    payload: value
  });

  const searchBook = async (value: string) => {
    const encodedFilters = encodeURIComponent(JSON.stringify({
      ...state.params.filters,
      searchText: value
    }));

    const URLParams = new URLSearchParams({
      ...state.params,
      filters: encodedFilters
    } as any).toString();

    
    const adaptedURLParams = URLParams.replaceAll('%25', '%');
    router.push(`${window.location.pathname}?${adaptedURLParams}`);
  };

  const changeBooksSorting = async (value: SortValues) => {
    const sortParams = getSortingParams(value);

    const encodedFilters = encodeURIComponent(JSON.stringify({
      ...state.params.filters,
    }));

    const URLParams = new URLSearchParams({ 
      ...sortParams, 
      filters: encodedFilters
    } as any).toString();

    const adaptedURLParams = URLParams.replaceAll('%25', '%');
    router.push(`${window.location.pathname}?${adaptedURLParams}`);
  };

  return (
    <CatalogContext.Provider value={ {
      ...state,

      //Methods
      changeBooksSorting,
      changeSearchText,
      searchBook
    } }>
      { children }
    </CatalogContext.Provider>
  );
};
