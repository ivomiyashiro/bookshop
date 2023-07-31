import { CatalogInitState, Data } from '@/contexts/catalog';

const PRICES_FILTER_VALUES = [{
  id: 1, 
  name: '$0 - $10',
}, {
  id: 2, 
  name: '$10 - $20',
}, {
  id: 3, 
  name: '$20 - $30',
}, {
  id: 4, 
  name: '$30 - $50',
}, {
  id: 5, 
  name: '$50 - $75',
}, {
  id: 6, 
  name: '$75 - $100',
}];

export const getCatalogInitState = (data: Data): CatalogInitState => {
  return {
    books: data.books,
    params: {
      page: 1,
      orderBy: 'createdAt',
      sortBy: 'desc',
      ...data.params
    },
    view: 'GRID',
    filters: [ {
      id: 1,
      name: 'Authors',
      data: data.authors.map(author => {
        if (data.params.authors?.includes(author.name.toLocaleLowerCase())) {
          return {
            ...author,
            checked: true
          };
        }

        return {
          ...author,
          checked: false
        };
      })
    }, {
      id: 2,
      name: 'Languages',
      data: data.languages.map(language => {
        if (data.params.languages?.includes(language.name.toLocaleLowerCase())) {
          return {
            ...language,
            checked: true
          };
        }

        return {
          ...language,
          checked: false
        };
      }), 
    }, {
      id: 3,
      name: 'Price',
      data: PRICES_FILTER_VALUES.map(price => {
        if (data.params.price?.includes(price.name.toLocaleLowerCase())) {
          return {
            ...price,
            checked: true
          };
        }

        return {
          ...price,
          checked: false
        };
      })
    }],
    URLParams: new URLSearchParams({ ...data.params } as any),
    pagination: {
      ...data.pagination,
    },
  };
};
