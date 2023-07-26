import { CatalogActionType, CatalogInitState } from './types';

const catalogReducer = (state: CatalogInitState, action: CatalogActionType): CatalogInitState => {

  switch (action.type) {

  case '[CATALOG] - LOAD BOOKS':
    return {
      ...state,
      books: action.payload
    };

  case '[CATALOG] - CHANGE SEARCH TEXT':
    return {
      ...state,
      params: {
        ...state.params,
        searchText: action.payload
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

  case '[CATALOG] - TOGGLE FILTER CHECKBOX':
    return {
      ...state,
      filters: action.payload.updatedFilters
    };

  default:
    return state;
  }
};

export default catalogReducer;
