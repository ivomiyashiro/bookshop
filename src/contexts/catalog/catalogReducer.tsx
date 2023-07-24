import { CatalogActionType, CatalogInitState } from './types';

const catalogReducer = (state: CatalogInitState, action: CatalogActionType): CatalogInitState => {

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

  case '[CATALOG] - CHANGE SORTING':
    return {
      ...state,
      params: {
        ...state.params,
        orderBy: action.payload.orderBy,
        sortBy: action.payload.sortBy
      }
    };
  
  case '[CATALOG] - TOGGLE VIEW':
    return {
      ...state,
      view: state.view === 'GRID' ? 'LIST' : 'GRID'
    };

  default:
    return state;
  }
};

export default catalogReducer;
