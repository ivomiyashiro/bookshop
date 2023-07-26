'use client';
import { FC, useEffect, useReducer } from 'react';
import { useRouter } from 'next/navigation';

import { SortValues } from '@/interfaces';
import { CatalogProviderProps } from './types';

import { getCatalogInitState, getSortingParams } from '@/utils';

import { CatalogContext, catalogReducer } from './';

const CatalogProvider: FC<CatalogProviderProps> = ({ children, data }) => {
  const [state, dispatch] = useReducer(catalogReducer, getCatalogInitState(data));
  const router = useRouter();


  useEffect(() => {
    dispatch({
      type: '[CATALOG] - LOAD BOOKS',
      payload: data.books
    });
  }, [data.books]);


  const toggleView = () => dispatch({ type: '[CATALOG] - TOGGLE VIEW' });
  

  const changeSearchText = (value: string) => dispatch({
    type: '[CATALOG] - CHANGE SEARCH TEXT',
    payload: value
  });


  const sortBooks = async (value: SortValues) => {
    const { orderBy, sortBy } = getSortingParams(value);

    state.URLParams.set('orderBy', orderBy);
    state.URLParams.set('sortBy', sortBy);

    dispatch({
      type: '[CATALOG] - CHANGE SORTING',
      payload: {
        orderBy,
        sortBy
      }
    });

    router.push(`${window.location.pathname}?${state.URLParams}`);
  };


  const searchBook = async (value: string) => {
    state.URLParams.delete('searchText');
    
    if (value !== '') {
      state.URLParams.set('searchText', value);
    }

    router.push(`${window.location.pathname}?${state.URLParams}`);
  };


  const resetURLParams = () => {
    state.URLParams.delete('price');
    state.URLParams.delete('authors');
    state.URLParams.delete('languages');

    dispatch({
      type: '[CATALOG] - TOGGLE FILTER CHECKBOX',
      payload: { 
        updatedFilters: [
          ...state.filters.map(filter => {
            return {
              ...filter,
              data: filter.data.map(filterItem => {
                return {
                  ...filterItem,
                  checked: false
                };
              })
            };
          })
        ] }
    });

    router.push(window.location.pathname);
  };


  const toggleFilterCheckbox = (filterId: number, id: number) => {
    dispatch({
      type: '[CATALOG] - TOGGLE FILTER CHECKBOX',
      payload: { 
        updatedFilters: [
          ...state.filters.map(filter => {
            if (filterId !== filter.id) return filter;
  
            return {
              ...filter,
              data: filter.data.map(filterItem => {
                if (id !== filterItem.id) return filterItem;

                updateURLParams(filter, filterItem);

                return {
                  ...filterItem,
                  checked: !filterItem.checked
                };
              })
            };
          })
        ] }
    });

    router.push(`${window.location.pathname}?${state.URLParams}`);
  };


  const updateURLParams = (filter: { id: number; name: string; data: any; }, filterItem: { id: number; name: string; checked: boolean }) => {
    const filterName = filter.name.toLowerCase();
    const filterValue = filterName !== 'price' ? filterItem.name.toLowerCase() : filterItem.name.replace(/[\$\s]/g, '');
    const existsInURLParams = state.URLParams.has(filterName);
    // if filter not exists in url appends it
    if (!existsInURLParams) {
      return state.URLParams.append(
        filterName,
        filterValue
      );
    }
    // if filter exists in url and want to add another of same type appends it
    if (!filterItem.checked) {
      return state.URLParams.set(
        filterName,
        [state.URLParams.get(filterName), filterValue].join(',')
      );
    } 
    // if filter exists in url and want to remove it
    const prevFilters = state.URLParams.get(filterName)?.toString() as string;
    const updatedFilters = prevFilters.split(',').filter(f => f !== filterValue);

    if (updatedFilters.length !== 0) {
      return state.URLParams.set(
        filterName,
        updatedFilters.join(',')
      );
    } 
    // remove the filter from url
    state.URLParams.delete(filterName);
  };

  return (
    <CatalogContext.Provider value={ {
      ...state,

      //Methods
      changeSearchText,
      sortBooks,
      searchBook,
      toggleFilterCheckbox,
      toggleView,
      resetURLParams
    } }>
      { children }
    </CatalogContext.Provider>
  );
};

export default CatalogProvider;
