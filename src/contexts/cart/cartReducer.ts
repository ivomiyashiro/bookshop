import { CartActionType, CartState } from './types';

const cartReducer = (state: CartState, action: CartActionType): CartState => {

  switch (action.type) {

  case '[CART] - LOAD FROM COOKIES':
    return {
      ...state,
      cart: action.payload
    };

  case '[CART] - ADD TO CART':
    return {
      ...state,
      cart: [
        ...state.cart,
        action.payload
      ]
    };
  
  case '[CART] - REMOVE FROM CART':
    return {
      ...state,
      cart: action.payload
    };

  case '[CART] - UPDATE PRODUCT CART QUANTITY':
    return {
      ...state,
      cart: action.payload
    };
  
  case '[CART] - UPDATE ORDER SUMMARY':
    return {
      ...state,
      orderTotalPrice: action.payload
    };
  
  case '[CART] - RESET CART':
    return {
      cart: [],
      orderTotalPrice: 0,
      totalProducts: 0
    };

  case '[CART] - UPDATE TOTAL PRODUCTS QUANTITY':
    return {
      ...state,
      totalProducts: action.payload
    };

  default:
    return state;
  }
};

export default cartReducer;
