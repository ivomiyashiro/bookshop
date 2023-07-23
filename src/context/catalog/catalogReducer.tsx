import { CatalogActionType, CatalogInitState } from './types';

export const catalogReducer = (state: CatalogInitState, action: CatalogActionType): CatalogInitState => {

  switch (action.type) {

  case '[CATALOG] - LOAD BOOKS':
    return {
      ...state,
      books: {
        ...state.books,
        data: action.payload
      }
    };

  case '[CATALOG] - TOGGLE LOADING':
    return {
      ...state,
      books: {
        ...state.books,
        loading: !state.books.loading
      }
    };

  case '[CATALOG] - CHANGE SEARCH TEXT':
    return {
      ...state,
      params: {
        ...state.params,
        filters: {
          ...state.params.filters,
          searchText: action.payload
        }
      }
    };

  default:
    return state;
  }
};
